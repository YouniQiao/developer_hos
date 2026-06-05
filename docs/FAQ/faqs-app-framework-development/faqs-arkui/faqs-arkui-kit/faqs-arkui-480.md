---
title: "如何实现护眼模式"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-480
format: md
---


**解决措施**

当前实现护眼模式可以采用下面两种方式：

方案一：可通过深色模式的方式，进行应用适配；深色模式的开发可以参考：[深色模式适配](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-dark-mode-adaptation)。

方案二：可通过系统设置全局开启护眼模式，通过应用内指引用户跳转设置页面手动打开护眼模式。

```
import { common } from "@kit.AbilityKit";
import { BusinessError } from "@kit.BasicServicesKit";

@Entry
@Component
export struct ImplementEyeProtectionMode {
  build() {
    Row() {
      Button('跳转显示设置页面')
        .onClick(() => {
          let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
          context.startAbility({
            bundleName: 'com.huawei.hmos.settings',
            abilityName: 'com.huawei.hmos.settings.MainAbility',
            uri: 'display_settings'
          }).catch((err: BusinessError) => {
            console.error(`startAbility failed, code is ${err.code}, message is ${err.message}`);
          })
        })
    }
    .width('100%')
    .height('100%')
    .alignItems(VerticalAlign.Center)
    .justifyContent(FlexAlign.Center)
  }
}
```
