---
title: "@Styles：组件重用样式"
upstream_id: "harmonyos-references/ts-custom-component-decorator-styles"
catalog: "harmonyos-references"
content_hash: "e143c03aecb9"
synced_at: "2026-07-28T16:47:59.176244"
---

# @Styles：组件重用样式

@Styles装饰器用于将多条样式设置提炼为一个方法，在组件声明处直接调用，实现自定义样式的定义与复用。适用于多个组件需要共享相同样式、减少重复代码、提升样式一致性维护效率的场景。

开发指南参考：[@Styles装饰器：定义组件重用样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-style)。

![](./img/note_3.0-zh-cn.png)

- 本装饰器首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### @Styles

const Styles: MethodDecorator

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

示例：

```
@Entry
@Component
struct FancyUse {
  @State heightValue: number = 50;

  // 使用@Styles装饰器定义可复用的样式方法
  @Styles
  fancy() {
    .height(this.heightValue)
    .backgroundColor(Color.Blue)
    .onClick(() => {
      this.heightValue = 100;
    })
  }

  build() {
    Column() {
      Button('change height')
        // 调用@Styles定义的fancy样式方法，应用复用样式
        .fancy()
    }
    .height('100%')
    .width('100%')
  }
}
```
