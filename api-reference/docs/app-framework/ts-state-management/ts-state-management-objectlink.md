---
title: "@ObjectLink：嵌套类对象属性变化"
upstream_id: "harmonyos-references/ts-state-management-objectlink"
catalog: "harmonyos-references"
content_hash: "cca8a4d1fe52"
synced_at: "2026-07-28T16:48:48.465375"
---

# @ObjectLink：嵌套类对象属性变化

@ObjectLink用于[状态管理V1](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview#状态管理v1)中，接收[@Observed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management-observed)装饰的类的实例，并与父组件中的数据源建立双向数据绑定，适用于在子组件中独立观察并监听嵌套类属性并触发UI刷新的场景。

开发指南参考：[@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)。

![](./img/note_3.0-zh-cn.png) 从API version 7开始，支持该装饰器。

#### @ObjectLink

const ObjectLink: PropertyDecorator

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

示例：

```
@Observed
class Info {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

@Component
struct Child {
  @ObjectLink info: Info; // @ObjectLink接收父组件@State变量
  build() {
    Column() {
      Text(`name: ${this.info.name}`)
    }
  }
}

@Entry
@Component
struct Index {
  @State info: Info = new Info('Tom');
  build() {
    Column() {
      Child({info: this.info}) // @State状态变量作为@ObjectLink的初始值
    }
  }
}
```
