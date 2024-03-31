"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7336],{5972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(5893),i=t(1151);const o={id:"CP4D",sidebar_position:1,title:"CP4D Installation",custom_edit_url:null},r=void 0,a={id:"Installation/CP4D",title:"CP4D Installation",description:"Installing Multicloud Object Gateway",source:"@site/docs/3-Installation/1-CP4D.mdx",sourceDirName:"3-Installation",slug:"/Installation/CP4D",permalink:"/solution-wxai-aws/Installation/CP4D",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"CP4D",sidebar_position:1,title:"CP4D Installation",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/solution-wxai-aws/installation"},next:{title:"Transition",permalink:"/solution-wxai-aws/transition"}},l={},c=[{value:"Installing Multicloud Object Gateway",id:"installing-multicloud-object-gateway",level:2},{value:"Install Object Data Foundation operator",id:"install-object-data-foundation-operator",level:3},{value:"Procedure to install OpenShift Data Foundation operator  <strong>Cribbed from the RHEL Docs</strong>",id:"procedure-to-install-openshift-data-foundation-operator--cribbed-from-the-rhel-docs",level:4},{value:"Verification steps for ODF Operator",id:"verification-steps-for-odf-operator",level:4},{value:"Creating a standalone Multicloud Object Gateway",id:"creating-a-standalone-multicloud-object-gateway",level:4},{value:"Verifying that the OpenShift Data Foundation cluster is healthy",id:"verifying-that-the-openshift-data-foundation-cluster-is-healthy",level:5},{value:"Verifying the state of the pods",id:"verifying-the-state-of-the-pods",level:5},{value:"Installing CP4D Cli",id:"installing-cp4d-cli",level:2},{value:"Download binary",id:"download-binary",level:3},{value:"Configure environmental vars",id:"configure-environmental-vars",level:3},{value:"Login to the cluster with cpd-cli",id:"login-to-the-cluster-with-cpd-cli",level:3},{value:"Add the entitlement key",id:"add-the-entitlement-key",level:3},{value:"Installing CP4D",id:"installing-cp4d",level:2},{value:"Preparing the cluster nodes",id:"preparing-the-cluster-nodes",level:3},{value:"Authorizing instances",id:"authorizing-instances",level:3},{value:"Installation of shared components",id:"installation-of-shared-components",level:3},{value:"Installation of primary CPD components",id:"installation-of-primary-cpd-components",level:3},{value:"Setup instance topology",id:"setup-instance-topology",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"installing-multicloud-object-gateway",children:"Installing Multicloud Object Gateway"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Associated links with this section"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=software-installing-multicloud-object-gateway",children:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=software-installing-multicloud-object-gateway"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.15/html/deploying_openshift_data_foundation_using_amazon_web_services/deploy-standalone-multicloud-object-gateway",children:"https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.15/html/deploying_openshift_data_foundation_using_amazon_web_services/deploy-standalone-multicloud-object-gateway"})})]}),"\n",(0,s.jsx)(n.p,{children:"Multicloud Object Gateway is required for the following CP4D components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"watsonx Assistant"}),"\n",(0,s.jsx)(n.li,{children:"Watson Discovery"}),"\n",(0,s.jsx)(n.li,{children:"Watson Speech services"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"install-object-data-foundation-operator",children:"Install Object Data Foundation operator"}),"\n",(0,s.jsx)(n.p,{children:"Open the console of your OCP instance. This can be retrieved with the following commandline:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"oc whoami --show-console\n\nhttps://console-openshift-console.apps.wxai.cpdu8vscs.ibmworkshops.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open the URL returned in a browser window and use the ",(0,s.jsx)(n.code,{children:"kubeadmin"})," user and the password from the generated auth directory to login."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"screenshots showing the installation process here"})})}),"\n",(0,s.jsxs)(n.h4,{id:"procedure-to-install-openshift-data-foundation-operator--cribbed-from-the-rhel-docs",children:["Procedure to install OpenShift Data Foundation operator  ",(0,s.jsx)(n.strong,{children:"Cribbed from the RHEL Docs"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Log in to the OpenShift Web Console."}),"\n",(0,s.jsx)(n.li,{children:"Click Operators \u2192 OperatorHub."}),"\n",(0,s.jsx)(n.li,{children:"Scroll or type OpenShift Data Foundation into the Filter by keyword box to find the OpenShift Data Foundation Operator."}),"\n",(0,s.jsx)(n.li,{children:"Click Install."}),"\n",(0,s.jsxs)(n.li,{children:["Set the following options on the Install Operator page:\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Update Channel as ",(0,s.jsx)(n.strong,{children:"stable-4.14"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Installation Mode as ",(0,s.jsx)(n.strong,{children:"A specific namespace on the cluster."})]}),"\n",(0,s.jsxs)(n.li,{children:["Installed Namespace as ",(0,s.jsx)(n.strong,{children:"Operator recommended namespace openshift-storage"}),". If Namespace ",(0,s.jsx)(n.code,{children:"openshift-storage"})," does not exist, it is created during the operator installation."]}),"\n",(0,s.jsxs)(n.li,{children:["Select Approval Strategy as ",(0,s.jsx)(n.strong,{children:"Automatic"})," or ",(0,s.jsx)(n.strong,{children:"Manual"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If you select ",(0,s.jsx)(n.strong,{children:"Automatic"})," updates, then the Operator Lifecycle Manager (OLM) automatically upgrades the running instance of your Operator without any intervention."]}),"\n",(0,s.jsxs)(n.li,{children:["If you select ",(0,s.jsx)(n.strong,{children:"Manual"})," updates, then the OLM creates an update request. As a cluster administrator, you must then manually approve that update request to update the Operator to a newer version."]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure that the ",(0,s.jsx)(n.strong,{children:"Enable"})," option is selected for the ",(0,s.jsx)(n.strong,{children:"Console plugin"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Install"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"verification-steps-for-odf-operator",children:"Verification steps for ODF Operator"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["After the operator is successfully installed, a pop-up with a message, ",(0,s.jsx)(n.code,{children:"Web console update is available"})," appears on the user interface. Click ",(0,s.jsx)(n.strong,{children:"Refresh web console"})," from this pop-up for the console changes to reflect."]}),"\n",(0,s.jsxs)(n.li,{children:["In the Web Console:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to Installed Operators and verify that the ",(0,s.jsx)(n.strong,{children:"OpenShift Data Foundation Operator"})," shows a green tick indicating successful installation."]}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Storage"})," and verify if the ",(0,s.jsx)(n.strong,{children:"Data Foundation"})," dashboard is available."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"creating-a-standalone-multicloud-object-gateway",children:"Creating a standalone Multicloud Object Gateway"}),"\n",(0,s.jsx)(n.p,{children:"You can create only the standalone Multicloud Object Gateway component while deploying OpenShift Data Foundation."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure that the OpenShift Data Foundation Operator is installed."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Procedure"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the OpenShift Web Console, click ",(0,s.jsx)(n.strong,{children:"Operators \u2192 Installed Operators"})," to view all the installed operators.\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure that the Project selected is ",(0,s.jsx)(n.code,{children:"openshift-storage"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"OpenShift Data Foundation"})," operator and then click ",(0,s.jsx)(n.strong,{children:"Create StorageSystem."})]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Backing storage"})," page, select the following:\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Multicloud Object Gateway"})," for ",(0,s.jsx)(n.strong,{children:"Deployment type"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Use an existing StorageClass"})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Review and create"})," page, review the configuration details:\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["To modify any configuration settings, click ",(0,s.jsx)(n.strong,{children:"Back"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Create StorageSystem"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Verification steps"})}),"\n",(0,s.jsx)(n.h5,{id:"verifying-that-the-openshift-data-foundation-cluster-is-healthy",children:"Verifying that the OpenShift Data Foundation cluster is healthy"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the OpenShift Web Console, click ",(0,s.jsx)(n.strong,{children:"Storage \u2192 Data Foundation."})]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Status"})," card of the ",(0,s.jsx)(n.strong,{children:"Overview"})," tab, click ",(0,s.jsx)(n.strong,{children:"Storage System"})," and then click the storage system link from the pop up that appears.\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Status"})," card of the ",(0,s.jsx)(n.strong,{children:"Object"})," tab, verify that both ",(0,s.jsx)(n.em,{children:"Object Service"})," and ",(0,s.jsx)(n.em,{children:"Data Resiliency"})," have a green tick."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Details"})," card, verify that the MCG information is displayed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"verifying-the-state-of-the-pods",children:"Verifying the state of the pods"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Workloads \u2192 Pods"})," from the OpenShift Web Console."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"openshift-storage"})," from the ",(0,s.jsx)(n.strong,{children:"Project"})," drop-down list and verify that the following pods are in Running state."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installing-cp4d-cli",children:"Installing CP4D Cli"}),"\n",(0,s.jsx)(n.h3,{id:"download-binary",children:"Download binary"}),"\n",(0,s.jsx)(n.p,{children:"CP4D CLI can be found at the following link."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/IBM/cpd-cli/releases/download/v13.1.4/cpd-cli-linux-EE-13.1.4.tgz",children:"https://github.com/IBM/cpd-cli/releases/download/v13.1.4/cpd-cli-linux-EE-13.1.4.tgz"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"This binary is for linux, if running from a windows machine, please use the linux binary but run it from Windows Subsystem for Linux."}),(0,s.jsx)(n.p,{children:"Also as of this writing the latest version of the cli is 13.1.4."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"wget https://github.com/IBM/cpd-cli/releases/download/v13.1.4/cpd-cli-linux-EE-13.1.4.tgz\n"})}),"\n",(0,s.jsx)(n.p,{children:"Extract the files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tar xzvf https://github.com/IBM/cpd-cli/releases/download/v13.1.4/cpd-cli-linux-EE-13.1.4.tgz\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will create the following directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"cpd-cli-linux-EE-13.1.4-109\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configure-environmental-vars",children:"Configure environmental vars"}),"\n",(0,s.jsx)(n.p,{children:"The following creates a CPD env file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'cat<<EOF> cpd_vars_48.sh\n#===============================================================================\n\n# Cloud Pak for Data installation variables\n\n#===============================================================================\n\n  \n\n# ------------------------------------------------------------------------------\n# Client workstation\n# ------------------------------------------------------------------------------\n\n# Set the following variables if you want to override the default behavior of the Cloud Pak for Data CLI.\n#\n# To export these variables, you must uncomment each command in this section.\n# export CPD_CLI_MANAGE_WORKSPACE=<enter a fully qualified directory>\n# export OLM_UTILS_LAUNCH_ARGS=<enter launch arguments>\n\n# ------------------------------------------------------------------------------\n# Cluster\n# ------------------------------------------------------------------------------\n\nexport OCP_URL=<enter your Red Hat OpenShift Container Platform URL>\nexport OPENSHIFT_TYPE=self-managed\nexport IMAGE_ARCH=amd64\nexport OCP_USERNAME=kubeadmin\nexport OCP_PASSWORD=<enter your password>\nexport SERVER_ARGUMENTS="--server=${OCP_URL}"\nexport CPDM_OC_LOGIN="cpd-cli manage login-to-ocp ${SERVER_ARGUMENTS} ${LOGIN_ARGUMENTS}"\nexport OC_LOGIN="oc login ${OCP_URL} ${LOGIN_ARGUMENTS}"\n\n# export OCP_TOKEN=<enter your token>\n# export LOGIN_ARGUMENTS="--username=${OCP_USERNAME} --password=${OCP_PASSWORD}"\n# export LOGIN_ARGUMENTS="--token=${OCP_TOKEN}"\n\n# ------------------------------------------------------------------------------\n\n# Projects\n\n# ------------------------------------------------------------------------------\n\nexport PROJECT_CERT_MANAGER=ibm-cert-manager\nexport PROJECT_LICENSE_SERVICE=ibm-license-server\nexport PROJECT_SCHEDULING_SERVICE=ibm-scheduler\nexport PROJECT_CPD_INST_OPERATORS=cpd-operators\nexport PROJECT_CPD_INST_OPERANDS=cpd\n\n# export PROJECT_IBM_EVENTS=<enter your IBM Events Operator project>\n# export PROJECT_PRIVILEGED_MONITORING_SERVICE=<enter your privileged monitoring service project>\n# export PROJECT_CPD_INSTANCE_TETHERED=<enter your tethered project>\n# export PROJECT_CPD_INSTANCE_TETHERED_LIST=<a comma-separated list of tethered projects>\n\n# ------------------------------------------------------------------------------\n# Storage\n# ------------------------------------------------------------------------------\n\nexport STG_CLASS_BLOCK=nfs-client\nexport STG_CLASS_FILE=nfs-client\n\n# ------------------------------------------------------------------------------\n# IBM Entitled Registry\n# ------------------------------------------------------------------------------\n\nexport IBM_ENTITLEMENT_KEY=<enter your IBM entitlement API key>\n\n# ------------------------------------------------------------------------------\n# Private container registry\n# ------------------------------------------------------------------------------\n\n# Set the following variables if you mirror images to a private container registry.\n#\n# To export these variables, you must uncomment each command in this section. \n\n# export PRIVATE_REGISTRY_LOCATION=<enter the location of your private container registry>\n# export PRIVATE_REGISTRY_PUSH_USER=<enter the username of a user that can push to the registry>\n# export PRIVATE_REGISTRY_PUSH_PASSWORD=<enter the password of the user that can push to the registry>\n# export PRIVATE_REGISTRY_PULL_USER=<enter the username of a user that can pull from the registry>\n# export PRIVATE_REGISTRY_PULL_PASSWORD=<enter the password of the user that can pull from the registry>\n\n  \n  \n\n# ------------------------------------------------------------------------------\n# Cloud Pak for Data version\n# ------------------------------------------------------------------------------\n\nexport VERSION=4.8.4\n\n# ------------------------------------------------------------------------------\n# Components\n# ------------------------------------------------------------------------------\n\n#export COMPONENTS=ibm-cert-manager,ibm-licensing,scheduler,cpfs,cpd_platform,ws,wml,openpages,wkc,watson_assistant\nexport COMPONENTS=ibm-cert-manager,ibm-licensing,scheduler,cpfs,cpd_platform\n\n\n# export COMPONENTS_TO_SKIP=<component-ID-1>,<component-ID-2>\n\n# ------------------------------------------------------------------------------\n# watsonx Orchestrate\n# ------------------------------------------------------------------------------\n\n# export PROJECT_IBM_APP_CONNECT=<enter your IBM App Connect in containers project>\n# export AC_CASE_VERSION=<version>\n# export AC_CHANNEL_VERSION=<version>\nEOF\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You will need to open the resultant ",(0,s.jsx)(n.code,{children:"cpd_vars_48.sh"})," file and update the following vars:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"OCP_URL\nOCP_PASSWORD\nIBM_ENTITLEMENT_KEY\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default we set our storage classes to the ",(0,s.jsx)(n.code,{children:"nfs-client"})," storage class. Your mileage may vary."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are an IBM employee, entitlement key can be fetched from ",(0,s.jsx)(n.a,{href:"https://myibm.ibm.com/products-services/containerlibrary",children:"here"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"OCP_URL"})," can be pulled with this command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"oc cluster-info\nKubernetes control plane is running at https://api.wxai.cpdu8vscs.ibmworkshops.com:6443\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The kubeadmin password can be found in the build directory for the cluster under ",(0,s.jsx)(n.code,{children:"auth/kubeadmin-password"})]}),"\n",(0,s.jsx)(n.h3,{id:"login-to-the-cluster-with-cpd-cli",children:"Login to the cluster with cpd-cli"}),"\n",(0,s.jsx)(n.p,{children:"Source the env file"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"source cpd_vars_48.sh"})}),"\n",(0,s.jsx)(n.p,{children:"login with cpd-cli"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cpd-cli manage login-to-ocp \\\n--username=${OCP_USERNAME} \\\n--password=${OCP_PASSWORD} \\\n--server=${OCP_URL}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"add-the-entitlement-key",children:"Add the entitlement key"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage add-icr-cred-to-global-pull-secret \\\n--entitled_registry_key=${IBM_ENTITLEMENT_KEY}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installing-cp4d",children:"Installing CP4D"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Important links:"}),(0,s.jsxs)(n.p,{children:["This apparently is a requirement for watsonx Assistant\n",(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=software-installing-red-hat-openshift-serverless-knative-eventing",children:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=software-installing-red-hat-openshift-serverless-knative-eventing"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"preparing-the-cluster-nodes",children:"Preparing the cluster nodes"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"We need to patch the cluster with the following since the initial cluster creation with our scripts assumed a default private registry."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'oc patch OperatorHub cluster --type json -p \'[{"op": "add", "path": "/spec/disableAllDefaultSources", "value": false}]\'\n'})})]}),"\n",(0,s.jsx)(n.p,{children:"Processes derived from the following links"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=settings-changing-process-ids-limit",children:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=settings-changing-process-ids-limit"})}),"\n",(0,s.jsx)(n.p,{children:"To ensure that some services can run correctly, you might need to increase the process IDs limit setting on the OpenShift\xae Container Platform."}),"\n",(0,s.jsx)(n.p,{children:"Log into your bastion node and then login to the cluster and run the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"oc apply -f - << EOF\napiVersion: machineconfiguration.openshift.io/v1\nkind: KubeletConfig\nmetadata:\n  name: cpd-pidslimit-kubeletconfig\nspec:\n  kubeletConfig:\n    podPidsLimit: 16384\n  machineConfigPoolSelector:\n    matchExpressions:\n    - key: pools.operator.machineconfiguration.openshift.io/worker\n      operator: Exists\nEOF\n"})}),"\n",(0,s.jsx)(n.h3,{id:"authorizing-instances",children:"Authorizing instances"}),"\n",(0,s.jsx)(n.p,{children:"This step creates all required projects, creates the NamespaceScope operator in the operators project, and binds the applied role to the service account of the NamespaceScope operator."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage authorize-instance-topology \\\n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"This was successful"})}),"\n",(0,s.jsx)(n.h3,{id:"installation-of-shared-components",children:"Installation of shared components"}),"\n",(0,s.jsxs)(n.p,{children:["These two tasks come from here:\n",(0,s.jsx)(n.a,{href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=cluster-installing-shared-components",children:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=cluster-installing-shared-components"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-cluster-components \\\n--release=${VERSION} \\\n--license_acceptance=true \\\n--cert_manager_ns=${PROJECT_CERT_MANAGER} \\\n--licensing_ns=${PROJECT_LICENSE_SERVICE}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install the scheduler"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-scheduler \\\n--release=${VERSION} \\\n--license_acceptance=true \\\n--scheduler_ns=${PROJECT_SCHEDULING_SERVICE}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation-of-primary-cpd-components",children:"Installation of primary CPD components"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage apply-olm \\\n--release=${VERSION} \\\n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--components=${COMPONENTS}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setup-instance-topology",children:"Setup instance topology"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"cpd-cli manage setup-instance-topology \\\n--release=${VERSION} \\\n--cpd_operator_ns=${PROJECT_CPD_INST_OPERATORS} \\\n--cpd_instance_ns=${PROJECT_CPD_INST_OPERANDS} \\\n--license_acceptance=true \\\n--block_storage_class=${STG_CLASS_BLOCK}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);