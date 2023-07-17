#!/usr/bin/env bash

FILEPATH=$(readlink -f "$0")
DIR=$(dirname "$FILEPATH")
pushd $DIR
git clone https://github.com/spruceid/kepler.git
git clone https://github.com/spruceid/kepler-sdk.git
pushd kepler-sdk
npm install
pushd node_modules/@spruceid/kepler-sdk-wrapper
bash build.sh
popd
npm run build
popd
mkdir kepler_sdk
mv kepler-sdk/dist/* kepler_sdk/
sudo rm -r kepler-sdk
popd