#!/bin/bash

# 设置错误时退出
set -e

echo "开始构建项目..."
# 执行构建命令
pnpm build

if [ $? -ne 0 ]; then
    echo "构建失败，退出部署"
    exit 1
fi

echo "构建成功，开始部署..."

# 首先删除远程目录中的所有文件
ssh root@8.129.19.173 "rm -rf /home/tara-home/static/*"

# 使用scp进行文件同步
scp -r ./out/* root@8.129.19.173:/home/tara-home/static/

echo "部署完成！"
