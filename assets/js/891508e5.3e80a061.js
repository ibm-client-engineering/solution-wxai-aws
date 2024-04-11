"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9351],{9361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=t(5893),r=t(1151);const s={id:"architecture",sidebar_position:1,title:"Architecture",custom_edit_url:null},l="Architecture",d={id:"GettingStarted/architecture",title:"Architecture",description:"Openshift Diagram",source:"@site/docs/1-GettingStarted/1-Architecture.mdx",sourceDirName:"1-GettingStarted",slug:"/GettingStarted/architecture",permalink:"/solution-wxai-aws/GettingStarted/architecture",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"architecture",sidebar_position:1,title:"Architecture",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/solution-wxai-aws/gettingstarted"},next:{title:"Prerequisites",permalink:"/solution-wxai-aws/GettingStarted/prerequisites"}},a={},o=[{value:"Architecture Decisions",id:"architecture-decisions",level:2},{value:"Bill of Materials",id:"bill-of-materials",level:2},{value:"AWS Requirements",id:"aws-requirements",level:3},{value:"Infrastructure",id:"infrastructure",level:4},{value:"Networking",id:"networking",level:4},{value:"Deployment in Action",id:"deployment-in-action",level:2},{value:"watsonx.ai on AWS",id:"watsonxai-on-aws",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Openshift Diagram",src:t(1011).Z+"",width:"2001",height:"1450"})}),"\n",(0,i.jsx)(n.h2,{id:"architecture-decisions",children:"Architecture Decisions"}),"\n",(0,i.jsx)(n.p,{children:"As of this time AWS ROSA is not certified for Watsonx.ai, but will be in sometime in 2024."}),"\n",(0,i.jsx)(n.p,{children:"For now we recommend the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User managed Openshift in AWS"}),"\n",(0,i.jsxs)(n.li,{children:["Cloud Pak for Data with the following components\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"watsonx assistant"}),"\n",(0,i.jsx)(n.li,{children:"Watson Discovery"}),"\n",(0,i.jsx)(n.li,{children:"OpenPages"}),"\n",(0,i.jsx)(n.li,{children:"watsonx.ai"}),"\n",(0,i.jsx)(n.li,{children:"Watson Studio"}),"\n",(0,i.jsx)(n.li,{children:"Watson Machine Learning"}),"\n",(0,i.jsx)(n.li,{children:"IBM Knowledge Catalog"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Foundational Models\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"mixtral"}),"\n",(0,i.jsx)(n.li,{children:"llama2"}),"\n",(0,i.jsx)(n.li,{children:"ibm-granite-chat-v2.1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,i.jsx)(n.h3,{id:"aws-requirements",children:"AWS Requirements"}),"\n",(0,i.jsx)(n.h4,{id:"infrastructure",children:"Infrastructure"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Flavor"}),(0,i.jsx)(n.th,{children:"Count"}),(0,i.jsx)(n.th,{children:"vCPU"}),(0,i.jsx)(n.th,{children:"RAM"}),(0,i.jsx)(n.th,{children:"GPU Count"}),(0,i.jsx)(n.th,{children:"GPU RAM"}),(0,i.jsx)(n.th,{children:"Local Storage"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"m5.2xlarge"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"24 (8 cores x Count)"}),(0,i.jsx)(n.td,{children:"96G (32G x Count)"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"300Gb"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"m6i.8xlarge"}),(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"192 (32 cores x Count)"}),(0,i.jsx)(n.td,{children:"768G (128G x Count)"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"500Gb"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"p4d.24xlarge"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"96"}),(0,i.jsx)(n.td,{children:"1152G"}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"320G"}),(0,i.jsx)(n.td,{children:"500Gb"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Totals"})}),(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:"336"}),(0,i.jsx)(n.td,{children:"2112G"}),(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"320G"}),(0,i.jsx)(n.td,{children:"3500Gb"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"networking",children:"Networking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1x VPC"}),"\n",(0,i.jsx)(n.li,{children:"3x AZ"}),"\n",(0,i.jsx)(n.li,{children:"1x NLB"}),"\n",(0,i.jsx)(n.li,{children:"1x ALB"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deployment-in-action",children:"Deployment in Action"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CloudFormation Template"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The cloudformation template can be found ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(2426).Z+"",children:"here"})]}),"\n",(0,i.jsxs)(n.p,{children:["The following is an approximate diagram of how the CloudFormation template operates. It creates the IAM roles, VPC, Users, and a bootnode from which it deploys OCP and Cloud Pak for Data with ",(0,i.jsx)(n.code,{children:"cloud-pak-deployer"}),"."]}),"\n",(0,i.jsx)(n.mermaid,{value:'graph TD\n\nsubgraph CloudForms\nCloudformStart\nend\n\nsubgraph AWSCredentialSecret\nCPDIAMUserAccessKey\nend\n\nsubgraph VPC\nAWSCredentialSecret("AWSCredentialSecret")\nCPDIAMUser("CPDIAMUser")\nBootNodeIamRole("BootNodeIamRole")--\x3eBootnodeInstance\nBootnodeInstanceProfile("BootnodeInstanceProfile")--\x3eBootnodeInstance\nBootnodeInstance--\x3eOpenShift\nend\n\nsubgraph BootnodeInstance\nCloudPakDeployer--\x3eOpenShift\nend\n\nsubgraph OpenShift\nCP4D--\x3ewxai\nend\n\nCloudformStart{"Cloudforms kicks off build"}--\x3eVPC\n\nCPDIAMUserAccessKey("CPDIAMUserAccessKey")--\x3eCPDIAMUser--\x3eBootnodeInstance\nBootnodeInstance("BootnodeInstance")\n\nCP4D("CP4D")--\x3ewxai\nwxai("watsonx.ai")'}),"\n",(0,i.jsxs)(n.p,{children:["A variation of the cloudformation template that uses STS for auth can be found ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(434).Z+"",children:"here"})]}),"\n",(0,i.jsx)(n.h2,{id:"watsonxai-on-aws",children:"watsonx.ai on AWS"}),"\n",(0,i.jsx)("iframe",{title:"Watsonx.ai-AWS-update",width:"825",height:"720",src:"https://app.terrastruct.com/diagrams/550782635"}),"\n",(0,i.jsx)("iframe",{width:"768",height:"432",src:"https://miro.com/app/embed/uXjVNtCvNTw=/?pres=1&frameId=3458764578922854387&embedId=518034396865",frameborder:"0",scrolling:"no",allow:"fullscreen; clipboard-read; clipboard-write",allowfullscreen:!0})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},434:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/files/cluster-sts-1be0d1d35b2089ce3edaa8f137b11fc5.yml"},2426:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/files/cluster-6d0b9ebbceb8c8940c43a3b78e35aad4.yml"},1011:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/openshiftdiagram-2c6c1b507acfce9229490f5fccb0335e.jpg"},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>l});var i=t(7294);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);