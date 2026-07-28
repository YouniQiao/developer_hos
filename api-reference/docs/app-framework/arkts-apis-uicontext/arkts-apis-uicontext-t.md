---
title: "Types"
upstream_id: "harmonyos-references/arkts-apis-uicontext-t"
catalog: "harmonyos-references"
content_hash: "705caef26a86"
synced_at: "2026-07-28T16:41:13.091140"
---

# Types

本文件介绍ArkUI UIContext相关类型，包括自定义组件构建、UIObserver事件监听回调、节点标识、光标样式和上下文等类型。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### CustomBuilderWithId18+

type CustomBuilderWithId = (id: number) => void

组件属性、方法参数可使用CustomBuilderWithId类型来自定义UI描述，并且可以指定组件ID生成用户自定义组件。

元服务API： 从API version 18开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | number | 是 | 组件ID。 |

#### ClickEventListenerCallback12+

type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void

定义了用于在UIObserver中监听点击事件的回调类型。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | [ClickEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-click#clickevent) | 是 | 触发事件监听的点击事件的相关信息。 |
| node | [FrameNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode) | 否 | 触发事件监听的点击事件所绑定的组件。不传入该参数时，默认值为undefined。 |

#### PanListenerCallback19+

type PanListenerCallback = (event: GestureEvent, current: GestureRecognizer, node?: FrameNode) => void

Pan手势事件监听函数类型，可用于需要监听组件拖拽、平移等Pan手势交互的场景。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | [GestureEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gestureevent对象说明) | 是 | 触发事件监听的手势事件的相关信息。 |
| current | [GestureRecognizer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gesturerecognizer12) | 是 | 触发事件监听的手势识别器的相关信息。 |
| node | [FrameNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode) | 否 | 触发事件监听的手势事件所绑定的组件。不传入该参数时，默认值为undefined。 |

#### GestureEventListenerCallback12+

type GestureEventListenerCallback = (event: GestureEvent, node?: FrameNode) => void

定义了用于在UIObserver中监听手势的回调类型。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | [GestureEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-gesture-common#gestureevent对象说明) | 是 | 触发事件监听的手势事件的相关信息。 |
| node | [FrameNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode) | 否 | 触发事件监听的手势事件所绑定的组件。 |

#### NodeIdentity20+

type NodeIdentity = string | number

组件标识。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

| 类型 | 说明 |
| --- | --- |
| string | 指定组件ID，该ID通过通用属性[id](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-component-id#id)设置。 |
| number | 系统分配的节点唯一标识UniqueID，可通过[getUniqueId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode#getuniqueid12)获取。 |

#### NodeRenderStateChangeCallback20+

type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void

定义了用于在UIObserver中监控某个特定节点渲染状态的回调类型。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | [NodeRenderState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-e#noderenderstate20) | 是 | 节点当前的渲染状态，用于表示被监控节点是否处于可渲染状态。 |
| node | [FrameNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode) | 否 | 触发渲染状态变化监听的组件。当需要获取发生渲染状态变化的组件节点信息时，可通过该参数获取；如果组件被释放将返回null。不传入该参数时，默认值为undefined。 |

#### GestureListenerCallback20+

type GestureListenerCallback = (info: GestureTriggerInfo) => void

定义了用于在UIObserver中监控特定手势触发信息的回调类型。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | [GestureTriggerInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-i#gesturetriggerinfo20) | 是 | 交互触发的手势详情。 |

#### PointerStyle12+

type PointerStyle = pointer.PointerStyle

光标样式。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.MultimodalInput.Input.Pointer

| 类型 | 说明 |
| --- | --- |
| [pointer.PointerStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pointer#pointerstyle) | 光标样式。 |

#### Context12+

type Context = common.Context

当前组件所在Ability（应用组件）的上下文。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Ability.AbilityRuntime.Core

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| [common.Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-common#context) | Context的具体类型为当前Ability关联的Context对象。 |
