---
format: md
title: "如何获取设备支持的API的版本号"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faq-basics-service-kit-17
---

可以通过设备信息模块deviceInfo查询，常见的版本号获取方式如下：

* 系统软件API版本：deviceInfo.sdkApiVersion。
* 首个版本系统软件API版本：deviceInfo.firstApiVersion。
* 发行版系统API版本：deviceInfo.distributionOSApiVersion。

**参考链接**

[@ohos.deviceInfo (设备信息)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info)
