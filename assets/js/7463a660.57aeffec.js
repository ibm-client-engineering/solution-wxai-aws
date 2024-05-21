"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4612],{1763:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(4848),t=i(8453);const l={title:"Log 11 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-11",tags:["log"]},r=void 0,o={permalink:"/solution-wxai-aws/blog/flight-log-11",editUrl:"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}",source:"@site/flight-logs/2024-03-27-cocreate.mdx",title:"Log 11 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",date:"2024-03-27T00:00:00.000Z",tags:[{label:"log",permalink:"/solution-wxai-aws/blog/tags/log"}],readingTime:3.875,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Log 11 \ud83d\udeeb",description:"Flight Log of Co-Creation Activities",slug:"flight-log-11",tags:["log"]},unlisted:!1,prevItem:{title:"Log 12 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-12"},nextItem:{title:"Log 10 \ud83d\udeeb",permalink:"/solution-wxai-aws/blog/flight-log-10"}},c={authorsImageUrls:[]},d=[{value:"Objective",id:"objective",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Today&#39;s Accomplishments",id:"todays-accomplishments",level:2},{value:"Summary",id:"summary",level:3},{value:"Script Attempts",id:"script-attempts",level:3},{value:"Cleanup Process",id:"cleanup-process",level:4},{value:"Attempt 1",id:"attempt-1",level:4},{value:"Attempt 2",id:"attempt-2",level:4},{value:"Attempt 3",id:"attempt-3",level:4},{value:"Attempt 4",id:"attempt-4",level:4},{value:"Attempt 5",id:"attempt-5",level:4},{value:"Attempt 6",id:"attempt-6",level:4},{value:"Decisions and Action Items (DAI)",id:"decisions-and-action-items-dai",level:2},{value:"Next Steps",id:"next-steps",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"Deploy watsonx.ai on self-managed AWS infrastructure for customer software evaluation"}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart LR\n    A(Deploy bootnode)\n    subgraph "You are here"\n    B(Deploy infrastructure)\n    end\n    A --\x3eB\n    B --\x3eC(Deploy OCP)\n    C --\x3e D(Prepare CP4D & watsonx ai cartdridge)\n    D --\x3eE(Install CP4D)\n    E --\x3eF(Deploy watsonx.ai)'}),"\n",(0,s.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Deploy and configuration of boot node to establish a beach-head into the customer AWS environment","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Complete"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy OCP using the documented UPI installation steps","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In progress"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Install Cloud Pak for Data"}),"\n",(0,s.jsx)(n.li,{children:"Deploy and configure watsonx.ai on self-managed AWS infrastructure"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"todays-accomplishments",children:"Today's Accomplishments"}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Significant progress made in applying the required configurations according to the customer's environment policies"}),"\n",(0,s.jsx)(n.li,{children:"Master and Worker nodes responding"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"script-attempts",children:"Script Attempts"}),"\n",(0,s.jsx)(n.h4,{id:"cleanup-process",children:"Cleanup Process"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Delete metadata file from "wxai" directory'}),"\n",(0,s.jsxs)(n.li,{children:["Delete stacks created by ",(0,s.jsx)(n.code,{children:"create_cluster_step_2.sh"})]}),"\n",(0,s.jsx)(n.li,{children:"Remove install state"}),"\n",(0,s.jsxs)(n.li,{children:['Ignore first "FATAL" error logged when running ',(0,s.jsx)(n.code,{children:"create_cluster_step_2.sh"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"attempt-1",children:"Attempt 1"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Communication Issues","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"httpd not running on bootnode/bastion due to previous reboot"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix: Enable httpd service on OS. Script change also made to force"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Egress rules added to bootnode and master","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'ALL AWS default egress connections needed to be manually configured to 10.0.0.0/8 vs AWS default value 0.0.0.0/0 for "all" traffic'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"attempt-2",children:"Attempt 2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Running OCP process manually (outside of script)"}),"\n",(0,s.jsxs)(n.li,{children:["Unable to pull images","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Incorrectly pulling images from the bastion host, should be local registry"}),"\n",(0,s.jsxs)(n.li,{children:["Temporary fix: Run ",(0,s.jsx)(n.code,{children:"./start_registy.sh /ibm 5000"})]}),"\n",(0,s.jsx)(n.li,{children:"Ignition configuration issue causing error"}),"\n",(0,s.jsx)(n.li,{children:"Fix: Add deleting state data to the cleanup process"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"attempt-3",children:"Attempt 3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Starting from scratch"}),"\n",(0,s.jsx)(n.li,{children:"Running cleanup process"}),"\n",(0,s.jsxs)(n.li,{children:["Issue found in authentication configuration. The script is improperly configured to more than 1 authentication set","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This customer deployment requires multiple authentication sets: quai.io, RedHat registry, Artifactory. Only one was tested"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Using workaround by manually adding the pullsecret to the create_install_config.sh"}),"\n",(0,s.jsxs)(n.li,{children:["Running ",(0,s.jsx)(n.code,{children:"create_cluster_step_1.sh"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Successful"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Updated LB DNS configurations manually (to be included in code changes, see Attempt 1)"}),"\n",(0,s.jsxs)(n.li,{children:["Running ",(0,s.jsx)(n.code,{children:"create_cluster_step_2.sh"})]}),"\n",(0,s.jsxs)(n.li,{children:["Stalled - ignitions not firing","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"bootnode and master security group needed IP range (additonal egress configuration issues, added code changes, see Attempt 1)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Error","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Issue with Openshift installer extraction. For this customer case, we are not using local registry"}),"\n",(0,s.jsx)(n.li,{children:"Fix: Use general use OpenShift installer from Redhat, which does not assume local registry"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"attempt-4",children:"Attempt 4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Running cleanup process"}),"\n",(0,s.jsxs)(n.li,{children:["Running ",(0,s.jsx)(n.code,{children:"create_cluster_step_2.sh"})]}),"\n",(0,s.jsxs)(n.li,{children:["Updated LB DNS configurations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Worker security group needed validIP range (addition to Attempt 1 and Attempt 2 egress issues, added code changes)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Replaced IP ranges ",(0,s.jsx)(n.code,{children:"0-0"})," with ",(0,s.jsx)(n.code,{children:"0-65535"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Unable to use OpenShift API (oc command) to view pods due to use of untrusted certificates","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['Testing workaround use "insecure" connection by adding flag ',(0,s.jsx)(n.code,{children:"--insecure-skip-tls-verify"})," when using oc"]}),"\n",(0,s.jsxs)(n.li,{children:["Example ",(0,s.jsx)(n.code,{children:"oc get pods -A --insecure-skip-tls-verify"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Removed worker node external volumes (1tb) from script configuration"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"attempt-5",children:"Attempt 5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Retrying using default OpenShift Certificates (bypassing/not creating or using the CA certificate from documentation steps)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Updated config and removed certificate configuration"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Running cleanup process"}),"\n",(0,s.jsxs)(n.li,{children:["Running ",(0,s.jsx)(n.code,{children:"create_cluster_step_2.sh"})]}),"\n",(0,s.jsx)(n.li,{children:"Witnessing certificate failures in script output, but continuing install"}),"\n",(0,s.jsx)(n.li,{children:"Error: Worker nodes not communicatting"}),"\n",(0,s.jsxs)(n.li,{children:["Fix/Root Causes","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Removed IPI artififact from script"}),"\n",(0,s.jsxs)(n.li,{children:["Removed ",(0,s.jsx)(n.code,{children:"{registry_url}"})," image content sources from imageContentSources (Airgap) from install config.sh"]}),"\n",(0,s.jsx)(n.li,{children:"Removed fips mode from install config.sh"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"attempt-6",children:"Attempt 6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Running cleanup process"}),"\n",(0,s.jsxs)(n.li,{children:["Running additional cleanup steps:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Removed .kube"}),"\n",(0,s.jsx)(n.li,{children:"unset $KUBCONFIG"}),"\n",(0,s.jsx)(n.li,{children:"Delete ignition file"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Running ",(0,s.jsx)(n.code,{children:"create_cluster_step_2.sh"})]}),"\n",(0,s.jsx)(n.li,{children:"Worker nodes responding"}),"\n",(0,s.jsxs)(n.li,{children:["Certificate error resolved","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Potential root cause(s) (see fixes from Attempt 5)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"IPI artififacts in script"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{registry_url}"})," image content sources from imageContentSources (Airgap) from install config.sh"]}),"\n",(0,s.jsx)(n.li,{children:"fips mode from install config.sh"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Errors generated from OpenShift to be tracked in next flight log"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"decisions-and-action-items-dai",children:"Decisions and Action Items (DAI)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Validate cluster installation state"}),"\n",(0,s.jsxs)(n.li,{children:["Software evaluation licenses for CP4D and watsonx.ai","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pending approval process"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["License and configure Cloud Pak for Data","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cloud Pak Considerations","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Security scans needed on container images"}),"\n",(0,s.jsx)(n.li,{children:"Customer requires on-prem, offline install"}),"\n",(0,s.jsx)(n.li,{children:"Customer uses their own container registry that might introduce extra effort or compatability issues"}),"\n",(0,s.jsx)(n.li,{children:"Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11)"}),"\n",(0,s.jsx)(n.li,{children:"Supported storage not available"}),"\n",(0,s.jsx)(n.li,{children:"Multiple cloudpaks on the same cluster"}),"\n",(0,s.jsx)(n.li,{children:"custom connections to data sources not supported OOTB"}),"\n",(0,s.jsx)(n.li,{children:"AWS-specific: IAM users required for install/deploy and are not allowed"}),"\n",(0,s.jsx)(n.li,{children:"OpenShift specific: CoreOS requirement for control nodes"}),"\n",(0,s.jsx)(n.li,{children:"Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Deploy watsonx.ai"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(6540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);