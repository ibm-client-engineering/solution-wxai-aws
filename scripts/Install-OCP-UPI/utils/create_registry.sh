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
    echo "$0 <registry_directory> <port> <userid> <password>"
    echo "    <registry_directory> base directory for registry"
    echo "        underneath the base directory, the following will be created:"
    echo "            <basedir>/repository - for actual registry content"
    echo "            <basedir>/security/certs - for server and CA certificates"
    echo "            <basedir>/security/auth - htpasswd files"
    echo "            <basedir>/openshift - for install-config.yaml files"
    echo "            <basedir>/src - to save registry image file"
    echo "    <port> - port to listen on"
    echo "    <userid> - userid to authenticate to registry"
    echo "    <password> - password for userid to authenticate to registry"
    echo
}

setup_dirs() {
    echo "Check/create directories"
#    if [[ -d "${basedir}" ]]
#    then
#        echo "    The base directory ${basedir} exists"
#        echo "    Cowardly refusing to continue"
#        exit 2
#    else
#        echo "    Base directory ${basedir} does not exist"
#    fi
#    if [[ ! -d "${basedir}" ]]
#    then
#        echo "        Creating base directory ${basedir}"
#        sudo mkdir -p "${basedir}"
#        uid=$(id -u)
#        gid=$(id -g)
#        sudo chown ${uid}:${gid} "${basedir}"
#    else
#        echo "    Base directory ${basedir} exists"
#    fi
    if [[ ! -d "${basedir}/security" ]]
    then
        echo "        Creating security directory ${basedir}/security"
        sudo mkdir -p "${basedir}/security"
        uid=$(id -u)
        gid=$(id -g)
        sudo chown ${uid}:${gid} "${basedir}/security"
    else
        echo "    Security directory ${basedir}/security exists"
    fi
    if [[ ! -d "${basedir}/security/certs" ]]
    then
        echo "        Creating security directory ${basedir}/security/certs"
        sudo mkdir -p "${basedir}/security/certs"
        uid=$(id -u)
        gid=$(id -g)
        sudo chown ${uid}:${gid} "${basedir}/security/certs"
    else
        echo "    Security directory ${basedir}/security/certs exists"
    fi
    if [[ ! -d "${basedir}/security/auth" ]]
    then
        echo "        Creating auth directory ${basedir}/security/auth"
        sudo mkdir -p "${basedir}/security/auth"
        uid=$(id -u)
        gid=$(id -g)
        sudo chown ${uid}:${gid} "${basedir}/security/auth"
    else
        echo "    Auth directory ${basedir}/security/auth exists"
    fi
    if [[ ! -d "${basedir}/openshift" ]]
    then
        echo "        Creating openshift directory ${basedir}/openshift"
        sudo mkdir -p "${basedir}/openshift"
        uid=$(id -u)
        gid=$(id -g)
        sudo chown ${uid}:${gid} "${basedir}/openshift"
    else
        echo "    Openshift directory ${basedir}/openshift exists"
    fi
    if [[ ! -d "${basedir}/src" ]]
    then
        echo "        Creating src directory ${basedir}/src"
        sudo mkdir -p "${basedir}/src"
        uid=$(id -u)
        gid=$(id -g)
        sudo chown ${uid}:${gid} "${basedir}/src"
    else
        echo "    Src directory ${basedir}/src exists"
    fi
    if [[ ! -d "${basedir}/registry" ]]
    then
        echo "        Creating registry directory ${basedir}/registry"
        sudo mkdir -p "${basedir}/registry"
        uid=$(id -u)
        gid=$(id -g)
        sudo chown ${uid}:${gid} "${basedir}/registry"
    else
        echo "    Repository directory ${basedir}/registry exists"
    fi
    echo "Setting selinux context"
    sudo semanage fcontext -a -t container_file_t "${basedir}/registry(/.*)?"
    echo "Applying selinux context"
    sudo restorecon -R "${basedir}/registry"
}

