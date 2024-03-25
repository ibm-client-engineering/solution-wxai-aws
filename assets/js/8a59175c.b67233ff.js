"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3304],{4107:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(5893),s=i(1151);const o={title:"Log - Sprint 7 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-7",tags:["log","sprint"]},l=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-7",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-03-22-cocreate.md",title:"Log - Sprint 7 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-03-22T00:00:00.000Z",formattedDate:"March 22, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"},{label:"sprint",permalink:"/solution-wxai-aws/blog/tags/sprint"}],readingTime:1.855,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log - Sprint 7 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-7",tags:["log","sprint"]},unlisted:!1,nextItem:{title:"Log - Sprint 7 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-7"}},a={authorsImageUrls:[]},c=[{value:"Objectives",id:"objectives",level:2},{value:"Accomplishments",id:"accomplishments",level:2},{value:"In Progress",id:"in-progress",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Tracking (Issues)",id:"tracking-issues",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Deploy watsonx.ai on self-managed AWS infrastructure."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"accomplishments",children:"Accomplishments"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"AWS"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Fixes to cluster-sts.yaml and other deployment resources.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fixed error in cluster-sts.yml by commenting out lines 590-599."}),"\n",(0,t.jsxs)(n.li,{children:["Changed ",(0,t.jsx)(n.code,{children:"IamInstanceProfile: !Ref BootnodeInstanceProfile"})," to ",(0,t.jsx)(n.code,{children:"IamInstanceProfile: <InstanceProfileName>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Changed ",(0,t.jsx)(n.code,{children:"SubnetId: !Ref PublicSubnet1ID"}),"  to ",(0,t.jsx)(n.code,{children:"SubnetId: <PrivateSubnetID>"})," to account for private deployments"]}),"\n",(0,t.jsxs)(n.li,{children:["Updated LambdaExecutionRole.json line 14: from ",(0,t.jsx)(n.code,{children:"ec2.aws.com"})," to ",(0,t.jsx)(n.code,{children:"lambda.aws.com"})," and added ",(0,t.jsx)(n.code,{children:"cloudformation.aws.com"})," of allowed services."]}),"\n",(0,t.jsx)(n.li,{children:"Fixed LambdaExecutionRole ARN to proper role name."}),"\n",(0,t.jsxs)(n.li,{children:["Commented out ",(0,t.jsx)(n.code,{children:"/bin/bash ./cp-deploy.sh env apply -e env_id=${ClusterName} [--accept-all-licenses]"})]}),"\n",(0,t.jsxs)(n.li,{children:["Added VPC and Subnet IDs to the \u201cCleanupLambda\u201d  lambda function in cluster-sts, which then required adding \u201cec2",":CreateNetworkInterface","\u201d permission to LambdaExecutionRole"]}),"\n",(0,t.jsx)(n.li,{children:"Adding tags to CleanupLambda with Application IDs."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Successful deployment of BootNode instance."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"RAG"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creation of cronjob to capture logs from Python app."}),"\n",(0,t.jsx)(n.li,{children:"Enabled metadata insertion into chunks in vector store -> (hopefully) increases retrieval accuracy"}),"\n",(0,t.jsx)(n.li,{children:"Return context to user (shows sources used to generate responses)"}),"\n",(0,t.jsx)(n.li,{children:"Added mixtral model support"}),"\n",(0,t.jsx)(n.li,{children:"Enable functionality for user to give custom rag parameters"}),"\n",(0,t.jsx)(n.li,{children:"Migrated vector DB from FAISS to chromaDB to enable the metadata functionality"}),"\n",(0,t.jsx)(n.li,{children:"Script written to easily test rag implementation and save results in csv"}),"\n",(0,t.jsx)(n.li,{children:"Implemented cache logic to make sure it considers combination of parameters as well before chosing to send a cached response"}),"\n",(0,t.jsx)(n.li,{children:"Added better logic for caching to improve performance"}),"\n",(0,t.jsx)(n.li,{children:"Remove unwanted parameters from request body"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"in-progress",children:"In Progress"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)"}),"\n",(0,t.jsx)(n.li,{children:"Tagging cp-deployer.sh generated resources."}),"\n",(0,t.jsx)(n.li,{children:"Updating solution docs with better asset linking."}),"\n",(0,t.jsx)(n.li,{children:"Exploring WatsonX Discovery"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Continue over the shoulder working sessions","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Kick off CloudFormation template install with updated STS templates."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Compilation of required endpoints"}),"\n",(0,t.jsx)(n.li,{children:"Deploy latest RAG version on AWS"}),"\n",(0,t.jsx)(n.li,{children:"Build out actions & flow in Watsonx Assistant after properly defining personas & objectives."}),"\n",(0,t.jsx)(n.li,{children:"Kick off Cloud Pak for Deployment entitlement key."}),"\n",(0,t.jsx)(n.li,{children:"Build RAG application using WatsonX Discovery."}),"\n",(0,t.jsx)(n.li,{children:"Compare WatsonX Discovery RAG with existing RAG results."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tracking-issues",children:"Tracking (Issues)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Require sign-off on final CloudFormation template."}),"\n",(0,t.jsx)(n.li,{children:"Red Hat CoreOS AMI pending approval."}),"\n",(0,t.jsx)(n.li,{children:"LambdaCleanup error from not being able to assume role."}),"\n",(0,t.jsx)(n.li,{children:"Double checking role names in Cloudformation template."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(7294);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);