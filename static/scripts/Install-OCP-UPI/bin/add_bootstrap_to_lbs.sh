#!/bin/bash

if [[ $# -ne 2 ]]
then
    echo "ERROR: missing parameters"
    echo "$0 <networkstack> <bootstrapstack>"
    exit 1
fi

network_stack=$1
bootstrap_stack=$2

echo "******** start adding bootstrap to load balancers"

int_api=$(aws cloudformation describe-stacks --stack-name "${network_stack}" | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalApiTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
int_svc=$(aws cloudformation describe-stacks --stack-name "${network_stack}" | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalServiceTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')

echo "******** int_api: $int_api"
echo "******** int_svc: $int_svc"

bs_ip=$(aws cloudformation describe-stacks --stack-name "${bootstrap_stack}" | jq '.Stacks[].Outputs[] | select(.OutputKey=="BootstrapPrivateIp") | .OutputValue' | sed -e 's/\"//g')

echo "******** bs_ip: $bs_ip"

aws elbv2 register-targets --target-group-arn ${int_api} --targets Id=${bs_ip}
aws elbv2 register-targets --target-group-arn ${int_svc} --targets Id=${bs_ip}

echo "******** finished adding bootstrap to load balancers"

exit 0
