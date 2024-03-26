"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2593],{945:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=i(5893),s=i(1151);const r={title:"Log 10 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-10",tags:["log"]},l=void 0,o={permalink:"/solution-wxai-aws/blog/flight-log-10",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-03-26-cocreate.mdx",title:"Log 10 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-03-26T00:00:00.000Z",formattedDate:"March 26, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:4.425,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 10 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-10",tags:["log"]},unlisted:!1,nextItem:{title:"Log 9 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-9"}},c={authorsImageUrls:[]},a=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:2},{value:"Validation of current deployment status",id:"validation-of-current-deployment-status",level:3},{value:"Script Attempts",id:"script-attempts",level:3},{value:"Cleanup Steps",id:"cleanup-steps",level:4},{value:"Attempt 1",id:"attempt-1",level:4},{value:"Attempt 2",id:"attempt-2",level:4},{value:"Attempt 3",id:"attempt-3",level:4},{value:"Attempt 4",id:"attempt-4",level:4},{value:"Attempt 5",id:"attempt-5",level:4},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,t.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure forr customer software evaluation"}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart LR\n    A[Deploy bootnode]\n    subgraph "You are here"\n    B(Deploy OCP)\n    end\n    A--\x3eB\n    B --\x3e C(Install CP4D)\n    C --\x3eD[Deploy watsonx.ai]'}),"\n",(0,t.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the Fidelity AWS environment","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In progress"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Install CloudPak for Data"}),"\n",(0,t.jsx)(n.li,{children:"Deploy and configure watsonx.ai on self-managed AWS infrastructure"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,t.jsx)(n.h3,{id:"validation-of-current-deployment-status",children:"Validation of current deployment status"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Verify \u2018quay.io\u2019 is the registry in config.sh"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verified in the registry"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"/usr/local/bin"})," to ",(0,t.jsx)(n.code,{children:".bashrc"})," and ",(0,t.jsx)(n.code,{children:".bash_profile"})," for root"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a small instance on a different subnet, same VPC, and confirm that IP can be curled. Make require adjusting the Security Group rules for the bootnode. If 8080 fails, then HTTPD config will need be to changed to port 80 and service restarted"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Initial onnectectivity over port 8080 failed"}),"\n",(0,t.jsx)(n.li,{children:"Fixed by opening port via security group"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Changed certificate organization (O) to match the domain"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Cert validated vurrent certificate using output of ",(0,t.jsx)(n.code,{children:"openssl x509 -in /ibm/security/certs/ca.crt -text -noout"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Issuer: C = US, O = ec2.internal, CN = CA\nSubject: C = US, O = ec2.internal, CN = CA\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Changed to"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Issuer: C = US, O = `customer domain name`, CN = CA\nSubject: C = US, O =  `customer domain name`, CN = CA\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"script-attempts",children:"Script Attempts"}),"\n",(0,t.jsx)(n.h4,{id:"cleanup-steps",children:"Cleanup Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Remove metadata file from "wxai" directory'}),"\n",(0,t.jsx)(n.li,{children:"Delete stacks created"}),"\n",(0,t.jsx)(n.li,{children:'Ignore initial "FATAL" error logged'}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"attempt-1",children:"Attempt 1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Running ",(0,t.jsx)(n.code,{children:"create_cluster_step_1.sh"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Applied required security tagging, as customer\'s security scans "remediate" (delete) improperly tagged items'}),"\n",(0,t.jsxs)(n.li,{children:["Depoyment script changes","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Changed resource types and sizes. Example: ",(0,t.jsx)(n.code,{children:"gp2 -> gpt3"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:['Renaming "bootnode" nomenclature to bastion host ',(0,t.jsx)(n.code,{children:"bastion.'basedomain'"})]}),"\n",(0,t.jsx)(n.li,{children:"Renamed certificate organization to match customer domain"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Reran create registry script"}),"\n",(0,t.jsx)(n.li,{children:"Proceeded with DNS steps for new Elastic Load Balencer from prevous script"}),"\n",(0,t.jsxs)(n.li,{children:["Running ",(0,t.jsx)(n.code,{children:"create_cluster_step_2.sh"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Bootstrap Error","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Every Parameters object must contain a Type member\nAn error occurred (ValidationError) when calling the DescribeStacks operation: Stack with id ibmwxai-6wvkv-bootstrap-stack does not exist\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Solution - Needed to add Type string for parameter","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"BootstrapIgnitionLocation:\nDefault: s3://my-s3-bucket/bootstrap.ign\nDescription: Ignition config file location.\nType: String ### This line was not here\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"attempt-2",children:"Attempt 2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["AMI Error (repeat)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cause: Customer security team denies all public AMI access"}),"\n",(0,t.jsx)(n.li,{children:"Fixed: Customer approved public AMI usage (for our specific AMI ID for the CoreOS)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"attempt-3",children:"Attempt 3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["yaml validation error (new)\n",(0,t.jsx)(n.code,{children:"Parameter validation failed: parameter value for parameter name Master1Subnet does not exist. Rollback requested by user"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Investigated why script is not generating parameter for ",(0,t.jsx)(n.code,{children:"Master1Subnet"})]}),"\n",(0,t.jsx)(n.li,{children:"Fix: Typo found in script create_control_plane_param.sh - masters1ubnet -> master1subnet"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"attempt-4",children:"Attempt 4"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Notified of non-compliance during attempt via email from customer security to customer host","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Rule Formatting"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Summary: Automated customer security scan "remediation" removed non-compliant security groups on bootstrap and master (Ingress and Egress)'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Security Event: Security Group with Unapproved Egress. The security group non-compliant egress rules have been deleted. Please check your application to ensure the functionality has not been negatively impacted.\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Security Event: Security Group with Unapproved Ingress. The security group non-compliant ingress rules have been deleted. Please check your application to ensure the functionality has not been negatively impacted.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"LB template currently assuming public in sg-lb-template.yaml, bootstrap-template.yaml"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"CidrIp: 0.0.0.0/0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix: CidrIps need to be replaced with proper public format per customer security"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# Replace all instances of 0.0.0.0/0 with\nCidrIp: 10.0.0.0/8\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Encryption Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"All volumes must be encrypted"}),"\n",(0,t.jsx)(n.li,{children:"Fix: Cloudforms template must be updated to create encrypted resources"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"attempt-5",children:"Attempt 5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Redeployment cleanup steps"}),"\n",(0,t.jsxs)(n.li,{children:["Running ",(0,t.jsx)(n.code,{children:"create_cluster_step_1.sh"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Successful"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Capture DNS output"}),"\n",(0,t.jsx)(n.li,{children:"Add DNS output to config"}),"\n",(0,t.jsxs)(n.li,{children:["Running ",(0,t.jsx)(n.code,{children:"create_cluster_step_1.sh"})]}),"\n",(0,t.jsxs)(n.li,{children:["Running ",(0,t.jsx)(n.code,{children:"create_cluster_step_2.sh"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Customer had a hard stop for the day. Awaiting feedback for next session"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Adding creation of the ssh key as root user on the bastion node"}),"\n",(0,t.jsxs)(n.li,{children:["CoreOS AMI approval from customer (Public AMI's are blocked)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AMI approved, step 2 script succeeded AMI portion"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Action Items: Customer security policies","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ongoing: Port rule formatting","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Aligning to customer-determined security policies for port formating (Example: Using 10.0.0.0/8 instead of 0.0.0.0/0)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Cleared: Role authorizations"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Software evaluation licenses for CP4D and watsonx.ai","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Pending IBM precurment team approval"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Potential Proxy Configuration Error","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Prepared code changes for ",(0,t.jsx)(n.code,{children:"create_cluster_step_2.sh"})," next session"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,t.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,t.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,t.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,t.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,t.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,t.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,t.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,t.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,t.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Deploy watsonx.ai"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var t=i(7294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);