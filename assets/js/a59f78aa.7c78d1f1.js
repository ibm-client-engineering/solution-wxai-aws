"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6155],{6591:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=s(4848),i=s(8453);const a={id:"use-cases",sidebar_position:3,title:"NeuralSeek",custom_edit_url:null},o=void 0,c={id:"Use-Cases/use-cases",title:"NeuralSeek",description:"Set Up",source:"@site/docs/3-Use-Cases/NeuralSeek.mdx",sourceDirName:"3-Use-Cases",slug:"/Use-Cases/use-cases",permalink:"/solution-wxai-aws/Use-Cases/use-cases",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"use-cases",sidebar_position:3,title:"NeuralSeek",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Watsonx.ai",permalink:"/solution-wxai-aws/Use-Cases/Watsonxai"},next:{title:"watsonx Assistant",permalink:"/solution-wxai-aws/Use-Cases/Watsonx-Assistant"}},r={},l=[{value:"Set Up",id:"set-up",level:3},{value:"KnowledgeBase Connection",id:"knowledgebase-connection",level:3},{value:"LLM Details",id:"llm-details",level:3},{value:"Configuration &amp; Tuning",id:"configuration--tuning",level:2},{value:"Leverage good responses through updating &quot;Curate&quot; tab",id:"leverage-good-responses-through-updating-curate-tab",level:2},{value:"Testing",id:"testing",level:2},{value:"UI Testing",id:"ui-testing",level:2},{value:"Download Logs",id:"download-logs",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"set-up",children:"Set Up"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Once you've opened NeuralSeek, you'll land on the \"Configure\" tab."}),"\n",(0,t.jsx)(n.li,{children:'Enter the name of the company or organization that NeuralSeek will be generating answers for. Click "Next"'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"knowledgebase-connection",children:"KnowledgeBase Connection"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:['Input Watson Discovery KnowledgeBase details. Discovery API Key and Discovery Service URL can be found on the Watson Discovery service instance page. Once you have created a project and a collection in Watson Discovery, the Discovery Project ID can be found on the integration tab under API Information. Once you fill out the KnowledgeBase Connection details, test the connection by clicking "Test". Once tested, click "Next". The button will turn green when it successfully connects to Watson Discovery.\n',(0,t.jsx)(n.img,{alt:"Watson Discovery",src:s(6521).A+"",width:"1922",height:"1096"})]}),"\n",(0,t.jsx)(n.li,{children:'For Virtual Agent Type, select "Watson Assistant Type". Click "Next". Click "Next".'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"llm-details",children:"LLM Details"}),"\n",(0,t.jsxs)(n.p,{children:["In the LLM Details, you must add at least one LLM. If you choose to add multiple, NeuralSeek will load-balance across them for the selected functions that have multiple LLM's.\nFor API key, there are two options: SaaS and CP4D. You only need to fill out one or the other. Ensure your endpoint and project id are accurate.\n",(0,t.jsx)(n.img,{alt:"LLM Details",src:s(8713).A+"",width:"696",height:"1306"})]}),"\n",(0,t.jsx)(n.p,{children:"In this case, we are interested in CP4D. The CP4D api key must be a base64 encoded key, and it can be found using the terminal comamnd below. You can generate 'myapikey' by clicking on the profile picture on the top right hand corner and then clicking 'Generate new key'."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'printf "myusername:myapikey" | base64\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can confirm if you succeeded in connecting with your zenapikey by using the curl command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -H "Authorization: ZenApiKey ${TOKEN}" "https://<cpd_instance_route>/<endpoint>"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Credentials from watsonx.ai that you need for LLM details:\nFirst make sure you have a project created within watsonx.ai."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["LLM Endpoint\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://dataplatform.cloud.ibm.com/wx/home?context=wx",children:"WatsonX Platform"})]}),"\n",(0,t.jsxs)(n.li,{children:["Prompt Lab -> View code (Right hand side, to the right of Model) -> Copy the API endpoint after ",(0,t.jsx)(n.code,{children:"curl"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["LLM Project ID:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://dataplatform.cloud.ibm.com/wx/home?context=wx",children:"WatsonX Platform"})]}),"\n",(0,t.jsx)(n.li,{children:"Projects -> Manage -> General -> Details -> Project ID"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration--tuning",children:"Configuration & Tuning"}),"\n",(0,t.jsx)(n.p,{children:"Please see below for recommended settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Knowledge Base Tuning:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set score range to 100%"}),"\n",(0,t.jsx)(n.li,{children:"Set max documents per seek to 5"}),"\n",(0,t.jsxs)(n.li,{children:["Set snippet size to 650\n",(0,t.jsx)(n.img,{alt:"KB Tuning",src:s(9728).A+"",width:"3270",height:"1000"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Answer Engineering & Preferences"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Change conciseness from tier 2 on the bar to tier 3"}),"\n",(0,t.jsxs)(n.li,{children:["Set force answers from the knowledgebase to True\n",(0,t.jsx)(n.img,{alt:"Answer Engineering",src:s(3129).A+"",width:"3274",height:"804"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Intent Matching & Cache Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Select Exact Match for Intent Match Tolerance"}),"\n",(0,t.jsx)(n.li,{children:"Edited Answer Cache set to 1"}),"\n",(0,t.jsx)(n.li,{children:"Normal Answer Cache set to 1"}),"\n",(0,t.jsx)(n.li,{children:"Require Cache to Follow Context? set to Yes"}),"\n",(0,t.jsxs)(n.li,{children:["Require Cache to match the exact KB for the question and not the intent? set to No\n",(0,t.jsx)(n.img,{alt:"Cache",src:s(5292).A+"",width:"3270",height:"1348"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Governance & Guardrails"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Click "Semantic Model Tuning" and change Source Jump Penalty from 3 to 6. Source Jump penalty: When answers join across many source documents it can be an indication of lost meaning or intent, depending on your source documentation.\n',(0,t.jsx)(n.img,{alt:"Semantic Model Tuning",src:s(7330).A+"",width:"2318",height:"1004"}),"\n",(0,t.jsx)(n.img,{alt:"Source Jump Penalty",src:s(5576).A+"",width:"1516",height:"1120"})]}),"\n",(0,t.jsx)(n.li,{children:'Turn on "Check document titles as part of the Semantic Match"'}),"\n",(0,t.jsx)(n.li,{children:'Turn on "Check document URL\'s as part of the Semantic Match"'}),"\n",(0,t.jsxs)(n.li,{children:['Turn on "Remove sentences containing hallucinated key words"\n',(0,t.jsx)(n.img,{alt:"Govern &amp; Guardrails",src:s(3608).A+"",width:"2340",height:"1336"})]}),"\n",(0,t.jsx)(n.li,{children:"Change minimum confidence to 5% and include a message to decrease risk of hallucinations"}),"\n",(0,t.jsx)(n.li,{children:"Update the text to reply with questions not meeting the minimum confidence to something natural as shown in the image below"}),"\n",(0,t.jsxs)(n.li,{children:["Set the minimum confidence % to display a URL to 10\n",(0,t.jsx)(n.img,{alt:"Minimum Confidence",src:s(1770).A+"",width:"3002",height:"892"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"leverage-good-responses-through-updating-curate-tab",children:'Leverage good responses through updating "Curate" tab'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'In NeuralSeek, navigate to the "Curate" tab and you could see intents and answers.'}),"\n",(0,t.jsxs)(n.li,{children:["If there are specific answers that you'd like to modify, click on that row and you will see the row expands. Example screenshot as below.\n",(0,t.jsx)(n.img,{src:s(9784).A+"",width:"2832",height:"424"})]}),"\n",(0,t.jsxs)(n.li,{children:['Click on the answer text and you could edit answer to better match business requirements. Once done editing, click "Save".\n',(0,t.jsx)(n.img,{src:s(7466).A+"",width:"1492",height:"810"})]}),"\n",(0,t.jsxs)(n.li,{children:['To export edited answers, click on the checkboxes of the rows you\'d like to export, and click "download to CSV" button to download a csv file.\n',(0,t.jsx)(n.img,{src:s(9843).A+"",width:"3098",height:"794"})]}),"\n",(0,t.jsxs)(n.li,{children:['To upload edited answers to Neuralseek, unselect all and click "Load Q&A" button and follow the steps to uplaod file.\n',(0,t.jsx)(n.img,{src:s(3795).A+"",width:"2152",height:"494"})]}),"\n",(0,t.jsx)(n.li,{children:"After uploading Q&A, you will see new rows appear in the Curate tab."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Navigate to "Seek" tab. Test NeuralSeek with questions that are relevant to your documents, e.g. "What products or services do you offer?" You will be able to see the NeuralSeek answer with response details, metrics, and source.\n',(0,t.jsx)(n.img,{alt:"Seek",src:s(8424).A+"",width:"1920",height:"714"}),"\n",(0,t.jsx)(n.img,{alt:"Session Turn",src:s(2980).A+"",width:"618",height:"858"}),"\nEnsure to clear session turn if starting a new session by clicking on the red reset icon:\n",(0,t.jsx)(n.img,{alt:"Clear Session Turn",src:s(8004).A+"",width:"604",height:"830"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In addition to testing on NeuralSeek, we have written a script to allow testing through API for more flexibility.\nWe performed Pre-Processing and No OCR, No Pre-Processing and No OCR, and OCR experiments using the testing notebook.\nYou can and run the different experiments just by changing the Discovery collection ID and providing with the questions and expected responses as string arrays.\nIt uses the NeuralSeek API.\nPlease refer to ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(3071).A+"",children:"Testing Notebook"})," for detailed steps."]}),"\n",(0,t.jsx)(n.h2,{id:"ui-testing",children:"UI Testing"}),"\n",(0,t.jsxs)(n.p,{children:['Within the NeuralSeek UI, there is also a feature to send a batch of questions to test at once. This can be helpful for users who prefer UI tools, and returns answers in a spreadhseet format. To use this feature, navigate to the "upload test questions" section on the home page:\n',(0,t.jsx)(n.img,{alt:"UI Testing",src:s(4365).A+"",width:"3456",height:"1806"})]}),"\n",(0,t.jsxs)(n.p,{children:["When submitting your batch of questions, format them using the ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8006).A+"",children:"template"})," provided before uploading them."]}),"\n",(0,t.jsx)(n.h2,{id:"download-logs",children:"Download Logs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Proceed to API on Integrate tab\n",(0,t.jsx)(n.img,{alt:"NS Console Log",src:s(6456).A+"",width:"2854",height:"814"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click Authorize, then paste in API key and then click authorize.\n",(0,t.jsx)(n.img,{alt:"API Authorize",src:s(6893).A+"",width:"2258",height:"278"}),"\n",(0,t.jsx)(n.img,{alt:"Available Authorization",src:s(2161).A+"",width:"1472",height:"840"})]}),"\n",(0,t.jsxs)(n.li,{children:["Scroll to Logs section, click 'Try it out' and then click execute\n",(0,t.jsx)(n.img,{alt:"Logs Section",src:s(7534).A+"",width:"2238",height:"1162"}),"\n",(0,t.jsx)(n.img,{alt:"Logs Execute",src:s(4073).A+"",width:"2190",height:"1204"})]}),"\n",(0,t.jsxs)(n.li,{children:["After execute, you can download logs in json format by clicking 'Download'\n",(0,t.jsx)(n.img,{alt:"Download",src:s(8264).A+"",width:"2146",height:"628"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8006:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/q-46ade0a8c5b75aaf4d1733f76079d3a0.csv"},3071:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/files/testing-1c513c7e583adbe4e7eb83b4bd5640c1.ipynb"},6893:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/APIAuthorize-0745a91add065690f18f84b53a4e9632.png"},3129:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/AnswerEngineering-9c003cb7f399cdddf4cf1e4f3499d602.png"},2161:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/AvailableAuthorizations-197d1816f7c82621b5ad53b9068bf7ec.png"},3608:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Governance-cde683daa5eeff1408a0fe08817a7ca4.png"},9728:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/KBTuning-77ab08e8ae4d2f910fc5d8ceab277171.png"},8713:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/LLMDetails-15beb86005ad7f24cc1a05723c941598.png"},1770:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/MinimumConfidence-3182860777c97e628cc650bef96de607.png"},6456:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/NS_Console_Log-fab9601e105501313800da0bd1d28d2c.png"},8424:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Seek-3448143bf6894336198020fdb4449f5c.png"},7330:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/SemanticModelTuning-a10b888b662dfaa953cb6fa5b7a1124b.png"},5576:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/SourceJumpPenalty-296066b6a6923674f091d07381abea11.png"},6521:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/WD-5c57c697377fa420f52da2354ee979fb.png"},8004:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/clearsessionturn-89b92fd68f6abdd1849d4feaa36ad5ba.png"},8264:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/download_logs-c3c6c093ff69829fde024b9468e21eb4.png"},5292:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/intentmatching_configuration-33201c32410ce9ebcd66fc173a65427c.png"},7534:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/logs-b49f7a0fb6395ed8d08d388b8a8958ec.png"},4073:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/logs_execute-d1a675962885403c3fd5253177d89f77.png"},9843:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/neuralseek-curate-download-intents-df44485e10300a97468a810219db22ec.png"},7466:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/neuralseek-curate-edit-answer-4a0441d23fbe08cab8f06f1fbe4cccf5.png"},3795:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/neuralseek-curate-loadqa-d05732030d625c0ef4cd83a050bacea6.png"},9784:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/neuralseek-curate-show-answers-6fbc96a645a91ab48460aef3674b941c.png"},2980:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/sessionturn-4994ccf43f56cc5b87de1865a0d18f76.png"},4365:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/test-questions-ui-a88762ce774b5d555944a918fdb68869.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);