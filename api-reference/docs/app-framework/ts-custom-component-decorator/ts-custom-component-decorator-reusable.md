---
title: "@Reusable：组件复用"
upstream_id: "harmonyos-references/ts-custom-component-decorator-reusable"
catalog: "harmonyos-references"
content_hash: "4862b46ba7b1"
synced_at: "2026-07-28T16:47:58.813356"
---

# @Reusable：组件复用

为了降低反复创建销毁自定义组件带来的性能开销，开发者可以使用@Reusable装饰@Component装饰的自定义组件，达成组件复用的效果。开发指南参考：[@Reusable装饰器：组件复用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-reusable)。

![](./img/note_3.0-zh-cn.png)

- 本装饰器首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### @Reusable

const Reusable: ClassDecorator & ((options: ReusableOptions) => ClassDecorator)

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [ReusableOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-parameter#reusableoptions) | 否 | 可复用自定义组件的参数，用于配置内存优化策略，缺省时默认无内存优化策略。 **起始版本：** 26.0.0 |

示例：

```
class Message {
  value: string | undefined;

  constructor(value: string) {
    this.value = value;
  }
}

@Entry
@Component
struct Index {
  // 使用@State控制子组件的显示与隐藏
  @State switch: boolean = true;

  build() {
    Column() {
      Button('Hello')
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .onClick(() => {
          // 点击按钮切换子组件的显示状态
          this.switch = !this.switch;
        })
      if (this.switch) {
        Child({ message: new Message('Child') })
          // 设置reuseId，用于组件复用标识
          .reuseId('Child')
      }
    }
    .height('100%')
    .width('100%')
  }
}

// 使用@Reusable装饰器标记可复用组件，配合@Component使用
@Reusable
@Component
struct Child {
  @State message: Message = new Message('AboutToReuse');

  // 组件复用时的回调，接收传入的参数
  aboutToReuse(params: Record<string, ESObject>) {
    console.info('Recycle====Child==');
    this.message = params.message as Message;
  }

  build() {
    Column() {
      Text(this.message.value)
        .fontSize(30)
    }
    .borderWidth(1)
    .height(100)
  }
}
```
