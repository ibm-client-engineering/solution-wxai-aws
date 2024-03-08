#!/bin/bash

# Check for required arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <role-name> <permissions-file>"
    exit 1
fi

ROLE_NAME=$1
PERMISSIONS_FILE=$2

# Output file where results will be stored
OUTPUT_FILE="missing_permissions.txt"

# Check if the permissions file exists
if [ ! -f "$PERMISSIONS_FILE" ]; then
    echo "Permissions file does not exist."
    exit 1
fi

# Retrieve the account ID
ACCOUNT_ID=$(aws sts get-caller-identity --output text --query 'Account')
if [ -z "$ACCOUNT_ID" ]; then
    echo "Failed to retrieve AWS account ID. Ensure your AWS CLI is configured correctly."
    exit 1
fi

ROLE_ARN="arn:aws:iam::$ACCOUNT_ID:role/$ROLE_NAME"

> "$OUTPUT_FILE"

# Process permissions and append missing ones to the output file
while IFS= read -r PERMISSION
do
    if [ -z "$PERMISSION" ]; then
        continue
    fi

    OUTPUT=$(aws iam simulate-principal-policy --policy-source-arn "$ROLE_ARN" --action-names "$PERMISSION" --output text)

    # Check if the output does not contain an explicit "Allow" for the permission
    if ! echo "$OUTPUT" | grep -q 'allowed'; then
        echo "$PERMISSION" >> "$OUTPUT_FILE"
    fi
done < "$PERMISSIONS_FILE"