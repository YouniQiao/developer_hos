---
title: "AbilityBase"
upstream_id: "harmonyos-references/capi-abilitybase"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:46:57.439819"
---

# AbilityBase

#### 概述

作为Ability Kit的基础定义模块，AbilityBase提供了组件启动参数[Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-want-h)的定义与接口，可以用于应用组件间的信息传递。

系统能力： SystemCapability.Ability.AbilityBase

起始版本： 15

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [ability_base_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ability-base-common-h) | 声明AbilityBase定义的相关错误码。 |
| [want.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-want-h) | Want是对象间信息传递的载体, 可以用于应用组件间的信息传递。 Want的使用场景之一是作为startAbility的参数, 其包含了指定的启动目标, 以及启动时需携带的相关数据, 如bundleName和abilityName字段分别指明目标Ability所在应用的Bundle名称以及对应包内的Ability名称。当Ability A需要启动Ability B并传入一些数据时, 可使用Want作为载体将这些数据传递给Ability B。 |
