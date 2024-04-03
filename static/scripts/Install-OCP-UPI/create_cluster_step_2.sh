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

if [[ ! -f "${ocp_data_dir}/create_step_1_results.sh" ]]
then
    echo "ERROR: could not find ${ocp_data_dir}/create_step_1_results.sh"
    echo "Was step 1 completed?"
    echo "(backup copy stored at ${basedir}/.${cluster_name}_create_step_1_results.sh if ${ocp_data_dir} was deleted by mistake)"
    exit 1
fi

. ${ocp_data_dir}/create_step_1_results.sh

# step 1 create install-config.yaml
echo "**** Creating install-config.yaml"
### get registry creds for AWS
###registry_creds=$(${bin_dir}/ecr_creds.sh "${aws_region}")
# get registry creds for local registry
registry_creds=$(${bin_dir}/local_creds.sh "${local_auth_json}")
if [[ $? -ne 0 ]]
then
    echo "ERROR: could not get registry credentials"
    exit 1
fi

ssh_pub_key=""
if [[ -f ~/.ssh/id_rsa.pub ]]
then
    ssh_pub_key=$(cat ~/.ssh/id_rsa.pub)
fi

echo "**** Running: " ${bin_dir}/create_install_config.sh "${ocp_data_dir}" "${base_domain}" "${cluster_name}" "${registry_url}" "${registry_creds}" "${ssh_pub_key}" "${additional_trust_cert}" "${httpProxy}" "${httpsProxy}" "${noProxy}"
${bin_dir}/create_install_config.sh "${ocp_data_dir}" "${base_domain}" "${cluster_name}" "${registry_url}" "${registry_creds}" "${ssh_pub_key}" "${additional_trust_cert}" "${httpProxy}" "${httpsProxy}" "${noProxy}"

if [[ -f "${ocp_data_dir}/install-config.yaml" ]]
then
    cp -f "${ocp_data_dir}/install-config.yaml" "${basedir}"
else
    echo "ERROR: install-config.yaml not found?"
    exit 1
fi

echo "**** Create manifests"
openshift-install create manifests --dir=${ocp_data_dir}

echo "**** Changing master nodes to unschedulable"
sed -i 's/mastersSchedulable: true/mastersSchedulable: false/' "${ocp_data_dir}/manifests/cluster-scheduler-02-config.yml"

echo "**** Create ignition configs"
openshift-install create ignition-configs --dir=${ocp_data_dir}

# get infraID
infra_id=$(jq '.infraID' "${ocp_data_dir}/metadata.json" | sed -e 's/\"//g')
echo "**** Using infraID ${infra_id}"

echo "**** copy bootstrap.ign to /var/www/html"
sudo cp -f ${ocp_data_dir}/bootstrap.ign /var/www/html
sudo chmod 644 /var/www/html/bootstrap.ign
sudo chcon -t httpd_sys_content_t /var/www/html/bootstrap.ign

