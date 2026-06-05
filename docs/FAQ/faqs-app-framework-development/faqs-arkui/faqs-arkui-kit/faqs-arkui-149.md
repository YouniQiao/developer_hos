---
format: md
title: "Navigation如何隐藏导航栏"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-149
---

**问题现象**

Navigation设置了隐藏属性，仍然出现空白导航栏。跳转至新页面后，导航栏会重新出现。

**解决措施**

需同时设置Navigation组件及其NavDestination子组件的hideTitleBar属性为true才能完全隐藏导航栏。

**参考链接**

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigation10)
