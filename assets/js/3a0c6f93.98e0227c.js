"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4788],{1752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),s=t(8453);const o={title:"Log 5 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-5",tags:["log"]},l=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-5",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-03-15-cocreate.mdx",title:"Log 5 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-03-15T00:00:00.000Z",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:1.16,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 5 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-5",tags:["log"]},unlisted:!1,prevItem:{title:"Log 6 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-6"},nextItem:{title:"Log 4 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-4"}},a={authorsImageUrls:[]},c=[{value:"Objectives",id:"objectives",level:2},{value:"Accomplishments",id:"accomplishments",level:2},{value:"In Progress",id:"in-progress",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Tracking (Issues)",id:"tracking-issues",level:2}];function d(e){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Deploy watsonx.ai on self-managed AWS infrastructure."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"accomplishments",children:"Accomplishments"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"AWS"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Populated parameter overrides JSON."}),"\n",(0,i.jsx)(n.li,{children:"Created RH Trial account and uploaded pull secret to S3 bucket."}),"\n",(0,i.jsx)(n.li,{children:"Updated CloudFormation STS template with permissions to create and assume Role with respective JSON versions."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"RAG"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creation of cronjob to capture logs from Python app."}),"\n",(0,i.jsx)(n.li,{children:"Enabled metadata insertion into chunks in vector store -> (hopefully) increases retrieval accuracy"}),"\n",(0,i.jsx)(n.li,{children:"Return context to user (shows sources used to generate responses)"}),"\n",(0,i.jsx)(n.li,{children:"Added mixtral model support"}),"\n",(0,i.jsx)(n.li,{children:"Enable functionality for user to give custom rag parameters"}),"\n",(0,i.jsx)(n.li,{children:"Migrated vector DB from FAISS to chromaDB to enable the metadata functionality"}),"\n",(0,i.jsx)(n.li,{children:"Script written to easily test rag implementation and save results in csv"}),"\n",(0,i.jsx)(n.li,{children:"Implemented cache logic to make sure it considers combination of parameters as well before chosing to send a cached response"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"in-progress",children:"In Progress"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)"}),"\n",(0,i.jsx)(n.li,{children:"Tagging cp-deployer.sh generated resources."}),"\n",(0,i.jsx)(n.li,{children:"Updating solution docs with better asset linking."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Continue over the shoulder working sessions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kick off CloudFormation template install with updated STS templates."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Compilation of required endpoints"}),"\n",(0,i.jsx)(n.li,{children:"Deploy latest RAG version on AWS"}),"\n",(0,i.jsx)(n.li,{children:"Build out actions & flow in Watsonx Assistant after properly defining personas & objectives."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tracking-issues",children:"Tracking (Issues)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Require sign-off on final CloudFormation template."}),"\n",(0,i.jsx)(n.li,{children:"CoreOS AMI pending approval."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);