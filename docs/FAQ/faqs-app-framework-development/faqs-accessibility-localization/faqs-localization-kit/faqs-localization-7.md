---
format: md
title: "如何将Resource资源对象转成string类型"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-accessibility-localization/faqs-localization-kit/faqs-localization-7
upstream_id: FAQ/faqs-app-framework-development/faqs-accessibility-localization/faqs-localization-kit/faqs-localization-7
last_sync: 2026-06-07
sync_hash: d354797d
---
Resource 为字符串，支持使用 this.context.resourceManager.getStringSync($r('app.string.test').id)同步转换为字符串，也支持使用 $r('app.string.test', 2) 进行格式化。

**参考链接**

[getStringSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getstringsync10)
