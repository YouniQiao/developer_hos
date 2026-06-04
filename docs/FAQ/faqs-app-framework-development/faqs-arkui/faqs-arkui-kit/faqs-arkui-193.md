---
title: "应用如何设置隐藏顶部的状态栏"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-193
---

在UIAbility的onWindowStageCreate生命周期中，设置setWindowSystemBarEnable接口。

```
onWindowStageCreate(windowStage: window.WindowStage): void {
  windowStage.getMainWindowSync().setWindowSystemBarEnable([])
  // ...
}
```

**参考链接**

[体验窗口沉浸式能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-window-stage#体验窗口沉浸式能力)
