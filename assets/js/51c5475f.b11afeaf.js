"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7638],{1197:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(5893),t=i(1151);const r={title:"Log - Sprint 9 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-9",tags:["log","sprint"]},l=void 0,o={permalink:"/solution-wxai-aws/blog/flight-log-9",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-03-26-cocreate.md",title:"Log - Sprint 9 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-03-26T00:00:00.000Z",formattedDate:"March 26, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"},{label:"sprint",permalink:"/solution-wxai-aws/blog/tags/sprint"}],readingTime:3.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log - Sprint 9 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-9",tags:["log","sprint"]},unlisted:!1,nextItem:{title:"Log - Sprint 8 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-8"}},a={authorsImageUrls:[]},c=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:2},{value:"Blockers",id:"blockers",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure forr customer software evaluation"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    A[Deploy bootnode]\n    subgraph "You are here"\n    B(Deploy OCP)\n    end\n    A--\x3eB\n    B --\x3e C(Install CP4D)\n    C --\x3eD[Deploy watsonx.ai]'}),"\n",(0,s.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the Fidelity AWS environment","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In progress"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Install CloudPak for Data"}),"\n",(0,s.jsx)(n.li,{children:"Deploy and configure watsonx.ai on self-managed AWS infrastructure"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Verify \u2018quay.io\u2019 is the registry in config.sh","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verified in the registry"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Create a small instance on a different subnet, same VPC, and confirm that ",(0,s.jsx)(n.a,{href:"http://10.19.170.17:8080/test",children:"http://10.19.170.17:8080/test"})," can be curled. Make require adjusting the Security Group rules for the bootnode. If 8080 fails, then HTTPD config will need be to changed to port 80 and service restarted","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Initial onnectectivity over port 8080 failed"}),"\n",(0,s.jsx)(n.li,{children:"Fixed opoening port via security group"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Changed certificate organization (O) to match the domain","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Cert validated vurrent certificate using output of ",(0,s.jsx)(n.code,{children:"openssl x509 -in /ibm/security/certs/ca.crt -text -noout"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Issuer: C = US, O = ec2.internal, CN = CA\nSubject: C = US, O = ec2.internal, CN = CA\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Changed to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Issuer: C = US, O = `customer domain name`, CN = CA\nSubject: C = US, O =  `customer domain name`, CN = CA\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'Re-run step 1 script with required security tagging, as customer\'s security scans "remediated" improperly tagged items'}),"\n",(0,s.jsxs)(n.li,{children:["Depoyment script changes","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"gp2 -> gpt3"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Renaming \"bootnode\" to bastion.'basedomain'","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Renamed certificates to match"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Reran create registry command"}),"\n",(0,s.jsx)(n.li,{children:"Reran DNS steps for new ELB"}),"\n",(0,s.jsxs)(n.li,{children:["Running Step 2 Script","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First run failed - unable to find bootstrap"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Every Parameters object must contain a Type member\nAn error occurred (ValidationError) when calling the DescribeStacks operation: Stack with id ibmwxai-6wvkv-bootstrap-stack does not exist\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Solution - Needed to add Type string for parameter"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"BootstrapIgnitionLocation:\nDefault: s3://my-s3-bucket/bootstrap.ign\nDescription: Ignition config file location.\nType: String ### This line was not here\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Second run faled - same AMI issue"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Customer security team unable to add public AMI access"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Third run failed - new error"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["yaml validation on control plane stack\n",(0,s.jsx)(n.code,{children:"Parameter validation failed: parameter value for parameter name Master1Subnet does not exist. Rollback requested by user"})]}),"\n",(0,s.jsxs)(n.li,{children:["Investigating why script is not generating parameter for ",(0,s.jsx)(n.code,{children:"Master1Subnet"})]}),"\n",(0,s.jsx)(n.li,{children:"Typo found in script create_control_plane_param.sh - masters1ubnet -> master1subnet"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cleanup when step 2 script fails"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Remove metadata from wxai"}),"\n",(0,s.jsx)(n.li,{children:"Delete stacks created"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ignore FATAL error"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fourth run failed"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Automated customer security scan "remediation" removed non-compliant security groups on bootstrap and master (Ingress and Egress)'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Security Event: Security Group with Unapproved Egress. The security group non-compliant egress rules have been deleted. Please check your application to ensure the functionality has not been negatively impacted.\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Security Event: Security Group with Unapproved Ingress. The security group non-compliant ingress rules have been deleted. Please check your application to ensure the functionality has not been negatively impacted.\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"LB template currently assuming public in sg-lb-template.yaml, bootstrap-template.yaml"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CidrIp: 0.0.0.0/0\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CidrIps need to be replaced with proper public format per customer security"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CidrIp: 10.0.0.0/8\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cloudforms must be updated to create encrypted resources"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Manually created the ssh key as root user on the bastion node. (This will be added to the bastion_setup script)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"blockers",children:"Blockers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cleared: CoreOS AMI approval from customer (Public AMI's are blocked)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AMI approved, step 2 script succeeded AMI portion"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Future Blocker: Software evaluation licenses for CP4D and watsonx.ai","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pending IBM precurment team approval"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,s.jsx)(n.li,{children:"Customer has no OpenShift experience"}),"\n",(0,s.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,s.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,s.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,s.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,s.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,s.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,s.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,s.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,s.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy watsonx.ai- Add ",(0,s.jsx)(n.code,{children:"/usr/local/bin"})," to ",(0,s.jsx)(n.code,{children:".bashrc"})," and ",(0,s.jsx)(n.code,{children:".bash_profile"})," for root"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(7294);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);