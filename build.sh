#!/bin/bash

# only proceed script when started not by pull request (PR)
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

DIR=`pwd`
MASTER_DIR=$DIR/../${GH_ORG}.github.io.master

# generate bootstrap stylesheets from less
npm install
grunt

# build site with jekyll, by default to `_site' folder
jekyll build

# cleanup
rm -rf ${MASTER_DIR}

#clone `master' branch of the repository using encrypted GH_TOKEN for authentification
git clone https://${GH_TOKEN}@github.com/${GH_ORG}/${GH_ORG}.github.io.git ${MASTER_DIR}

# copy generated HTML site to `master' branch
cd _site

rm -Rf node_modules

rsync -av --del --exclude-from=excludes.txt . ${MASTER_DIR}

cd ${MASTER_DIR}

# commit and push generated content to `master' branch
# since repository was cloned in write mode with token auth - we can push there
git config user.email "${GH_MAIL}"
git config user.name "${GH_USER}"
git add -A .
git status
git commit -a -m "Travis page build #${TRAVIS_BUILD_NUMBER}"
git push --quiet origin master > /dev/null 2>&1 
