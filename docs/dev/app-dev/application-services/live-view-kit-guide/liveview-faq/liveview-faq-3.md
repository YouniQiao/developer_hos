---
displayed_sidebar: appDevSidebar
title: "关于实况窗生命周期的问题"
original_url: /docs/dev/app-dev/application-services/live-view-kit-guide/liveview-faq/liveview-faq-3
format: md
---


## 如何实现“App关闭时，自动关闭构建的实况窗”

当App关闭时，可以调用[liveViewManager.stopLiveView](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#liveviewmanagerstopliveview)方法，设置参数[PrimaryData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#primarydata)实例的keepTime值为0，即可实现立即关闭实况窗。

## 如何实现“自动关闭构建的实况窗”

从6.1.1(24)版本起，应用可在创建或更新实况窗时，通过设置[PrimaryData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#primarydata)实例的aliveTime属性来实现自动关闭功能。

## 本地更新如何获取实况窗实例以及实况窗被清除后的限制

1. 本地更新实况窗时，可以通过[liveViewManager.getActiveLiveView](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#liveviewmanagergetactiveliveview)函数获取活动的[LiveView](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#liveview)实例。
2. 如果想要结束实况窗，建议使用[liveViewManager.stopLiveView](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager#liveviewmanagerstopliveview)方法。如果实况窗被notificationManager.cancel或notificationManager.cancelAll清除后，无论是Live View Kit还是Push Kit，无法再次通过该id更新或结束实况窗。
3. 再次创建该id的实况窗时，Live View Kit可以通过该id再次创建实况窗，Push Kit在12小时内无法通过该id再次创建实况窗。
