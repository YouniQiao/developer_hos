---
format: md
title: "如何获取设备的SDK版本、产品版本、设备类型（平板、手机）、build版本等信息"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-23
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-23
last_sync: 2026-06-07
sync_hash: bc76778d
---
应用所在设备的信息，可以通过@kit.BasicServicesKit的deviceInfo模块获取：

* SDK版本：deviceInfo.sdkApiVersion。
* 产品版本：deviceInfo.displayVersion。
* 设备类型（平板、手机）：deviceInfo.deviceType。
* build版本：deviceInfo.buildVersion。

更多请参见[@ohos.deviceInfo (设备信息)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info)。
