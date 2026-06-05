---
format: md
title: "Navigation页面级弹窗，下层页面如何监听是否被Dialog覆盖"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-402
---


可以通过[Class (UIObserver)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uiobserver)监听[NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination)组件的生命周期。生命周期可以参考下方文档。从API17开始，新增onActive、onInactive生命周期，在Dialog弹出、销毁时会分别触发下层页面的onInactive、onActive生命周期。

**参考链接**

[页面生命周期](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navdestination#页面生命周期)
