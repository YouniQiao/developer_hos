---
title: "如何在Page中获取WindowStage实例"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-298
format: md
---


方式一：在onWindowStageCreate方法中获取，此方式适用于Ability生命周期内需要持久化WindowStage实例的场景。

```
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
  // ...
  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
    });
    console.info('windowStage', JSON.stringify(windowStage))
    // Store windowStage instance globally for cross-page access
    AppStorage.setAndLink('windowStage', windowStage)
  }

  // ...
}
```

方式二：UIAbilityContext提供了获取WindowStage实例的接口，此方式适用于需要动态获取WindowStage的页面级场景，无需持久化存储。

```
// Index.ets
import common from '@ohos.app.ability.common';

@Entry
@Component
struct Index {
  @State showAbility: string = 'get windowStage'

  build() {
    Row() {
      Column() {
        Text(this.showAbility)
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
            console.info('Obtained WindowStage instance:',JSON.stringify(context.windowStage))
          });
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

参考链接

[onWindowStageCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onwindowstagecreate)

[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext)
