#!/bin/bash

if [[ $# -ne 8 ]]
then
    echo "ERROR: incorrect number of parameters"
    echo "$0 <output_dir> <infraid> <amiid> <allowedsshcidr> <bootstrapsubnet> <mastersg> <vpcid> <bootstrapurl>"
    exit 1
fi

output_dir=$1
infraid=$2
amiid=$3
allowedsshcidr=$4
bootstrapsubnet=$5
mastersg=$6
vpcid=$7
bootstrapurl=$8

cat << EOF > "${output_dir}/bootstrap-param.json"
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
    "ParameterKey": "AllowedBootstrapSshCidr", 
    "ParameterValue": "${allowedsshcidr}" 
  },
  {
    "ParameterKey": "PublicSubnet", 
    "ParameterValue": "${bootstrapsubnet}" 
  },
  {
    "ParameterKey": "MasterSecurityGroupId", 
    "ParameterValue": "${mastersg}" 
  },
  {
    "ParameterKey": "VpcId", 
    "ParameterValue": "${vpcid}" 
  },
  {
    "ParameterKey": "BootstrapIgnitionLocation", 
    "ParameterValue": "${bootstrapurl}" 
  }
]
EOF

exit 0
