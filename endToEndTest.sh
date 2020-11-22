#!/usr/bin/env bash
set -euo pipefail

# Build a docker image with the latest version of the rool
npm run build
npm pack
mv starters*.tgz e2e/starters.tgz
cd e2e
docker build --tag starters .

# Run every supported project and make sure the tests pass
declare -a supported=( "cplusplus" "csharp" "go" "java" "node" "python" "ruby" "rust" "scala" "ts" )
for i in "${supported[@]}"
do
   echo "Checking $i"
   docker run -it starters /bin/bash -c "starters ${i} && cd ${i}_project && ./runTests.sh"
done
