---
title: "@Track：class对象属性级更新"
upstream_id: "harmonyos-references/ts-state-management-track"
catalog: "harmonyos-references"
content_hash: "ad489648bf11"
synced_at: "2026-07-28T16:48:49.624490"
---

# @Track：class对象属性级更新

@Track用于[状态管理V1](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview#状态管理v1)中，通过装饰class对象的指定属性实现属性级精准观测。当被@Track装饰的属性发生变化时，系统仅更新依赖该属性的UI组件，从而减少不必要的UI重渲染。适用于class对象包含较多属性，需要减少冗余UI刷新、优化渲染性能的场景。

开发指南参考：[@Track装饰器：class对象属性级更新](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-track)。

![](./img/note_3.0-zh-cn.png) 该装饰器从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### @Track

const Track: PropertyDecorator

模型约束： 此接口仅可在Stage模型下使用。

卡片能力： 从API version 11开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

示例：

```
class Info {
  // @Track添加属性精准观测能力
  @Track id: number;
  age: string = '';

  constructor(id: number) {
    this.id = id;
  }
}

@Entry
@Component
struct Index {
  @State info: Info = new Info(1);

  build() {
    Column() {
      Text(`id: ${this.info.id}`)
      Button('change')
        .onClick(() => {
          // 修改@Track属性能触发UI更新
          this.info.id++;
        })
    }
  }
}
```
