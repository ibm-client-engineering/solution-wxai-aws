#!/bin/bash

if [[ $# -ne 4 ]]
then
    echo "Error: incorrect number of parameters"
    echo
    echo "Usage: $0 <ocprelease> <registryip:port> <contentpath> <authfile>"
    echo "       ocprelease - like 4.10.45"
    echo "       registryip:port - like 1.2.3.4:5000"
    echo "       contentpath - like /ibm/openshift-4.10.45/export"
    echo "       authfile - like /ibm/openshift/auth.json"
    echo
    exit 1
fi

OCP_RELEASE=$1
LOCAL_REGISTRY="$2"
LOCAL_REPOSITORY="openshift"
PRODUCT_REPO="openshift-release-dev"
RELEASE_NAME="ocp-release"
ARCHITECTURE="x86_64"
REMOVABLE_MEDIA_PATH="$3"
LOCAL_SECRET_JSON="$4"

#oc adm release mirror -a ${LOCAL_SECRET_JSON} --from=quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}-${ARCHITECTURE} --to=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY} --to-release-image=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE} --dry-run
#oc image mirror -a ${AUTH_FILE} --from-dir=${REMOVABLE_MEDIA_PATH}/openshift-images-${OCP_RELEASE} "file://openshift/release:${OCP_RELEASE}*" ${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}
oc adm release mirror -a ${LOCAL_SECRET_JSON} --from=quay.io/${PRODUCT_REPO}/${RELEASE_NAME}:${OCP_RELEASE}-${ARCHITECTURE} --to=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY} --to-release-image=${LOCAL_REGISTRY}/${LOCAL_REPOSITORY}:${OCP_RELEASE}-${ARCHITECTURE}
