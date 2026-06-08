---
format: md
title: "如何获取设备支持的API的版本号"
original_url: /docs/FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-17
upstream_id: FAQ/faqs-system-development/faqs-basic-functions/faqs-basic-services-kit/faq-basics-service-kit-17
last_sync: 2026-06-07
sync_hash: 469f6b51
upstream_hash: 7e20e16752aa
---

可以通过设备信息模块deviceInfo查询，常见的版本号获取方式如下：

* 系统软件API版本：deviceInfo.sdkApiVersion。
* 首个版本系统软件API版本：deviceInfo.firstApiVersion。
* 发行版系统API版本：deviceInfo.distributionOSApiVersion。

**参考链接**

[@ohos.deviceInfo (设备信息)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info)
