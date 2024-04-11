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
infra_id=$(cat ${basedir}/${cluster_name}/metadata.json | jq .infraID | tr -d '"')

echo $infra_id

echo "**************************************************************"
echo "Using basepath:                 ${basedir}"
echo "Using bin directory:            ${bin_dir}"
echo "Using cluster data directory:   ${ocp_data_dir}"
echo "Using cloudformation directory: ${cloudformation_dir}"
echo "**************************************************************"

for index in $(seq $gpu_count)
do



    worker_ignition_url="https://api-int.${cluster_name}.${base_domain}:22623/config/worker"
    certificate_authorities=$(jq '.ignition.security.tls.certificateAuthorities[].source' ${ocp_data_dir}/worker.ign | sed -e 's/\"//g')

    echo "**** Running: " ${bin_dir}/create_worker_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${gpu_subnet}" "${gpu_securitygroup}" "${worker_ignition_url}" "${certificate_authorities}" "${gpu_instance_type}"
    ${bin_dir}/create_worker_param.sh "${cloudformation_dir}" "${infra_id}" "${aws_rhcos_ami_id}" "${gpu_subnet}" "${gpu_securitygroup}" "${worker_ignition_url}" "${certificate_authorities}" "${gpu_instance_type}"
    if [[ $? -ne 0 ]]
    then
        echo "ERROR: create_worker_param.sh did not complete successfully"
        exit 2
    fi
    
    stack_name="${infra_id}-gpu-$(date +%s)-stack"
    aws cloudformation create-stack --stack-name ${stack_name} --template-body file://${cloudformation_dir}/worker-template.yaml --parameters file://${cloudformation_dir}/worker-param.json  --tags Key=${tag1key},Value=${tag1value} Key=${tag2key},Value=${tag2value}

    wait_for_stack_completion "${stack_name}"
    if [[ $? -ne 0 ]]
    then
        echo "ERROR: stack ${stack_name} failed to complete"
        exit 2
    fi

    gpu_ip=$(aws cloudformation describe-stacks --stack-name ${stack_name} | jq '.Stacks[].Outputs[] | select(.OutputKey=="PrivateIP") | .OutputValue' | sed -e 's/\"//g')

    echo "**** worker ${index} stack returned:"
    echo "     worker_ip: ${gpu_ip}"
    echo "**** worker ${index} stack return end"

    echo "**** add worker to load balancer"
    ${bin_dir}/add_worker_to_lbs.sh "${cluster_name}-network-stack" "${stack_name}"

done

export KUBECONFIG=${ocp_data_dir}/auth/kubeconfig

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