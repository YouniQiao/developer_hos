---
format: md
title: "fileIo.write是否支持utf-8之外的编码格式"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-file-manager-11
---


**问题描述**

1.希望fileIo.write支持utf-8之外的编码格式，目前只支持utf-8。

2.TextEncoder等工具类支持多种编码格式，与其他API保持一致。

**解决措施**

当前不支持其他格式。API能力允许开发者通过编写代码在内存中进行编码转换，并将结果直接存储到ArrayBuffer中，然后保存到文件中。
