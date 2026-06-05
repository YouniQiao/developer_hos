---
displayed_sidebar: appDevSidebar
title: "默认界面扫码取消后，如何感知"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-faq-12
format: md
---


**问题现象**

调用默认界面扫码功能，没有扫码直接关闭，如何在逻辑中判断？

**解决措施**

开启扫码，却没有进行任何扫码操作而直接取消扫码，可以从回调中获取返回错误码：[1000500002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-error-code#section1000500002-用户取消扫码)，用户取消扫码，据此自行修改逻辑操作。
