#!/usr/bin/env bash

FILEPATH=$(readlink -f "$0")
DIR=$(dirname "$FILEPATH")
pushd $DIR

git clone https://github.com/timurgordon/inspector.git $DIR/_inspector
pushd $DIR/_inspector
npm install
npm run build
npm run build:package
popd
cp -r $DIR/_inspector/build $DIR/inspector
mkdir $DIR/inspector/package
cp -r $DIR/_inspector/package $DIR/inspector/package
sudo rm -r $DIR/_inspector

git clone https://github.com/open-rpc/playground.git $docs_dir/_playground
pushd $docs_dir/_playground
npm install
mv -f $docs_dir/inspector/package $docs_dir/_playground/node_modules/@open-rpc/inspector/package
npm run build
popd
mkdir $docs_dir/playground
cp $docs_dir/_playground/build $docs_dir/playground
sudo rm -r docs_dir/_playground