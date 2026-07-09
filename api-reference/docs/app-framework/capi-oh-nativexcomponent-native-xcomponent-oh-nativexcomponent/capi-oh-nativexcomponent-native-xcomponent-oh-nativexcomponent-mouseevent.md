---
title: "OH_NativeXComponent_MouseEvent"
upstream_id: "harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent-mouseevent"
catalog: "harmonyos-references"
content_hash: "6483660c6a10"
synced_at: "2026-07-09T00:58:41.263453"
---

# OH_NativeXComponent_MouseEvent

```
typedef struct {...} OH_NativeXComponent_MouseEvent
```

#### 概述

鼠标事件。

起始版本： 9

相关模块： [OH_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)

所在头文件： [native_interface_xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float x | 点击触点相对于当前组件左上角的x轴坐标。单位：vp。 |
| float y | 点击触点相对于当前组件左上角的y轴坐标。单位：vp。 |
| float screenX | 点击触点相对于XComponent所在应用屏幕左上角的x轴坐标。单位：vp。 |
| float screenY | 点击触点相对于XComponent所在应用屏幕左上角的y轴坐标。单位：vp。 |
| int64_t timestamp | 当前鼠标事件的时间戳。触发事件时距离系统启动的时间间隔，单位纳秒。 |
| [OH_NativeXComponent_MouseEventAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h#oh_nativexcomponent_mouseeventaction) action | 当前鼠标事件动作。 |
| [OH_NativeXComponent_MouseEventButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h#oh_nativexcomponent_mouseeventbutton) button | 鼠标事件按键。 |
