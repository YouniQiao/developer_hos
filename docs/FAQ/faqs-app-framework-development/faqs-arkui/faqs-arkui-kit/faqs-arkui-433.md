---
format: md
title: "手表设备，熄屏2分钟才能收到onHidden回调"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-433
---


**问题描述**

手表设备在系统熄屏后未收到onPageHide回调，屏亮时未收到onPageShow回调。

**解决措施**

在穿戴设备上，因穿戴设备为节省功耗采用延迟回调机制，应用熄屏后需等待两分钟才会收到窗口熄屏的回调，该行为是穿戴设备窗口的默认机制，开发者可以参考[@ohos.power (系统电源管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-power)文档，检测当前设备是否处于活动状态。
