#!/usr/bin/env bash
set -euo pipefail

if [[ ! -d vendor ]]; then
    composer update
fi
vendor/bin/phpunit
