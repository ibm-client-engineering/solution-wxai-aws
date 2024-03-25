#!/bin/bash
#
# usage:
# create_registry.sh <src_dir> <registry_dir> <security_dir>
#   <src_dir>      - persistent store of source material
#   <registry_dir> - location of persitent store
#   <security_dir> - location of security info

###
### defaults
###
registry_version="2.8.1"
registry_name="local_registry"

usage() {
    echo "Usage:"
    echo "$0 <registry_directory> <port>"
    echo "    <registry_directory> base directory for registry"
    echo "        underneath the base directory, the following will be created:"
    echo "            <basedir>/registry - for actual registry content"
    echo "            <basedir>/security/certs - for server and CA certificates"
    echo "            <basedir>/security/auth - htpasswd files"
    echo "            <basedir>/openshift - for install-config.yaml files"
    echo "            <basedir>/src - to save registry image file"
    echo "    <port> - port to listen on"
    echo
}

setup_dirs() {
    echo "Check/create directories"
    if [[ ! -d "${basedir}" ]]
    then
        echo "    The base directory ${basedir} does not exists"
        echo "        Cowardly refusing to continue"
        exit 2
    else
        echo "    Base directory ${basedir} exists"
    fi
    if [[ ! -d "${basedir}/security/certs" ]]
    then
        echo "    Security directory ${basedir}/security/certs does not exit"
        echo "        Cowardly refusing to continue"
        exit 2
    else
        echo "    Security directory ${basedir}/security/certs exists"
    fi
    if [[ ! -d "${basedir}/security/auth" ]]
    then
        echo "    Auth directory ${basedir}/security/auth does not exist"
        echo "        Cowardly refusing to continue"
        exit 2
    else
        echo "    Auth directory ${basedir}/security/auth exists"
    fi
    if [[ ! -d "${basedir}/src" ]]
    then
        echo "    Src directory ${basedir}/src does not exist"
        echo "        Cowardly refusing to continue"
        exit 2
    else
        echo "    Src directory ${basedir}/src exists"
    fi
    if [[ ! -d "${basedir}/registry" ]]
    then
        echo "    Respository directory ${basedir}/registry does not exist"
        echo "        Cowardly refusing to continue"
        exit 2
    else
        echo "    Repository directory ${basedir}/registry exists"
    fi
}

start_registry() {
    # start registry
    echo "starting registry ${registry_name}"
    podman stop ${registry_name};podman rm ${registry_name}
    podman run -d -p ${image_registry_port}:5000 --restart=always --name ${registry_name} -v ${registry_dir}:/var/lib/registry:z -v ${auth_dir}:/auth:z -v ${security_dir}:/certs:z -e "REGISTRY_AUTH=htpasswd" -e "REGISTRY_AUTH_HTPASSWD_REALM=RegistryRealm" -e "REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd" -e "REGISTRY_HTTP_TLS_CERTIFICATE=/certs/registry.crt" -e "REGISTRY_HTTP_TLS_KEY=/certs/registry.key" registry:${registry_version}
}

usage() {
    echo "Usage:"
    echo "$0 <registry_directory> <port> <userid> <password> <local_repository>"
    echo "    <registry_directory> base directory for registry"
    echo "        underneath the base directory, the following will be created:"
    echo "            <basedir>/repository - for actual registry content"
    echo "            <basedir>/security/certs - for server and CA certificates"
    echo "            <basedir>/security/auth - for htpasswd and auth.json files"
    echo "            <basedir>/src - to save registry image file"
    echo "    <port> - port to listen on"
    echo
}

if [[ "$#" -ne 2 ]]
then
    echo "Incorrect number of parameters"
    usage
    exit 1
fi

basedir="${1}"
image_registry_port="${2}"

echo
echo "Inputs:"
echo "Base Directory:   ${basedir}"
echo "Listening Port:   ${image_registry_port}"
echo

src_dir="${basedir}/src"
security_dir="${basedir}/security/certs"
registry_dir="${basedir}/registry"
install_dir="${basedir}/security/auth"
auth_dir="${basedir}/security/auth"
openshift_dir="${basedir}/openshift"

setup_dirs
start_registry

exit

