#!/bin/bash

if [[ $# -ne 2 ]]
then
    echo "ERROR: missing parameters"
    echo "$0 <networkstack> <controlplanestack>"
    exit 1
fi

network_stack=$1
control_plane_stack=$2

echo "******** start adding control plane to load balancers"

int_api=$(aws cloudformation describe-stacks --stack-name "${network_stack}" | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalApiTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
int_svc=$(aws cloudformation describe-stacks --stack-name "${network_stack}" | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalServiceTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')

echo "******** int_api: $int_api"
echo "******** int_svc: $int_svc"

master0_ip=$(aws cloudformation describe-stacks --stack-name ${control_plane_stack} | jq '.Stacks[].Outputs[] | select(.OutputKey=="MasterIP0") | .OutputValue' | sed -e 's/\"//g')
master1_ip=$(aws cloudformation describe-stacks --stack-name ${control_plane_stack} | jq '.Stacks[].Outputs[] | select(.OutputKey=="MasterIP1") | .OutputValue' | sed -e 's/\"//g')
master2_ip=$(aws cloudformation describe-stacks --stack-name ${control_plane_stack} | jq '.Stacks[].Outputs[] | select(.OutputKey=="MasterIP2") | .OutputValue' | sed -e 's/\"//g')

echo "******** master0_ip: $master0_ip"
echo "******** master1_ip: $master1_ip"
echo "******** master2_ip: $master2_ip"

aws elbv2 register-targets --target-group-arn ${int_api} --targets Id=${master0_ip}
aws elbv2 register-targets --target-group-arn ${int_api} --targets Id=${master1_ip}
aws elbv2 register-targets --target-group-arn ${int_api} --targets Id=${master2_ip}
aws elbv2 register-targets --target-group-arn ${int_svc} --targets Id=${master0_ip}
aws elbv2 register-targets --target-group-arn ${int_svc} --targets Id=${master1_ip}
aws elbv2 register-targets --target-group-arn ${int_svc} --targets Id=${master2_ip}

echo "******** finished adding control plane to load balancers"

exit 0
