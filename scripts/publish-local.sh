#!/usr/bin/env bash

./scripts/build.sh
PACKAGE_VERSION=$(date +%s)
sed "s/PACKAGE_VERSION/${PACKAGE_VERSION}.0.0/g" scripts/package.json > dist/package.json
npm publish dist --registry http://localhost:4873/
