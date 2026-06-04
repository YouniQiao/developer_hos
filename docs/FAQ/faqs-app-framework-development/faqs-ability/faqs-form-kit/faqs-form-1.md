---
title: "点击服务卡片如何跳转至指定的页面"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-form-1
---

配置卡片事件，指定目标UIAbility进行跳转。

* 如果应用不在后台，可以在目标UIAbility的onWindowStageCreate()中调用loadContent加载指定的页面。
* 如果应用已在后台，可在目标UIAbility的onNewWant()中调用loadContent加载指定页面。

**参考链接**

[启动UIAbility的指定页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/uiability-intra-device-interaction#启动uiability的指定页面)
