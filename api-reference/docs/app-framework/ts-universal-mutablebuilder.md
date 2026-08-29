---
title: "mutableBuilder: 实现全局@Builder动态更新"
upstream_id: "harmonyos-references/ts-universal-mutablebuilder"
catalog: "harmonyos-references"
content_hash: "ea78df4627df"
synced_at: "2026-08-29T18:15:05.529836"
---

# mutableBuilder: 实现全局@Builder动态更新

使用mutableBuilder封装全局[@Builder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-builder-dynamic)，实现全局@Builder的动态切换。该功能适用于需要在运行时根据不同条件替换全局@Builder内容的场景（如根据状态切换不同的UI构建逻辑），提升了UI构建的灵活性。开发指南见[mutableBuilder：实现全局@Builder动态更新](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mutablebuilder)。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 22开始支持。
- 本模块接口仅可在Stage模型下使用。
- 后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### mutableBuilder

mutableBuilder<Args extends Object[]>(builder: BuilderCallback): MutableBuilder<Args>

mutableBuilder是一个泛型函数，它返回一个MutableBuilder对象，只接受一个全局的@Builder函数作为其参数。

该函数返回的[MutableBuilder](#mutablebuilder-1)对象中，builder属性方法只能在自定义组件内部使用。

元服务API： 从API version 22开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | [BuilderCallback](#buildercallback) | 是 | @Builder装饰的全局函数，作为mutableBuilder封装的目标构建函数，用于实现全局@Builder的动态切换。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [MutableBuilder](#mutablebuilder-1) MutableBuilder的实例，用于对[全局@Builder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder#全局自定义构建函数)进行赋值和传递，实现全局@Builder的动态切换。 **示例：** 
```
class TextContent {
  text: string = '';
}

@Builder
function textBuilder(textContent: TextContent) {
  Text(textContent.text)
    .margin(20)
}

@Builder
function buttonBuilder(buttonContent: TextContent) {
  Button(buttonContent.text)
    .margin(20)
}

let counter: number = 1;

@Entry
@ComponentV2
struct MyApp {
  @Local message: string = 'init';
  @Local switchingBuilder: MutableBuilder<[TextContent]> = mutableBuilder(textBuilder);
  build() {
    Column() {
      this.switchingBuilder.builder({ text: this.message })
      Button('Click to change')
        .onClick(() => {
          counter++; // 每次点击按钮修改counter来动态改变全局@Builder
          if (counter % 2 === 0) {
            this.message += 'B';
            this.switchingBuilder = mutableBuilder(buttonBuilder); // textBuilder ---> buttonBuilder
          } else {
            this.message += 'T';
            this.switchingBuilder = mutableBuilder(textBuilder);   // buttonBuilder ---> textBuilder
          }
        })
    }.position({x: 120, y: 60})
  }
}
```
 #### MutableBuilder class MutableBuilder extends WrappedBuilder { } 该类用于封装并实现[全局@Builder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-builder#全局自定义构建函数)的动态切换。MutableBuilder继承自[WrappedBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-wrapbuilder#wrappedbuilder)，其泛型参数Args extends Object[]应传入@Builder函数的参数类型列表。[mutableBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-mutablebuilder)函数返回MutableBuilder对象。 **元服务API：** 从API version 22开始，该接口支持在元服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full #### BuilderCallback type BuilderCallback = (...args: Args) => void BuilderCallback是全局@Builder函数的类型别名，作为mutableBuilder函数的入参类型，用于指定待封装的全局@Builder函数。 **元服务API：** 从API version 22开始，该接口支持在元服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full **参数：** 参数名 | 类型 | 必填 | 说明 |
| ...args | Args | 否 | 全局@Builder函数的入参。...args采用剩余参数语法，允许传入任意数量的参数，Args表示这些参数的类型列表。不传入参数时，默认接收空参数列表，@Builder函数以无参形式调用。 |

示例：

```
@Builder
function myBuilder(value: string, size: number) {
  Text(value)
    .fontSize(size)
}

let builderVar: MutableBuilder<[string, number]> = mutableBuilder(myBuilder); // 声明builderVar的类型为MutableBuilder<[string, number]>
```