create_local_repository() {
    # need:
    # src_dir - where source tar files are
    # security_dir - directory for security info
    # registry_dir - directory for registry storage
    # image_registry_port - port number for registry
    # local_repository - registry repository to store info into
    # install_dir - location to place installation data for install-config.yaml
    # image_registry_user - userid for registry
    # image_registry_password - password for registry

    # now for the private side
    sudo yum -y install podman httpd-tools
    if [[ ! -f ${src_dir}/registry-${registry_version}.tar ]]
    then
        podman pull registry:${registry_version}
        podman save registry:${registry_version} -o ${src_dir}/registry-${registry_version}.tar
    else
        podman load -i ${src_dir}/registry-${registry_version}.tar
    fi

    if [[ ! -f "${security_dir}/ca.crt" ]]
    then
        echo "Creating CA cert"
        # create ca.crt
        cat << EOF > "${security_dir}/ca.cnf"
[req]
default_bits  = 2048
default_md      = sha256                # use SHA-256 by default
distinguished_name = req_distinguished_name
x509_extensions = v3_ca
prompt = no
[req_distinguished_name]
countryName = US
#stateOrProvinceName = VA
#localityName = Sterling
organizationName = $(hostname -d)
commonName = CA
[v3_ca]
# Extensions for a typical CA
# PKIX recommendation.
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid:always,issuer
# This is what PKIX recommends but some broken software chokes on critical
# extensions.
#basicConstraints = critical,CA:true
# So we do this instead.
basicConstraints = CA:true
EOF
       openssl req -x509 -nodes -days 3651 -newkey rsa:2048 -keyout ${security_dir}/ca.key -out ${security_dir}/ca.crt -config ${security_dir}/ca.cnf
    else
        echo "Using existing CA cert"
    fi
    if [[ ! -f "${security_dir}/registry.crt" ]]
    then
       echo "Building registry cert"
       cat << EOF > "${security_dir}/registry.cnf"
[req]
default_bits  = 2048
default_md      = sha256                # use SHA-256 by default
distinguished_name = req_distinguished_name
req_extensions = req_ext
x509_extensions = v3_req
prompt = no
[req_distinguished_name]
countryName = US
#stateOrProvinceName = N/A
#localityName = N/A
organizationName = $(hostname -d)
commonName = $(hostname --long)
[req_ext]
subjectAltName = @alt_names
[v3_req]
subjectAltName = @alt_names
[alt_names]
IP.1 = $(hostname -I | sed -e 's/ .*$//')
DNS.1 = $(hostname --long)
DNS.2 = $(hostname --short)
EOF
        echo "subjectAltName=IP.1:$(hostname -I | sed -e 's/ .*$//'),DNS.1:$(hostname --long),DNS.2:$(hostname --short)" > ${security_dir}/registry.ext
        openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout ${security_dir}/registry.key -out ${security_dir}/registry.crt -config ${security_dir}/registry.cnf
        openssl req -new -nodes -key ${security_dir}/registry.key -out ${security_dir}/registry.csr -config ${security_dir}/registry.cnf
        openssl x509 -req -days 3650 -in ${security_dir}/registry.csr -CA ${security_dir}/ca.crt -CAkey ${security_dir}/ca.key -CAcreateserial -out ${security_dir}/registry.crt -extfile ${security_dir}/registry.ext
    else
        echo "Using existing registry cert"
    fi
    
    htpasswd -Bbn "${image_registry_user}" "${image_registry_password}" > ${auth_dir}/htpasswd
    # add port to firewall if infra is separate from network hosts
    echo "Opening firewall for registry port ${image_registry_port}"
    sudo firewall-cmd --permanent --add-port=${image_registry_port}/tcp
    sudo firewall-cmd --reload
    # start registry
    echo "starting registry ${registry_name}"
    podman stop ${registry_name};podman rm ${registry_name}
    podman run -d -p ${image_registry_port}:5000 --restart=always --name ${registry_name} -v ${registry_dir}:/var/lib/registry:z -v ${auth_dir}:/auth:z -v ${security_dir}:/certs:z -e "REGISTRY_AUTH=htpasswd" -e "REGISTRY_AUTH_HTPASSWD_REALM=RegistryRealm" -e "REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd" -e "REGISTRY_HTTP_TLS_CERTIFICATE=/certs/registry.crt" -e "REGISTRY_HTTP_TLS_KEY=/certs/registry.key" registry:${registry_version}
    # trust ca cert
    echo "configure containers to trust registry"
    if [[ ! -d /etc/containers/certs.d/$(hostname -I | sed -e 's/ .*$//'):${image_registry_port} ]]
    then
        sudo mkdir -p /etc/containers/certs.d/$(hostname -I | sed -e 's/ .*$//'):${image_registry_port}
    fi
    sudo cp ${security_dir}/ca.crt /etc/containers/certs.d/$(hostname -I | sed -e 's/ .*$//'):${image_registry_port}/
    if [[ ! -d /etc/containers/certs.d/$(hostname --long):${image_registry_port} ]]
    then
        sudo mkdir -p /etc/containers/certs.d/$(hostname --long):${image_registry_port}
    fi
    sudo cp ${security_dir}/ca.crt /etc/containers/certs.d/$(hostname --long):${image_registry_port}/
    # update host trust store
    echo "update host trust store"
    sudo cp ${security_dir}/ca.crt /etc/pki/ca-trust/source/anchors/$(openssl x509 -noout -hash -in ${security_dir}/ca.crt | head -1).0
    sudo update-ca-trust extract

    echo "create auth.json pull secret"
    echo "{\"auths\":{\"$(hostname -I | sed -e 's/ .*$//'):${image_registry_port}\":{\"auth\":\"$(echo -n ${image_registry_user}:${image_registry_password} | base64)\"}}}" > ${openshift_dir}/auth.json

    echo "create imagecontentsourcepolicy"
    cat << EOF > ${openshift_dir}/imagecontentsources.yaml
imageContentSources:
- mirrors:
  - $(hostname -I | sed -e 's/ .*$//'):${image_registry_port}/${local_repository}
  source: quay.io/openshift-release-dev/ocp-release
- mirrors:
  - $(hostname -I | sed -e 's/ .*$//'):${image_registry_port}/${local_repository}
  source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
EOF

}

