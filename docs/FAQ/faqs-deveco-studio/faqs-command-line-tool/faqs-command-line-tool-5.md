---
title: "ohpm ERROR: JSON5: invalid end of input at 1:1"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-command-line-tool-5
---

**问题描述**

电脑无网络，升级到600后出现错误：ohpm ERROR: JSON5: invalid end of input at 1:1。

**解决方案**

删除工程下的oh-package-lock.json5文件后，执行ohpm clean、ohpm cache clean和ohpm install --all。
