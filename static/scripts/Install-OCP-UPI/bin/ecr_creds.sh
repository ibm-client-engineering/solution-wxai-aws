#!/bin/bash
if [[ $# -ne 1 ]]
then
    echo "ERROR: missing AWS region"
    echo "$0 <aws_region>"
    exit 1
fi

aws_region=$1

pw=$(aws ecr get-login-password --region ${aws_region})

creds=$(echo -n "AWS:${pw}" | base64 -w0)

echo ${creds}
