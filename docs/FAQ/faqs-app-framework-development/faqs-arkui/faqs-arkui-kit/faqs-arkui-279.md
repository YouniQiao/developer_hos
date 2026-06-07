---
title: "如何在代码中触发应用后台运行"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-279
format: md
---


[minimize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window#minimize11)方法提供该能力。若主窗口调用，可以将窗口最小化，并支持在Dock栏中还原。若子窗口调用，可以将窗口隐藏。

参考代码如下：

在EntryAbility.ets的onWindowStageCreate回调中全局保存windowStage：

```
AppStorage.setOrCreate('context',windowStage);
```

在页面中获取windowStage并调用方法实现最小化：

```
import { window } from '@kit.ArkUI';

@Component
export struct BackgroundExecution {
  @State message: string = 'Run in the background';

  build() {
    Column() {
      Button(this.message)
        .width('40%')
        .onClick(() => {
          let windowStage = AppStorage.get('context') as window.WindowStage;
          if (windowStage) {
            // It can be minimized when it is the main window and hidden when it is a sub-window.
            windowStage.getMainWindowSync().minimize();
          }
        })
    }
    .height('100%')
    .width('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```
