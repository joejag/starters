#!/usr/bin/env bash
set -euo pipefail

if [[ ! -d node_modules ]]; then
    npm install
fi

# Build a docker image with the latest version of the rool
npm run build
npm pack
mv starters*.tgz e2e/starters.tgz
cd e2e
docker build --tag starters .

# Run every supported project and make sure the tests pass
declare -a supported=( "clojure" "c++" "csharp" "go" "java" "kotlin" "node" "php" "python" "ruby" "rust" "scala" "ts")
for i in "${supported[@]}"
do
   echo "Checking $i"
   docker run -t starters /bin/bash -c "starters ${i} && ./runTests.sh"
done
