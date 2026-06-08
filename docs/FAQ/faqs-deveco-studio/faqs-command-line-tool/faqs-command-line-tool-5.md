---
format: md
title: "ohpm ERROR: JSON5: invalid end of input at 1:1"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-5
upstream_id: FAQ/faqs-deveco-studio/faqs-command-line-tool/faqs-command-line-tool-5
last_sync: 2026-06-07
sync_hash: 5d071f0d
---
**问题描述**

电脑无网络，升级到600后出现错误：ohpm ERROR: JSON5: invalid end of input at 1:1。

**解决方案**

删除工程下的oh-package-lock.json5文件后，执行ohpm clean、ohpm cache clean和ohpm install --all。
