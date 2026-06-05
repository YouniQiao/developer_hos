---
format: md
title: "发布ohpm提示错误：The version field: 12.5.0.0-20-dev in the oh-package.json5 file does not satisfy the semver specification"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-command-line-tool-8
---


**问题描述**

在线构建播放器库的HAR包后发布OHPM提示错误：11:29:52 ohpm ERROR: oh-package.json5文件中的版本字段12.5.0.0-20-dev不符合semver规范。

**解决方案**

版本应遵循semver语义化规范，目前仅支持1.0.0-XXXX三段式形式。详情请参阅文档：https://semver.org/lang/zh-CN/#spec-item-11。
