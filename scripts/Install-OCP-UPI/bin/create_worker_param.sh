#!/bin/bash

if [[ $# -ne 8 ]]
then
    echo "ERROR: incorrect number of parameters"
    echo "$0 <output_dir> <infraid> <amiid> <workersubnet> <workersg> <workerignitionurl> <certificateauthorities> <workerinstancetype>"
    exit 1
fi

output_dir=$1
infraid=$2
amiid=$3
workersubnet=$4
workersg=$5
workerignitionurl=$6
certificateauthorities=$7
workerinstancetype=$8

cat << EOF > "${output_dir}/worker-param.json"
[
  {
    "ParameterKey": "InfrastructureName",
    "ParameterValue": "${infraid}" 
  },
  {
    "ParameterKey": "RhcosAmi",
    "ParameterValue": "${amiid}" 
  },
  {
    "ParameterKey": "Subnet",
    "ParameterValue": "${workersubnet}"
  },
  {
    "ParameterKey": "WorkerSecurityGroupId",
    "ParameterValue": "${workersg}"
  },
  {
    "ParameterKey": "IgnitionLocation",
    "ParameterValue": "${workerignitionurl}"
  },
  {
    "ParameterKey": "CertificateAuthorities",
    "ParameterValue": "${certificateauthorities}"
  },
  {
    "ParameterKey": "WorkerInstanceType",
    "ParameterValue": "${workerinstancetype}"
  }
]
EOF

exit 0
