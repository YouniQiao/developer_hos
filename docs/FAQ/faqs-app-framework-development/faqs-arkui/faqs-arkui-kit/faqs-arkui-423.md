---
format: md
title: "Navigation跨模块跳转报错"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-423
---


**问题描述**

Navigation路由到子模块报错，跨包跳转时失败，该怎么定位和分析。

**解决措施**

1. 参照路由表配置流程，正确配置路由表。
2. 路由表中的页面需要使用NavDestination组件进行封装，因为Navigation框架要求目标页面必须继承自NavDestination类才能被正确路由。
3. 跨包跳转时，只有HAR/HSP模块才可以跳转。可以通过module.json5文件查看type类型是否为“har”或者“shared”。
