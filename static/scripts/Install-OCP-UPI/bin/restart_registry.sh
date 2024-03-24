#!/bin/bash
podman stop registry
sleep 5
podman rm registry
sleep 5
podman run -d -p 5000:5000 --restart=always --name registry -v /ibm/registry:/var/lib/registry:z -v /ibm/security/auth:/auth:z -v /ibm/security/certs:/certs:z -e "REGISTRY_AUTH=htpasswd" -e "REGISTRY_AUTH_HTPASSWD_REALM=RegistryRealm" -e "REGISTRY_AUTH_HTPASSWD_PATH=/auth/registry.htpasswd" -e "REGISTRY_HTTP_TLS_CERTIFICATE=/certs/registry.crt" -e "REGISTRY_HTTP_TLS_KEY=/certs/registry.key" registry:2.7.1

##
## may need:
## rm /var/lib/containers/storage/overlay-containers/containers.{json,lock}

