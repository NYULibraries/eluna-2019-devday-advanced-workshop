#!/bin/sh -ex

mkdir -p cypress-results
VIEWS='NYU CENTRAL_PACKAGE'

for VIEW in $VIEWS
do
  VIEW=$VIEW docker-compose run e2e bash -c \
    'script/wait_for.sh http://web:8003/primo-explore/search && yarn cypress run \
      --browser=chrome --spec="cypress/integration/$VIEW/**/*.spec.js" --reporter="junit" \
      --reporter-options="mochaFile=test-results/$VIEW/results-[hash].xml"' \
    || ANY_FAILS=$ANY_FAILS$?
  docker cp "$(docker ps -q -a -l -f name=e2e)":/app/cypress/videos cypress-results/ || : # escape failure if video does not exist
  docker cp "$(docker ps -q -a -l -f name=e2e)":/app/cypress/screenshots cypress-results/ || : # screenshots only on failures
  docker cp "$(docker ps -q -a -l -f name=e2e)":/app/test-results cypress-results/
  docker-compose down
done
# Checks if non-zero exit code occurred
[ ! $ANY_FAILS ]