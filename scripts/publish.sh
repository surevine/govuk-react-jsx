#!/usr/bin/env bash

rm -rf dist
mkdir -p build-temp
copy src/**/index.js src/utils/*.js build-temp
babel build-temp -d dist
rm -rf build-temp

cp publish.package.json dist/package.json

npm publish dist
