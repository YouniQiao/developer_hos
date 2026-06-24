---
title: "wrapBuilder"
upstream_id: "harmonyos-references/ts-universal-wrapbuilder"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:50.746007"
---

# wrapBuilder

使用wrapBuilder封装全局@Builder，可以帮助维护代码。开发指南见[wrapBuilder：封装全局@Builder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrapbuilder)。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 11开始支持。
- 本模块接口仅可在Stage模型下使用。
- 后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### wrapBuilder

wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>

wrapBuilder是一个模板函数，返回一个WrappedBuilder对象。模板参数Args extends Object[]是需要包装的builder函数的参数列表。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | (...args: Args) => void | 是 | @Builder装饰的全局函数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [WrappedBuilder](#wrappedbuilder) WrappedBuilder对象。 **示例：** 
```
@Builder
function MyBuilder(value: string, size: number) {
  Text(value)
    .fontSize(size)
}
// 使用wrapBuilder封装MyBuilder
let builderVar: WrappedBuilder<[string, number]> = wrapBuilder(MyBuilder);
```
 #### WrappedBuilder @Builder函数的包装类。模板参数Args extends Object[]应传入@Builder函数的参数类型列表。 #### [h2]属性 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full 名称 | 类型 | 只读 | 可选 | 说明 |
| builder | (...args: Args) => void | 否 | 否 | @Builder修饰的全局函数。 |

#### [h2]constructor

constructor(builder: (...args: Args) => void)

WrappedBuilder的构造函数。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | (...args: Args) => void | 是 | @Builder装饰的全局函数。 |

示例：

```
@Builder
function MyBuilder(value: string, size: number) {
  Text(value)
    .fontSize(size)
}
// 使用WrappedBuilder封装MyBuilder
let builderVar: WrappedBuilder<[string, number]> = new WrappedBuilder<[string, number]>(MyBuilder);
```
