#!/usr/bin/env bash

./scripts/build.sh
npm publish --registry http://localhost:4873/
