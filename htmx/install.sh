#!/usr/bin/env bash

FILEPATH=$(readlink -f "$0")
DIR=$(dirname "$FILEPATH")
pushd $DIR
curl -sLO https://unpkg.com/htmx.org@1.9.3/dist/htmx.min.js
popd