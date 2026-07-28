---
title: "@Builder装饰器：自定义构建函数"
upstream_id: "harmonyos-references/ts-universal-builder-dynamic"
catalog: "harmonyos-references"
content_hash: "7f621d7524ea"
synced_at: "2026-07-28T16:47:56.654518"
---

# @Builder装饰器：自定义构建函数

@Builder装饰的函数也称为“自定义构建函数”，用于封装可复用的UI构建逻辑，可在自定义组件中多次调用，从而减少代码重复、提升UI构建的可维护性，适用于需要复用相同UI结构的场景。

开发指南参考：[@Builder装饰器：自定义构建函数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder)。

![](./img/note_3.0-zh-cn.png)

- 该装饰器从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### @Builder

const Builder: MethodDecorator

系统能力： SystemCapability.ArkUI.ArkUI.Full

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

示例：

```
@Entry
@Component
struct BuilderDemo {
  // @Builder装饰此函数，使其成为自定义构建函数，用于配置并构建Text组件
  @Builder
  showTextBuilder() {
    Text('Hello World')
      .fontSize(30)
      .fontWeight(FontWeight.Bold)
  }

  @Builder
  showTextValueBuilder(param: string) {
    Text(param)
      .fontSize(30)
      .fontWeight(FontWeight.Bold)
  }

  build() {
    Column() {
      // 无参数
      this.showTextBuilder()
      // 有参数
      this.showTextValueBuilder('Hello @Builder')
    }
  }
}
```
