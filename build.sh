#!/usr/bin/env bash
if [[ ${VERCEL_GITHUB_COMMIT_REF} == 'main' ]]; then
  echo ${VERCEL_GITHUB_COMMIT_REF};
  echo "Runnning build using Production Environment";
  hugo --gc --minify -b https://$BASE_URL
else
  echo ${VERCEL_GITHUB_COMMIT_REF};
  echo "Runnning build using Staging Environment with Draft content enabled";
  hugo --gc --minify -D --environment staging -b https://$VERCEL_URL
fi

# Runnning scripts transpilation
npm run build