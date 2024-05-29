#!/bin/bash

SENSITIVE_KEYWORDS=("Fidelity" "MasterCard" "Bank of New York Mellon" "Travelers")

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

