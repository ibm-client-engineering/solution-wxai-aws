#!/bin/bash

# UPDATE the .env file at the root of this repo
# Run source .env
# Verify if env var is set by running echo $GIT_ENV_VAR_S3_IBM_TXT_URL

# Check if the environment variable GIT_ENV_VAR_S3_IBM_TXT_URL is set
if [ -z "${GIT_ENV_VAR_S3_IBM_TXT_URL+ x}" ]; then
  echo "Error: GIT_ ENV_VAR_S3_IBM_TXT_URL environment variable is not set. You must update/define the env var with the S3 URL"
  exit 1
fi

# Download sensitive keywords from remote server
SENSITIVE_KEYWORDS_ARRAY=()
while read -r line; do
    SENSITIVE_KEYWORDS_ARRAY+=("$line")
done < <(curl -s ${GIT_ENV_VAR_S3_IBM_TXT_URL})

# Check if the array is empty
if [ ${#SENSITIVE_KEYWORDS_ARRAY[@]} -eq 0 ]; then
  echo "Error: No sensitive keywords found."
  exit 1
fi
echo "Number of sensitive keywords loaded:  ${#SENSITIVE_KEYWORDS_ARRAY[@]}"

found_sensitive_keywords=false

while IFS= read -r file; do
  echo "Checking file: $file"
  for keyword in "${SENSITIVE_KEYWORDS_ARRAY[@]}"; do
    if grep -q "$keyword" "$file"; then
      echo "Error: Sensitive keyword found in $file. Commit aborted."
      found_sensitive_keywords=true
    fi
  done
done < <(git diff --cached --name-only)
if [ "$found_sensitive_keywords" = true ]; then
  exit 1
else
  echo "No sensitive keywords found. Commit allowed"
  exit 0
fi

