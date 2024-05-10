"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5524],{2815:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(5893),l=i(1151);const t={title:"Log 18 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-18",tags:["log"]},o=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-18",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-04-05-cocreate.mdx",title:"Log 18 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-04-05T00:00:00.000Z",formattedDate:"April 5, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:1.9,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 18 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-18",tags:["log"]},unlisted:!1,prevItem:{title:"Log 19 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-19"},nextItem:{title:"Log 17 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-17"}},a={authorsImageUrls:[]},d=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Acomplishments",id:"todays-acomplishments",level:2},{value:"Summary",id:"summary",level:3},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Lesons Learned",id:"lesons-learned",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Objective",id:"objective-1",level:2},{value:"Milestones",id:"milestones-1",level:2},{value:"Lessons learned",id:"lessons-learned",level:2},{value:"Next Steps",id:"next-steps-1",level:2}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    A(Deploy bootnode) --\x3e B(Deploy infrastructure)\n    B --\x3eC(Deploy OCP)\n    subgraph "You are here"\n    D(Prepare CP4D & watsonx ai cartdridge)\n    end\n    C --\x3eD\n    D --\x3eE(Install CP4D)\n    E --\x3eF(Deploy Services)'}),"\n",(0,s.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Install Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Deploy and configure watsonx.ai on self-managed AWS infrastructure"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"todays-acomplishments",children:"Today's Acomplishments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CP4D Final Preparations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added options to the CPD VARS file"}),"\n",(0,s.jsx)(n.li,{children:"Recreation of work dir"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Trobuleshooting the CP4D CLI"}),"\n",(0,s.jsx)(n.li,{children:"Awaiting entitlement key approval"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Software evaluation awaiting customer's approval process. This blocks our ability to download software from cp.icr.io","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Customer to provide by EOD Monday"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lesons-learned",children:"Lesons Learned"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Preparation for Cloud Pak for Data on OpenShift sizing needed to be adjusted to reflect an under-provisioning of CPU resources","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This was resolved by.."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,s.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,s.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,s.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,s.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,s.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,s.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,s.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,s.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,s.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Deploy watsonx.ai"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"rag-portion",children:"RAG Portion"}),"\n",(0,s.jsx)(n.h2,{id:"objective-1",children:"Objective"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start building guided workflows"}),"\n",(0,s.jsx)(n.li,{children:"Attempt to improve parsing of unstructured tables with WDU (Watson Document Understanding)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"milestones-1",children:"Milestones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Designed some guided workflow concept ideas"}),"\n",(0,s.jsx)(n.li,{children:"Coded flask app to expose an API to send emails to users from the Watsonx Assistant"}),"\n",(0,s.jsx)(n.li,{children:"Table parsing with WDU sucesfully configured"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lessons-learned",children:"Lessons learned"}),"\n",(0,s.jsx)(n.h2,{id:"next-steps-1",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Integrate agent based workflows into guided workflows (langchain agents)"}),"\n",(0,s.jsx)(n.li,{children:"Investigate if its possible to improve table parsing"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var s=i(7294);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);