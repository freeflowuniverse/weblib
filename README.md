# Weblib

Single source for our web components and all javascript components as required. The aim is to avoid using npm for js components and fetching assets in projects from this repository to reduce space. None of the code for the assets in this repository is by github.com/freeflowuniverse or the authors of the repository, the aim of the repository is to collect assets likely to be used together in freeflowuniverse projects in the same place.

## Installation

Each lib has an `install.sh` script. The scripts are used to install the assets into the libraries in this repository. `install.sh` in the root of the directory installs all assets. **Note that this will fail if existing assets aren't removed**

## Sources
- TailwindCSS: Binaries taken from https://github.com/tailwindlabs/tailwindcss releases
- Docsify: JS and CSS taken from [Docsify CDN](cdn.jsdelivr.net/npm/docsify@4)
- Kepler: [Kepler](https://github.com/spruceid/kepler.git) & [Kepler SDK](https://github.com/spruceid/kepler-sdk.git) repositories
- OpenRPC: Built from [Forked OpenRPC Inspector](https://github.com/timurgordon/inspector.git) & [OpenRPC Playground](https://github.com/open-rpc/playground.git) repository
- MDBooks: Binaries taken from [releases](https://github.com/rust-lang/mdBook/releases)

## Useful links
- [Standalone CLI: Use Tailwind CSS without Node.js](https://tailwindcss.com/blog/standalone-cli)
