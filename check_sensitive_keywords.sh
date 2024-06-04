#!/bin/bash

if [ -z "${GIT_ENV_VAR_S3_IBM_TXT_URL+x}" ]; then
  echo "Error: GIT_ENV_VAR_S3_IBM_TXT_URL environment variable is not set. You must update/define the env var with the S3 URL"
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

echo "Length of SENSITIVE_ KEYWORDS_ARRAY: ${#SENSITIVE_KEYWORDS_ARRAY[@]}"

# Check modified files for sensitive keywords
for file in $(git ls-files -m); do
    git checkout $file  # Checkout the latest version of the file
    echo "File contents: $(git show $file)"
    if grep -riE "(?i)${SENSITIVE_KEYWORDS_ARRAY[@]}" "$file"; then
        echo "Error: Sensitive keyword found in file '$file'. Please remove it before committing."
        exit 1
    fi
done

# If no sensitive keyword found, allow commit
exit 0


