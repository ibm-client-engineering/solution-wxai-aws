"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4634],{4045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=t(5893),r=t(1151);const l={id:"preparation",sidebar_position:1,title:"Preparation Steps",custom_edit_url:null},o=void 0,i={id:"Deployment/Infrastructure/preparation",title:"Preparation Steps",description:"Obtain RedHat Pull Secret",source:"@site/docs/2-Deployment/1-Infrastructure/1-Installation.mdx",sourceDirName:"2-Deployment/1-Infrastructure",slug:"/Deployment/Infrastructure/preparation",permalink:"/solution-wxai-aws/Deployment/Infrastructure/preparation",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"preparation",sidebar_position:1,title:"Preparation Steps",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Infrastructure",permalink:"/solution-wxai-aws/infrastructure"},next:{title:"UPI Installation Instructions",permalink:"/solution-wxai-aws/Deployment/Infrastructure/upi_install"}},a={},c=[{value:"Obtain RedHat Pull Secret",id:"obtain-redhat-pull-secret",level:3},{value:"Obtain the AWS IAM credentials",id:"obtain-the-aws-iam-credentials",level:3},{value:"Configure AWS",id:"configure-aws",level:3},{value:"Redhat pull secret",id:"redhat-pull-secret",level:3},{value:"Create s3 bucket",id:"create-s3-bucket",level:3},{value:"Create pull-secrets folder in s3 bucket",id:"create-pull-secrets-folder-in-s3-bucket",level:3},{value:"Upload pull-secrets.json to s3bucket/pull-secrets",id:"upload-pull-secretsjson-to-s3bucketpull-secrets",level:3},{value:"Create AWS KeyPair",id:"create-aws-keypair",level:3},{value:"Preparing the installion files",id:"preparing-the-installion-files",level:3},{value:"Preparing Parameters Override file",id:"preparing-parameters-override-file",level:3},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"Create OCPInstall Role",id:"create-ocpinstall-role",level:3},{value:"Create LambdaExecution Role",id:"create-lambdaexecution-role",level:3},{value:"Deply cloudformation template using AWS CLI",id:"deply-cloudformation-template-using-aws-cli",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"SSM into bootnode",id:"ssm-into-bootnode",level:4},{value:"Monitor the deployment",id:"monitor-the-deployment",level:4}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"obtain-redhat-pull-secret",children:"Obtain RedHat Pull Secret"}),"\n",(0,s.jsxs)(n.p,{children:["Use this URL to download your RedHat Pull Secret:\n",(0,s.jsx)(n.a,{href:"https://console.redhat.com/openshift/install/pull-secret",children:"https://console.redhat.com/openshift/install/pull-secret"})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If your organization does not have an existing RedHat account, you can create a RedHat trial account for a temporary OCP deployment (60 days). Instructions ",(0,s.jsx)(n.a,{href:"/GettingStarted/prerequisites#redhat-ocp-account-and-pull-secret",children:"here"}),' under the expandable section "Obtain a RedHat Trial Account"']})}),"\n",(0,s.jsx)(n.h3,{id:"obtain-the-aws-iam-credentials",children:"Obtain the AWS IAM credentials"}),"\n",(0,s.jsxs)(n.p,{children:["If you can use your permanent security credentials for the AWS account, you will need an ",(0,s.jsx)(n.strong,{children:"Access Key ID"})," and ",(0,s.jsx)(n.strong,{children:"Secret Access Key"})," for the deployer to setup an OpenShift cluster on AWS."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/",children:"https://aws.amazon.com/"})]}),"\n",(0,s.jsx)(n.li,{children:"Login to the AWS console"}),"\n",(0,s.jsx)(n.li,{children:"Click on your user name at the top right of the screen"}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Security credentials"}),". You can also reach this screen via ",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/iam/home?region=us-east-2#/security_credentials",children:"https://console.aws.amazon.com/iam/home?region=us-east-2#/security_credentials"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If you do not yet have an access key (or you no longer have the associated secret), create an access key"}),"\n",(0,s.jsxs)(n.li,{children:["Store your ",(0,s.jsx)(n.strong,{children:"Access Key ID"})," and ",(0,s.jsx)(n.strong,{children:"Secret Access Key"})," in safe place"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configure-aws",children:"Configure AWS"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command and then enter your Access Key ID, Secret Access Key, Region, and Output."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws configure\n"})}),"\n",(0,s.jsx)(n.h3,{id:"redhat-pull-secret",children:"Redhat pull secret"}),"\n",(0,s.jsxs)(n.p,{children:["The Red Hat pull secret must be downloaded from ",(0,s.jsx)(n.a,{href:"https://console.redhat.com/openshift/downloads#tool-pull-secret",children:"https://console.redhat.com/openshift/downloads#tool-pull-secret"}),".\nRename the file from ",(0,s.jsx)(n.code,{children:"pull-secret.txt"})," to ",(0,s.jsx)(n.code,{children:"pull_secret.json"})]}),"\n",(0,s.jsx)(n.h3,{id:"create-s3-bucket",children:"Create s3 bucket"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'BUCKET="Bucket_NAME"\naws s3api create-bucket --bucket $BUCKET --region us-east-1\n'})}),"\n",(0,s.jsx)(n.h3,{id:"create-pull-secrets-folder-in-s3-bucket",children:"Create pull-secrets folder in s3 bucket"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'aws s3api put-object --bucket $BUCKET --key "pull-secets" --region us-east-1\n'})}),"\n",(0,s.jsx)(n.h3,{id:"upload-pull-secretsjson-to-s3bucketpull-secrets",children:"Upload pull-secrets.json to s3bucket/pull-secrets"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws s3 cp pull-secrets.json s3://$BUCKET/pull-secrets/pull-secrets.json\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-aws-keypair",children:"Create AWS KeyPair"}),"\n",(0,s.jsx)(n.p,{children:"The following commands create the KeyPair, outputs the file to the default ssh folder. The second command modifies the permissions of the file."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'aws ec2 create-key-pair  --key-name $KEYPAIR_NAME --key-type rsa --key-format pem --query "KeyMaterial" --output text > ~/.ssh/$KEYPAIR_NAME.pem\nchmod 400 ~/.ssh/$KEYPAIR_NAME.pem\n'})}),"\n",(0,s.jsx)(n.h3,{id:"preparing-the-installion-files",children:"Preparing the installion files"}),"\n",(0,s.jsxs)(n.p,{children:['The default "AvailabilityZones" in ',(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"clusters.yaml"})})," are ",(0,s.jsx)(n.strong,{children:'"us-east-2a,us-east-2b,us-east-2c"'})," but can be changed.",(0,s.jsx)(n.br,{}),"\nTo change which Availability Zones are used, search ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"clusters.yaml"})})," for ",(0,s.jsx)(n.code,{children:"us-east-2a,us-east-2b,us-east-2c"})," and replace with the preferred Availability Zones.",(0,s.jsx)(n.br,{}),"\nSearch ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"clusters.yaml"})})," for ",(0,s.jsx)(n.code,{children:"REPLACE_ME_WITH_SUBNET_ID"})," and replace with a specific subnetID."]}),"\n",(0,s.jsx)(n.h3,{id:"preparing-parameters-override-file",children:"Preparing Parameters Override file"}),"\n",(0,s.jsxs)(n.p,{children:["Review ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:'"parameters-override.yaml"'})}),", the following changes will need to be made"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add API Key"}),"\n",(0,s.jsx)(n.li,{children:"Add KeyPairName"}),"\n",(0,s.jsx)(n.li,{children:"Add Private Subnets"}),"\n",(0,s.jsx)(n.li,{children:"Add Public Subnets"}),"\n",(0,s.jsx)(n.li,{children:"Add Red Hat Pull Secret s3 location"}),"\n",(0,s.jsx)(n.li,{children:"Add VPC ID"}),"\n",(0,s.jsx)(n.li,{children:"Add Bucket Name for s3 bucket that is being used by Red Hat Pull secret"}),"\n",(0,s.jsx)(n.li,{children:"Add Domain Name"}),"\n",(0,s.jsx)(n.li,{children:"Add Cluster Name"}),"\n",(0,s.jsx)(n.li,{children:"Add CPD External Registry"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deployment-steps",children:"Deployment Steps"}),"\n",(0,s.jsx)(n.h3,{id:"create-ocpinstall-role",children:"Create OCPInstall Role"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(7182).Z+"",children:"Download the OCPInstall_Role.yaml"}),"\nCreate the role by running the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws cloudformation deploy --stack-name OCPInstall-role-1 -template-file OCPInstall_Role.yaml --capabilities CAPABILITY_NAMED_IAM --tags *add Key=Value tag here*\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-lambdaexecution-role",children:"Create LambdaExecution Role"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3339).Z+"",children:"Download the LambdaExecutionRole.yaml"}),"\nCreate the role by running the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws cloudformation deploy --stack-name LambdaExecutionRole -template-file LambdaExecutionRole.yaml --capabilities CAPABILITY_NAMED_IAM --tags *add Key=Value tag here*\n"})}),"\n",(0,s.jsx)(n.h3,{id:"deply-cloudformation-template-using-aws-cli",children:"Deply cloudformation template using AWS CLI"}),"\n",(0,s.jsx)(n.p,{children:"Using the OCPInstall role arn, run the following command to start the main cloudformation deployment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws cloudformation deploy --stack-name stack-deployment-1 --template-file cluster.yaml --parameter-overrides file://parameters-override.json --capabilities CAPABILITY_NAMED_IAM --tags *add Key=Value tag here* --role-arn arn:aws:iam::<ACCOUNT>:role/OCPInstall\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check the AWS Console to see when the cloudformation template has progressed far enough that the bootnode is online."}),"\n",(0,s.jsx)(n.p,{children:"Using the ssh key from the Key Pair name used in parameters-override.yaml, ssh to the bootnode."}),"\n",(0,s.jsx)(n.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,s.jsx)(n.h4,{id:"ssm-into-bootnode",children:"SSM into bootnode"}),"\n",(0,s.jsxs)(n.p,{children:["Add ",(0,s.jsx)(n.code,{children:"AmazonSSMManagedInstanceCore"})," policy to role used to execute the cloudform template and the user/role that will be connecting to the instance."]}),"\n",(0,s.jsxs)(n.p,{children:["The cloudform template creates a boot node that will begin executing commands. One set of commands installs, enables, and starts ",(0,s.jsx)(n.code,{children:"amazon-ssm-agent"}),". It may take up to 20 minutes before this agent comes online in the boot node."]}),"\n",(0,s.jsx)(n.p,{children:"Once the instance has started the ssm agent a connection can be initiated with following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws ssm start-session --target $InstanceID\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once a connection has been opened, you may need to change users to the 'ec2-user'. This can be accomplished with the following commands:"}),"\n",(0,s.jsxs)(n.p,{children:["Become ",(0,s.jsx)(n.code,{children:"root"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo su\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Become ",(0,s.jsx)(n.code,{children:"ec2-user"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"su ec2-user\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will now be able to review deployment logs."}),"\n",(0,s.jsxs)(l,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:" #### Fixing aws command in SSM "})}),"\nSSM does not work exactly the same as SSH. If you intend to use any additional commands, such as ",(0,s.jsx)(n.code,{children:"aws"}),", then you need to do the following:"]}),(0,s.jsxs)(n.p,{children:["Check the output of running the  ",(0,s.jsx)(n.code,{children:"aws"})," command,\nIf there is an error message like this:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[47863] Error loading Python lib '/usr/bin/libpython3.11.so.1.0': dlopen: /usr/bin/libpython3.11.so.1.0: cannot open shared object file: No such file or directory\n"})}),(0,s.jsx)(n.p,{children:"Another possible error message:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aws\nPython path configuration:\n  PYTHONHOME = '/usr/bin'\n  PYTHONPATH = (not set)\n  program name = '/usr/bin/aws'\n  isolated = 0\n  environment = 0\n  user site = 0\n  safe_path = 0\n  import site = 0\n  is in build tree = 0\n  stdlib dir = ''\n  sys._base_executable = '/usr/bin/aws'\n  sys.base_prefix = ''\n  sys.base_exec_prefix = ''\n  sys.platlibdir = 'lib'\n  sys.executable = '/usr/bin/aws'\n  sys.prefix = ''\n  sys.exec_prefix = ''\n  sys.path = [\n    '/usr/bin/base_library.zip',\n    '/usr/bin/lib-dynload',\n    '/usr/bin',\n  ]\nFatal Python error: init_fs_encoding: failed to get the Python codec of the filesystem encoding\nPython runtime state: core initialized\nModuleNotFoundError: No module named 'encodings'\n\nCurrent thread 0x00007fed39a06c00 (most recent call first):\n  <no Python frame>\n"})}),(0,s.jsx)(n.p,{children:"You may not have the correct $PATH."}),(0,s.jsx)(n.p,{children:"Incorrect $PATH:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ echo $PATH\n/home/ec2-user/.local/bin:/home/ec2-user/bin:/usr/bin:/usr/sbin\n"})}),(0,s.jsx)(n.p,{children:"How to Correct $PATH:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'export PATH="/home/ec2-user/.local/bin:/home/ec2-user/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin"\n'})}),(0,s.jsx)(n.p,{children:"How to persist the change to $PATH:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"echo 'export PATH=\"$HOME/.local/bin:$HOME/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin\"' >> .bashrc\n"})}),(0,s.jsx)(n.p,{children:"Confirm this change works:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ echo $PATH\n/home/ec2-user/.local/bin:/home/ec2-user/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin\n$ aws\n\nusage: aws [options] <command> <subcommand> [<subcommand> ...] [parameters]\nTo see help text, you can run:\n\n  aws help\n  aws <command> help\n  aws <command> <subcommand> help\n\naws: error: the following arguments are required: command\n"})})]}),"\n",(0,s.jsx)(n.h4,{id:"monitor-the-deployment",children:"Monitor the deployment"}),"\n",(0,s.jsx)(n.p,{children:'Check what folders exist in the ec2-home directory. if "cpd-status" has not been created yet, then wait a few minutes. Once "cpd-status" directory appears, run the following command:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tail -f ~/cpd-status/log/cloud-pak-deployer\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command will show the log file from the cp-deployer process."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3339:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/files/LambdaExecutionRole-04267db784a9d301a315ae53f6fb77ec.yaml"},7182:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/files/OCPInstallRole-105b473460e225ad87ab5c6d1178d3cc.yaml"},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(7294);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);