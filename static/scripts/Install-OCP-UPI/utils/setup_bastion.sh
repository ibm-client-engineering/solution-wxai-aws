#!/bin/bash
#

# Update OS and Install tools
sudo yum update -y
echo "**** Installing required packages"
sudo yum -y install httpd git podman wget jq python39 unzip

# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install &> $HOME/.awscli_install.log

# Install yq
sudo wget -qO /usr/local/bin/yq https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64
sudo chmod a+x /usr/local/bin/yq

# Download and Install openshift client
wget https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/4.12.8/openshift-client-linux-4.12.8.tar.gz
tar xzvf openshift-client-linux-4.12.8.tar.gz 
sudo cp oc /usr/local/bin/ 
sudo cp oc /usr/bin/ 
sudo cp kubectl /usr/local/bin/ 
sudo cp kubectl /usr/bin/ 

# set web server to port 8080
echo "**** Setting web server to port 8080"
sudo sed -i 's/^Listen 80$/Listen 8080/' /etc/httpd/conf/httpd.conf

echo "**** Starting web server"
sudo systemctl enable httpd
sudo systemctl start httpd


exit 0

