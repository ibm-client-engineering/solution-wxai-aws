"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8675],{6696:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=n(4848),i=n(8453);const a={id:"Watsonx-Assistant",sidebar_position:4,title:"watsonx Assistant",custom_edit_url:null},o=void 0,r={id:"Use-Cases/Watsonx-Assistant",title:"watsonx Assistant",description:"Pre-Requisites",source:"@site/docs/3-Use-Cases/Watsonx Assistant.mdx",sourceDirName:"3-Use-Cases",slug:"/Use-Cases/Watsonx-Assistant",permalink:"/solution-wxai-aws/Use-Cases/Watsonx-Assistant",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Watsonx-Assistant",sidebar_position:4,title:"watsonx Assistant",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"NeuralSeek",permalink:"/solution-wxai-aws/Use-Cases/use-cases"},next:{title:"watsonx Orchestrate",permalink:"/solution-wxai-aws/Use-Cases/Watsonx-Orchestrate"}},l={},c=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Create new Assistant",id:"create-new-assistant",level:2},{value:"Upload/Download actions",id:"uploaddownload-actions",level:2},{value:"Create Custom Extension: NeuralSeek",id:"create-custom-extension-neuralseek",level:2},{value:"Pre-Requisites",id:"pre-requisites-1",level:3},{value:"Create NeuralSeek custom extension <a></a>",id:"create-neuralseek-custom-extension-",level:3},{value:"Create WA action to trigger NeuralSeek Search <a></a>",id:"create-wa-action-to-trigger-neuralseek-search-",level:3},{value:"No action matches Setup",id:"no-action-matches-setup",level:4},{value:"Create Custom Extension: ServiceNow",id:"create-custom-extension-servicenow",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Get Developer Instance Credentials and OpenAPI spec",id:"get-developer-instance-credentials-and-openapi-spec",level:3},{value:"Edit Service Now OpenAPI spec",id:"edit-service-now-openapi-spec",level:3},{value:"Build ServiceNow Custom Extenstion",id:"build-servicenow-custom-extenstion",level:3},{value:"Modify AI Assistant",id:"modify-ai-assistant",level:2},{value:"Conversation Starters",id:"conversation-starters",level:3},{value:"Advanced Watsonx Assistant Configuration",id:"advanced-watsonx-assistant-configuration",level:2},{value:"Autocorrection",id:"autocorrection",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"pre-requisites",children:"Pre-Requisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Access to watsonx Assistant"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-new-assistant",children:"Create new Assistant"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["When you first launch the experience, you\u2019ll be prompted to create your first assistant:\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Give it a name that represents the domain of topics you want it to handle."}),"\n",(0,t.jsxs)(s.li,{children:["Choose what language you want it to speak before continuing. watsonx Assistant can handle virtually any global language.\n",(0,t.jsx)(s.img,{src:n(9887).A+"",width:"1676",height:"980"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["From here, you\u2019ll start on the home page of your brand-new assistant:\n",(0,t.jsx)(s.img,{src:n(3028).A+"",width:"3442",height:"1652"})]}),"\n",(0,t.jsx)(s.li,{children:"Now it\u2019s time to build your first conversation. Follow along with our example or create your own!"}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Reference: ",(0,t.jsx)(s.a,{href:"https://www.ibm.com/blog/getting-started-with-the-new-watson-assistant-part-i-the-build-guide/?c=Watson%20Assistant",children:"Getting started with watsonx Assistant part I: the build guide"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"uploaddownload-actions",children:"Upload/Download actions"}),"\n",(0,t.jsx)(s.p,{children:"To reinstate a backup copy of actions that you exported from another service instance or environment, import the JSON file of the actions you exported."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["On the Actions page, click Global settings Gear icon on upper-right corner.\n",(0,t.jsx)(s.img,{src:n(1615).A+"",width:"3440",height:"1656"})]}),"\n",(0,t.jsx)(s.li,{children:"To upload: On the Upload/Download tab, drag and drop a JSON file onto the tab or click to select a file from your local system, then click Upload."}),"\n",(0,t.jsxs)(s.li,{children:['To download: On the Upload/Download tab, click on the "Download" button to export action.json file.\n',(0,t.jsx)(s.img,{src:n(6356).A+"",width:"3114",height:"1370"})]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Reference: ",(0,t.jsx)(s.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-upload-download-actions",children:"Uploading or downloading all actions"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-custom-extension-neuralseek",children:"Create Custom Extension: NeuralSeek"}),"\n",(0,t.jsx)(s.h3,{id:"pre-requisites-1",children:"Pre-Requisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Access to NeuralSeek instance that has been integrated with Watson Discovery and watsonx.ai"}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"create-neuralseek-custom-extension-",children:["Create NeuralSeek custom extension ",(0,t.jsx)("a",{name:"create-neuralseek-custom-extension"})]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'In Watson Assistant, on the "Integrations" tab of Watson Assistant, click "Build Custom Extension" then "Next".'}),"\n",(0,t.jsx)(s.li,{children:'Name the extension "NeuralSeek" and give a brief description. Click "Next".'}),"\n",(0,t.jsx)(s.li,{children:'Open another browser tab and navigate to NeuralSeek -> "Integrate" tab -> Download "Custom Extension OpenApi File".'}),"\n",(0,t.jsx)(s.li,{children:'Navigate to Watson Assitant browser tab. Upload NeuralSeek OpenApi file into Waston Assiatant. Click "Next" then "Finish".'}),"\n",(0,t.jsx)(s.li,{children:'On the new "NeuralSeek" extension tile that appears, click "Add", "Add", then "Next".'}),"\n",(0,t.jsx)(s.li,{children:'On the authentication screen, select "API key auth", and enter your api key as shown in NeuralSeek "Integrate" page.'}),"\n",(0,t.jsx)(s.li,{children:'Click "Next", "Finish", then "Close".'}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"create-wa-action-to-trigger-neuralseek-search-",children:["Create WA action to trigger NeuralSeek Search ",(0,t.jsx)("a",{name:"create-wa-action-to-trigger-neuralseek-search"})]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'On the "Actions" tab of Watson Assistant, click "Create Action". Choose "Quick Start with templates", then select  "NeuralSeek Starter Kit" -> "Select this starter kit" -> "Add templatess".'}),"\n",(0,t.jsx)(s.li,{children:'Open the "NeuralSeek Search" action.'}),"\n",(0,t.jsxs)(s.li,{children:['In step 3, in the "And then" section, click "edit extension",\n',(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'in the Extension dropdown select "NeuralSeek"'}),"\n",(0,t.jsx)(s.li,{children:'in the Operation dropdown select "Seek an answer from NeuralSeek".'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Set parameters.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Set ",(0,t.jsx)(s.code,{children:"question"})," To ",(0,t.jsx)(s.code,{children:"query_text"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Set ",(0,t.jsx)(s.code,{children:"user_session.system.session_id"})," to Expression ",(0,t.jsx)(s.code,{children:"context.system.session_id"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Set ",(0,t.jsx)(s.code,{children:"options.includeSourceResults"})," to ",(0,t.jsx)(s.code,{children:"True"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:'"Save" and "Close" action'}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Extension setup will look similar to screenshot below\n",(0,t.jsx)(s.img,{src:n(7337).A+"",width:"1646",height:"1252"})]}),"\n",(0,t.jsx)(s.h4,{id:"no-action-matches-setup",children:"No action matches Setup"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'Navigate to "All items" -> "Set by assistant" -> "No action matches".'}),"\n",(0,t.jsx)(s.li,{children:'Click on the "No action matches" action and delete existing steps.'}),"\n",(0,t.jsx)(s.li,{children:'Click "New Step". In the "And then" section, select "go to a subaction"  -> select "NeuralSeek Search" in the dropdown options -> "Apply".'}),"\n",(0,t.jsx)(s.li,{children:'"Save" and "Close"'}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["References: ",(0,t.jsx)(s.a,{href:"https://developer.ibm.com/tutorials/integrate-neuralseek-with-watson-assistant-and-watson-discovery/",children:"Integrate NeuralSeek with Watson Assistant and Watson Discovery"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-custom-extension-servicenow",children:"Create Custom Extension: ServiceNow"}),"\n",(0,t.jsx)(s.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Service Now Developer Instance\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Follow steps ",(0,t.jsx)(s.a,{href:"https://developer.servicenow.com/dev.do#!/learn/learning-plans/tokyo/new_to_servicenow/app_store_learnv2_buildmyfirstapp_tokyo_personal_developer_instances",children:"here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"get-developer-instance-credentials-and-openapi-spec",children:"Get Developer Instance Credentials and OpenAPI spec"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Login into the developer ",(0,t.jsx)(s.a,{href:"https://developer.servicenow.com/dev.do",children:"site"})]}),"\n",(0,t.jsxs)(s.li,{children:['Click on the drop down arrow near your profile in top right corner and select "Manage Instance Password"\n',(0,t.jsx)("img",{src:"https://zenhub.ibm.com/images/64b6ea16cb0d621557d315d9/58004866-1119-4ce4-8b8e-f2b00b25ba1b",alt:"drawing",width:"500"}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:'Make note of the "username" and "password" values (this will be used later)'}),"\n",(0,t.jsx)(s.li,{children:'Exit out of the window and select "Start Building"'}),"\n",(0,t.jsx)(s.li,{children:'Press "All" in the header and search "REST API Explorer"'}),"\n",(0,t.jsx)(s.li,{children:'Press "Export OpenAPI Specification (JSON)"'}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"edit-service-now-openapi-spec",children:"Edit Service Now OpenAPI spec"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Open the downloaded API spec"}),"\n",(0,t.jsxs)(s.li,{children:['Remove the forward slash at the end of the url string within the "servers" block to look like this:\n',(0,t.jsx)("img",{src:"https://zenhub.ibm.com/images/64b6ea16cb0d621557d315d9/32a80241-3fa6-4659-9fb2-9faaf71f4f04",alt:"drawing",width:"300"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Add BasicAuth Component to the OpenAPI spec (make sure each block is comma delimited):\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:'"components":{\n    "securitySchemes": {\n        "basicAuth": {\n            "type": "http",\n            "scheme": "basic"\n        }\n    }\n}\n'})}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Save file"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"build-servicenow-custom-extenstion",children:"Build ServiceNow Custom Extenstion"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:'Within WatsonX Assistant, navigate to the sidebar and select "Integrations"'}),"\n",(0,t.jsx)(s.li,{children:'Select "Build Custom Extension"'}),"\n",(0,t.jsx)(s.li,{children:'For the "Basic Information" page fill out all appropriate fields and click "Next"'}),"\n",(0,t.jsx)(s.li,{children:'Upload the Service Now OpenAPI spec, click "Next" and then "Finish"'}),"\n",(0,t.jsx)(s.li,{children:'Within the extensions in watsonx Assistant click "Add+" on the recently made ServiceNow custom extension'}),"\n",(0,t.jsxs)(s.li,{children:["On the Authentication page fill out the ",(0,t.jsx)(s.strong,{children:"username"})," and ",(0,t.jsx)(s.strong,{children:"password"}),' fields with the values saved from "Get Developer Instance Credentials and OpenAPI spec" step 3']}),"\n",(0,t.jsx)(s.li,{children:'Click "Next" and then "Finish"'}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"modify-ai-assistant",children:"Modify AI Assistant"}),"\n",(0,t.jsx)(s.h3,{id:"conversation-starters",children:"Conversation Starters"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:['Navigate to the "Preview" tab. Click the blue "Customize web chat" button.\n',(0,t.jsx)(s.img,{src:n(883).A+"",width:"3428",height:"1660"})]}),"\n",(0,t.jsxs)(s.li,{children:['Navigate to the "Home screen" tab. Modify the Greeting messages and Conversation Starters to match frequently asked questions.\n',(0,t.jsx)(s.img,{src:n(4282).A+"",width:"3440",height:"1684"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"advanced-watsonx-assistant-configuration",children:"Advanced Watsonx Assistant Configuration"}),"\n",(0,t.jsx)(s.h3,{id:"autocorrection",children:"Autocorrection"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"To tackle typos, we leveraged watsonx assistant capability of Autocorrection."}),"\n",(0,t.jsxs)(s.li,{children:['To enable this feature, navitate to Actions -> All items -> Created by you. Click "Global Settings" on the upper right corner.\n',(0,t.jsx)(s.img,{src:n(6707).A+"",width:"3382",height:"946"})]}),"\n",(0,t.jsxs)(s.li,{children:["Navigate to the Autocorrection tab and make sure the toggle is switched to on.\n",(0,t.jsx)(s.img,{src:n(6089).A+"",width:"3150",height:"1168"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsxs)(s.strong,{children:["In NeuralSeek Search action, set query_text to expression ",(0,t.jsx)(s.code,{children:"input.text"})]}),". This will allow the autocorrected input to be passed to NeuralSeek extension. Originally, query_text was set to expression ",(0,t.jsx)(s.code,{children:"input.original_text"}),", if users entered typos, the typoed text would be passed to NeuralSeek.\n",(0,t.jsx)(s.img,{src:n(2558).A+"",width:"2418",height:"792"})]}),"\n",(0,t.jsxs)(s.li,{children:["Reference: ",(0,t.jsx)(s.a,{href:"https://cloud.ibm.com/docs/assistant-data?topic=assistant-data-dialog-runtime-spell-check",children:"Correcting user input"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4282:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/assistant-customize-homescreen-617a7596db26e6d825d98ff2f6506f53.png"},883:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/assistant-preview-customize-web-chat-df546bfb8bd870a8ce38d75f7f1fc587.png"},9887:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/create-wxa-1-6ffc968099abe9d0cef11a64cd71b6d3.png"},3028:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/create-wxa-2-a7b5bbac73a4cb1fc6f594186831fd50.png"},1615:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/upload-wxa-actions1-2024aa4e6270e45dbf2388c98b3f82fb.png"},6356:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/upload-wxa-actions2-ce01477f81046ee1cf292e53b4207024.png"},6089:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/watsonx-assistant-autocorrection-df23046f1adae9b6d16f9dbc5b5565cd.png"},6707:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/watsonx-assistant-global-settings-fa7fe20cf9e9fba1095fed96de9b9467.png"},7337:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/watsonx-assistant-neuralseek-extension-setup-a429eefd74aaaacf4bbd831312213809.png"},2558:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/watsonx-assistant-neuralseek-search-inputtext-a30f37380cba2331451812a2c4ac6416.png"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var t=n(6540);const i={},a=t.createContext(i);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);