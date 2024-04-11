#!/bin/bash

###
# ocp details
###
cluster_name="cluster"
base_domain="ocp-cluster.com"

###
# registry info
###
registry_url="HOSTNAME:PORT"
local_auth_json="/ibm/security/auth/auth.json"
additional_trust_cert="/ibm/security/certs/ca.crt"
###
# AWS info
###
aws_region="us-east-2"
aws_private_subnets="subnet-01010010101010101,subnet-01010101011010101,subnet-01010101010101010"
aws_vpc_id="vpc-010101010101010101"
aws_vpc_cidr="10.0.0.0/16"
aws_rhcos_ami_id="ami-"


tag1key="test"
tag1value="one"
tag2key="test"
tag2value="two"
httpProxy="http://proxy.example.com:PORT"
httpsProxy="http://proxy.example.com:PORT"
noProxy=".${base_domain},172.30.0.0/16,10.128.0.0/14,${aws_vpc_cidr}

###
# ocp architecture
###
bootstrap_allowed_ssh_cidr="10.0.0.0/16"
bootstrap_subnet=$(echo $aws_private_subnets | cut -d',' -f1)
bootstrap_ignition_url="http://HOSTNAME:8080/bootstrap.ign"
master_instance_type="m5.2xlarge"
master_0_subnet=$aws_private_subnets
master_1_subnet=$aws_private_subnets
master_2_subnet=$aws_private_subnets
worker_subnet_list=$aws_private_subnets  #Don't Change
worker_count=6
worker_instance_type="m6i.8xlarge"

###
# GPU Node
###
gpu_count=1
gpu_subnet="" #US-EAST-2
gpu_instance_type="p4d.24xlarge"
gpu_securitygroup=""