#!/usr/bin/env bash
set -euo pipefail

gem list --silent -i minitest || gem install minitest --no-ri --no-rdoc

ruby -I . -e "require 'minitest/autorun'; Dir.glob('**/*.rb') { |f| require(f) }"
