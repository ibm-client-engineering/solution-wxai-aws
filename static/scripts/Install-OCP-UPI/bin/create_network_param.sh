#!/bin/bash

if [[ $# -ne 5 ]]
then
    echo "ERROR: incorrect number of parameters"
    echo "$0 <output_dir> <cluster_name> <hostedzonename> <privatesubnets> <vpcid>"
    exit 1
fi

output_dir=$1
cluster_name=$2
hostedzonename=$3
privatesubnets=$4
vpcid=$5

cat << EOF > "${output_dir}/network-param.json"
[
  {
    "ParameterKey": "ClusterName", 
    "ParameterValue": "${cluster_name}" 
  },
  {
    "ParameterKey": "InfrastructureName", 
    "ParameterValue": "${cluster_name}" 
  },
  {
    "ParameterKey": "HostedZoneName", 
    "ParameterValue": "${hostedzonename}" 
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
