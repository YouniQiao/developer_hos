---
title: "通用事件"
upstream_id: "harmonyos-references/js-lite-common-events"
catalog: "harmonyos-references"
content_hash: "bae93022ca0e"
synced_at: "2026-07-28T16:49:06.955570"
---

# 通用事件

#### 事件说明

相对于私有事件，支持通用事件的组件可以绑定点击、长按、滑动等通用事件，用于响应用户基础交互操作，具体支持情况请以对应组件文档为准。

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| click | - | 点击动作触发该事件。 |
| longpress | - | 长按动作触发该事件。 |
| swipe5+ | [SwipeEvent](#swipeevent) | 组件上快速滑动后触发。 |

#### BaseEvent

BaseEvent是基础事件类型，用于描述事件类型、触发时间、设备信息和目标对象等通用事件基础信息，便于在事件处理过程中获取统一的事件上下文。

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| type | string | 当前事件的类型，比如click、longpress等。 |
| timestamp | number | 该事件触发时的时间戳。 单位：ms |
| deviceId8+ | number | 触发该事件的设备ID信息。 |
| target12+ | [Target](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-events#target对象6) | 触发该事件的目标对象。 |

#### SwipeEvent

SwipeEvent继承自[BaseEvent](#baseevent)，用于描述组件上快速滑动触发的事件信息，包含滑动方向属性，适用于处理组件滑动交互场景。

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| direction | string | 滑动方向，可能值有： 1. left：向左滑动； 2. right：向右滑动； 3. up：向上滑动； 4. down：向下滑动。 |
