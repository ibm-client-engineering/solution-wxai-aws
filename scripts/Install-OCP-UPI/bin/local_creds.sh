#!/bin/bash

if [[ $# -ne 1 ]]
then
    echo "ERROR: missing parameter"
    echo "Usage: $0 <localauthinfofile>"
    exit 1
fi

auth_json=$1

if [[ ! -f "${auth_json}" ]]
then
    echo "ERROR: ${auth_json} not found"
    exit 1
fi

creds=$(jq '.auths[].auth' ${auth_json} | sed -e "s/\"//g")

echo ${creds}

exit 0
