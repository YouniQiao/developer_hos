---
title: "状态管理V1装饰器参数"
upstream_id: "harmonyos-references/ts-state-management-v1-parameter"
catalog: "harmonyos-references"
content_hash: "4435c83a6e46"
synced_at: "2026-07-09T00:58:17.885423"
---

# 状态管理V1装饰器参数

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

#### ProvideOptions

[@Provide](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume)参数，用于配置@Provide的支持重写，具体例子可见[@Provide支持allowOverride参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-provide-and-consume#provide支持allowoverride参数)。

卡片能力： 从API version 11开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| allowOverride | string | 否 | 是 | 配置@Provide支持重写。默认不支持重写。 |
