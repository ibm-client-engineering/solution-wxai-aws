"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8530],{7785:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(5893),l=i(1151);const t={title:"Log 22 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-22",tags:["log"]},o=void 0,a={permalink:"/solution-wxai-aws/blog/flight-log-22",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-05-10-cocreate.mdx",title:"Log 22 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-05-10T00:00:00.000Z",formattedDate:"May 10, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:1.025,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 22 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-22",tags:["log"]},unlisted:!1,nextItem:{title:"Log 21 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-21"}},r={authorsImageUrls:[]},d=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:3},{value:"Summary",id:"summary",level:3},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    A(Deploy bootnode) --\x3e B(Deploy infrastructure)\n    B --\x3eC(Deploy OCP)\n    C --\x3eD(Prepare CP4D & watsonx ai cartdridge)\n    D --\x3eE(Install CP4D)\n    E --\x3eF\n    subgraph "You are here"\n    F(Deploy Services)\n    end'}),"\n",(0,s.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Install Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy and configure watsonx.ai on self-managed AWS infrastructure on ref environment and document","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Successful installation of watsonx Assistant"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Trobuleshooting watsonx Assistant installation pods","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Starting required pods/containers"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"MCG Secrets created for Cloud Pak components"}),"\n",(0,s.jsx)(n.li,{children:"Authorized Instance Topology"}),"\n",(0,s.jsx)(n.li,{children:"Installed Cloud Pak shared components"}),"\n",(0,s.jsx)(n.li,{children:"Installed Knative"}),"\n",(0,s.jsx)(n.li,{children:"GPU Node Activity and Billing"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lessons-learned",children:"Lessons Learned"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["GPU Node Activity","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AWS was charging for a GPU Node while powered-down"}),"\n",(0,s.jsx)(n.li,{children:"Provisioned the GPU Node using a reserve instance (30 days starting May 6)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deploy watsonx Discovery"}),"\n",(0,s.jsx)(n.li,{children:"Deploy watson Studio"}),"\n",(0,s.jsx)(n.li,{children:"Deploy watson Machine Learning"}),"\n",(0,s.jsx)(n.li,{children:"Deploy IBM Knowledge Catalog"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);