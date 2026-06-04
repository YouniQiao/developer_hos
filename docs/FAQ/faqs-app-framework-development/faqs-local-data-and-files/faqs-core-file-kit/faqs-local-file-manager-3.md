---
title: "如何实现文件不存在则创建文件"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-file-manager-3
---

可以通过调用fileIo.open函数来实现，open(path: string, mode?: number)，指定第二个参数mode为fileIo.OpenMode.CREATE，表示如果文件不存在，则创建文件。

**参考链接**

[文件管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)
