---
title: "@State：组件内状态"
upstream_id: "harmonyos-references/ts-state-management-state"
catalog: "harmonyos-references"
content_hash: "07cb81f35971"
synced_at: "2026-07-28T16:48:49.208433"
---

# @State：组件内状态

@State用于[状态管理V1](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview#状态管理v1)，将自定义组件内的普通变量转变为状态变量，当状态变量变化时，触发组件内UI重新渲染。适用于需要在组件内管理可变状态的场景。

开发指南参考：[@State装饰器：组件内状态](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state)。

![](./img/note_3.0-zh-cn.png) 从API version 7开始，支持该装饰器。

#### @State

const State: PropertyDecorator

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

示例：

```
@Entry
@Component
struct StateExample {
  @State count: number = 0; // 状态变量

  build() {
    Column() {
      Text(`${this.count}`)
    }
  }
}
```
