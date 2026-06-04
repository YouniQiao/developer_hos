---
title: "ArkWeb组件是否支持深拷贝"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-90
---

**问题描述**

ArkWeb组件支持深拷贝。将ArkWeb组件A深拷贝给ArkWeb组件B后，即使A组件关闭或从路由栈中退出，B仍可继续使用A中的资源。

**解决措施**

当前不支持该功能，只能通过动态创建Web组件的方式，构建一个Web组件池。需要使用时，直接从池中获取组件并挂载到节点树上进行展示。

**参考链接**

[使用Web组件加载页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-page-loading-with-web-components)
