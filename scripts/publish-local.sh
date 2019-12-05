#!/usr/bin/env bash

./scripts/build.sh
npm publish dist --registry http://localhost:4873/
