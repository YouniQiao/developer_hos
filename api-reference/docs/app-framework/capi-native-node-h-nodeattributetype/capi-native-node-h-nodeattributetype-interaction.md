---
title: "ArkUI_NodeAttributeType（交互类相关属性）"
upstream_id: "harmonyos-references/capi-native-node-h-nodeattributetype-interaction"
catalog: "harmonyos-references"
content_hash: "3c5e8009877a"
synced_at: "2026-07-09T00:58:35.404731"
---

# ArkUI_NodeAttributeType（交互类相关属性）

```
enum ArkUI_NodeAttributeType
```

#### 概述

定义ArkUI在Native侧可以设置的交互类相关属性集合，包含触摸测试、响应热区、焦点控制、安全区域扩展、可见区域监听和走焦等属性设置。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h)

#### NODE_HIT_TEST_BEHAVIOR

```
NODE_HIT_TEST_BEHAVIOR = 26
```
 触摸测试类型，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 控制当前组件的触摸测试类型，参数类型[ArkUI_HitTestMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_hittestmode)，默认值为ARKUI_HIT_TEST_MODE_DEFAULT。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 控制当前组件的触摸测试类型，参数类型[ArkUI_HitTestMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_hittestmode)，默认值为ARKUI_HIT_TEST_MODE_DEFAULT。 |

#### NODE_DEFAULT_FOCUS

```
NODE_DEFAULT_FOCUS = 40
```
 默认焦点属性，支持属性设置，属性重置和属性获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 参数值为1表示是默认焦点，为0表示不是默认焦点。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 参数值为1表示是默认焦点，为0表示不是默认焦点。 |

#### NODE_RESPONSE_REGION

```
NODE_RESPONSE_REGION = 41
```
 触摸热区属性，支持属性设置，属性重置和属性获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

![](./img/note_3.0-zh-cn.png) 设置时data数据大小无数量限制，均可以设置成功，但仅支持获取到前20个。

参数：

| 参数项 | 描述 |
| --- | --- |
| .data[0].f32 | 触摸点相对于组件左上角的x轴坐标，单位为vp。 |
| .data[1].f32 | 触摸点相对于组件左上角的y轴坐标，单位为vp。 |
| .data[2].f32 | 触摸热区的宽度，单位为百分比。 |
| .data[3].f32 | 触摸热区的高度，单位为百分比。 |
| .data[4...].f32 | 可以设置多个手势响应区域，顺序和上述一致。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .data[0].f32 | 触摸点相对于组件左上角的x轴坐标，单位为vp。 |
| .data[1].f32 | 触摸点相对于组件左上角的y轴坐标，单位为vp。 |
| .data[2].f32 | 触摸热区的宽度，单位为百分比。 |
| .data[3].f32 | 触摸热区的高度，单位为百分比。 |
| .data[4...].f32 | 可以设置多个手势响应区域，顺序和上述一致。 |

#### NODE_OVERLAY

```
NODE_OVERLAY = 42
```
 定义遮罩属性，支持属性设置，属性重置和属性获取。开发者可以通过如下.string或.object设置浮层内容，.string有更高的优先级。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .string | 遮罩文本。 |
| .value[0]?.i32 | 可选值，浮层相对于组件的位置，参数类型[ArkUI_Alignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_alignment)，默认值为ARKUI_ALIGNMENT_TOP_START。 |
| .value[1]?.f32 | 可选值，浮层基于自身左上角的偏移量X，单位为vp，默认值为0vp。 |
| .value[2]?.f32 | 可选值，浮层基于自身左上角的偏移量Y，单位为vp，默认值为0vp。 |
| .value[3]?.i32 | 可选值，浮层的布局方向，参数类型[ArkUI_Direction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_direction)，默认值为ARKUI_DIRECTION_LTR。 在大部分场景下，这个参数都应该被设置成Auto，这个模式允许系统自动处理布局方向，如果在某些场景下需要保持特定的方向，设置这个属性为LTR（Left-to-Right）或者RTL（Right-to-Left）。从API version 21开始支持。 |
| .object | 用于overlay的节点树，参数类型为[ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h)，默认值为nullptr。从API version 21开始支持。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .string | 遮罩文本。 |
| .value[0].i32 | 浮层相对于组件的位置，参数类型[ArkUI_Alignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_alignment)，默认值为ARKUI_ALIGNMENT_TOP_START。 |
| .value[1].f32 | 浮层基于自身左上角的偏移量X，单位为vp。 |
| .value[2].f32 | 浮层基于自身左上角的偏移量Y，单位为vp。 |
| .value[3].i32 | 浮层的布局方向，参数类型[ArkUI_Direction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_direction)，默认值为ARKUI_DIRECTION_LTR。从API version 21开始支持。 |
| .object | 用于overlay的节点树，参数类型为[ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h)。从API version 21开始支持。 |

#### NODE_FOCUS_STATUS

```
NODE_FOCUS_STATUS = 66
```
 组件获取焦点属性，支持属性设置，属性获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