# step 2 create network stack
# skipping as this was done in step one
#echo "**** Create network stack"
#echo "**** Running: " ${bin_dir}/create_network_param.sh "${cloudformation_dir}" "${cluster_name}" "${infra_id}" "${aws_hosted_zone_id}" "${base_domain}" "${aws_public_subnets}" "${aws_private_subnets}" "${aws_vpc_id}"
#${bin_dir}/create_network_param.sh "${cloudformation_dir}" "${cluster_name}" "${infra_id}" "${aws_hosted_zone_id}" "${base_domain}" "${aws_public_subnets}" "${aws_private_subnets}" "${aws_vpc_id}"
#if [[ $? -ne 0 ]]
#then
#    echo "ERROR: create_network_param.sh did not complete successfully"
#    exit 2
#fi
#
#stack_name="${infra_id}-network-stack"
#aws cloudformation create-stack --stack-name ${stack_name} --template-body file://${cloudformation_dir}/network-template.yaml --parameters file://${cloudformation_dir}/network-param.json --capabilities CAPABILITY_NAMED_IAM
#
#wait_for_stack_completion "${stack_name}"
#if [[ $? -ne 0 ]]
#then
#    echo "ERROR: stack ${stack_name} failed to complete"
#    exit 2
#fi
#
#ext_api_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="ExternalApiTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
#ext_http_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="ExternalHttpTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
#ext_https_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="ExternalHttpsTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
#int_api_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalApiTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
#int_svc_tg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalServiceTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
#api_dns_name=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="ApiServerDnsName") | .OutputValue' | sed -e 's/\"//g')
#priv_hosted_zone_id=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="PrivateHostedZoneId") | .OutputValue' | sed -e 's/\"//g')
#int_api_lb_name=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalApiLoadBalancerName") | .OutputValue' | sed -e 's/\"//g')
#ext_api_lb_name=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="ExternalApiLoadBalancerName") | .OutputValue' | sed -e 's/\"//g')
#
#echo "**** Network stack returned:"
#echo "     priv_hosted_zone_id: ${priv_hosted_zone_id}"
#echo "     api_dns_name:        ${api_dns_name}"
#echo "     ext_api_lb_name:     ${ext_api_lb_name}"
#echo "     ext_api_tg:          ${ext_api_tg}"
#echo "     ext_http_tg:         ${ext_http_tg}"
#echo "     ext_https_tg:        ${ext_https_tg}"
#echo "     int_api_lb_name:     ${int_api_lb_name}"
#echo "     int_api_tg:          ${int_api_tg}"
#echo "     int_svc_tg:          ${int_svc_tg}"
#echo "**** Network stack return end"

# step 3 create sgs and lbs stack
echo "**** Create sg and lb stack"
echo "**** Running: " ${bin_dir}/create_sg_lb_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_private_subnets}" "${aws_vpc_id}" "${aws_vpc_cidr}"
${bin_dir}/create_sg_lb_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_private_subnets}" "${aws_vpc_id}" "${aws_vpc_cidr}"
if [[ $? -ne 0 ]]
then
    echo "ERROR: create_sg_lb_param.sh did not complete successfully"
    exit 2
fi

stack_name="${infra_id}-sg-lb-stack"
aws cloudformation create-stack --stack-name ${stack_name} --template-body file://${cloudformation_dir}/sg-lb-template.yaml --parameters file://${cloudformation_dir}/sg-lb-param.json --capabilities CAPABILITY_NAMED_IAM  --tags Key=${tag1key},Value=${tag1value} Key=${tag2key},Value=${tag2value}

wait_for_stack_completion "${stack_name}"
if [[ $? -ne 0 ]]
then
    echo "ERROR: stack ${stack_name} failed to complete"
    exit 2
fi

master_sg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="MasterSecurityGroupId") | .OutputValue' | sed -e 's/\"//g')
worker_sg=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="WorkerSecurityGroupId") | .OutputValue' | sed -e 's/\"//g')

echo "**** sg lb stack returned:"
echo "     master_sg: ${master_sg}"
echo "     worker_sg: ${worker_sg}"
echo "**** sg lb stack return end"

# step 4 create bootstrap stack
echo "**** Create bootstrap stack"
echo "**** Running: " ${bin_dir}/create_bootstrap_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${bootstrap_allowed_ssh_cidr}" "${bootstrap_subnet}" "${master_sg}" "${aws_vpc_id}" "${bootstrap_ignition_url}"
${bin_dir}/create_bootstrap_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${bootstrap_allowed_ssh_cidr}" "${bootstrap_subnet}" "${master_sg}" "${aws_vpc_id}" "${bootstrap_ignition_url}"
if [[ $? -ne 0 ]]
then
    echo "ERROR: create_bootstrap_param.sh did not complete successfully"
    exit 2
fi

stack_name="${infra_id}-bootstrap-stack"
aws cloudformation create-stack --stack-name ${stack_name} --template-body file://${cloudformation_dir}/bootstrap-template.yaml --parameters file://${cloudformation_dir}/bootstrap-param.json --capabilities CAPABILITY_NAMED_IAM  --tags Key=${tag1key},Value=${tag1value} Key=${tag2key},Value=${tag2value}

