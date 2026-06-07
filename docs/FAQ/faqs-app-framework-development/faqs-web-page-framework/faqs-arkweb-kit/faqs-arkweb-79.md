---
format: md
title: "web组件访问过程中的illegal、fraud、risk和warning这4个风险等级区别是什么？是否可以自定义"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-79
---


* illegal、fraud 禁止访问，没有继续浏览的按钮。
* risk 禁止访问，有继续浏览的按钮。
* warning web内核不会主动拦截，仅展示警告提示，不提供继续访问的按钮。

目前不允许自定义风险访问控制的流程，也没有提供相关回调。

**参考链接**

[ThreatType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-e#threattype11)
