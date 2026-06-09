#!/bin/bash
# 将服务器上已构建好的 build/ 产物推送到 Netlify
# 用法: bash scripts/deploy-to-netlify.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

# 检查构建产物
if [ ! -d build ] || [ ! -f build/index.html ]; then
    echo "❌ build/ 目录不存在或不完整，请先构建"
    exit 1
fi

# 确保有 netlify-cli
if ! command -v netlify &> /dev/null; then
    npm install -g netlify-cli
fi

echo "📦 推送构建产物到 Netlify ($(du -sh build | cut -f1))..."
echo "   (绕过代理，直连 Netlify)"

# 越过代理直连
HTTP_PROXY='' HTTPS_PROXY='' netlify deploy \
    --prod \
    --dir=build \
    --functions=netlify/functions \
    --message "Deploy $(git rev-parse --short HEAD)"

echo "✅ 部署完成"
