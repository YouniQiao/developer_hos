---
title: "@Param：组件外部输入"
upstream_id: "harmonyos-references/ts-state-management-param"
catalog: "harmonyos-references"
content_hash: "2930acbe4635"
synced_at: "2026-07-28T16:48:50.903677"
---

# @Param：组件外部输入

@Param在[状态管理V2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview#状态管理v2)中用于接收外部输入，实现父子组件之间的单向数据同步。适用于父组件需要向子组件单向传递状态数据的场景，能够简化组件间通信，保证数据流向清晰。@Param装饰的变量不允许在组件内部直接修改，如需子组件向父组件同步数据，请配合[@Event](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management-event)使用。

开发指南参考：[@Param：组件外部输入](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-param)。

![](./img/note_3.0-zh-cn.png) 从API version 12开始，支持该装饰器。

#### @Param

const Param: PropertyDecorator

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

卡片能力： 从API version 23开始，该接口支持在ArkTS卡片中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

示例：

```
@ComponentV2
struct Child {
  // 使用@Param装饰器接收父组件传入的参数，实现父子组件单向数据同步
  @Param message: string = '';
  build() {
    Column() {
      Text(`Child message: ${this.message}`)
    }
  }
}
@Entry
@ComponentV2
struct Index {
  @Local message: string = 'Hello';
  build() {
    Column() {
      Text(`Parent message: ${this.message}`)
      Button('change message')
        // 设置点击事件，修改message的值，变更会单向同步到子组件
        .onClick(() => {
          this.message = 'Hello World';
        })
      // 创建子组件Child，将message传入子组件的@Param变量
      Child({ message: this.message })
    }
  }
}
```
