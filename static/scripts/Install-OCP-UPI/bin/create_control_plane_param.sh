#!/bin/bash

if [[ $# -ne 8 ]]
then
    echo "ERROR: incorrect number of parameters"
    echo "$0 <output_dir> <infraid> <amiid> <mastersubnet> <mastersg> <masterignitionurl> <certificateauthorities> <masterinstancetype>"
    exit 1
fi

output_dir=$1
infraid=$2
amiid=$3
mastersubnet=$4
master0subnet=$(echo $mastersubnet | cut -d',' -f1)
master1subnet=$(echo $mastersubnet | cut -d',' -f2)
master2subnet=$(echo $mastersubnet | cut -d',' -f3)
mastersg=$5
masterignitionurl=$6
certificateauthorities=$7
masterinstancetype=$8

cat << EOF > "${output_dir}/control-plane-param.json"
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
    "ParameterKey": "AutoRegisterDNS",
    "ParameterValue": "no"
  },
  {
    "ParameterKey": "PrivateHostedZoneId",
    "ParameterValue": "AAAAAAAAA"
  },
  {
    "ParameterKey": "PrivateHostedZoneName",
    "ParameterValue": "mycluster.example.com"
  },
  {
    "ParameterKey": "Master0Subnet",
    "ParameterValue": "${master0subnet}"
  },
  {
    "ParameterKey": "Master1Subnet",
    "ParameterValue": "${master1subnet}"
  },
  {
    "ParameterKey": "Master2Subnet",
    "ParameterValue": "${master2subnet}"
  },
  {
    "ParameterKey": "MasterSecurityGroupId",
    "ParameterValue": "${mastersg}"
  },
  {
    "ParameterKey": "IgnitionLocation",
    "ParameterValue": "${masterignitionurl}"
  },
  {
    "ParameterKey": "CertificateAuthorities",
    "ParameterValue": "${certificateauthorities}"
  },
  {
    "ParameterKey": "MasterInstanceType",
    "ParameterValue": "${masterinstancetype}"
  }
]

EOF

exit 0
