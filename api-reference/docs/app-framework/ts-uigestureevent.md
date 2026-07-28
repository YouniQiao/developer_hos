---
title: "设置组件绑定的手势"
upstream_id: "harmonyos-references/ts-uigestureevent"
catalog: "harmonyos-references"
content_hash: "d9bc0f7920b5"
synced_at: "2026-07-28T16:43:03.051797"
---

# 设置组件绑定的手势

用于设置组件绑定的手势。可以通过UIGestureEvent对象动态添加、删除或清除组件上的手势，支持配置手势优先级、事件响应设置以及与子组件手势同时触发的并行手势，适用于运行时管理组件手势交互的场景。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 12开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。
- 在 [GestureEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gestureevent对象说明) 的 fingerList 元素中，手指索引编号与位置相对应，即 fingerList[index] 的 id 为 index。对于先按下但未参与当前手势触发的手指，fingerList 中对应的位置为空。建议优先使用 fingerInfos。

#### UIGestureEvent

用于设置组件绑定的手势，支持为组件动态添加普通手势或并行手势，并可按手势标志移除或清除已绑定的手势，适用于运行时调整组件手势交互的场景。

#### [h2]addGesture

addGesture<T>(gesture: GestureHandler<T>, priority?: GesturePriority, mask?: GestureMask): void

添加手势。与addParallelGesture相比，addGesture用于为组件添加普通手势；当需要绑定可与子组件手势同时触发的手势时，建议使用addParallelGesture。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gesture | [GestureHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesturehandler#gesturehandlert) | 是 | 要添加到当前组件的手势处理器对象，用于定义绑定到当前组件的普通手势行为。 |
| priority | [GesturePriority](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesturehandler#gesturepriority枚举说明) | 否 | 绑定手势的优先级。GesturePriority.NORMAL表示普通优先级，适用于按默认手势识别顺序处理的场景；GesturePriority.PRIORITY表示高优先级，适用于需要当前组件手势优先识别的场景。不传入时默认值为GesturePriority.NORMAL。 |
| mask | [GestureMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gesturemask枚举说明) | 否 | 事件响应设置。GestureMask.Normal表示按默认事件响应策略处理，适用于当前组件手势按默认规则响应的场景；GestureMask.IgnoreInternal表示忽略内部或子组件手势响应，适用于需要避免子组件手势参与响应的场景。不传入时默认值为GestureMask.Normal。 |

#### [h2]addParallelGesture

addParallelGesture<T>(gesture: GestureHandler<T>, mask?: GestureMask): void

绑定可与子组件手势同时触发的手势。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| gesture | [GestureHandler](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesturehandler#gesturehandlert) | 是 | 要绑定到当前组件的手势处理器对象，用于定义可与子组件手势同时触发的手势行为。 |
| mask | [GestureMask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gesturemask枚举说明) | 否 | 是否屏蔽子组件手势。GestureMask.Normal表示不屏蔽子组件的手势，按照默认手势识别顺序进行识别；GestureMask.IgnoreInternal表示屏蔽子组件的手势，包括子组件上系统内置的手势，适用于绑定并行手势时需要避免子组件手势参与识别的场景。不传入时默认值为GestureMask.Normal。 |

#### [h2]removeGestureByTag

removeGestureByTag(tag: string): void

移除该组件上通过modifier绑定的设置为指定标志的手势，适用于组件交互模式切换或业务状态变化时取消某个已标记手势的场景。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tag | string | 是 | 要移除的手势处理器标志，用于匹配并移除当前组件上通过 modifier 绑定且设置了该标志的手势。 |

#### [h2]clearGestures

clearGestures(): void

清除该组件上通过modifier绑定的所有手势，适用于组件交互模式切换或需要禁用全部动态手势的场景。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

#### 示例

见[动态手势设置](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-gesture-modifier)。
