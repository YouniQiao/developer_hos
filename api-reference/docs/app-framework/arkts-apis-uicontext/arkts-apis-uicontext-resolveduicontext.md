---
title: "Class (ResolvedUIContext)"
upstream_id: "harmonyos-references/arkts-apis-uicontext-resolveduicontext"
catalog: "harmonyos-references"
content_hash: "6c6680d4cc86"
synced_at: "2026-07-28T16:41:10.711445"
---

# Class (ResolvedUIContext)

ResolvedUIContext用于表示通过[resolveUIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#resolveuicontext22)获取到的UIContext实例及其解析策略，适用于需要获取并识别UIContext来源策略的场景。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 示例效果请以真机运行为准，当前DevEco Studio预览器不支持。
- ResolvedUIContext继承自[UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)，并新增strategy属性用于记录该UIContext实例的解析策略。
- 本模块接口仅可在Stage模型下使用。

#### 属性

元服务API： 从API version 22开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| strategy | [ResolveStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-e#resolvestrategy22) | 否 | 否 | [UIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext)的解析策略，用于标识[resolveUIContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#resolveuicontext22)返回该UIContext实例时采用的解析规则。 |