wait_for_stack_completion "${stack_name}"
if [[ $? -ne 0 ]]
then
    echo "ERROR: stack ${stack_name} failed to complete"
    exit 2
fi

bootstrap_instance_id=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="BootstrapInstanceId") | .OutputValue' | sed -e 's/\"//g')
bootstrap_private_ip=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="BootstrapPrivateIp") | .OutputValue' | sed -e 's/\"//g')

echo "**** bootstrap stack returned:"
echo "     bootstrap_instance_id: ${bootstrap_instance_id}"
echo "     bootstrap_private_ip:  ${bootstrap_private_ip}"
echo "**** bootstrap stack return end"

echo "**** add bootstrap to load balancer"
${bin_dir}/add_bootstrap_to_lbs.sh "${cluster_name}-network-stack" "${infra_id}-bootstrap-stack"

# step 5 create control-plane stack
echo "**** Create control-plane stack"

master_ignition_url="https://api-int.${cluster_name}.${base_domain}:22623/config/master"
certificate_authorities=$(jq '.ignition.security.tls.certificateAuthorities[].source' ${ocp_data_dir}/master.ign | sed -e 's/\"//g')

#${bin_dir}/create_control_plane_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${master_0_subnet}" "${master_sg}" "${master_ignition_url}" "${certificate_authorities}" "${master_instance_type}"
echo "**** Running: " ${bin_dir}/create_control_plane_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${master_0_subnet}" "${master_sg}" "${master_ignition_url}" "${certificate_authorities}" "${master_instance_type}"
${bin_dir}/create_control_plane_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${master_0_subnet}" "${master_sg}" "${master_ignition_url}" "${certificate_authorities}" "${master_instance_type}"
if [[ $? -ne 0 ]]
then
    echo "ERROR: create_control_plane_param.sh did not complete successfully"
    exit 2
fi

stack_name="${infra_id}-control-plane-stack"
aws cloudformation create-stack --stack-name ${stack_name} --template-body file://${cloudformation_dir}/control-plane-template.yaml --parameters file://${cloudformation_dir}/control-plane-param.json --capabilities CAPABILITY_NAMED_IAM  --tags Key=${tag1key},Value=${tag1value} Key=${tag2key},Value=${tag2value}

wait_for_stack_completion "${stack_name}"
if [[ $? -ne 0 ]]
then
    echo "ERROR: stack ${stack_name} failed to complete"
    exit 2
fi

master0_ip=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="MasterIP0") | .OutputValue' | sed -e 's/\"//g')
master1_ip=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="MasterIP1") | .OutputValue' | sed -e 's/\"//g')
master2_ip=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="MasterIP2") | .OutputValue' | sed -e 's/\"//g')

echo "**** control-plane stack returned:"
echo "     master0_ip: ${master0_ip}"
echo "     master1_ip: ${master1_ip}"
echo "     master2_ip: ${master2_ip}"
echo "**** control-plane stack return end"

echo "**** add control-plane to load balancer"
${bin_dir}/add_control_plane_to_lbs.sh "${cluster_name}-network-stack" "${infra_id}-control-plane-stack"

# step 6 wait for bootstrap complete
echo "**** wait for bootstrap complete"
openshift-install create cluster --dir=${ocp_data_dir}
openshift-install wait-for bootstrap-complete --dir=${ocp_data_dir}
openshift-install wait-for bootstrap-complete --dir=${ocp_data_dir}

# step 7 delete bootstrap

echo "**** remove bootstrap from load balancer"
${bin_dir}/rm_bootstrap_from_lbs.sh "${cluster_name}-network-stack" "${infra_id}-bootstrap-stack"
echo "**** remove bootstrap node"
aws cloudformation delete-stack --stack-name "${infra_id}-bootstrap-stack"

