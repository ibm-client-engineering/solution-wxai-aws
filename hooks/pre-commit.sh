#!/bin/bash

SENSITIVE_KEYWORDS=("Fidelity" "MasterCard" "Bank of New York Mellon" "Travelers")
EXCLUDE_DIR="hooks/pre-commit.sh"

is_excluded() {
  local file=$1
  if [[ $file == $EXCLUDE_DIR/* ]]; then
      return 0
  fi
      return 1
}
# check modified files for sensitive keywords
for file in $(git diff --name-only --cached); do
    for keyword in "${SENSITIVE_KEYWORDS[@]}"; do
        if grep -q "$keyword" "$file"; then
            echo "Error: Sensitive keyword '$keyword' found in file '$file'. Please remove it before committing."
            exit 1
        fi
    done
done

# If no sensitive keyword found, allow commit
exit 0

