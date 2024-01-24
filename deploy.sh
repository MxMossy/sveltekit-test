#! /bin/bash

echo "commit message: "
read msg
git add .
git commit -m "$msg"
git checkout master
rm -rf _app/
rm index.html
git checkout dev build/
mv build/* .
rmdir build
git add .
git commit -m "$msg"
git push
git checkout dev