# step 8 create workers
for index in $(seq $worker_count)
do
    echo "**** creating worker $index"

    subnet_index=$(((index - 1) % 3))
    worker_subnet=$(echo $worker_subnet_list | cut -d',' -f$((subnet_index+1)))
    
    worker_ignition_url="https://api-int.${cluster_name}.${base_domain}:22623/config/worker"
    certificate_authorities=$(jq '.ignition.security.tls.certificateAuthorities[].source' ${ocp_data_dir}/worker.ign | sed -e 's/\"//g')

    echo "**** Running: " ${bin_dir}/create_worker_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${worker_subnet}" "${worker_sg}" "${worker_ignition_url}" "${certificate_authorities}" "${worker_instance_type}"
    ${bin_dir}/create_worker_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${worker_subnet}" "${worker_sg}" "${worker_ignition_url}" "${certificate_authorities}" "${worker_instance_type}"
    if [[ $? -ne 0 ]]
    then
        echo "ERROR: create_worker_param.sh did not complete successfully"
        exit 2
    fi

    stack_name="${infra_id}-worker${index}-stack"
    aws cloudformation create-stack --stack-name ${stack_name} --template-body file://${cloudformation_dir}/worker-template.yaml --parameters file://${cloudformation_dir}/worker-param.json  --tags Key=${tag1key},Value=${tag1value} Key=${tag2key},Value=${tag2value}

    wait_for_stack_completion "${stack_name}"
    if [[ $? -ne 0 ]]
    then
        echo "ERROR: stack ${stack_name} failed to complete"
        exit 2
    fi

    worker_ip=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="PrivateIP") | .OutputValue' | sed -e 's/\"//g')

    echo "**** worker ${index} stack returned:"
    echo "     worker_ip: ${worker_ip}"
    echo "**** worker ${index} stack return end"

    echo "**** add worker to load balancer"
    ${bin_dir}/add_worker_to_lbs.sh "${cluster_name}-network-stack" "${stack_name}"

done

# step 9 disable default catalogs and approve csrs
export KUBECONFIG=${ocp_data_dir}/auth/kubeconfig
echo "**** KUBECONFIG: ${KUBECONFIG}"
echo "**** disabling default catalog"
# echo "**** Running: " oc patch OperatorHub cluster --type json -p '[{"op": "add", "path": "/spec/disableAllDefaultSources", "value": true}]'
# oc patch OperatorHub cluster --type json -p '[{"op": "add", "path": "/spec/disableAllDefaultSources", "value": true}]'

echo "**** Watching for csrs and approve them"
echo -n "Working"
for count in $(seq 45)
do
    oc get csr | grep -q Pending
    if [[ $? -eq 0 ]]
    then
        # approve csrs
        approve_count=$(oc get csr -o go-template='{{range .items}}{{if not .status}}{{.metadata.name}}{{"\n"}}{{end}}{{end}}' | xargs --no-run-if-empty oc adm certificate approve | wc -l)
        echo -n "${approve_count}"
    else
        echo -n '.'
    fi
    sleep 10
done
echo "done"

# step 10 wait for install complete
echo "**** wait for install complete"
openshift-install wait-for install-complete --dir=${ocp_data_dir}

# step 11 install operator catalog
# echo "**** Set up operator catalog"
# if [[ -f ${basedir}/catalog/imageContentSourcePolicy.yaml ]]
# then
#     oc create -f ${basedir}/catalog/imageContentSourcePolicy.yaml
# else
#     echo "**** WARNING: could not find ${basedir}/catalog/imageContentSourcePolicy.yaml"
# fi
# if [[ -f ${basedir}/catalog/catalogSource.yaml ]]
# then
#     oc create -f ${basedir}/catalog/catalogSource.yaml
# else
#     echo "**** WARNING: could not find ${basedir}/catalog/catalogSource.yaml"
# fi


echo "**** run complete"
echo "**** Started at: ${starttime}"
echo "**** Ended at:   $(date)"

exit 0
