---
format: md
title: "@ohos.data.preferences在App退出重启后，持久化数据丢失"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-28
---

数据持久化需要在调用preferences.put(key, value)后调用preferences.flush()接口以实现数据持久化。若不调用flush()，数据可能仅保存在内存中而不会写入持久化存储，导致应用退出后数据丢失。

**参考链接**

[通过用户首选项实现数据持久化 (ArkTS)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-persistence-by-preferences)
