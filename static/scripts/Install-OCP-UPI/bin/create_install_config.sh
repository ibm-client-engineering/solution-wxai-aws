#!/bin/bash

if [[ $# -ne 10 ]]
then
    echo "Incorrect number of parameters"
    echo "Usage: $0 <output_dir> <base_domain> <cluster_name> <registry_url> <registry_creds> <ssh_key> <additionalcacert> <httpProxy> <httpsProxy> <noProxy>"
    exit 1
fi

output_dir=$1
base_domain=$2
cluster_name=$3
registry_url=$4
registry_creds=$5
ssh_key=$6
ca_cert=$7
httpProxy=$8
httpsProxy=$9
noProxy=${10}

ssh_line=""
if [[ ! -z "${ssh_key}" ]]
then
    ssh_line="sshKey: '${ssh_key}'"
fi

cat << EOF > "${output_dir}/install-config.yaml"
apiVersion: v1
baseDomain: ${base_domain}
proxy: 
  httpProxy: ${httpProxy}
  httpsProxy: ${httpsProxy}
  noProxy: ${noProxy}
compute: 
- hyperthreading: Enabled 
  name: worker
  replicas: 0 
controlPlane: 
  hyperthreading: Enabled 
  name: master
  replicas: 3 
metadata:
  name: ${cluster_name} 
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14 
    hostPrefix: 23 
  networkType: OVNKubernetes
  serviceNetwork: 
  - 172.30.0.0/16
platform:
  none: {} 
fips: true 
pullSecret: '{ "auths": { "${registry_url}": { "auth": "${registry_creds}" } } }'
${ssh_line}
imageContentSources: 
- mirrors:
  - ${registry_url}/openshift
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - ${registry_url}/openshift
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
EOF

if [[ -f "${ca_cert}" ]]
then
    # add additionalTrustBundle
    cert_data=$(sed -e 's/^/  /' "${ca_cert}")
    echo "additionalTrustBundle: |" >> "${output_dir}/install-config.yaml"
    echo "${cert_data}" >> "${output_dir}/install-config.yaml"
fi

exit 0
