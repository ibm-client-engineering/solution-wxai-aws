"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7053],{490:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(5893),s=i(1151);const o={title:"Log 9 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-9",tags:["log"]},l=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-9",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-03-25-cocreate.mdx",title:"Log 9 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-03-25T00:00:00.000Z",formattedDate:"March 25, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:2.365,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 9 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-9",tags:["log"]},unlisted:!1,prevItem:{title:"Log 10 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-10"},nextItem:{title:"Log 8 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-8"}},a={authorsImageUrls:[]},d=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,t.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart LR\n    A(Deploy bootnode)\n    subgraph "You are here"\n    B(Deploy infrastructure)\n    end\n    A --\x3eB\n    B --\x3eC(Deploy OCP)\n    C --\x3e D(Prepare CP4D & watsonx ai cartdridge)\n    D --\x3eE(Install CP4D)\n    E --\x3eF(Deploy watsonx.ai)'}),"\n",(0,t.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In progress"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Install CloudPak for Data"}),"\n",(0,t.jsx)(n.li,{children:"Deploy and configure watsonx.ai on self-managed AWS infrastructure"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Configuration of the boot node","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Installation of prerequisite software onto the boot node"}),"\n",(0,t.jsx)(n.li,{children:"Created and started local registry"}),"\n",(0,t.jsx)(n.li,{children:"Generated CA certrificate for PKI architecture"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Completion of step 1 of 2 of the deployment script"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Storage insufficient on the bootnode for downloaded images, 400gb minimum required","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mitigation: We increased the boot disk size to 500 gig via the AWS console for the EC2 instance. We then grew the disk and grew the filesystem"}),"\n",(0,t.jsx)(n.li,{children:"This needs to be added as a prereq"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["There was a constraint in the ",(0,t.jsx)(n.code,{children:"sg-lb-template.yaml"})," requiring subnets sized from /16  o /24. We removed that constraint"]}),"\n",(0,t.jsxs)(n.li,{children:["Edited ",(0,t.jsx)(n.code,{children:"bootstrap-template.yaml"})," line 91 to remove the wrong key name. (artifact from testing)"]}),"\n",(0,t.jsx)(n.li,{children:"Software Evaluation process - define and build internal documentation - TBD"}),"\n",(0,t.jsxs)(n.li,{children:["Documentation updates","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parameter definitions - making them more descriptive"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Validation checks","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creating a validation process before runniing any scripts/installs checking for prerequisites"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AWS CLI had a previous installation. Had to manually remove that installation and re-run the aws cli install command."}),"\n",(0,t.jsxs)(n.li,{children:["We decided to run the installation as root user. Root user needed to have the ",(0,t.jsx)(n.code,{children:"/usr/local/bin"})," added to the PATH. Did this manually on the fly with an ",(0,t.jsx)(n.code,{children:"export"})," command."]}),"\n",(0,t.jsxs)(n.li,{children:["Customer security to approve selected AMI for coreOS","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The AMI for CoreOS is a public AMI. The customer security team needs to copy it into the dev account as public AMI's are blocked in this environment"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,t.jsx)(n.li,{children:"Customer has no OpenShift experience"}),"\n",(0,t.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,t.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,t.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,t.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,t.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,t.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,t.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,t.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,t.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Deploy watsonx.ai"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(7294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);