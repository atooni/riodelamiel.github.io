#!/bin/bash

# enable error reporting to the console
set -e

# generate bootstrap stylesheets from less
npm install
grunt

# build site with jekyll, by default to `_site' folder
jekyll serve
