#!/usr/bin/env bash

rm -rf dist
mkdir -p build-temp
copy src/**/index.js src/utils/*.js build-temp
babel build-temp -d dist
rm -rf build-temp

PACKAGE_VERSION=$(node -p "require('./package.json').version")
sed "s/PACKAGE_VERSION/${PACKAGE_VERSION}/g" scripts/package.json > dist/package.json
