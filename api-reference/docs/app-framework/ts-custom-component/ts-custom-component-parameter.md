---
title: "自定义组件参数"
upstream_id: "harmonyos-references/ts-custom-component-parameter"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:48:50.521252"
---

# 自定义组件参数

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

#### ComponentOptions

自定义组件参数，用于配置是否支持组件冻结。

系统能力： SystemCapability.ArkUI.ArkUI.Full

模型约束： 此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| freezeWhenInactive | boolean | 否 | 否 | 配置自定义组件支持组件冻结。true：开启组件冻结，false：不开启组件冻结。当开发者未指定ComponentOptions时，freezeWhenInactive将使用false作为默认值。 从API version 11开始，支持通过此参数配置[@Component](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#component)组件冻结。例子可见[自定义组件冻结](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-components-freeze)。 从API version 12开始，支持通过此参数配置[@ComponentV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#componentv2)组件冻结。例子可见[自定义组件冻结](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-components-freezev2)。 **卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。 **元服务API：** 从API version 12开始，该接口支持在元服务中使用。 |
| reusePool | [ReusePoolOwnership](#reusepoolownership) | 否 | 是 | 在自定义组件上配置全局复用池的类型，如果不传入，则全局复用池不会生效。 **起始版本：** 26.0.0 **卡片能力：** 从API版本26.0.0开始，该接口支持在ArkTS卡片中使用。 **元服务API：** 从API版本26.0.0开始，该接口支持在元服务中使用。 |
| poolAccepts | Function[] | 否 | 是 | 自定义组件全局复用池接纳的自定义组件名称，reusePool参数被设置时，poolAccepts必须为非空数组。poolAccepts和reusePool都没有赋值时，全局复用不生效。 **起始版本：** 26.0.0 **卡片能力：** 从API版本26.0.0开始，该接口支持在ArkTS卡片中使用。 **元服务API：** 从API版本26.0.0开始，该接口支持在元服务中使用。 |

#### ReusableOptions

可复用自定义组件的参数，用于配置内存优化策略。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| memoryOptimizationStrategy | [ReusableMemOptStrategy](#reusablememoptstrategy) | 否 | 是 | 可复用自定义组件的内存优化策略。该参数在创建可复用自定义组件时设定，不支持动态修改。 默认值：[DEFAULT](#reusablememoptstrategy) |

#### ReusableMemOptStrategy

可复用自定义组件内存优化策略枚举。

起始版本： 26.0.0

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 名称 | 值 | 说明 |
| --- | --- | --- |
| DEFAULT | 0 | 无内存优化策略。 |
| ENABLE_AUTO_CACHE_OPTIMIZATION | 1 起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从API版本26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 类型 | 说明 |
| --- | --- |
| 'shared' | 拥有@Component/@ComponentV2类的所有实例共享单个复用池实例。 |
| 'perInstance' | 拥有@Component/@ComponentV2的每个实例都有自己的复用池实例。 |
