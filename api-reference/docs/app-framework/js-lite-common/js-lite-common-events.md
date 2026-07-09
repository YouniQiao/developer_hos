---

title: "通用事件"
upstream_id: "harmonyos-references/js-lite-common-events"
catalog: "harmonyos-references"
synced_at: "2026-07-09T00:58:26.605511"
content_hash: "2132d2763316"
---


# 通用事件

#### 事件说明

相对于私有事件，大部分组件都可以绑定如下事件。

| 名称 | 参数 | 描述 |
| --- | --- | --- |
| click | - | 点击动作触发该事件。 |
| longpress | - | 长按动作触发该事件。 |
| swipe5+ | SwipeEvent | 组件上快速滑动后触发。 |

#### BaseEvent

基础事件类型。

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| type | string | 当前事件的类型，比如click、longpress等。 |
| timestamp | number | 该事件触发时的时间戳。 单位：ms |
| deviceId8+ | number | 触发该事件的设备ID信息。 |
| target12+ | [Target](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-common-events#target对象6) | 触发该事件的目标对象。 |

#### SwipeEvent

继承自[BaseEvent](#baseevent)。

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| direction | string | 滑动方向，可能值有： 1. left：向左滑动； 2. right：向右滑动； 3. up：向上滑动； 4. down：向下滑动。 |
