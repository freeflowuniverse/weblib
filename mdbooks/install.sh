#!/usr/bin/env bash

FILEPATH=$(readlink -f "$0")
DIR=$(dirname "$FILEPATH")
pushd $DIR
curl -sLO https://github.com/rust-lang/mdBook/releases/latest/download/mdbook-v0.4.32-aarch64-unknown-linux-musl.tar.gz
curl -sLO https://github.com/rust-lang/mdBook/releases/latest/download/mdbook-v0.4.32-x86_64-apple-darwin.tar.gz
curl -sLO https://github.com/rust-lang/mdBook/releases/latest/download/mdbook-v0.4.32-x86_64-unknown-linux-gnu.tar.gz
curl -sLO https://github.com/rust-lang/mdBook/releases/latest/download/mdbook-v0.4.32-x86_64-unknown-linux-musl.tar.gz
popd