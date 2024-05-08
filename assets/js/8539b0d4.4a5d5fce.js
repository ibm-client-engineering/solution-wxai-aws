"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9024],{9132:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=i(5893),t=i(1151);const o={title:"Log 19 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-19",tags:["log"]},l=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-19",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-04-12-cocreate.mdx",title:"Log 19 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-04-12T00:00:00.000Z",formattedDate:"April 12, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:1.91,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 19 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-19",tags:["log"]},unlisted:!1,prevItem:{title:"Log 20 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-20"},nextItem:{title:"Log 18 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-18"}},a={authorsImageUrls:[]},d=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Summary",id:"summary",level:3},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    A(Deploy bootnode) --\x3e B(Deploy infrastructure)\n    B --\x3eC(Deploy OCP)\n    subgraph "You are here"\n    D(Prepare CP4D & watsonx ai cartdridge)\n    end\n    C --\x3eD\n    D --\x3eE(Install CP4D)\n    E --\x3eF(Deploy watsonx.ai)'}),"\n",(0,s.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Install Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy and configure watsonx.ai on self-managed AWS infrastructure on ref environment and document","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Awaiting entitlement key approval on customer side"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Software evaluation awaiting customer's approval process. This blocks our ability to download software from cp.icr.io","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Customer to provide by EOD Monday"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Worker nodes shutdown until approval comes through"}),"\n",(0,s.jsx)(n.li,{children:"Drafted and sent instructions for the customer to resize the worker node disks for when the cluster is brought back online"}),"\n",(0,s.jsxs)(n.li,{children:["Drafted and sent instructions for the customer to order a GPU Node","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GPU node to be added to the cluster and then cordoned, drained, and shutdown"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Preparation for Cloud Pak for Data on OpenShift sizing needed to be adjusted to reflect an under-provisioning of CPU resources"}),"\n",(0,s.jsx)(n.li,{children:"watsonx.ai service requires larger local disks on worker nodes (500Gb)"}),"\n",(0,s.jsx)(n.li,{children:"The GPU node required for watsonx.ai seems to be a limited resource"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,s.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,s.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,s.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,s.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,s.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,s.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,s.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,s.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,s.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Resize local disks for worker nodes"}),"\n",(0,s.jsx)(n.li,{children:"Customer to order a GPU node and attach it to the cluster"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Deploy watsonx.ai"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var s=i(7294);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);