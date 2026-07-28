---
title: "MenuItemGroup"
upstream_id: "harmonyos-references/ts-basic-components-menuitemgroup"
catalog: "harmonyos-references"
content_hash: "ca3fd7973ee8"
synced_at: "2026-07-28T16:47:03.977813"
---

# MenuItemGroup

该组件用于展示MenuItem的分组，支持设置分组的标题和尾部信息，用于组织和管理菜单项的分类结构。适用于需要在菜单中按类别组织多个菜单项的场景，通过分组清晰地展示菜单的层次结构，提升菜单的可读性和用户体验。

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
| value | [MenuItemGroupOptions](#menuitemgroupoptions对象说明) | 否 | 设置MenuItemGroup的标题和尾部信息。 未设置时，不显示标题和尾部信息。 |

#### MenuItemGroupOptions对象说明

MenuItem分组的标题和尾部信息。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| header | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 否 | 是 | 设置分组的标题，显示在分组中所有菜单项的顶部。 未设置时，不显示标题。 |
| footer | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#resourcestr) | [CustomBuilder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-types#custombuilder8) | 否 | 是 | 设置分组的菜单页脚，显示在分组中所有菜单项的底部。 未设置时，不显示菜单页脚。 |

#### 示例

详见[Menu组件示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menu#示例)。