![](./img/note_3.0-zh-cn.png) 设置参数为0时，当前层级页面获焦组件失焦，焦点转移到根容器上。

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 参数值为1表示组件获焦，为0表示组件失焦。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 参数值为1表示组件获焦，为0表示组件失焦。 |

#### NODE_FOCUS_ON_TOUCH

```
NODE_FOCUS_ON_TOUCH = 84
```
 设置当前组件是否支持点击获焦能力，支持属性设置，属性重置和属性获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 参数值为1表示支持点击获焦，为0表示不支持点击获焦。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 参数值为1表示支持点击获焦，为0表示不支持点击获焦。 |

#### NODE_EXPAND_SAFE_AREA

```
NODE_EXPAND_SAFE_AREA = 92
```
 定义控制组件扩展其安全区域，支持属性设置，属性重置和属性获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0]?.u32 | 设置扩展安全区域的枚举值集合[ArkUI_SafeAreaType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_safeareatype)，例如：ARKUI_SAFE_AREA_TYPE_SYSTEM | ARKUI_SAFE_AREA_TYPE_CUTOUT。 |
| .value[1]?.u32 | 设置扩展安全区域的方向枚举值集合[ArkUI_SafeAreaEdge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_safeareaedge)，例如：ARKUI_SAFE_AREA_EDGE_TOP | ARKUI_SAFE_AREA_EDGE_BOTTOM。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].u32 | 扩展安全区域。 |
| .value[1].u32 | 扩展安全区域的方向。 |

#### NODE_VISIBLE_AREA_CHANGE_RATIO

```
NODE_VISIBLE_AREA_CHANGE_RATIO = 93
```
 定义控制组件触发可视区域面积变更事件的可视区域面积占组件本身面积的比例阈值。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[...].f32 | 占比数值，输入范围0-1。 |
| .?object | 参数类型为[ArkUI_VisibleAreaEventOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-visibleareaeventoptions)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[...].f32 | 占比数值。 |
| .object | 返回类型为[ArkUI_VisibleAreaEventOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-visibleareaeventoptions)。 |

#### NODE_FOCUS_BOX

```
NODE_FOCUS_BOX = 96
```
 设置当前组件系统焦点框样式。

作为属性设置方法参数[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 焦点框相对组件边缘的距离。正数代表外侧，负数代表内侧。不支持百分比。 |
| .value[1].f32 | 焦点框宽度。不支持负数和百分比。 |
| .value[2].u32 | 焦点框颜色。 |

#### NODE_TAB_STOP

```
NODE_TAB_STOP = 98
```
 控制焦点是否能停在当前组件，支持属性设置，属性重置和属性获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 参数值为1表示焦点能停在当前组件，为0表示焦点不能停在当前组件。默认值为0。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 参数值为1表示焦点停在当前组件，为0表示焦点未停在当前组件。 |

#### NODE_NEXT_FOCUS

```
NODE_NEXT_FOCUS = 101
```
 设置下一个走焦节点。

作为属性设置方法参数[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 走焦类型，定义在[ArkUI_FocusMove](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_focusmove)。 |
| .object | 下一个焦点。参数类型为[ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h)。 |

#### NODE_VISIBLE_AREA_APPROXIMATE_CHANGE_RATIO

```
NODE_VISIBLE_AREA_APPROXIMATE_CHANGE_RATIO = 102
```
 设置可见区域变化监听的参数。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 17

![](./img/note_3.0-zh-cn.png) 非实时回调，实际回调与预期间隔可能存在差别。两次可见区域回调的时间间隔不小于预期更新间隔。当开发者设置的预期间隔过小时，由系统负载决定实际回调间隔时间。当前接口的可见区域回调阈值默认包含0。例如，开发者设置回调阈值为[0.5]，实际生效的阈值为[0.0, 0.5]。

参数：

| 参数项 | 描述 |
| --- | --- |
| .object | 参数类型为[ArkUI_VisibleAreaEventOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-visibleareaeventoptions)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .object | 参数类型为[ArkUI_VisibleAreaEventOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-visibleareaeventoptions)。 |

#### NODE_ENABLE_CLICK_SOUND_EFFECT

```
NODE_ENABLE_CLICK_SOUND_EFFECT = 110
```
 设置组件是否启用默认点击音效。此功能仅在TV上生效，在其他设备上启用默认点击音效也不会播放音效。是否能够发音依赖设备声音相关的设置，如静音模式下不会播放音效。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 参数取值为1或0，1表示启用默认点击音效，0表示禁用默认点击音效，默认值为1。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 表示此节点是否启用了默认的点击音效。参数取值为1或0，1表示启用默认点击音效，0表示禁用默认点击音效。 |

#### NODE_HOVER_EFFECT

```
NODE_HOVER_EFFECT = 112
```
 定义组件被悬停时的效果。该属性可根据需要通过API进行设置、重置和获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 组件在悬停状态下的悬停效果。参数类型为[ArkUI_HoverEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_hovereffect)。默认值为ARKUI_HOVER_EFFECT_AUTO。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 组件在悬停状态下的悬停效果。参数类型为[ArkUI_HoverEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_hovereffect)。 |

#### NODE_FOCUS_SCOPE_ID

```
NODE_FOCUS_SCOPE_ID = 113
```
 将容器设置为具有特定标识符的焦点组，支持属性设置、属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .string | 焦点作用域标识符。 |
| .value[0].i32 | 该作用域是否为焦点组，默认值为0。取值范围为1或0。1表示设置为焦点组，0表示组件未被设置为焦点组。 |
| .value[1].i32 | 箭头键是否可以将焦点从焦点组内部移至外部，仅当isGroup为true时有效，默认值为1。取值范围为1或0。1表示箭头键可以将焦点从焦点组内部移至外部，0表示箭头键无法将焦点从焦点组内部移至外部。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .string | 焦点作用域标识符。 |
| .value[0].i32 | 该作用域是否为焦点组，默认值为0。取值范围为1或0。1表示设置为焦点组，0表示组件未被设置为焦点组。 |
| .value[1].i32 | 箭头键是否可以将焦点从焦点组内部移至外部，仅当isGroup为true时有效，默认值为1。取值范围为1或0。1表示箭头键可以将焦点从焦点组内部移至外部，0表示箭头键无法将焦点从焦点组内部移至外部。 |

#### NODE_FOCUS_SCOPE_PRIORITY

```
NODE_FOCUS_SCOPE_PRIORITY = 114
```
 设置组件在特定焦点作用域内的焦点优先级，支持属性设置、属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .string | 焦点作用域标识符。 |
| .value[0].i32 | 焦点作用域内获焦优先级。参数类型为[ArkUI_FocusPriority](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_focuspriority)。默认值为ARKUI_FOCUS_PRIORITY_AUTO。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .string | 焦点作用域标识符。 |
| .value[0].i32 | 焦点作用域优先级。参数类型为[ArkUI_FocusPriority](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_focuspriority)。 |

#### NODE_ON_CLICK_EVENT_DISTANCE_THRESHOLD

```
NODE_ON_CLICK_EVENT_DISTANCE_THRESHOLD = 115
```
 设置点击事件的距离阈值，支持属性设置、属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].f32 | 点击事件移动阈值。取值范围(0, +∞)。默认值为+∞，单位vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].f32 | 点击事件移动阈值。 |

