#!/bin/bash

if [[ $# -ne 5 ]]
then
    echo "ERROR: incorrect number of parameters"
    echo "$0 <output_dir> <infraid> <privatesubnets> <vpcid> <vpccidr>"
    exit 1
fi

output_dir=$1
infraid=$2
privatesubnets=$3
vpcid=$4
vpccidr=$5

cat << EOF > "${output_dir}/sg-lb-param.json"
[
  {
    "ParameterKey": "InfrastructureName",
    "ParameterValue": "${infraid}" 
  },
  {
    "ParameterKey": "VpcCidr",
    "ParameterValue": "${vpccidr}"
  },
  {
    "ParameterKey": "PrivateSubnets",
    "ParameterValue": "${privatesubnets}" 
  },
  {
    "ParameterKey": "VpcId",
    "ParameterValue": "${vpcid}" 
  }
]
EOF

exit 0
