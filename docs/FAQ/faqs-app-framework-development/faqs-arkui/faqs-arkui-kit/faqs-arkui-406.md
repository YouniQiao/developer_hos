---
format: md
title: "Navigation组件，打开页面耗时，是否有优化建议"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-406
---


**问题描述**

在业务场景中，使用Navigation打开子页面，其中父容器布局为Row容器下套一个Navigation，子页面就是一个普通的Component，整体测试下来发现从父容器aboutToAppear到子页面aboutToAppear耗时10~15ms，这段时间是否能优化。

**解决措施**

Navigation组件跳转后父容器aboutToAppear到子页面aboutToAppear耗时10~15ms属于正常耗时。

**参考链接**

[页面生命周期](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-navdestination#页面生命周期)
