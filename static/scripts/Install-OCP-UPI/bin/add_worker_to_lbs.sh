#!/bin/bash

if [[ $# -ne 2 ]]
then
    echo "ERROR: missing parameters"
    echo "$0 <networkstack> <workerstack>"
    exit 1
fi

network_stack=$1
worker_stack=$2

echo "******** start adding worker to load balancers"

http_tg=$(aws cloudformation describe-stacks --stack-name "${network_stack}" | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalHttpTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')
https_tg=$(aws cloudformation describe-stacks --stack-name "${network_stack}" | jq '.Stacks[].Outputs[] | select(.OutputKey=="InternalHttpsTargetGroupArn") | .OutputValue' | sed -e 's/\"//g')

echo "******** http_tg: $http_tg"
echo "******** https_api: $https_tg"

worker_ip=$(aws cloudformation describe-stacks --stack-name ${worker_stack} | jq '.Stacks[].Outputs[] | select(.OutputKey=="PrivateIP") | .OutputValue' | sed -e 's/\"//g')

echo "******** worker_ip: $worker_ip"

aws elbv2 register-targets --target-group-arn ${http_tg} --targets Id=${worker_ip}
aws elbv2 register-targets --target-group-arn ${https_tg} --targets Id=${worker_ip}

echo "******** finished adding worker to load balancers"

exit 0
