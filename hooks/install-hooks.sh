#!/bin/bash

# copy the precommit hook to the .git/hooks directory
cp hooks/pre-commit.sh .git/hooks/pre-commit

# make the hook executable

chmod +x .git/hooks/pre-commit
echo "Pre-commit hook installed successfully"