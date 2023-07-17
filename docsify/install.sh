#!/usr/bin/env bash

FILEPATH=$(readlink -f "$0")
DIR=$(dirname "$FILEPATH")
pushd $DIR
curl -sLO cdn.jsdelivr.net/npm/docsify@4
curl -sLO cdn.jsdelivr.net/npm/docsify@4/themes/vue.css
popd