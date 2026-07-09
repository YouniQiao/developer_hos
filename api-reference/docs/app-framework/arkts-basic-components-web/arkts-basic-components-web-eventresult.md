---
title: "Class (EventResult)"
upstream_id: "harmonyos-references/arkts-basic-components-web-eventresult"
catalog: "harmonyos-references"
content_hash: "2e7e627b49dd"
synced_at: "2026-07-09T00:58:53.430488"
---

# Class (EventResult)

EventResult是ArkWeb Kit中用于通知Web组件同层事件消费结果的类。在同层嵌入场景下，应用与Web组件共同暴露在事件响应链EventResult允许应用向Web组件声明自身是否消费了触摸或鼠标事件，从而决定Web组件是否继续处理该事件。当应用设置消费结果为true时，表示应用已消费该事件，Web组件将不再消费；当设置为false时，表示应用不消费该事件，事件将由Web组件消费。EventResult触摸事件（[TouchType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#touchtype)）和鼠标事件（[MouseAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#mouseaction8)，仅限左中右按键）的消费结果设置，通过[MouseButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#mousebutton8)定义鼠标按键的类型，适用于应用与Web组件同层交互的事件协调场景。

触摸事件示例代码参考[onNativeEmbedGestureEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onnativeembedgestureevent11)事件。

鼠标事件示例代码参考[onNativeEmbedMouseEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onnativeembedmouseevent20)事件。

![](./img/note_3.0-zh-cn.png)

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 12开始支持。
- 示例效果请以真机运行为准。

#### constructor12+

constructor()

EventResult的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### setGestureEventResult12+

setGestureEventResult(result: boolean): void

设置手势事件消费结果。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | boolean | 是 | 是否消费该手势事件。 true表示消费该手势事件，false表示不消费该手势事件。 传入null或undefined时为true。 |

示例：

请参考[onNativeEmbedGestureEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onnativeembedgestureevent11)事件。

#### setGestureEventResult14+

setGestureEventResult(result: boolean, stopPropagation: boolean): void

设置手势事件消费结果。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | boolean | 是 | 是否消费该手势事件。 true表示消费该手势事件，false表示不消费该手势事件。 传入null或undefined时为true。 |
| stopPropagation | boolean | 是 | 是否阻止冒泡，在result为true时生效。 true表示阻止冒泡，false表示不阻止冒泡。 传入null或undefined时为true。 |

示例：

请参考[onNativeEmbedGestureEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onnativeembedgestureevent11)事件。

#### setMouseEventResult20+

setMouseEventResult(result: boolean, stopPropagation?: boolean): void

设置鼠标事件消费结果。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| result | boolean | 是 | 是否消费该鼠标事件。 true表示消费该鼠标事件，false表示不消费该鼠标事件。 传入null或undefined时为true。 |
| stopPropagation | boolean | 否 | 是否阻止冒泡，在result为true时生效。 true表示阻止冒泡，false表示不阻止冒泡。 传入null或undefined时为true。 默认值：true。 |

示例：

请参考[onNativeEmbedMouseEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onnativeembedmouseevent20)事件。
