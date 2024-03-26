#!/bin/bash

starttime=$(date)

basedir=$(dirname $(readlink -f $0))
if [[ ! -f "${basedir}/config.sh" ]]
then
    echo "ERROR: missing ${basedir}/config.sh"
    echo "exitting...."
    exit 1
fi

. "${basedir}/config.sh"

wait_for_stack_completion() {
    stack_name=$1
    echo -n "**** stack ${stack_name} running"
    done=0
    rc=0
    while [[ done -ne 1 ]]
    do
        status=$(aws cloudformation describe-stacks --stack-name "${stack_name}" | jq '.Stacks[].StackStatus' | sed -e 's/"//g')
        if [[ "${status}" == "CREATE_COMPLETE" ]]
        then
            done=1
            rc=0
        elif [[ "${status}" == "CREATE_IN_PROGRESS" ]]
        then
            sleep 5
            echo -n "."
        else
            echo -n "!"
            done=1
            rc=1
        fi
    done
    echo ""
    return $rc
}

ocp_data_dir="${basedir}/${cluster_name}"
cloudformation_dir="${basedir}/cloudformation"
bin_dir="${basedir}/bin"

echo "**************************************************************"
echo "Using basepath:                 ${basedir}"
echo "Using bin directory:            ${bin_dir}"
echo "Using cluster data directory:   ${ocp_data_dir}"
echo "Using cloudformation directory: ${cloudformation_dir}"
echo "**************************************************************"

if [[ -f "${ocp_data_dir}/metadata.json" ]]
then
    echo "ERROR: Found an existing cluster definition in ${ocp_data_dir}"
    echo "Cowardly refusing to continue.  Clean up and retry"
    exit 1
fi

if [[ -d "${ocp_data_dir}" ]]
then
    echo "ERROR: Found an existing cluster data directory ${ocp_data_dir}"
    echo "Cowardly refusing to continue.  Clean up and retry"
    exit 1
fi

# now that we think we are clean, lets do stuff
mkdir -p "${ocp_data_dir}"

if [[ ! -d "${ocp_data_dir}" ]]
then
    echo "ERROR: could not create ${ocp_data_dir}"
    echo "Correct issue and retry"
    exit 1
fi

# part 1 step 1 create network stack
echo "**** Create network stack"
echo "**** Running: " ${bin_dir}/create_network_param.sh "${cloudformation_dir}" "${cluster_name}" "${base_domain}" "${aws_private_subnets}" "${aws_vpc_id}"
${bin_dir}/create_network_param.sh "${cloudformation_dir}" "${cluster_name}" "${base_domain}" "${aws_private_subnets}" "${aws_vpc_id}"
if [[ $? -ne 0 ]]
then
    echo "ERROR: create_network_param.sh did not complete successfully"
    exit 2
fi

stack_name="${cluster_name}-network-stack"
aws cloudformation create-stack --stack-name ${stack_name} --template-body file://${cloudformation_dir}/network-template.yaml --parameters file://${cloudformation_dir}/network-param.json --capabilities CAPABILITY_NAMED_IAM  --tags Key=${tag1key},Value=${tag1value} Key=${tag2key},Value=${tag2value}

wait_for_stack_completion "${stack_name}"
if [[ $? -ne 0 ]]
then
    echo "ERROR: stack ${stack_name} failed to complete"
    exit 2
fi

int_http_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalHttpTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
int_https_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalHttpsTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
int_api_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalApiTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
int_svc_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalServiceTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
api_dns_name=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="ApiServerDnsName") | .OutputValue' | sed -e 's/\"//g')
int_api_lb_name=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalApiLoadBalancerName") | .OutputValue' | sed -e 's/\"//g')
int_api_lb_dns_name=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalApiLoadBalancerDNSName") | .OutputValue' | sed -e 's/\"//g')

echo "**** Network stack returned:"
echo "     int_api_lb_name:     ${int_api_lb_name}"
echo "     int_api_lb_dns_name: ${int_api_lb_dns_name}"
echo "     int_http_tg:         ${int_http_tg}"
echo "     int_https_tg:        ${int_https_tg}"
echo "     int_api_tg:          ${int_api_tg}"
echo "     int_svc_tg:          ${int_svc_tg}"
echo "     api_dns_name:        ${api_dns_name}"
echo "**** Network stack return end"

cat << EOF > ${ocp_data_dir}/create_step_1_results.sh
int_api_lb_name="${int_api_lb_name}"
int_api_lb_dns_name="${int_api_lb_dns_name}"
int_http_tg="${int_http_tg}"
int_https_tg="${int_https_tg}"
int_api_tg="${int_api_tg}"
int_svc_tg="${int_svc_tg}"
api_dns_name="${api_dns_name}"
EOF


cat << EOF > ${basedir}/.${cluster_name}_create_step_1_results.sh
int_api_lb_name="${int_api_lb_name}"
int_api_lb_dns_name="${int_api_lb_dns_name}"
int_http_tg="${int_http_tg}"
int_https_tg="${int_https_tg}"
int_api_tg="${int_api_tg}"
int_svc_tg="${int_svc_tg}"
api_dns_name="${api_dns_name}"
EOF


echo "**** run complete"
echo "**** Started at: ${starttime}"
echo "**** Ended at:   $(date)"

echo
echo "DNS CNAME records need to be created for the following host names before running step 2"
echo "    api.${cluster_name}.${base_domain} -> ${int_api_lb_dns_name}"
echo "    api-int.${cluster_name}.${base_domain} -> ${int_api_lb_dns_name}"
echo "    *.apps.${cluster_name}.${base_domain} -> ${int_api_lb_dns_name}"
echo
exit 0
