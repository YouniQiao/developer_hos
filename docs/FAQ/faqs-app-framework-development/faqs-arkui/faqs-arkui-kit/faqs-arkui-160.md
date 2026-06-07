---
format: md
title: "Stack布局设置Alignment.Bottom没有生效"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-160
---


**问题现象**

在build()中使用Stack作为容器，设置alignContent为Alignment.Bottom，同时设置align为Alignment.Center。但alignContent为Alignment.Bottom未生效。

![](./img/92a2fd7a.png "点击放大")

**解决措施**

由于Stack布局默认采用单一对齐策略，当同时设置alignContent与align属性时，后设置的值将生效。
