#!/bin/bash
# 构建前将 content-map.json 复制到 static/ 供仪表盘页面 fetch
set -e
cp content-map.json static/content-map.json
echo "✅ content-map.json → static/"
