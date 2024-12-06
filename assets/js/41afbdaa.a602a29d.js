"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8003],{7916:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=i(4848),t=i(8453);const l={title:"Log 33 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-33",tags:["log"]},o=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-33",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-05-31-cocreate.mdx",title:"Log 33 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-05-31T00:00:00.000Z",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:1.135,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 33 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-33",tags:["log"]},unlisted:!1,prevItem:{title:"Log 34 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-34"},nextItem:{title:"Log 32 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-32"}},a={authorsImageUrls:[]},c=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:3},{value:"Summary",id:"summary",level:3},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(n){const e={a:"a",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(e.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,s.jsx)(e.mermaid,{value:'flowchart LR\n    A(Deploy Services)--\x3eB\n    subgraph "You are here"\n    B(Application Verification)\n    end'}),"\n",(0,s.jsx)(e.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Install Cloud Pak for Data","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Deploy and configure watsonx.ai on self-managed AWS infrastructure on ref environment and document","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,s.jsx)(e.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Brief watsonx.ai Prompt Lab demonstration"}),"\n",(0,s.jsx)(e.li,{children:"Reconfiguring watsonx Assistant front end (per customer request, to be worked on)"}),"\n",(0,s.jsxs)(e.li,{children:["Continuing proxy investigation for the cluster","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Applying patch to set environment variables for the pods via RSI patch ",(0,s.jsx)(e.a,{href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=2-customizing-pod-specifications-rsi",children:"IBM documentation here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["ServiceNow connectivity being investigated","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Issue with proxy configuration not allowing watsonx Assistant/Orchestrate communication with ServiceNow.com"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["watsonx Assistant front-end enhancements with customer","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Chat greeting enhancements"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["pdf files needed for watson Assistant extensions available to the cluster internally (no external access or configurable access to S3 buckets)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Workaround: Hosted pdf files on the bastion httpd server (originally used for the OCP ignition files)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Application configuration","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"watsonx.ai Prompt Lab"}),"\n",(0,s.jsx)(e.li,{children:"watsonx Assistant"}),"\n",(0,s.jsxs)(e.li,{children:["watsonx Orchestrate","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ServiceNow skills"}),"\n",(0,s.jsx)(e.li,{children:"Microsoft Outlook skills"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>r});var s=i(6540);const t={},l=s.createContext(t);function o(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);