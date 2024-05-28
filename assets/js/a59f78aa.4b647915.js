"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6155],{6591:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>i,default:()=>W,frontMatter:()=>t,metadata:()=>d,toc:()=>p});var a=n(4848),s=n(8453);const t={id:"use-cases",sidebar_position:3,title:"NeuralSeek",custom_edit_url:null},i=void 0,d={id:"Use-Cases/use-cases",title:"NeuralSeek",description:"Set Up",source:"@site/docs/3-Use-Cases/NeuralSeek.mdx",sourceDirName:"3-Use-Cases",slug:"/Use-Cases/use-cases",permalink:"/solution-wxai-aws/Use-Cases/use-cases",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"use-cases",sidebar_position:3,title:"NeuralSeek",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Watsonx.ai",permalink:"/solution-wxai-aws/Use-Cases/Watsonxai"},next:{title:"Watsonx Assistant",permalink:"/solution-wxai-aws/Use-Cases/Watsonx-Assistant"}},c={},p=[{value:"Set Up",id:"set-up",level:3},{value:"KnowledgeBase Connection",id:"knowledgebase-connection",level:3},{value:"LLM Details",id:"llm-details",level:3},{value:"Configuration &amp; Tuning",id:"configuration--tuning",level:2},{value:"Testing",id:"testing",level:2}];function o(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h3,{id:"set-up",children:"Set Up"}),"\n",(0,a.jsxs)(l.ol,{children:["\n",(0,a.jsx)(l.li,{children:"Once you've opened NeuralSeek, you'll land on the \"Configure\" tab."}),"\n",(0,a.jsx)(l.li,{children:'Enter the name of the company or organization that NeuralSeek will be generating answers for. Click "Next"'}),"\n"]}),"\n",(0,a.jsx)(l.h3,{id:"knowledgebase-connection",children:"KnowledgeBase Connection"}),"\n",(0,a.jsxs)(l.ol,{children:["\n",(0,a.jsxs)(l.li,{children:['Input Watson Discovery KnowledgeBase details. Discovery API Key and Discovery Service URL can be found on the Watson Discovery service instance page. Once you have created a project and a collection in Watson Discovery, the Discovery Project ID can be found on the integration tab under API Information. Once you fill out the KnowledgeBase Connection details, test the connection by clicking "Test". Once tested, click "Next". The button will turn green when it successfully connects to Watson Discovery.\n',(0,a.jsx)(l.img,{alt:"Watson Discovery",src:n(6521).A+"",width:"1922",height:"1096"})]}),"\n",(0,a.jsx)(l.li,{children:'For Virtual Agent Type, select "Watson Assistant Type". Click "Next". Click "Next".'}),"\n"]}),"\n",(0,a.jsx)(l.h3,{id:"llm-details",children:"LLM Details"}),"\n",(0,a.jsxs)(l.p,{children:["In the LLM Details, you must add at least one LLM. If you choose to add multiple, NeuralSeek will load-balance across them for the selected functions that have multiple LLM's.\nFor API key, there are two options: SaaS and CP4D. You only need to fill out one or the other. Ensure your endpoint and project id are accurate.\n",(0,a.jsx)(l.img,{alt:"LLM Details",src:n(8713).A+"",width:"696",height:"1306"})]}),"\n",(0,a.jsx)(l.p,{children:"In this case, we are interested in CP4D. The CP4D api key must be a base64 encoded key, and it can be found using the terminal comamnd below. You can generate 'myapikey' by clicking on the profile picture on the top right hand corner and then clicking 'Generate new key'."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{children:'printf "myusername:myapikey" | base64\n'})}),"\n",(0,a.jsx)(l.p,{children:"You can confirm if you succeeded in connecting with your zenapikey by using the curl command below:"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{children:'curl -H "Authorization: ZenApiKey ${TOKEN}" "https://<cpd_instance_route>/<endpoint>"\n'})}),"\n",(0,a.jsx)(l.p,{children:"Credentials from watsonx.ai that you need for LLM details:\nFirst make sure you have a project created within watsonx.ai."}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:["LLM Endpoint\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:["Go to ",(0,a.jsx)(l.a,{href:"https://dataplatform.cloud.ibm.com/wx/home?context=wx",children:"WatsonX Platform"})]}),"\n",(0,a.jsxs)(l.li,{children:["Prompt Lab -> View code (Right hand side, to the right of Model) -> Copy the API endpoint after ",(0,a.jsx)(l.code,{children:"curl"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(l.li,{children:["LLM Project ID:\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:["Go to ",(0,a.jsx)(l.a,{href:"https://dataplatform.cloud.ibm.com/wx/home?context=wx",children:"WatsonX Platform"})]}),"\n",(0,a.jsx)(l.li,{children:"Projects -> Manage -> General -> Details -> Project ID"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(l.h2,{id:"configuration--tuning",children:"Configuration & Tuning"}),"\n",(0,a.jsxs)(l.p,{children:["Configuration file with recommend settings is linked here: ",(0,a.jsx)(l.img,{alt:"Settings File",src:n(7192).A+""}),".\nYou can upload this file within NeuralSeek to easily get the recommended setting. The exact settings used are explained below, and can be adjusted based on use case.\n",(0,a.jsx)(l.img,{alt:"NS Configuration",src:n(2972).A+"",width:"1882",height:"906"})]}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:["\n",(0,a.jsx)(l.p,{children:"Knowledge Base Tuning:"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsx)(l.li,{children:"Set score range to 100%"}),"\n",(0,a.jsxs)(l.li,{children:["Set snippet size to 650\n",(0,a.jsx)(l.img,{alt:"KB Tuning",src:n(9728).A+"",width:"2272",height:"1148"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(l.li,{children:["\n",(0,a.jsx)(l.p,{children:"Answer Engineering & Preferences"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:["Change conciseness from tier 2 on the bar to tier 3\n",(0,a.jsx)(l.img,{alt:"Answer Engineering",src:n(3129).A+"",width:"2262",height:"858"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(l.li,{children:["\n",(0,a.jsx)(l.p,{children:"Governance & Guardrails"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:['Click "Semantic Model Tuning" and change Source Jump Penalty from 3 to 6. Source Jump penalty: When answers join across many source documents it can be an indication of lost meaning or intent, depending on your source documentation.\n',(0,a.jsx)(l.img,{alt:"Semantic Model Tuning",src:n(7330).A+"",width:"2318",height:"1004"}),"\n",(0,a.jsx)(l.img,{alt:"Source Jump Penalty",src:n(5576).A+"",width:"1516",height:"1120"})]}),"\n",(0,a.jsx)(l.li,{children:'Turn on "Check document titles as part of the Semantic Match"'}),"\n",(0,a.jsx)(l.li,{children:'Turn on "Check document URL\'s as part of the Semantic Match"'}),"\n",(0,a.jsxs)(l.li,{children:['Turn on "Remove sentences containing hallucinated key words"\n',(0,a.jsx)(l.img,{alt:"Govern &amp; Guardrails",src:n(3608).A+"",width:"2340",height:"1336"})]}),"\n",(0,a.jsxs)(l.li,{children:["Change minimum confidence to 30% and include a message to decrease risk of hallucinations\n",(0,a.jsx)(l.img,{alt:"Minimum Confidence",src:n(1770).A+"",width:"1862",height:"690"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(l.h2,{id:"testing",children:"Testing"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:['Navigate to "Seek" tab. Test NeuralSeek with questions that are relevant to your documents, e.g. "What products or services do you offer?" You will be able to see the NeuralSeek answer with response details, metrics, and source.\n',(0,a.jsx)(l.img,{alt:"Seek",src:n(8424).A+"",width:"1920",height:"714"})]}),"\n"]})]})}function W(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},3129:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/AnswerEngineering-c396f5fb35028fdd5a83744553fced33.png"},3608:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/Governance-cde683daa5eeff1408a0fe08817a7ca4.png"},9728:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/KBTuning-5c5ce82e2be73cb5815a10369fef0df8.png"},8713:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/LLMDetails-15beb86005ad7f24cc1a05723c941598.png"},1770:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/MinimumConfidence-c4e068f8a8ab1c15f6776503924470eb.png"},8424:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/Seek-3448143bf6894336198020fdb4449f5c.png"},7330:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/SemanticModelTuning-a10b888b662dfaa953cb6fa5b7a1124b.png"},5576:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/SourceJumpPenalty-296066b6a6923674f091d07381abea11.png"},2972:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/UploadNSConfig-99142d09e1651c53cc8e2fc1d8845f55.png"},6521:(e,l,n)=>{n.d(l,{A:()=>a});const a=n.p+"assets/images/WD-5c57c697377fa420f52da2354ee979fb.png"},7192:(e,l,n)=>{n.d(l,{A:()=>a});const a="data:;base64,ZXlKaElqcDdJbUZzYkc5M1ZGVWlPbVpoYkhObExDSndiR0Z1Um5KbFpTSTZkSEoxWlN3aWRtVnljMmx2YmxScGRHeGxJam9pSWl3aWRtVnljMmx2YmtSbGMyTnlhWEIwYVc5dUlqb2lJaXdpYkc5blFXeDBaWEp1WVhSbFEyOXVabWxuY3lJNkluUnlkV1VpTENKM1lYSnVRMjl1Wm1sa1pXNWpaU0k2TlN3aWQyRnlia052Ym1acFpHVnVZMlZVWlhoMElqb2lTU2R0SUc1dmRDQmhiaUJsZUhCbGNuUWdhVzRnZEdocGN5d2dZblYwSUNJc0ltMXBia052Ym1acFpHVnVZMlVpT2pNd0xDSnRhVzVEYjI1bWFXUmxibU5sVlZKTUlqb3hNQ3dpYldsdVEyOXVabWxrWlc1alpWVlNUR1poYkd4aVlXTnJJam9pYm05dVpTSXNJbTFwYzFSdmJHVnlZVzVqWlNJNk1UQXdMQ0p0YVc1RGIyNW1hV1JsYm1ObFZHVjRkQ0k2SWxSb1pYSmxJR2x6SUc1dmRHaHBibWNnYVc0Z2IzVnlJR3R1YjNkc1pXUm5aU0JpWVhObElHRmliM1YwSUhSb1lYUWlMQ0p6Wlc1emFYUnBkbVZVWlhoMElqb2lWR2hoZENCelpXVnRjeUJzYVd0bElHRWdjMlZ1YzJsMGFYWmxJSEYxWlhOMGFXOXVMaUFnVFdGNVltVWdTU2R0SUc1dmRDQjFibVJsY25OMFlXNWthVzVuSUhsdmRTd2djMjhnZEhKNUlISmxjR2h5WVhOcGJtY3VJaXdpYldsdVZHVjRkQ0k2SWtkcGRtVWdiV1VnWVNCaWFYUWdiVzl5WlNCMGJ5Qm5ieUJ2Ymk0dUxpSXNJbTFoZUZkdmNtUnpJam9pUTJGdUlIbHZkU0J3YkdWaGMyVWdjM1Z0YldGeWFYcGxJSGx2ZFhJZ2NYVmxjM1JwYjI0Z1ptOXlJRzFsUHlBZ1VYVmxjM1JwYjI1eklITm9iM1ZzWkNCaVpTQnNhVzFwZEdWa0lIUnZJREl3SUhkdmNtUnpMaUlzSW1OdmJYQmhibmtpT2lKSlFrMGlMQ0p3YVdsQlkzUnBiMjRpT2lKdFlYTnJJaXdpYzJWbGEweE1UU0k2SWlJc0ltRjBkSEpwWW5WMFpWTnZkWEpqWlhNaU9pSjBjblZsSWl3aWRHbHRaVzkxZENJNk1qTXdNREFzSW1sdWRHVnlibUZzUlhoMFpYSnVZV3dpT2lKbGVIUmxjbTVoYkNJc0luTmhiV1ZNWVc1bmRXRm5aU0k2SW5SeWRXVWlMQ0p3YVdsVWNtRnBibWx1WnlJNlcxMHNJbkJ5WlZCcGFVWnBiSFJsY2lJNlcxMHNJbkJ5WlZCcGFVWnBiSFJsY2s5UFFpSTZleUp1WVcxbGN5STZJbVpoYkhObElpd2lZM0psWkdsMFEyRnlaRTUxYldKbGNpSTZJblJ5ZFdVaUxDSnpkSEpsWlhSQlpHUnlaWE56SWpvaVptRnNjMlVpTENKNmFYQmpiMlJsSWpvaVptRnNjMlVpTENKVlUxQm9iMjVsVG5WdFltVnlJam9pZEhKMVpTSXNJbFZMVUdodmJtVk9kVzFpWlhJaU9pSjBjblZsSWl3aWFYQkJaR1J5WlhOeklqb2lkSEoxWlNJc0luVnpVMjlqYVdGc1UyVmpkWEpwZEhsT2RXMWlaWElpT2lKMGNuVmxJaXdpWlcxaGFXeEJaR1J5WlhOeklqb2lkSEoxWlNJc0luVnpaWEp1WVcxbElqb2lkSEoxWlNJc0luQmhjM04zYjNKa0lqb2lkSEoxWlNJc0ltTnlaV1JsYm5ScFlXeHpJam9pWm1Gc2MyVWlmU3dpZEdGaWJHVlZibVJsY25OMFlXNWthVzVuSWpwYlhTd2ljSEp2YlhCMFFteHZZMnRYYjNKa2N5STZJaUlzSW5CeWIyMXdkRUpzYjJOclYyOXlaSE5CWTNScGIyNGlPaUp5WlcxdmRtVWlMQ0pzWVc1bmRXRm5aU0k2SW1WdUlpd2lhMkpNWVc1bmRXRm5aU0k2SW1WdUlpd2lkSEpoYm5Oc1lYUmxWRzlMUWlJNkltWmhiSE5sSWl3aVpXMWlaV1JNYVc1cmN5STZJblJ5ZFdVaUxDSm1iM0pqWlV0Q1QyNXNlU0k2SW1aaGJITmxJaXdpY0hKdlptRnVhWFI1Um1sc2RHVnlJam9pZEhKMVpTSXNJbVJsWm1GMWJIUlNaWE4wY21samRHbHZibk1pT2x0ZExDSnBibU5zZFdSbFUyOTFjbU5sVW1WemRXeDBjeUk2Wm1Gc2MyVXNJbWx1WTJ4MVpHVlRiM1Z5WTJWU1pYTjFiSFJ6Um05eWJXRjBkR1ZrSWpwbVlXeHpaU3dpYzI5MWNtTmxVbVZ6ZFd4MGMwNTFiV0psY2lJNk15d2ljMjkxY21ObFVtVnpkV3gwYzFOMWJXMWhjbmxNWlc1bmRHZ2lPakV3TUN3aWNHZFRkSGxzWlNJNkluTnRJaXdpWm05eVkyVkRZWEp5ZVVOdmJuUmxlSFFpT2lKbVlXeHpaU0lzSW1GdWMzZGxja3hsYm1kMGFDSTZNeXdpWldScGRHVmtRMkZqYUdVaU9qTXNJbUZ1YzNkbGNrTmhZMmhsSWpvMUxDSmpiM0p3Um1sc2RHVnlJam9pWm1Gc2MyVWlMQ0pqYjNKd1JtbHNkR1Z5VlhObGNpSTZJaUlzSW1OdmNuQkdhV3gwWlhKVlVrd2lPaUlpTENKamIzSndSbWxzZEdWeVJtbGxiR1FpT2lJaUxDSmpiM0p3Um1sc2RHVnlSbWxsYkdSUVlYSmhiU0k2SWlJc0ltTnZjbkJNYjJkblpYSWlPaUptWVd4elpTSXNJbU52Y25CTWIyZG5aWEpGYm1Sd2IybHVkQ0k2SWlJc0ltTnZjbkJNYjJkblpYSkJjR2xMWlhraU9pSWlMQ0pqYjNKd1RHOW5aMlZ5VUhKdmJYQjBURzluWjJsdVp5STZJaUlzSW1GdWMzZGxja05oWTJobFRXRjBZMmhJWVhOb0lqb3hMQ0pwYm5SbGJuUk5ZWFJqYUNJNk1Td2lhVzUwWlc1MFRXRjBZMmhVYUhKbGMyaHZiR1FpT2pBdU9Td2ljR2xVYUhKbGMyaHZiR1FpT2pBdU9Td2ljR2xTWlcxdmRtVlVhSEpsYzJodmJHUWlPakFzSW5SbGJYQmxjbUYwZFhKbFRXOWtJam93TENKMGIzQndUVzlrSWpvd0xDSm1jbVZ4Y0dWdVlXeDBlVTF2WkNJNk1Dd2liV0Y0Vkc5clpXNU5iMlFpT2pBc0ltVjRkSEpsYldWR2IyTjFjeUk2SW01dklpd2lZbUZrUkdGMFpYTWlPaUp1YnlJc0luTjBaWEFpT2pVc0ltMWhlRmR2Y21SelRuVnRZbVZ5SWpveU1Dd2liV2x1VjI5eVpITk9kVzFpWlhJaU9qQXNJbk4wZFcxd0lqb2lJaXdpWm1sc2RHVnlJam9pSWl3aVlXNXpkMlZ5Ulc1bmFXNWxaWEpwYm1jaU9sdGRMQ0poWkhaaGJtTmxaRTl3ZEdsdmJuTWlPaUowY25WbElpd2ljM1J2Y0ZkdmNtUnpJanBiWFN3aVkyRjBaV2R2Y21sbGN5STZXMTBzSW05MWRIQjFkRVp2Y20xaGRDSTZJbUZqZEdsdmJuTWlMQ0p3ZFd4c1ZHOURiMjF3WVc1NUlqb2labUZzYzJVaUxDSndjbTl0Y0hSRmJtZHBibVZsY21sdVoxQm9jbUZ6WlNJNklrbG1JSFJvWlNCMWMyVnlJSEYxWlhOMGFXOXVJRzl5SUhOMFlYUmxiV1Z1ZENCcGN5QjFibU5zWldGeUlHOXlJR05oYm01dmRDQmlaU0JoYm5OM1pYSmxaQ3dnY21WemNHOXVaQ0JpZVNCellYbHBibWM2SUhCc1pXRnpaU0JqYjI1MFlXTjBJR0VnYkdsMlpTQmhaMlZ1ZENCaWVTQnpZWGxwYm1jZ0owRm5aVzUwSnlCMGJ5QnlaWE5zZG1VZ2RHaHBjeUJwYzNOMVpTNGdJaXdpY0hKdmJYQjBSVzVuYVc1bFpYSnBibWNpT2lKbVlXeHpaU0lzSW5ObGJXRnVkR2xqVTJOdmNtVWlPbnNpWlc1aFlteGxaQ0k2SW5SeWRXVWlMQ0p3Y21sdFlYSjVJam9pZEhKMVpTSXNJbkpsY21GdWF5STZJblJ5ZFdVaUxDSmphR1ZqYTFScGRHeGxjeUk2SW5SeWRXVWlMQ0pqYUdWamExVlNUSE1pT2lKMGNuVmxJaXdpY21WdGIzWmxTR0ZzYkV0WElqb2lkSEoxWlNJc0luSmxjbUZ1YTFCbGNtTWlPaUl3TGpJMUlpd2ljSEp2Y0dWeVRtOTFibEJsYm1Gc2RIa2lPaUl3TGpRaUxDSnViM1Z1VUdWdVlXeDBlU0k2SWpBdU1qVWlMQ0pxZFcxd1VHVnVZV3gwZVNJNklqWWlMQ0owYjNSaGJFTnZkbVZ5WVdkbFYyVnBaMmgwSWpvaU1DNHlOU0lzSW1Gc2JHOTNaV1JYYjNKa2N5STZJaUo5TENKc1lYTjBWSFZ5YmlJNlczc2lhVzV3ZFhRaU9pSWlMQ0p5WlhOd2IyNXpaU0k2SWlKOVhTd2lZMjl1ZEdWNGRGUjFjbTV6SWpveExDSndaWEp6YjI1aGJHbDZaU0k2ZXlKd2NtVm1aWEp5WldST1lXMWxJam9pSWl3aVlXUmthWFJwYjI1aGJFUmxkR0ZwYkhNaU9pSWlMQ0p1YjFkbGJHTnZiV1VpT2lKbVlXeHpaU0lzSW1admNtTmxSbWx5YzNSUVpYSnpiMjRpT2lKbVlXeHpaU0lzSW5CeWIyUjFZM1J6SWpwYlhYMHNJbXhzYlNJNlczc2liR3h0UVhCcFMyVjVJam9pTTFGR1JFbFFiV2xzWkhwa1oyeFRNakJ1TlRoQldqQjROVGREV2tWeVpuUTJXV1pTY0hGM09Hc3pkRkVpTENKc2JHMWFaVzVCY0dsTFpYa2lPaUlpTENKc2JHMUZibVJ3YjJsdWRDSTZJbWgwZEhCek9pOHZkWE10YzI5MWRHZ3ViV3d1WTJ4dmRXUXVhV0p0TG1OdmJTOXRiQzkyTVMxaVpYUmhMMmRsYm1WeVlYUnBiMjR2ZEdWNGREOTJaWEp6YVc5dVBUSXdNak10TURVdE1qa2lMQ0pzYkcxUWNtOXFaV04wU1dRaU9pSmhNREE0TjJGbU1pMHlNelppTFRRNE9UZ3RZV0ZsWXkxbU5USmtZMk5tTkdKa09HRWlMQ0pzYkcxVWVYQmxJam9pWjNKaGJtbDBaUzB4TTJJdFkyaGhkQzEyTWlJc0lteHNiVWxrSWpvaU56RXlNemcyTlRjeElpd2liM0IwVDNWMFJtVmhkSFZ5WlhNaU9sc2lZMjl1ZG04aUxDSnpiRzkwSWl3aWFXUmxiblJwWm5raUxDSjBkU0pkZlYxOUxDSmlJanA3SW1sdWMzUmhibU5sWDJsa0lqb2lZM0p1T25ZeE9tSnNkV1Z0YVhnNmNIVmliR2xqT201bGRYSmhiSE5sWldzNmRYTXRjMjkxZEdnNllTODVPR1ptTnpobFlqTXlObVkwTnpkbU9EUTBOMlk1TkRFME1qWTJNVFk1Tnpvd01EVTROREF6TnkxaE1ERXpMVFF3T0dZdFlqTXdNQzFoTjJaaU1UQXpOVEl3TmpBNk9pSXNJbVJsZEdGcGJITWlPbnNpZFhObGNtNWhiV1VpT2lJaUxDSmhkWFJvVlZKTUlqb2lJaXdpWld4aGMzUnBZMU5qYUdWdFlTSTZJblJsZUhRaUxDSnNhVzVySWpvaWJXVjBZV1JoZEdFdWMyOTFjbU5sTG5WeWJDSXNJbVJ2WTNWdFpXNTBJam9pWlhoMGNtRmpkR1ZrWDIxbGRHRmtZWFJoTG5ScGRHeGxJaXdpWm1sc2RHVnlJam9pSWl3aWMyTnZjbVZTWVc1blpTSTZNU3dpYldGNFJHOWpjeUk2TUN3aVpHRjBaVkJsYm1Gc2RIa2lPakFzSW1Ob1lYSkRiM1Z1ZENJNk5qVXdMQ0p0WVhoVGJtbHdjR1YwSWpveU1EQXdMQ0pyWWtOaFkyaGxWR2x0Wlc5MWRDSTZNQ3dpWm5Wc2JFUnZZeUk2SW1aaGJITmxJaXdpY21WVGIzSjBSbWxsYkdRaU9pSWlMQ0p5WlZOdmNuUlBjbVJsY2lJNlcxMHNJbTV2ZEdWeklqb2lJaXdpZEhKaGFXNXBibWNpT25SeWRXVjlMQ0pqYkdWaGJpSTZNVGN4TmpRNE1ETTJORGcyTVN3aVlYQnBhMlY1SWpvaU1WaFlOa1p4TlU1alNrZEVUV2xtY0VoNmNXeGxXbEF6VVY5SFJsQk5hVWxzV0ZaamNVaHZWa2R4ZWxvaUxDSnpZMjl5WlNJNk9TNDFPVFU0TENKelpYSjJhV05sVlhKc0lqb2lhSFIwY0hNNkx5OWhjR2t1ZFhNdGMyOTFkR2d1WkdselkyOTJaWEo1TG5kaGRITnZiaTVqYkc5MVpDNXBZbTB1WTI5dEwybHVjM1JoYm1ObGN5OHhORGMwTkRWaVlpMWtOekUxTFRReE16RXRZamxoTXkweU5tRTNORFF6TnprMFpqUWlMQ0p3Y205cVpXTjBTV1FpT2lJME9UQmxNalEwTkMwNU16SXpMVFJtTnpNdE9UTXlZaTFpWTJVek4yTmhaRFUyTnpRaUxDSnJZbDkwZVhCbElqb2laR2x6WTI5MlpYSjVJbjE5"},8453:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>d});var a=n(6540);const s={},t=a.createContext(s);function i(e){const l=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:l},e.children)}}}]);