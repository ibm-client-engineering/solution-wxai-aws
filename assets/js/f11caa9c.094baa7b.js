"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7238],{5193:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"flight-log-8","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-8","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-03-25-cocreate.md","title":"Log - Sprint 8 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-03-25T00:00:00.000Z","formattedDate":"March 25, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":2.37,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 8 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-8","tags":["log","sprint"]},"unlisted":false,"nextItem":{"title":"Log - Sprint 7 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-7"}},"content":"## Objective\\nDeploy watsonx.ai on self-managed AWS infrastructure forr customer software evaluation\\n\\n```mermaid\\nflowchart LR\\n    A[Deploy bootnode]\\n    subgraph \\"You are here\\"\\n    B(Deploy OCP)\\n    end\\n    A--\x3eB\\n    B --\x3e C(Install CP4D)\\n    C --\x3eD[Deploy watsonx.ai]\\n```\\n\\n## Milestones\\n1. Deploy and configuration of boot node to establish a beach-head into the Fidelity AWS environment\\n    - Complete\\n2. Deploy OCP using the documented UPI installation steps\\n    - In progress\\n3. Install CloudPak for Data\\n4. Deploy and configure watsonx.ai on self-managed AWS infrastructure\\n\\n## Accomplishments\\n### AWS Deployment\\n- Configuration of the boot node\\n    - Installation of prerequisite software onto the boot node\\n    - Created and started local registry\\n    - Generated CA certrificate for PKI architecture\\n- Completion of step 1 of 2 of the deployment script\\n\\n## Lessons Learned\\n- Storage insufficient on the bootnode for downloaded images, 400gb minimum required\\n    - Mitigation: We increased the boot disk size to 500 gig via the AWS console for the EC2 instance. We then grew the disk and grew the filesystem\\n    - This needs to be added as a prereq\\n- There was a constraint in the `sg-lb-template.yaml` requiring subnets sized from /16  o /24. We removed that constraint\\n- Edited `bootstrap-template.yaml` line 91 to remove the wrong key name. (artifact from testing)\\n- Software Evaluation process - define and build internal documentation - TBD\\n- Documentation updates\\n    - Parameter definitions - making them more descriptive\\n- Validation checks\\n    - Creating a vaalidation process before runniing any scripts/installs checking for prerequisites\\n\\n## Decisions and Action Items (DAI)\\n- AWS CLI had a previous installation. Had to manually remove that installation and re-run the aws cli install command.\\n- We decided to run the installation as root user. Root user needed to have the `/usr/local/bin` added to the PATH. Did this manually on the fly with an `export` command.\\n- \\n\\n- \\nCustomer security to approve selected AMI for coreOS\\n  - The AMI for CoreOS is a public AMI. The customer security team needs to copy it into the dev account as public AMI\'s are blocked in this environment\\n\\n## Next Steps\\n- License and configure Cloud Pak for Data\\n    - Cloud Pak Considerations\\n        - Security scans needed on container images \\n        - Customer has no OpenShift experience \\n        - Customer requires on-prem, offline install\\n        - Customer uses their own container registry that might introduce extra effort or compatability issues \\n        - Version compatibility with OpenShift (e.g. 4.10 required and customer has 4.11) \\n        - Supported storage not available \\n        - Multiple cloudpaks on the same cluster \\n        - custom connections to data sources not supported OOTB \\n        - AWS-specific: IAM users required for install/deploy and are not allowed \\n        - OpenShift specific: CoreOS requirement for control nodes \\n        - Automatic updating of Cloud Pak, this can interrupt engagements (solution is to always remove update polling from operators)\\n- Deploy watsonx.ai- Add `/usr/local/ in bin` to .bash`.bashrcd` fo r root."},{"id":"flight-log-7","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-7","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-03-22-cocreate.md","title":"Log - Sprint 7 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-03-22T00:00:00.000Z","formattedDate":"March 22, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":1.855,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 7 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-7","tags":["log","sprint"]},"unlisted":false,"prevItem":{"title":"Log - Sprint 8 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-8"},"nextItem":{"title":"Log - Sprint 7 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-7"}},"content":"## Objectives\\n\\n- Deploy watsonx.ai on self-managed AWS infrastructure.\\n\\n## Accomplishments\\n**AWS**\\n- Fixes to cluster-sts.yaml and other deployment resources.\\n    - Fixed error in cluster-sts.yml by commenting out lines 590-599.\\n    - Changed ``IamInstanceProfile: !Ref BootnodeInstanceProfile`` to ``IamInstanceProfile: <InstanceProfileName>``\\n    - Changed ``SubnetId: !Ref PublicSubnet1ID``  to ``SubnetId: <PrivateSubnetID>`` to account for private deployments\\n    - Updated LambdaExecutionRole.json line 14: from ``ec2.aws.com`` to ``lambda.aws.com`` and added ``cloudformation.aws.com`` of allowed services.\\n    - Fixed LambdaExecutionRole ARN to proper role name.\\n    - Commented out ```/bin/bash ./cp-deploy.sh env apply -e env_id=${ClusterName} [--accept-all-licenses]```\\n    - Added VPC and Subnet IDs to the \u201cCleanupLambda\u201d  lambda function in cluster-sts, which then required adding \u201cec2:CreateNetworkInterface\u201d permission to LambdaExecutionRole\\n    - Adding tags to CleanupLambda with Application IDs.\\n- Successful deployment of BootNode instance.\\n\\n\\n\\n**RAG**\\n- Creation of cronjob to capture logs from Python app.\\n- Enabled metadata insertion into chunks in vector store -> (hopefully) increases retrieval accuracy\\n- Return context to user (shows sources used to generate responses)\\n- Added mixtral model support\\n- Enable functionality for user to give custom rag parameters\\n- Migrated vector DB from FAISS to chromaDB to enable the metadata functionality\\n- Script written to easily test rag implementation and save results in csv\\n- Implemented cache logic to make sure it considers combination of parameters as well before chosing to send a cached response\\n- Added better logic for caching to improve performance \\n- Remove unwanted parameters from request body\\n\\n\\n## In Progress\\n- End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)\\n- Tagging cp-deployer.sh generated resources.\\n- Updating solution docs with better asset linking.\\n- Exploring WatsonX Discovery \\n\\n\\n\\n## Next Steps\\n- Continue over the shoulder working sessions\\n    - Kick off CloudFormation template install with updated STS templates.\\n- Compilation of required endpoints\\n- Deploy latest RAG version on AWS\\n- Build out actions & flow in Watsonx Assistant after properly defining personas & objectives.\\n- Kick off Cloud Pak for Deployment entitlement key.\\n- Build RAG application using WatsonX Discovery.\\n- Compare WatsonX Discovery RAG with existing RAG results.\\n\\n\\n## Tracking (Issues)\\n- Require sign-off on final CloudFormation template.\\n- Red Hat CoreOS AMI pending approval.\\n- LambdaCleanup error from not being able to assume role.\\n- Double checking role names in Cloudformation template."},{"id":"flight-log-7","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-7","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-03-20-cocreate.md","title":"Log - Sprint 7 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-03-20T00:00:00.000Z","formattedDate":"March 20, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":1.285,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 7 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-7","tags":["log","sprint"]},"unlisted":false,"prevItem":{"title":"Log - Sprint 7 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-7"},"nextItem":{"title":"Log - Sprint 6 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-6"}},"content":"## Objectives\\n\\n- Deploy watsonx.ai on self-managed AWS infrastructure.\\n\\n## Accomplishments\\n**AWS**\\n- Shift from CP Deployer to OpenShift UPI deployment.\\n- Artifactory proxy details procured.\\n- Discussion of on-site logistics\\n- RHEL 8 AMI changed for BootNode.\\n\\n\\n**RAG**\\n- Creation of cronjob to capture logs from Python app.\\n- Enabled metadata insertion into chunks in vector store -> (hopefully) increases retrieval accuracy\\n- Return context to user (shows sources used to generate responses)\\n- Added mixtral model support\\n- Enable functionality for user to give custom rag parameters\\n- Migrated vector DB from FAISS to chromaDB to enable the metadata functionality\\n- Script written to easily test rag implementation and save results in csv\\n- Implemented cache logic to make sure it considers combination of parameters as well before chosing to send a cached response\\n\\n\\n\\n## In Progress\\n- End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)\\n- Tagging cp-deployer.sh generated resources.\\n- Updating solution docs with better asset linking.\\n\\n\\n\\n## Next Steps\\n- Setup bootnode with necessary downloads and resources.\\n- Creation of IAM Role request creation Cloudformation templates.\\n- Kick off on-site over the shoulder working sessions.\\n- Collating information and resources to be created via OpenShift UPI deployment.\\n- Setup Artifactory proxy.\\n- Kick off Cloud Pak for Deployment entitlement key.\\n- Deploy latest RAG version on AWS\\n- Build out actions & flow in Watsonx Assistant after properly defining personas & objectives.\\n\\n\\n## Tracking (Issues)\\n- Require sign-off on final CloudFormation template.\\n- Red Hat CoreOS AMI still pending approval."},{"id":"flight-log-6","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-6","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-03-18-cocreate.md","title":"Log - Sprint 6 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-03-18T00:00:00.000Z","formattedDate":"March 18, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":1.675,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 6 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-6","tags":["log","sprint"]},"unlisted":false,"prevItem":{"title":"Log - Sprint 7 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-7"},"nextItem":{"title":"Log - Sprint 5 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-5"}},"content":"## Objectives\\n\\n- Deploy watsonx.ai on self-managed AWS infrastructure.\\n\\n## Accomplishments\\n**AWS**\\n- Fixes to cluster-sts.yaml and other deployment resources.\\n    - Fixed error in cluster-sts.yml by commenting out lines 590-599.\\n    - Changed ``IamInstanceProfile: !Ref BootnodeInstanceProfile`` to ``IamInstanceProfile: <InstanceProfileName>``\\n    - Changed ``SubnetId: !Ref PublicSubnet1ID``  to ``SubnetId: <PrivateSubnetID>`` to account for private deployments\\n    - Updated LambdaExecutionRole.json line 14: from ``ec2.aws.com`` to ``lambda.aws.com`` and added ``cloudformation.aws.com`` of allowed services.\\n    - Fixed LambdaExecutionRole ARN to proper role name.\\n    - Commented out ```/bin/bash ./cp-deploy.sh env apply -e env_id=${ClusterName} [--accept-all-licenses]```\\n    - Added VPC and Subnet IDs to the \u201cCleanupLambda\u201d  lambda function in cluster-sts, which then required adding \u201cec2:CreateNetworkInterface\u201d permission to LambdaExecutionRole\\n    - Adding tags to CleanupLambda with Application IDs.\\n- Successful deployment of BootNode instance.\\n\\n\\n\\n**RAG**\\n- Creation of cronjob to capture logs from Python app.\\n- Enabled metadata insertion into chunks in vector store -> (hopefully) increases retrieval accuracy\\n- Return context to user (shows sources used to generate responses)\\n- Added mixtral model support\\n- Enable functionality for user to give custom rag parameters\\n- Migrated vector DB from FAISS to chromaDB to enable the metadata functionality\\n- Script written to easily test rag implementation and save results in csv\\n- Implemented cache logic to make sure it considers combination of parameters as well before chosing to send a cached response\\n\\n\\n\\n## In Progress\\n- End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)\\n- Tagging cp-deployer.sh generated resources.\\n- Updating solution docs with better asset linking.\\n\\n\\n\\n## Next Steps\\n- Continue over the shoulder working sessions\\n    - Kick off CloudFormation template install with updated STS templates.\\n- Compilation of required endpoints\\n- Deploy latest RAG version on AWS\\n- Build out actions & flow in Watsonx Assistant after properly defining personas & objectives.\\n- Kick off Cloud Pak for Deployment entitlement key.\\n\\n\\n## Tracking (Issues)\\n- Require sign-off on final CloudFormation template.\\n- Red Hat CoreOS AMI pending approval.\\n- LambdaCleanup error from not being able to assume role.\\n- Double checking role names in Cloudformation template."},{"id":"flight-log-5","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-5","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-03-15-cocreate.md","title":"Log - Sprint 5 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-03-15T00:00:00.000Z","formattedDate":"March 15, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":1.16,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 5 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-5","tags":["log","sprint"]},"unlisted":false,"prevItem":{"title":"Log - Sprint 6 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-6"},"nextItem":{"title":"Log - Sprint 4 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-4"}},"content":"## Objectives\\n\\n- Deploy watsonx.ai on self-managed AWS infrastructure.\\n\\n## Accomplishments\\n**AWS**\\n- Populated parameter overrides JSON.\\n- Created RH Trial account and uploaded pull secret to S3 bucket.\\n- Updated CloudFormation STS template with permissions to create and assume Role with respective JSON versions.\\n\\n\\n\\n**RAG**\\n- Creation of cronjob to capture logs from Python app.\\n- Enabled metadata insertion into chunks in vector store -> (hopefully) increases retrieval accuracy\\n- Return context to user (shows sources used to generate responses)\\n- Added mixtral model support\\n- Enable functionality for user to give custom rag parameters\\n- Migrated vector DB from FAISS to chromaDB to enable the metadata functionality\\n- Script written to easily test rag implementation and save results in csv\\n- Implemented cache logic to make sure it considers combination of parameters as well before chosing to send a cached response\\n\\n\\n\\n## In Progress\\n- End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)\\n- Tagging cp-deployer.sh generated resources.\\n- Updating solution docs with better asset linking.\\n\\n\\n\\n## Next Steps\\n- Continue over the shoulder working sessions\\n    - Kick off CloudFormation template install with updated STS templates.\\n- Compilation of required endpoints\\n- Deploy latest RAG version on AWS\\n- Build out actions & flow in Watsonx Assistant after properly defining personas & objectives.\\n\\n\\n## Tracking (Issues)\\n- Require sign-off on final CloudFormation template.\\n- CoreOS AMI pending approval."},{"id":"flight-log-4","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-4","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-03-13-cocreate.md","title":"Log - Sprint 4 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-03-13T00:00:00.000Z","formattedDate":"March 13, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":1.195,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 4 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-4","tags":["log","sprint"]},"unlisted":false,"prevItem":{"title":"Log - Sprint 5 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-5"},"nextItem":{"title":"Log - Sprint 3 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-3"}},"content":"## Objectives\\n\\n- Deploy watsonx.ai on self-managed AWS infrastructure.\\n\\n## Accomplishments\\n**AWS**\\n- Reviewed list of missing values able to be added to role via Policy\\n- Sent parameter overrides list to be populated for CloudFormation template installation.\\n- Creation of three separate CloudFormation template Roles.\\n- Updated CloudFormation templates to use STS.\\n\\n\\n**RAG**\\n- Creation of cronjob to capture logs from Python app.\\n- Enabled metadata insertion into chunks in vector store -> (hopefully) increases retrieval accuracy\\n- Return context to user (shows sources used to generate responses)\\n- Added mixtral model support\\n- Enable functionality for user to give custom rag parameters\\n- Migrated vector DB from FAISS to chromaDB to enable the metadata functionality\\n- Script written to easily test rag implementation and save results in csv\\n- Implemented cache logic to make sure it considers combination of parameters as well before chosing to send a cached response\\n\\n\\n\\n## In Progress\\n- End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)\\n- Tagging cp-deployer.sh generated resources.\\n\\n\\n\\n## Next Steps\\n- Continue over the shoulder working sessions\\n    - Kick off CloudFormation template install\\n- Compilation of required endpoints\\n- Fill out required network values required for OCP deployment. \\n- Deploy latest RAG version on AWS\\n- Build out actions & flow in Watsonx Assistant after properly defining personas & objectives.\\n\\n\\n## Tracking (Issues)\\n- Require sign-off on final CloudFormation template.\\n- Getting access to CoreOS AMI."},{"id":"flight-log-3","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-3","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-03-11-cocreate.md","title":"Log - Sprint 3 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-03-11T00:00:00.000Z","formattedDate":"March 11, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":0.915,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 3 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-3","tags":["log","sprint"]},"unlisted":false,"prevItem":{"title":"Log - Sprint 4 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-4"},"nextItem":{"title":"Log - Sprint 2 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-2"}},"content":"## Objectives\\n\\n- Deploy watsonx.ai on self-managed AWS infrastructure.\\n\\n## Accomplishments\\n**AWS**\\n- Discovery of AWS DevOps role to be used and augmented with permissions.\\n- Adjusted check-permissions.sh script to account for profile to be passed.\\n- Creation of Cloudformation templates for roles with permissions needed for install.\\n    - Added --profile and $PROFILE_NAME\\n- Adjusted Cloudformation templates to account for roles instead of a user.\\n  \\n**RAG**\\n- App deployed on Fyre VM\\n- Support for granitev2/llama2 70 b chat models added.\\n- Watsonx Assistant Configured to interact with app via API for easier testing.\\n\\n\\n\\n## In Progress\\n- End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)\\n- Tagging cp-deployer.sh generated resources.\\n- Test out RAG new chunking method.\\n\\n\\n\\n## Next Steps\\n- Continue over the shoulder working sessions\\n- Compilation of required endpoints\\n- Fill out required network values required for OCP deployment.\\n- Add Mixtral model to RAG.  \\n- Deploy latest RAG version on AWS\\n- Build out actions & flow in Watsonx Assistant after properly defining personas & objectives.\\n\\n\\n## Tracking (Issues)\\n- Require sign-off on final CloudFormation template."},{"id":"flight-log-2","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-2","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-03-08-cocreate.md","title":"Log - Sprint 2 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-03-08T00:00:00.000Z","formattedDate":"March 8, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":1.115,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 2 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-2","tags":["log","sprint"]},"unlisted":false,"prevItem":{"title":"Log - Sprint 3 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-3"},"nextItem":{"title":"Log - Sprint 1 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-1"}},"content":"## Objectives\\n\\n- [Deploy watsonx.ai on self-managed AWS infrastructure.](https://ibm.monday.com/boards/6058549193)\\n\\n## Accomplishments\\n**AWS**\\n- [Established cocreation working cadence and cocreation point of contact.](https://ibm.monday.com/boards/6058549193/pulses/6163634479)\\n- Provided list of required Role permissions.\\n- [Successful deployment of OCP, CP4D via Cloudformation template via Console](https://ibm.monday.com/boards/6058549193/pulses/6138383385) with the following:\\n    - Creation of 3 Public and 3 Public Subnets and NAT gateways via Cloudformation template\\n    - 3x m5.2xlarge master nodes\\n    - 6x m6i.8xlarge worker nodes\\n- Successful deployment of Cloudformation template via CLI using:\\n    - A parameter overrides json file\\n    - Tested only the necessary required permissions for deployment\\n- Created cloudformation template to create a role with exact permissions to run Cloudformation deployment.\\n- Tagging of resources created by Cloudformation template.\\n  \\n**RAG**\\n- App deployed on Fyre VM\\n- Support for granitev2/llama2 70 b chat models added.\\n- Watsonx Assistant Configured to interact with app via API for easier testing.\\n\\n\\n\\n## In Progress\\n- End-to-end deployment of OCP, CP4D, and watsonx.ai (with GPU node)\\n- Tagging cp-deployer.sh generated resources.\\n- Test out RAG new chunking method.\\n\\n\\n## Next Steps\\n- Begin over the shoulder working sessions\\n- Compilation of required endpoints\\n- [Add Mixtral model to RAG](https://ibm.monday.com/boards/6058549193/pulses/6221674788).  \\n- [Deploy latest RAG version on AWS](https://ibm.monday.com/boards/6058549193/pulses/6080003563).\\n- Build out actions & flow in Watsonx Assistant after properly defining personas & objectives.\\n\\n\\n## Tracking (Issues)\\n- Require sign-off on final CloudFormation template."},{"id":"flight-log-1","metadata":{"permalink":"/solution-wxai-aws/blog/flight-log-1","editUrl":"https://github.com/ibm-client-engineering/solution-wxai-aws/edit/main/${blogDirPath}/${blogPath}","source":"@site/flight-logs/2024-02-29-cocreate.md","title":"Log - Sprint 1 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","date":"2024-02-29T00:00:00.000Z","formattedDate":"February 29, 2024","tags":[{"label":"log","permalink":"/solution-wxai-aws/blog/tags/log"},{"label":"sprint","permalink":"/solution-wxai-aws/blog/tags/sprint"}],"readingTime":0.615,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Log - Sprint 1 \ud83d\udeeb","description":"Flight Log of Co-Creation Activities","slug":"flight-log-1","tags":["log","sprint"]},"unlisted":false,"prevItem":{"title":"Log - Sprint 2 \ud83d\udeeb","permalink":"/solution-wxai-aws/blog/flight-log-2"}},"content":"## Objectives\\n\\n- Deploy watsonx.ai on self-managed AWS infrastructure.\\n\\n## Accomplishments\\n- Established this GitHub repository as single source of truth for architecture, IaC, and documentation to collaborate with stakeholders.\\n- Developed draft CloudFormation template to provision AWS resources.\\n- Started incorporating STS into CloudFormation.\\n\\n## In Progress\\n- Awaiting approval for AWS credits to cover infrastructure costs. Following up to expedite.\\n- Finalizing deployment plan and cadence.\\n\\n## Next Steps\\n- Review deployment details in working session with stakeholders.\\n- Incorporate additional feedback into documentation and IaC templates.\\n- Upon AWS credit approval and stakeholder sign-off, begin provisioning.\\n\\n## Tracking (Issues)\\n- Need confirmation of AWS credit approval.\\n- Require sign-off on final CloudFormation template.\\n- Align on deployment cadence with customer."}]}')}}]);