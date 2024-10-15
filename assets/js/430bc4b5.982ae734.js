"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2892],{7456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(4848),i=t(8453);const s={id:"WXGov",sidebar_position:3,title:"WatsonX Governance Installation",custom_edit_url:null},a=void 0,o={id:"Deployment/Software/WXGov",title:"WatsonX Governance Installation",description:"The following ports should be opened to allow access to Cloud Pak for Data:",source:"@site/docs/2-Deployment/3-Software/3-wxgov.mdx",sourceDirName:"2-Deployment/3-Software",slug:"/Deployment/Software/WXGov",permalink:"/solution-wxai-aws/Deployment/Software/WXGov",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"WXGov",sidebar_position:3,title:"WatsonX Governance Installation",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Watsonx ai installation",permalink:"/solution-wxai-aws/Deployment/Software/WXAI"},next:{title:"Use Cases",permalink:"/solution-wxai-aws/use-cases"}},l={},c=[{value:"Resource Requirements",id:"resource-requirements",level:2},{value:"Minimal cluster sizing",id:"minimal-cluster-sizing",level:3},{value:"Recommended cluster sizing",id:"recommended-cluster-sizing",level:3},{value:"Storage Requirements",id:"storage-requirements",level:2},{value:"Support Storage Platforms:",id:"support-storage-platforms",level:3},{value:"Storage sizing",id:"storage-sizing",level:3},{value:"Installing CP4D Cli",id:"installing-cp4d-cli",level:2},{value:"Download binary",id:"download-binary",level:3},{value:"Configure environmental vars",id:"configure-environmental-vars",level:3},{value:"Login to the cluster with cpd-cli",id:"login-to-the-cluster-with-cpd-cli",level:3},{value:"Retrieve the entitlement key",id:"retrieve-the-entitlement-key",level:3},{value:"Mirroring CPD Images to Private Registry",id:"mirroring-cpd-images-to-private-registry",level:2},{value:"Workstation can reach internet and cluster:",id:"workstation-can-reach-internet-and-cluster",level:3},{value:"Workstation used for install cannot reach internet:",id:"workstation-used-for-install-cannot-reach-internet",level:3},{value:"Save the olm-utils-v3 image",id:"save-the-olm-utils-v3-image",level:4},{value:"Transfer olm-utils-v3 to install workstation",id:"transfer-olm-utils-v3-to-install-workstation",level:4},{value:"Downloading CASE packages",id:"downloading-case-packages",level:3},{value:"Log into IBM Entitled Registry:",id:"log-into-ibm-entitled-registry",level:4},{value:"Download the CASE packages",id:"download-the-case-packages",level:4},{value:"Mirror the images to the intermediary container registry",id:"mirror-the-images-to-the-intermediary-container-registry",level:4},{value:"Confirm that the images were mirrored to the intermediary container registry",id:"confirm-that-the-images-were-mirrored-to-the-intermediary-container-registry",level:4},{value:"Move images to registry in restricted network",id:"move-images-to-registry-in-restricted-network",level:3},{value:"Login in to Private Registry with CPD CLI",id:"login-in-to-private-registry-with-cpd-cli",level:4},{value:"Mirror images from intermediate registry to restricted registry",id:"mirror-images-from-intermediate-registry-to-restricted-registry",level:4},{value:"Confirm images are on restricted registry",id:"confirm-images-are-on-restricted-registry",level:4},{value:"Configure image content source policy",id:"configure-image-content-source-policy",level:3},{value:"Create or update the required image content source policy or image digest mirror set:",id:"create-or-update-the-required-image-content-source-policy-or-image-digest-mirror-set",level:4},{value:"Get status of nodes",id:"get-status-of-nodes",level:4},{value:"Pull olm-utils-v3 image from private container registry",id:"pull-olm-utils-v3-image-from-private-container-registry",level:4},{value:"Installing CP4D",id:"installing-cp4d",level:2},{value:"Authorizing instances",id:"authorizing-instances",level:3},{value:"Installation of shared components",id:"installation-of-shared-components",level:3},{value:"Setup instance topology",id:"setup-instance-topology",level:3},{value:"Installation of primary CPD components",id:"installation-of-primary-cpd-components",level:3},{value:"Installing the Cloud Pak for Data control plane and services",id:"installing-the-cloud-pak-for-data-control-plane-and-services",level:3},{value:"Installing our Cartridges",id:"installing-our-cartridges",level:2},{value:"Apply necessary Security Constraints",id:"apply-necessary-security-constraints",level:3},{value:"Watsonx Governance",id:"watsonx-governance",level:3},{value:"Apply the olm for Watsonx Governance:",id:"apply-the-olm-for-watsonx-governance",level:4},{value:"Validate the installation",id:"validate-the-installation",level:4},{value:"Apply the olm for DB2 Warehouse:",id:"apply-the-olm-for-db2-warehouse",level:4},{value:"Validate the installation",id:"validate-the-installation-1",level:4},{value:"Apply the olm for Database Management Console (DMC):",id:"apply-the-olm-for-database-management-console-dmc",level:3},{value:"Validate the installation",id:"validate-the-installation-2",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"The following ports should be opened to allow access to Cloud Pak for Data:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"HTTP - Port 80"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"HTTPS - Port 443"})}),(0,r.jsx)(n.p,{children:"An additional port will need to be opened for the DB2Warehouse isntance, but that port is not known until the instance is created."})]}),"\n",(0,r.jsx)(n.h2,{id:"resource-requirements",children:"Resource Requirements"}),"\n",(0,r.jsx)(n.h3,{id:"minimal-cluster-sizing",children:"Minimal cluster sizing"}),"\n",(0,r.jsx)(n.p,{children:"The cluster needs a minimal of 6 worker nodes with each node having 16 vCPU and 64GB RAM. Each node will also need a local disk of 300GB which will be used for ephemeral storage."}),"\n",(0,r.jsx)(n.h3,{id:"recommended-cluster-sizing",children:"Recommended cluster sizing"}),"\n",(0,r.jsx)(n.p,{children:"We recommended that the cluster has at least 7 work nodes with each node having 16 vCPU and 64GB RAM. Each node will also need a local disk of 300GB which will be used for ephemeral storage."}),"\n",(0,r.jsx)(n.h2,{id:"storage-requirements",children:"Storage Requirements"}),"\n",(0,r.jsx)(n.h3,{id:"support-storage-platforms",children:"Support Storage Platforms:"}),"\n",(0,r.jsx)(n.p,{children:"The following platforms are supported for Cloud pak for data:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OpenShift Data Foundation"}),"\n",(0,r.jsx)(n.li,{children:"IBM Storage Fusion Data Foundation"}),"\n",(0,r.jsx)(n.li,{children:"IBM Storage Fusion Global Data Platform"}),"\n",(0,r.jsx)(n.li,{children:"IBM Storage Scale Container Native"}),"\n",(0,r.jsx)(n.li,{children:"Portworx"}),"\n",(0,r.jsx)(n.li,{children:"NFS"}),"\n",(0,r.jsx)(n.li,{children:"Amazon Elastic Block Store"}),"\n",(0,r.jsx)(n.li,{children:"Amazon Elastic File System"}),"\n",(0,r.jsx)(n.li,{children:"NetApp Trident"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"storage-sizing",children:"Storage sizing"}),"\n",(0,r.jsx)(n.p,{children:"Cloud Pak for Data requires atleast 500GB of storage."}),"\n",(0,r.jsx)(n.h2,{id:"installing-cp4d-cli",children:"Installing CP4D Cli"}),"\n",(0,r.jsx)(n.h3,{id:"download-binary",children:"Download binary"}),"\n",(0,r.jsx)(n.p,{children:"CP4D CLI can be found at the following link."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/IBM/cpd-cli/releases/download/v14.0.3/cpd-cli-darwin-EE-14.0.3.tgz",children:"https://github.com/IBM/cpd-cli/releases/download/v14.0.3/cpd-cli-darwin-EE-14.0.3.tgz"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"This binary is for linux, if running from a windows machine, please use the linux binary but run it from Windows Subsystem for Linux."}),(0,r.jsx)(n.p,{children:"Also as of this writing the latest version of the cli is 14.0.3."})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"wget https://github.com/IBM/cpd-cli/releases/download/v14.0.3/cpd-cli-darwin-EE-14.0.3.tgz\n"})}),"\n",(0,r.jsx)(n.p,{children:"Extract the files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"tar xzvf https://github.com/IBM/cpd-cli/releases/download/v14.0.0/cpd-cli-linux-EE-14.0.3.tgz\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will create the following directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli-darwin-EE-14.0.3-875\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configure-environmental-vars",children:"Configure environmental vars"}),"\n",(0,r.jsx)(n.p,{children:"The following creates a CPD env file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'cat<<EOF> cpd_vars_5.sh\n#===============================================================================\n# Cloud Pak for Data installation variables\n#===============================================================================\n\n# ------------------------------------------------------------------------------\n# Client workstation \n# ------------------------------------------------------------------------------\n# Set the following variables if you want to override the default behavior of the Cloud Pak for Data CLI.\n#\n# To export these variables, you must uncomment each command in this section.\n\n# export CPD_CLI_MANAGE_WORKSPACE=<enter a fully qualified directory>\n# export OLM_UTILS_LAUNCH_ARGS=<enter launch arguments>\n\n\n# ------------------------------------------------------------------------------\n# Cluster\n# ------------------------------------------------------------------------------\n\nexport OCP_URL=<enter your Red Hat OpenShift Container Platform URL>\nexport OPENSHIFT_TYPE=<enter your deployment type>\nexport IMAGE_ARCH=<enter your cluster architecture>\n# export OCP_USERNAME=<enter your username>\n# export OCP_PASSWORD=<enter your password>\n# export OCP_TOKEN=<enter your token>\nexport SERVER_ARGUMENTS="--server=${OCP_URL}"\n# export LOGIN_ARGUMENTS="--username=${OCP_USERNAME} --password=${OCP_PASSWORD}"\n# export LOGIN_ARGUMENTS="--token=${OCP_TOKEN}"\nexport CPDM_OC_LOGIN="cpd-cli manage login-to-ocp ${SERVER_ARGUMENTS} ${LOGIN_ARGUMENTS}"\nexport OC_LOGIN="oc login ${OCP_URL} ${LOGIN_ARGUMENTS}"\n\n\n# ------------------------------------------------------------------------------\n# Proxy server\n# ------------------------------------------------------------------------------\n\n# export PROXY_HOST=<enter your proxy server hostname>\n# export PROXY_PORT=<enter your proxy server port number>\n# export PROXY_USER=<enter your proxy server username>\n# export PROXY_PASSWORD=<enter your proxy server password>\n\n\n# ------------------------------------------------------------------------------\n# Projects\n# ------------------------------------------------------------------------------\n\nexport PROJECT_CERT_MANAGER=<enter your certificate manager project>\nexport PROJECT_LICENSE_SERVICE=<enter your License Service project>\nexport PROJECT_SCHEDULING_SERVICE=<enter your scheduling service project>\n# export PROJECT_IBM_EVENTS=<enter your IBM Events Operator project>\n# export PROJECT_PRIVILEGED_MONITORING_SERVICE=<enter your privileged monitoring service project>\nexport PROJECT_CPD_INST_OPERATORS=<enter your Cloud Pak for Data operator project>\nexport PROJECT_CPD_INST_OPERANDS=<enter your Cloud Pak for Data operand project>\n# export PROJECT_CPD_INSTANCE_TETHERED=<enter your tethered project>\n# export PROJECT_CPD_INSTANCE_TETHERED_LIST=<a comma-separated list of tethered projects>\n\n\n\n# ------------------------------------------------------------------------------\n# Storage\n# ------------------------------------------------------------------------------\n\nexport STG_CLASS_BLOCK=<RWO-storage-class-name>\nexport STG_CLASS_FILE=<RWX-storage-class-name>\n\n# ------------------------------------------------------------------------------\n# IBM Entitled Registry\n# ------------------------------------------------------------------------------\n\nexport IBM_ENTITLEMENT_KEY=<enter your IBM entitlement API key>\n\n\n# ------------------------------------------------------------------------------\n# Private container registry\n# ------------------------------------------------------------------------------\n# Set the following variables if you mirror images to a private container registry.\n#\n# To export these variables, you must uncomment each command in this section.\n\n# export PRIVATE_REGISTRY_LOCATION=<enter the location of your private container registry>\n# export PRIVATE_REGISTRY_PUSH_USER=<enter the username of a user that can push to the registry>\n# export PRIVATE_REGISTRY_PUSH_PASSWORD=<enter the password of the user that can push to the registry>\n# export PRIVATE_REGISTRY_PULL_USER=<enter the username of a user that can pull from the registry>\n# export PRIVATE_REGISTRY_PULL_PASSWORD=<enter the password of the user that can pull from the registry>\n\n\n# ------------------------------------------------------------------------------\n# Cloud Pak for Data version\n# ------------------------------------------------------------------------------\n\nexport VERSION=5.0.3\n\n\n# ------------------------------------------------------------------------------\n# Components\n# ------------------------------------------------------------------------------\n\nexport COMPONENTS=ibm-cert-manager,ibm-licensing,scheduler,cpfs,cpd_platform\n# export COMPONENTS_TO_SKIP=<component-ID-1>,<component-ID-2>\n\n\n# ------------------------------------------------------------------------------\n# watsonx Orchestrate\n# ------------------------------------------------------------------------------\n# export PROJECT_IBM_APP_CONNECT=<enter your IBM App Connect in containers project>\n# export AC_CASE_VERSION=<version>\n# export AC_CHANNEL_VERSION=<version>\nEOF\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You will need to open the resultant ",(0,r.jsx)(n.code,{children:"cpd_vars_5.sh"})," file and update the following vars:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"OCP_URL\nOCP_PASSWORD\nIBM_ENTITLEMENT_KEY\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default we set our storage classes to the ",(0,r.jsx)(n.code,{children:"nfs-client"})," storage class. Your mileage may vary."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"OCP_URL"})," can be pulled with this command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"oc cluster-info\nKubernetes control plane is running at https://api.ibmworkshops.com:6443\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The kubeadmin password can be found in the build directory for the cluster under ",(0,r.jsx)(n.code,{children:"auth/kubeadmin-password"})]}),"\n",(0,r.jsx)(n.h3,{id:"login-to-the-cluster-with-cpd-cli",children:"Login to the cluster with cpd-cli"}),"\n",(0,r.jsx)(n.p,{children:"Source the env file"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"source cpd_vars_5.sh"})}),"\n",(0,r.jsx)(n.p,{children:"login with cpd-cli"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage login-to-ocp \\\n--username=${OCP_USERNAME} \\\n--password=${OCP_PASSWORD} \\\n--server=${OCP_URL}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"retrieve-the-entitlement-key",children:"Retrieve the entitlement key"}),"\n",(0,r.jsxs)(n.p,{children:["The key can be retrieved from ",(0,r.jsx)(n.a,{href:"https://myibm.ibm.com/products-services/containerlibrary",children:"here"})]}),"\n",(0,r.jsx)(n.h2,{id:"mirroring-cpd-images-to-private-registry",children:"Mirroring CPD Images to Private Registry"}),"\n",(0,r.jsx)(n.h3,{id:"workstation-can-reach-internet-and-cluster",children:"Workstation can reach internet and cluster:"}),"\n",(0,r.jsx)(n.p,{children:"When the workstation is connected to the internet, run the following command to update the olm-utils-v3 image on the workstation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage restart-container\n"})}),"\n",(0,r.jsx)(n.h3,{id:"workstation-used-for-install-cannot-reach-internet",children:"Workstation used for install cannot reach internet:"}),"\n",(0,r.jsx)(n.h4,{id:"save-the-olm-utils-v3-image",children:"Save the olm-utils-v3 image"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to save the olm-utils-v3 image to the client workstation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage save-image --from=icr.io/cpopen/cpd/olm-utils-v3:latest\n"})}),"\n",(0,r.jsx)(n.h4,{id:"transfer-olm-utils-v3-to-install-workstation",children:"Transfer olm-utils-v3 to install workstation"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to load the olm-utils-v3 image on the client workstation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage load-image --source-image=icr.io/cpopen/cpd/olm-utils-v3:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the OLM_UTILS_IMAGE environment variable to ensure that the cpd-cli uses the version of the image on the client workstation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export OLM_UTILS_IMAGE=icr.io/cpopen/cpd/olm-utils-v3:latest\n"})}),"\n",(0,r.jsx)(n.h3,{id:"downloading-case-packages",children:"Downloading CASE packages"}),"\n",(0,r.jsx)(n.p,{children:"Run the appropriate command depending on the site from which you plan to download the CASE packages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage case-download \\\n--components=${COMPONENTS} \\\n--release=${VERSION}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Change the permissions of the work directory"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"chown -R 1001 ./work\nchmod -R 775 ./work\n"})}),"\n",(0,r.jsx)(n.p,{children:"Restart the container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage restart-container\n"})}),"\n",(0,r.jsx)(n.h4,{id:"log-into-ibm-entitled-registry",children:"Log into IBM Entitled Registry:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage login-entitled-registry ${IBM_ENTITLEMENT_KEY}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"download-the-case-packages",children:"Download the CASE packages"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage list-images \\\n--components=${COMPONENTS} \\\n--release=${VERSION} \\\n--inspect_source_registry=true\n"})}),"\n",(0,r.jsx)(n.h4,{id:"mirror-the-images-to-the-intermediary-container-registry",children:"Mirror the images to the intermediary container registry"}),"\n",(0,r.jsx)(n.p,{children:"The command automatically sets up an intermediary container registry on the client workstation. The address of the intermediary container registry is 127.0.0.1:12443."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage mirror-images \\\n--components=${COMPONENTS} \\\n--release=${VERSION} \\\n--target_registry=127.0.0.1:12443 \\\n--arch=${IMAGE_ARCH} \\\n--case_download=false\n"})}),"\n",(0,r.jsx)(n.h4,{id:"confirm-that-the-images-were-mirrored-to-the-intermediary-container-registry",children:"Confirm that the images were mirrored to the intermediary container registry"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage list-images \\\n--components=${COMPONENTS} \\\n--release=${VERSION} \\\n--target_registry=127.0.0.1:12443 \\\n--case_download=false\n"})}),"\n",(0,r.jsx)(n.h3,{id:"move-images-to-registry-in-restricted-network",children:"Move images to registry in restricted network"}),"\n",(0,r.jsx)(n.h4,{id:"login-in-to-private-registry-with-cpd-cli",children:"Login in to Private Registry with CPD CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage login-private-registry \\\n${PRIVATE_REGISTRY_LOCATION} \\\n${PRIVATE_REGISTRY_PUSH_USER} \\\n${PRIVATE_REGISTRY_PUSH_PASSWORD}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"mirror-images-from-intermediate-registry-to-restricted-registry",children:"Mirror images from intermediate registry to restricted registry"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage mirror-images \\\n--components=${COMPONENTS} \\\n--release=${VERSION} \\\n--source_registry=127.0.0.1:12443 \\\n--target_registry=${PRIVATE_REGISTRY_LOCATION} \\\n--arch=${IMAGE_ARCH} \\\n--case_download=false\n"})}),"\n",(0,r.jsx)(n.h4,{id:"confirm-images-are-on-restricted-registry",children:"Confirm images are on restricted registry"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage list-images \\\n--components=${COMPONENTS} \\\n--release=${VERSION} \\\n--target_registry=${PRIVATE_REGISTRY_LOCATION} \\\n--case_download=false\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configure-image-content-source-policy",children:"Configure image content source policy"}),"\n",(0,r.jsx)(n.p,{children:"If you mirror images to a private container registry, you must tell your cluster where to find the software images by creating an image content source policy or image digest mirror set."}),"\n",(0,r.jsx)(n.h4,{id:"create-or-update-the-required-image-content-source-policy-or-image-digest-mirror-set",children:"Create or update the required image content source policy or image digest mirror set:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage apply-icsp \\\n--registry=${PRIVATE_REGISTRY_LOCATION}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"get-status-of-nodes",children:"Get status of nodes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"oc get nodes\n"})}),"\n",(0,r.jsx)(n.h4,{id:"pull-olm-utils-v3-image-from-private-container-registry",children:"Pull olm-utils-v3 image from private container registry"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export OLM_UTILS_IMAGE=${PRIVATE_REGISTRY_LOCATION}/cpopen/cpd/olm-utils-v3:${VERSION}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-cp4d",children:"Installing CP4D"}),"\n",(0,r.jsx)(n.h3,{id:"authorizing-instances",children:"Authorizing instances"}),"\n",(0,r.jsx)(n.p,{children:"This step creates all required projects, creates the NamespaceScope operator in the operators project, and binds the applied role to the service account of the NamespaceScope operator."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage authorize-instance-topology \\\n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"This was successful"})}),"\n",(0,r.jsx)(n.h3,{id:"installation-of-shared-components",children:"Installation of shared components"}),"\n",(0,r.jsxs)(n.p,{children:["These two tasks come from here:\n",(0,r.jsx)(n.a,{href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=cluster-installing-shared-components",children:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=cluster-installing-shared-components"})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["If you are unable to access github, include the following flags to the next two commands as well as ",(0,r.jsx)(n.em,{children:"any"})," ",(0,r.jsx)(n.code,{children:"apply-olm"})," command below"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"--case_download=true \\\n--from_oci=true\n"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-cluster-components \\\n--release=${VERSION} \\\n--license_acceptance=true \\\n--cert_manager_ns=${PROJECT_CERT_MANAGER} \\\n--licensing_ns=${PROJECT_LICENSE_SERVICE}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Install the scheduler"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-scheduler \\\n--release=${VERSION} \\\n--license_acceptance=true \\\n--scheduler_ns=${PROJECT_SCHEDULING_SERVICE}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setup-instance-topology",children:"Setup instance topology"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage setup-instance-topology \\\n--release=${VERSION} \\\n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--license_acceptance=true \\\n--block_storage_class=${STG_CLASS_BLOCK}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"installation-of-primary-cpd-components",children:"Installation of primary CPD components"}),"\n",(0,r.jsx)(n.p,{children:"This installs the operators in the operators project for the instance."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-olm \\\n--release=${VERSION} \\\n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--components=${COMPONENTS}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"installing-the-cloud-pak-for-data-control-plane-and-services",children:"Installing the Cloud Pak for Data control plane and services"}),"\n",(0,r.jsx)(n.p,{children:"This installs the operands in the operands project for the instance:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-cr \\\n--release=${VERSION} \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--components=${COMPONENTS} \\\n--block_storage_class=${STG_CLASS_BLOCK} \\\n--file_storage_class=${STG_CLASS_FILE} \\\n--license_acceptance=true\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is a big one, so it might take a little while. When it completes, verify the operands are up:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage get-cr-status \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This should return a ",(0,r.jsx)(n.code,{children:"Completed"})," status."]}),"\n",(0,r.jsx)(n.p,{children:"The routes should be created and ready at this point. You can retrieve the web-url for the client with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage get-cpd-instance-details \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--get_admin_initial_credentials=true\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-our-cartridges",children:"Installing our Cartridges"}),"\n",(0,r.jsx)(n.p,{children:"Source the env file"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"source cpd_vars_5.sh"})}),"\n",(0,r.jsx)(n.p,{children:"Login with cpd-cli"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cpd-cli manage login-to-ocp \\\n--username=${OCP_USERNAME} \\\n--password=${OCP_PASSWORD} \\\n--server=${OCP_URL}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"apply-necessary-security-constraints",children:"Apply necessary Security Constraints"}),"\n",(0,r.jsx)(n.p,{children:"The apply-db2-kubelet command makes the following changes to the cluster nodes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'allowedUnsafeSysctls:\n  - "kernel.msg*"\n  - "kernel.shm*"\n  - "kernel.sem"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-db2-kubelet\n"})}),"\n",(0,r.jsx)(n.p,{children:"This might take a bit as the workers will be getting bounced."}),"\n",(0,r.jsx)(n.h3,{id:"watsonx-governance",children:"Watsonx Governance"}),"\n",(0,r.jsxs)(n.p,{children:["Create or update  'install-options.yml' in the ",(0,r.jsx)(n.code,{children:"{CPD-CLI_DIRECTORY}/cpd-cli-workspace/olm-utils-workspace/work"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"################################################################################ \n# watsonx.governance parameters \n############################################################################### \ncustom_spec: \n  watsonx_governance: \n    installType: all\n    enableFactsheet: true \n    enableOpenpages: true \n    enableOpenscale: true \n"})}),"\n",(0,r.jsx)(n.h4,{id:"apply-the-olm-for-watsonx-governance",children:"Apply the olm for Watsonx Governance:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-olm --release=${VERSION} \\ \n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--components=watsonx_governance\n"})}),"\n",(0,r.jsx)(n.p,{children:"And run the install command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-cr \\\n--components=watsonx_governance \\\n--release=${VERSION} \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--block_storage_class=${STG_CLASS_BLOCK} \\\n--file_storage_class=${STG_CLASS_FILE} \\\n--param-file=/tmp/work/install-options.yml \\\n--license_acceptance=true\n"})}),"\n",(0,r.jsx)(n.h4,{id:"validate-the-installation",children:"Validate the installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage get-cr-status \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--components=watsonx_governance\n"})}),"\n",(0,r.jsx)(n.h4,{id:"apply-the-olm-for-db2-warehouse",children:"Apply the olm for DB2 Warehouse:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-olm --release=${VERSION} \\ \n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--components=db2wh\n"})}),"\n",(0,r.jsx)(n.p,{children:"And run the install command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-cr \\\n--components=db2wh \\\n--release=${VERSION} \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--block_storage_class=${STG_CLASS_BLOCK} \\\n--file_storage_class=${STG_CLASS_FILE} \\\n--param-file=/tmp/work/install-options.yml \\\n--license_acceptance=true\n"})}),"\n",(0,r.jsx)(n.h4,{id:"validate-the-installation-1",children:"Validate the installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage get-cr-status \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--components=db2wh\n"})}),"\n",(0,r.jsx)(n.h3,{id:"apply-the-olm-for-database-management-console-dmc",children:"Apply the olm for Database Management Console (DMC):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-olm --release=${VERSION} \\ \n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--components=dmc\n"})}),"\n",(0,r.jsx)(n.p,{children:"And run the install command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-cr \\\n--components=dmc \\\n--release=${VERSION} \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--block_storage_class=${STG_CLASS_BLOCK} \\\n--file_storage_class=${STG_CLASS_FILE} \\\n--param-file=/tmp/work/install-options.yml \\\n--license_acceptance=true\n"})}),"\n",(0,r.jsx)(n.h4,{id:"validate-the-installation-2",children:"Validate the installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage get-cr-status \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--components=dmc\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);