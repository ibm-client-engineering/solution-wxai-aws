"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4559],{8729:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(5893),l=i(1151);const t={title:"Log 21 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-21",tags:["log"]},o=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-21",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-05-09-cocreate.mdx",title:"Log 21 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-05-09T00:00:00.000Z",formattedDate:"May 9, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:2.37,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 21 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-21",tags:["log"]},unlisted:!1,prevItem:{title:"Log 22 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-22"},nextItem:{title:"Log 20 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-20"}},a={authorsImageUrls:[]},d=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:3},{value:"Summary",id:"summary",level:3},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    A(Deploy bootnode) --\x3e B(Deploy infrastructure)\n    B --\x3eC(Deploy OCP)\n    C --\x3eD(Prepare CP4D & watsonx ai cartdridge)\n    subgraph "You are here"\n    E(Prepare CP4D & watsonx ai cartdridge)\n    end\n    D --\x3eE(Install CP4D)\n    E --\x3eF(Deploy Services)'}),"\n",(0,s.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Install Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy and configure watsonx.ai on self-managed AWS infrastructure on ref environment and document","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Successful deployment of CP4D"}),"\n",(0,s.jsx)(n.li,{children:"Installed Knative"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Customer has approved required contracts and procedures have been followed to attain an entitlement key"}),"\n",(0,s.jsx)(n.li,{children:"Updated bootnode IP reference in configuration"}),"\n",(0,s.jsx)(n.li,{children:"Re-ran install scripts"}),"\n",(0,s.jsx)(n.li,{children:"MCG Secrets created for Cloud Pak components"}),"\n",(0,s.jsxs)(n.li,{children:["Verify cluster up v4.12.8","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No errors"}),"\n",(0,s.jsxs)(n.li,{children:["Check storage size on nodes, have 5TB disks instead of 500gb as intended","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This was set incorrectly in config, reconfiguring worker nodes with proper (worker-template.yaml)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Don't need secondary disks on the nodes, NFS will be used instead"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Adding GPU node","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Updating config.sh, gpu_subnet accurate, security groups set properly"}),"\n",(0,s.jsx)(n.li,{children:"Logging into AWS via aws_sso"}),"\n",(0,s.jsx)(n.li,{children:"Running add_node.sh to add gpu node (runs for about 10 min)"}),"\n",(0,s.jsx)(n.li,{children:"Verifying node draining and uncordon node"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Installing nfs provisioner","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Operator install unsuccessful","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fallback to using helm install"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Downloading helm repo and install"}),"\n",(0,s.jsx)(n.li,{children:"Tested and verified with test pod that attached to nfs-client storageclass, applying clean up"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Authorized Instance Topology"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Had an issue with \u201capply-cluster-components\u201d which requires connecting to github to download CASE files. Found a solution in the cpd-cli documentation: use two additioanl flags on the command \u201c--case_download=true\u201d and  \u201c--from_oci=true\u201d which tells cpd-cli to download the CASE files from IBM Open Container Initiative instead of github."}),"\n",(0,s.jsxs)(n.li,{children:["While running \u201csetup-instance-topology\u201d for knative, received an error regarding storage. Added ",(0,s.jsx)(n.code,{children:"\u201c--block_storage_class=${STG_CLASS_BLOCK}\u201d"})," to the command and it completed successfully."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,s.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,s.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,s.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,s.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,s.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,s.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,s.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,s.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,s.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Deploy watsonx.ai"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var s=i(7294);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);