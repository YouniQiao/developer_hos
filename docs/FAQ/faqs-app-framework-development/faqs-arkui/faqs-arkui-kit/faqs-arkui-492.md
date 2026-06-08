---
format: md
title: "如何设置仅文字输入的键盘，即屏蔽键盘中AI功能"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-492
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-492
last_sync: 2026-06-07
sync_hash: 8de1ae46
---
简单键盘是不具有任何智能功能的键盘。在EntryAbility.ets文件的onWindowStageCreate方法中调用[inputMethod.setSimpleKeyboardEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodsetsimplekeyboardenabled20)(true)，即可启用简单键盘模式。相关代码如下：

```
onWindowStageCreate(windowStage: window.WindowStage): void {
  // Main window is created, set main page for this ability
  hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
  AppStorage.setOrCreate('windowStage',windowStage);

  windowStage.loadContent('pages/Index', (err) => {
    if (err.code) {
      hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
      return;
    }
    hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');
    // Settings Simple Keyboard
    let enable: boolean = true;
    inputMethod.setSimpleKeyboardEnabled(enable);
  });
}
```
