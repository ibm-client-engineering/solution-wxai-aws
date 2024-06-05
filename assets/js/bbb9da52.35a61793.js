"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2912],{8128:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=i(4848),l=i(8453);const t={title:"Log 23 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-23",tags:["log"]},o=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-23",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-05-13-cocreate.mdx",title:"Log 23 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-05-13T00:00:00.000Z",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:1.19,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 23 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-23",tags:["log"]},unlisted:!1,prevItem:{title:"Log 24 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-24"},nextItem:{title:"Log 22 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-22"}},a={authorsImageUrls:[]},c=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:3},{value:"Summary",id:"summary",level:3},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(n){const e={h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(e.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,s.jsx)(e.mermaid,{value:'flowchart LR\n    A(Deploy bootnode) --\x3e B(Deploy infrastructure)\n    B --\x3eC(Deploy OCP)\n    C --\x3eD(Prepare CP4D & watsonx ai cartdridge)\n    D --\x3eE(Install CP4D)\n    E --\x3eF\n    subgraph "You are here"\n    F(Deploy Services)\n    end'}),"\n",(0,s.jsx)(e.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Install Cloud Pak for Data","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Deploy and configure watsonx.ai on self-managed AWS infrastructure on ref environment and document","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"GPU node provisioned"}),"\n",(0,s.jsx)(e.li,{children:"Deployment of Granite model"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Provisioning GPU node","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Installing GPU operator"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Installing watsonx.ai operator","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Waiting on the installer"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Facing issues with Mistral IBM models for watsonx.ai - support case open"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"MCG Secrets created for Cloud Pak components"}),"\n",(0,s.jsx)(e.li,{children:"Authorized Instance Topology"}),"\n",(0,s.jsx)(e.li,{children:"Installed Cloud Pak shared components"}),"\n",(0,s.jsx)(e.li,{children:"Installed Knative"}),"\n",(0,s.jsx)(e.li,{children:"GPU Node Activity and Billing"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["GPU Node Activity","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"AWS was charging for a GPU Node while powered-down"}),"\n",(0,s.jsx)(e.li,{children:"Provisioned the GPU Node using a reserve instance (30 days starting May 6)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Deploy watsonx.ai"}),"\n",(0,s.jsx)(e.li,{children:"Install NeuralSeek"}),"\n",(0,s.jsxs)(e.li,{children:["Application configuration","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"NeuralSeek"}),"\n",(0,s.jsx)(e.li,{children:"watsonx.ai Prompt Lab"}),"\n",(0,s.jsx)(e.li,{children:"watsonx Assistant"}),"\n",(0,s.jsxs)(e.li,{children:["watsonx Orchestrate","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ServiceNow skills"}),"\n",(0,s.jsx)(e.li,{children:"Microsoft Outlook skills"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>r});var s=i(6540);const l={},t=s.createContext(l);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);