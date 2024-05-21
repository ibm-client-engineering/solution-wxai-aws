"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7486],{4308:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const o={title:"Log 7 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-7",tags:["log"]},l=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-7",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-03-20-cocreate.mdx",title:"Log 7 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-03-20T00:00:00.000Z",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:1.285,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 7 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-7",tags:["log"]},unlisted:!1,prevItem:{title:"Log 8 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-8"},nextItem:{title:"Log 6 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-6"}},a={authorsImageUrls:[]},c=[{value:"Objectives",id:"objectives",level:2},{value:"Accomplishments",id:"accomplishments",level:2},{value:"In Progress",id:"in-progress",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Tracking (Issues)",id:"tracking-issues",level:2}];function d(e){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Deploy watsonx.ai on self-managed AWS infrastructure."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"accomplishments",children:"Accomplishments"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"AWS"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Shift from CP Deployer to OpenShift UPI deployment."}),"\n",(0,t.jsx)(n.li,{children:"Artifactory proxy details procured."}),"\n",(0,t.jsx)(n.li,{children:"Discussion of on-site logistics"}),"\n",(0,t.jsx)(n.li,{children:"RHEL 8 AMI changed for BootNode."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"RAG"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creation of cronjob to capture logs from Python app."}),"\n",(0,t.jsx)(n.li,{children:"Enabled metadata insertion into chunks in vector store -> (hopefully) increases retrieval accuracy"}),"\n",(0,t.jsx)(n.li,{children:"Return context to user (shows sources used to generate responses)"}),"\n",(0,t.jsx)(n.li,{children:"Added mixtral model support"}),"\n",(0,t.jsx)(n.li,{children:"Enable functionality for user to give custom rag parameters"}),"\n",(0,t.jsx)(n.li,{children:"Migrated vector DB from FAISS to chromaDB to enable the metadata functionality"}),"\n",(0,t.jsx)(n.li,{children:"Script written to easily test rag implementation and save results in csv"}),"\n",(0,t.jsx)(n.li,{children:"Implemented cache logic to make sure it considers combination of parameters as well before chosing to send a cached response"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"in-progress",children:"In Progress"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)"}),"\n",(0,t.jsx)(n.li,{children:"Tagging cp-deployer.sh generated resources."}),"\n",(0,t.jsx)(n.li,{children:"Updating solution docs with better asset linking."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Setup bootnode with necessary downloads and resources."}),"\n",(0,t.jsx)(n.li,{children:"Creation of IAM Role request creation Cloudformation templates."}),"\n",(0,t.jsx)(n.li,{children:"Kick off on-site over the shoulder working sessions."}),"\n",(0,t.jsx)(n.li,{children:"Collating information and resources to be created via OpenShift UPI deployment."}),"\n",(0,t.jsx)(n.li,{children:"Setup Artifactory proxy."}),"\n",(0,t.jsx)(n.li,{children:"Kick off Cloud Pak for Deployment entitlement key."}),"\n",(0,t.jsx)(n.li,{children:"Deploy latest RAG version on AWS"}),"\n",(0,t.jsx)(n.li,{children:"Build out actions & flow in Watsonx Assistant after properly defining personas & objectives."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tracking-issues",children:"Tracking (Issues)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Require sign-off on final CloudFormation template."}),"\n",(0,t.jsx)(n.li,{children:"Red Hat CoreOS AMI still pending approval."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);