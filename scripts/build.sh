#!/usr/bin/env bash

rm -rf dist
mkdir -p build-temp
# Not sure why have to be this explicit, the glob should sort it :-/
cd src
copy govuk/index.js govuk/template/index.js govuk/components/**/index.js utils/*.js ../build-temp
cd ..
babel build-temp -d dist
rm -rf build-temp

PACKAGE_VERSION=$(node -p "require('./package.json').version")
sed "s/PACKAGE_VERSION/${PACKAGE_VERSION}/g" scripts/package.json > dist/package.json

cp CHANGELOG.md dist
cp README.md dist