#### NODE_RESPONSE_REGION_LIST

```
NODE_RESPONSE_REGION_LIST = 116
```
 设置组件事件的响应区域，支持属性设置，属性重置和属性获取接口。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

![](./img/note_3.0-zh-cn.png) 设置时data数据大小无数量限制，均可以设置成功，但仅支持获取到20个。获取到的data数组顺序与设置顺序可能存在差异。

参数：

| 参数项 | 描述 |
| --- | --- |
| .data[0].i32 | 适用于此响应区域的事件工具类型。参数类型为[ArkUI_ResponseRegionSupportedTool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_responseregionsupportedtool)。默认值：ARKUI_RESPONSE_REGIN_SUPPORTED_TOOL_ALL。 |
| .data[1].f32 | 触摸点相对于组件左上角的x轴坐标，默认值：0.0，单位为vp。 |
| .data[2].f32 | 触摸点相对于组件左上角的y轴坐标，默认值：0.0，单位为vp。 |
| .data[3].f32 | 触摸热区的宽度，默认值：100.0，单位为百分比。 |
| .data[4].f32 | 触摸热区的高度，默认值：100.0，单位为百分比。 |
| .data[5...].f32 | 可以设置多个手势响应区域，顺序和上述一致。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .data[0].i32 | 适用于此响应区域的事件工具类型。参数类型为[ArkUI_ResponseRegionSupportedTool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_responseregionsupportedtool)。默认值：ARKUI_RESPONSE_REGIN_SUPPORTED_TOOL_ALL。 |
| .data[1].f32 | 触摸点相对于组件左上角的x轴坐标，默认值：0.0，单位为vp。 |
| .data[2].f32 | 触摸点相对于组件左上角的y轴坐标，默认值：0.0，单位为vp。 |
| .data[3].f32 | 触摸热区的宽度，默认值：100.0，单位为百分比。 |
| .data[4].f32 | 触摸热区的高度，默认值：100.0，单位为百分比。 |
| .data[5...].f32 | 可以设置多个手势响应区域，顺序和上述一致。 |

#### NODE_MONOPOLIZE_EVENTS

```
NODE_MONOPOLIZE_EVENTS = 117
```
 定义独占事件属性，该属性可根据需要通过API进行设置、重置和获取。

作为属性设置方法参数、属性获取方法返回值[ArkUI_AttributeItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-attributeitem)格式如下。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| .value[0].i32 | 取值范围为1或0。1表示设置组件独占，0表示组件未设置独占属性。 |

返回：

| 类型 | 说明 |
| --- | --- |
| .value[0].i32 | 取值范围为1或0。1表示设置组件独占，0表示组件未设置独占属性。 |
