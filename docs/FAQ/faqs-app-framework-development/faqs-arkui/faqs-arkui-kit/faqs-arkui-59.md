---
format: md
title: "弹窗组件无法进入onPageShow方法"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-59
---

自定义弹窗作为自定义组件的一种，拥有自定义组件生命周期aboutToAppear和aboutToDisappear。

onPageShow和onPageHide仅作为页面生命周期提供，@Entry修饰的自定义组件定义为页面，不适用于自定义弹窗。

**参考链接**

[自定义组件生命周期](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-page-custom-components-lifecycle)