summary_output() {
    echo "#################################################################" | tee ${basedir}/registry.info
    echo "auth.json:                ${openshift_dir}/auth.json" | tee -a ${basedir}/registry.info
    echo "imagecontestsourcepolicy: ${openshift_dir}/imagecontentsources.yaml" | tee -a ${basedir}/registry.info
    echo "registry name:            ${registry_name}" | tee -a ${basedir}/registry.info
    echo "registry location:        $(hostname -I | sed -e 's/ .*$//'):${image_registry_port}" | tee -a ${basedir}/registry.info
    echo "openshift repositry:      ${local_repository}" | tee -a ${basedir}/registry.info
    echo "#################################################################" | tee -a ${basedir}/registry.info
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
    echo "    <userid> - userid to authenticate to registry"
    echo "    <password> - password for userid to authenticate to registry"
    echo "    <local_repository> - name of local repository to use for openshift (like openshift46)"
    echo
}

if [[ "$#" -ne 5 ]]
then
    echo "Incorrect number of parameters"
    usage
    exit 1
fi

basedir="${1}"
image_registry_port="${2}"
image_registry_user="${3}"
image_registry_password="${4}"
local_repository="${5}"

echo
echo "Inputs:"
echo "Base Directory:   ${basedir}"
echo "Listening Port:   ${image_registry_port}"
echo "Userid:           ${image_registry_user}"
echo "Password:         \"${image_registry_password}\""
echo "Repository name:  ${local_repository}"
echo

src_dir="${basedir}/src"
security_dir="${basedir}/security/certs"
registry_dir="${basedir}/registry"
install_dir="${basedir}/security/auth"
auth_dir="${basedir}/security/auth"
openshift_dir="${basedir}/openshift"

setup_dirs
create_local_repository
summary_output

exit

