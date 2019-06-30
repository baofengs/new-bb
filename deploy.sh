#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
echo 'blog.sanbaofengs.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:x-bao/new-bb.git master:gh-pages

cd -

git add -A
git commit -m 'update'
git push origin master
