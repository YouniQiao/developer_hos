---
title: "wrapBuilder"
upstream_id: "harmonyos-references/ts-universal-wrapbuilder"
catalog: "harmonyos-references"
content_hash: "e9947d91fa92"
synced_at: "2026-07-28T16:47:59.393631"
---

# wrapBuilder

wrapBuilder用于封装全局[@Builder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-builder-dynamic#builder)，可以将全局@Builder函数作为参数传递，实现按引用传递和动态调用，提升代码复用性。

开发指南见：[wrapBuilder：封装全局@Builder](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-wrapbuilder)。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 11开始支持。
- 本模块接口仅可在Stage模型下使用。
- 后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### wrapBuilder

wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>

wrapBuilder是一个模板函数，返回一个WrappedBuilder对象。模板参数Args extends Object[]是需要封装的@Builder函数的参数列表。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | (...args: Args) => void | 是 | @Builder装饰的全局函数，传入后将被封装为WrappedBuilder对象。函数参数args为该@Builder函数所需的参数列表。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [WrappedBuilder](#wrappedbuilder) @Builder函数的包装类对象，用于将全局@Builder函数及其参数封装为可按引用传递、支持动态调用的对象。 **示例：** 
```
@Builder
function myBuilder(value: string, size: number) {
  Text(value)
    .fontSize(size)
}

// 使用wrapBuilder封装myBuilder
let builderVar: WrappedBuilder<[string, number]> = wrapBuilder(myBuilder);
```
 #### WrappedBuilder WrappedBuilder是@Builder函数的包装类，用于封装全局@Builder函数及其参数，实现按引用传递和动态调用。模板参数Args extends Object[]应传入@Builder函数的参数类型列表。 #### [h2]属性 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 **系统能力：** SystemCapability.ArkUI.ArkUI.Full 名称 | 类型 | 只读 | 可选 | 说明 |
| builder | (...args: Args) => void | 否 | 否 | @Builder装饰的全局函数。 |

#### [h2]constructor

constructor(builder: (...args: Args) => void)

WrappedBuilder的构造函数。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | (...args: Args) => void | 是 | @Builder装饰的全局函数，作为构造参数用于初始化WrappedBuilder实例。函数参数args为该@Builder函数所需的参数列表。 |

示例：

```
@Builder
function myBuilder(value: string, size: number) {
  Text(value)
    .fontSize(size)
}

// 使用WrappedBuilder封装myBuilder
let builderVar: WrappedBuilder<[string, number]> = new WrappedBuilder<[string, number]>(myBuilder);
```
