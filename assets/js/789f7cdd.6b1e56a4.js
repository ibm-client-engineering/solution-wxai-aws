"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3031],{6838:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(5893),l=i(1151);const o={title:"Log 12 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-12",tags:["log"]},t=void 0,r={permalink:"/solution-wxai-aws/blog/flight-log-12",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-03-28-cocreate.mdx",title:"Log 12 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-03-28T00:00:00.000Z",formattedDate:"March 28, 2024",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:2.415,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 12 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-12",tags:["log"]},unlisted:!1,prevItem:{title:"Log 13 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-13"},nextItem:{title:"Log 11 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-11"}},a={authorsImageUrls:[]},c=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:2},{value:"Summary",id:"summary",level:3},{value:"Lessons learned",id:"lessons-learned",level:2},{value:"OCP Deployment",id:"ocp-deployment",level:3},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    A(Deploy bootnode) --\x3e B(Deploy infrastructure)\n    subgraph "You are here"\n    C(Deploy OCP)\n    end\n    B --\x3eC\n    C --\x3e D(Prepare CP4D & watsonx ai cartdridge)\n    D --\x3eE(Install CP4D)\n    E --\x3eF(Deploy watsonx.ai)'}),"\n",(0,s.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In progress"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Install Cloud Pak for Data"}),"\n",(0,s.jsx)(n.li,{children:"Deploy and configure watsonx.ai on self-managed AWS infrastructure"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Successful deployment of OpenShift"}),"\n",(0,s.jsx)(n.li,{children:"Successful setup of storage class"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Nodes were shut down after-hours by customer compliance automated scan","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All nodes must be whitelisted by customer security"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Validating health of OCP installation","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All nodes started and responding"}),"\n",(0,s.jsxs)(n.li,{children:["Investigating pods","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Some pods appear to be stuck due to node shutdowns"}),"\n",(0,s.jsx)(n.li,{children:"Deleting non-responsive pods"}),"\n",(0,s.jsx)(n.li,{children:"Replacing ICMP range 0 with all on 10.0.0.0/8"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Issue - ",(0,s.jsx)(n.code,{children:"ConnectivityCheckController"})," is waiting for transition to desired version (4.12.8) to be completed.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Investigating proxy configuration"}),"\n",(0,s.jsx)(n.li,{children:"Adding cluster domain to proxy configuration - configuring local nodes to not use proxy"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Fix: Adding noproxy spec to proxy configuration allowed for traffic locally (not through proxy) for nodes"}),"\n",(0,s.jsx)(n.li,{children:"Waiting for configurations to apply (automatically)"}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)("strong",{children:"OCP cluster verified working"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Adding storage to cluster for CP4D support","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creating storage class"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Requires kubeconfig\noc new-project nfs-provisioner\noc config set-context --current --namespace=nfs-provisioner\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/\nhelm install nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \\\n    --namespace nfs-provisioner \\\n    --set nfs.server=<EFS URL> \\\n    --set nfs.path=/ \\\n    --set storageClass.defaultClass=true\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Initial install - Local helm install needed"}),"\n",(0,s.jsx)(n.li,{children:"Retrying by retrieving the external provisioner and copying locally"}),"\n",(0,s.jsx)(n.li,{children:"Default storage class operational"}),"\n",(0,s.jsx)(n.li,{children:"Deleted test pod"}),"\n",(0,s.jsx)(n.li,{children:"Deleted pvx"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lessons-learned",children:"Lessons learned"}),"\n",(0,s.jsx)(n.h3,{id:"ocp-deployment",children:"OCP Deployment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Customer environment heavily affected configuration of the original deployment script and process","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Security considerations"}),"\n",(0,s.jsx)(n.li,{children:"Proxy configurations in setup"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Software evaluation licenses for CP4D and watsonx.ai"}),"\n",(0,s.jsx)(n.li,{children:"Customer decision is required to determine cluster console access"}),"\n",(0,s.jsx)(n.li,{children:"Add documentation for the CP4D deployment"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,s.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,s.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,s.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,s.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,s.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,s.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,s.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,s.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,s.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Deploy watsonx.ai"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var s=i(7294);const l={},o=s.createContext(l);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);