---
title: "属性操作工具"
upstream_id: "harmonyos-references/ts-universal-attributes-modifierutils"
catalog: "harmonyos-references"
content_hash: "aa40f333ace5"
synced_at: "2026-07-09T00:57:43.306880"
---

# 属性操作工具

#### ModifierUtils

ModifierUtils是一个[属性修改器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-extension-attributemodifier)工具类，用于给开发者提供属性修改和属性操作的方法。例如，可以判断给定的实例是否为指定组件类型。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

#### [h2]isInstanceOf>

isInstanceOf<T extends CommonMethod<T>>(instance: T, componentName: string): boolean

检查给定的实例是否为指定组件类型。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| instance | T | 是 | 要检查的实例，T为继承自[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes)（CommonMethod）的组件类型。 |
| componentName | string | 是 | 要检查的组件类型名称。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 返回该实例是否为指定的组件类型，如果实例是指定的组件类型，则返回true；否则返回false。 |

示例：

```
// xxx.ets
// 点击按钮，并检查日志，判断组件是否进入独有分支
import { ModifierUtils } from '@kit.ArkUI';

class MyModifier implements AttributeModifier<TextAttribute | ButtonAttribute> {
  isDark: boolean = false

  constructor(dark?: boolean) {
    this.isDark = dark ?? false;
  }

  applyNormalAttribute(instance: TextAttribute | ButtonAttribute): void {
    if (ModifierUtils.isInstanceOf(instance, 'Text')) {
      console.info('This is TextAttribute')
      const textInstance = instance as TextAttribute
      if (this.isDark) {
        textInstance.backgroundColor(Color.Blue)
      } else {
        textInstance.backgroundColor(Color.Green)
      }
    } else if (ModifierUtils.isInstanceOf(instance, 'Button')) {
      console.info('This is ButtonAttribute')
      const buttonInstance = instance as ButtonAttribute
      if (this.isDark) {
        buttonInstance.type(ButtonType.Circle)
        buttonInstance.backgroundColor(Color.Blue)
      } else {
        buttonInstance.type(ButtonType.Normal)
        buttonInstance.backgroundColor(Color.Green)
      }
    }
  }
}

@Entry
@Component
struct MultiComponentAttributeDemo {
  @State myModifier: MyModifier = new MyModifier();

  build() {
    Column() {
      Text('Text')
        .fontSize(50)
        .attributeModifier(this.myModifier)
        .onClick(() => {
          this.myModifier.isDark = !this.myModifier.isDark;
        })
      Button('Button')
        .attributeModifier(this.myModifier)
        .onClick(() => {
          this.myModifier.isDark = !this.myModifier.isDark;
        })
    }
    .justifyContent(FlexAlign.SpaceEvenly)
    .width('100%')
    .height('50%')
  }
}
```
