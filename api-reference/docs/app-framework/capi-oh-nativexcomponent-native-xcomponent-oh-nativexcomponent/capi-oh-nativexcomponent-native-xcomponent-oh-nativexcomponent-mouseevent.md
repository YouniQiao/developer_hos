---
title: "OH_NativeXComponent_MouseEvent"
upstream_id: "harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent-mouseevent"
catalog: "harmonyos-references"
content_hash: "1c34230e7611"
synced_at: "2026-07-28T16:49:31.271612"
---

# OH_NativeXComponent_MouseEvent

```
typedef struct {...} OH_NativeXComponent_MouseEvent
```

#### 概述

鼠标事件。该结构体用于在XComponent鼠标事件回调中携带鼠标事件的详细信息，包括鼠标触点的坐标、事件触发时间、鼠标动作类型以及按键信息等，适用于需要处理鼠标交互的场景。

起始版本： 9

相关模块： [OH_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)

所在头文件： [native_interface_xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float x | 鼠标触点相对于当前组件左上角的x轴坐标。单位：vp。 |
| float y | 鼠标触点相对于当前组件左上角的y轴坐标。单位：vp。 |
| float screenX | 鼠标触点相对于XComponent所在应用屏幕左上角的x轴坐标。单位：vp。 |
| float screenY | 鼠标触点相对于XComponent所在应用屏幕左上角的y轴坐标。单位：vp。 |
| int64_t timestamp | 当前鼠标事件的时间戳。触发事件时距离系统启动的时间间隔，单位：ns。 |
| [OH_NativeXComponent_MouseEventAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h#oh_nativexcomponent_mouseeventaction) action | 当前鼠标事件动作。取值参考OH_NativeXComponent_MouseEventAction，包括按下、释放、移动等动作类型。 |
| [OH_NativeXComponent_MouseEventButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h#oh_nativexcomponent_mouseeventbutton) button | 触发当前鼠标事件的按键。取值参考OH_NativeXComponent_MouseEventButton，包括左键、右键、中键、后退键、前进键等按键类型。 |
