---
format: md
title: "应用如何设置隐藏顶部的状态栏"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-193
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-193
last_sync: 2026-06-07
sync_hash: 62466850
---
在UIAbility的onWindowStageCreate生命周期中，设置setWindowSystemBarEnable接口。

```
onWindowStageCreate(windowStage: window.WindowStage): void {
  windowStage.getMainWindowSync().setWindowSystemBarEnable([])
  // ...
}
```

**参考链接**

[体验窗口沉浸式能力](/docs/dev/app-dev/application-framework/arkui/window-manager/application-window-stage#体验窗口沉浸式能力)
