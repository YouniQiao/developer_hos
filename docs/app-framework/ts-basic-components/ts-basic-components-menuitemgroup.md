---
title: "MenuItemGroup"
upstream_id: "harmonyos-references/ts-basic-components-menuitemgroup"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:39.858427"
---

# MenuItemGroup

该组件用来展示菜单MenuItem的分组。

![](./img/note_3.0-zh-cn.png)

- 该组件从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 该组件从API版本26.0.0开始支持[WithTheme](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-with-theme)。

#### 子组件

包含[MenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menuitem)子组件。

#### 接口

MenuItemGroup(value?: MenuItemGroupOptions)

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | [MenuItemGroupOptions](#menuitemgroupoptions对象说明) | 否 | 包含设置MenuItemGroup的标题和尾部显示信息。 未设置时，不显示标题和尾部信息。 |

#### MenuItemGroupOptions对象说明

菜单MenuItem分组的标题和尾部信息。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| header | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 否 | 是 | 设置对应group的标题显示信息。 未设置时，不显示标题信息。 |
| footer | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 否 | 是 | 设置对应group的尾部显示信息。 未设置时，不显示尾部信息。 |

#### 示例

详见[Menu组件示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menu#示例)。
