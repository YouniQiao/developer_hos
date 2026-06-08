---
format: md
title: "pthread创建的线程中如何读取rawfile"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-23
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-23
last_sync: 2026-06-07
sync_hash: 8fe93335
---
可在线程安全函数中读取。

1. 在UI主线程中获取并保存资源文件对象。
2. 创建线程安全的函数。
3. 在非UI主线程中调用线程安全函数。
4. 在线程安全函数中，读取rawfile目录下的文件资源。
