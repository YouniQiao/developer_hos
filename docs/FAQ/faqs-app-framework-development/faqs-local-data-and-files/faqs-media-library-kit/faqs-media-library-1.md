---
format: md
title: "如何监听文件或文件目录的变化"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-media-library-kit/faqs-media-library-1
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-media-library-kit/faqs-media-library-1
last_sync: 2026-06-07
sync_hash: 5ddcef56
---
使用fileIo.createWatcher监听文件或目录的变化，并通过回调函数异步处理变化事件。应用需要根据业务需求控制通知处理策略，可以将变化信息存储到消息队列中，并定期刷新。

**参考链接**

[fileIo.createWatcher](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileiocreatewatcher10)
