"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8621],{6392:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(5893),s=i(1151);const o={title:"Log 15 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-15",tags:["log"]},l=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-15",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-04-02-cocreate.mdx",title:"Log 15 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-04-02T00:00:00.000Z",formattedDate:"April 2, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:1.7,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 15 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-15",tags:["log"]},unlisted:!1,prevItem:{title:"Log 16 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-16"},nextItem:{title:"Log 14 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-14"}},a={authorsImageUrls:[]},c=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:2},{value:"Summary",id:"summary",level:3},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,t.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart LR\n    A(Deploy bootnode) --\x3e B(Deploy infrastructure)\n    B --\x3eC(Deploy OCP)\n    subgraph "You are here"\n    D(Prepare CP4D & watsonx ai cartdridge)\n    end\n    C --\x3eD\n    D --\x3eE(Install CP4D)\n    E --\x3eF(Deploy Services)'}),"\n",(0,t.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Install Cloud Pak for Data","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In Progress"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Deploy and configure watsonx.ai on self-managed AWS infrastructure"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verifying cluster health in preparation for Cloud Pak for Data install"}),"\n",(0,t.jsx)(n.li,{children:"Verifying network connectivity to application pods"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Attempting to resolve domain name of the OpenShift portal","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added required cluster-wide settings to proxy","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added wxai domain information to noProxy configuration ",(0,t.jsx)(n.code,{children:"oc edit proxy/cluster"})]}),"\n",(0,t.jsxs)(n.li,{children:["Investigating OpenShift error ",(0,t.jsx)(n.code,{children:"certificate is valid for oauth-openshift.openshift-authentication.svc"})]}),"\n",(0,t.jsx)(n.li,{children:"Cluster pieces updating, validating health of cluster on later call (may be related to current certificate errors)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'More nodes in "ready" state'}),"\n",(0,t.jsx)(n.li,{children:"1 master node continuing to update causing cluster connectivity issues"}),"\n",(0,t.jsx)(n.li,{children:"Attempting to drain and restart pending nodes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Software evaluation awaiting customer's approval process. This blocks our ability to download software from cp.icr.io","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Customer to escalate internally"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,t.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,t.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,t.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,t.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,t.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,t.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,t.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,t.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,t.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Deploy watsonx.ai"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(7294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);