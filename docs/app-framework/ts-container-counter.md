---
title: "Counter"
upstream_id: "harmonyos-references/ts-container-counter"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:25.308272"
---

# Counter

计数器组件，提供相应的增加或者减少的计数操作。

![](./img/note_3.0-zh-cn.png)

- 该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 该组件从API版本26.0.0开始支持[WithTheme](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-with-theme)。

#### 子组件

可以包含子组件。

#### 接口

Counter()

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### 属性

除支持[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes)外，还支持以下属性。

#### [h2]enableInc10+

enableInc(value: boolean)

设置“增加”按钮的禁用或使能。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | “增加”按钮禁用或使能。 默认值：true，true表示使能“增加”按钮，false表示禁用“增加”按钮。 |

#### [h2]enableDec10+

enableDec(value: boolean)

设置“减少”按钮的禁用或使能。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | “减少”按钮禁用或使能。 默认值：true，true表示使能“减少”按钮，false表示禁用“减少”按钮。 |

#### 事件

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events)外，还支持以下事件：

#### [h2]onInc

onInc(event: VoidCallback)

监听数值增加事件。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | [VoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#voidcallback12) | 是 | Counter数值增加的回调函数。 |

#### [h2]onDec

onDec(event: VoidCallback)

监听数值减少事件。

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | [VoidCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#voidcallback12) | 是 | Counter数值减少的回调函数。 |

#### 示例

该示例展示了Counter组件的基本使用方法。点击+、-按钮可以修改value值。

```
// xxx.ets
@Entry
@Component
struct CounterExample {
  @State value1: number = 0;
  @State value2: number = 0;

  build() {
    Column({ space: 50 }) {
      Counter() {
        Text(this.value1.toString())
      }
      .onInc(() => {
        this.value1++;
      })
      .onDec(() => {
        this.value1--;
      })

      Counter() {
        Text(this.value2.toString())
      }
      .onInc(() => {
        this.value2++;
      })
      .onDec(() => {
        this.value2--;
      })
      .enableInc(true)
      .enableDec(false)
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```
 ![](./img/zh-cn_image_0000002626070684.gif)
