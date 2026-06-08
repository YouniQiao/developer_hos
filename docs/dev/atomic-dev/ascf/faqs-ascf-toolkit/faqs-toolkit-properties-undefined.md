---
title: "报错TypeError: Cannot read properties of undefined (reading 'hxml')"
original_url: /docs/dev/atomic-dev/ascf/faqs-ascf-toolkit/faqs-toolkit-properties-undefined
format: md
upstream_id: dev/atomic-dev/ascf/faqs-ascf-toolkit/faqs-toolkit-properties-undefined
last_sync: 2026-06-07
sync_hash: 512e1cf7
---
**问题现象**

使用命令行转换工具时报错：“TypeError: Cannot read properties of undefined (reading 'hxml')”

**解决措施**

检查小程序类型是否正确，检查小程序app.json中pages属性的第一个页面是否包含正确的文件格式，如index.wxml/index.axml。
