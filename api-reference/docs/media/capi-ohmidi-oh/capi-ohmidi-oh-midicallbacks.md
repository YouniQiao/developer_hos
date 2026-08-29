---
title: "OH_MIDICallbacks"
upstream_id: "harmonyos-references/capi-ohmidi-oh-midicallbacks"
catalog: "harmonyos-references"
content_hash: "ed8b917979f0"
synced_at: "2026-08-29T18:17:22.947039"
---

# OH_MIDICallbacks

```
typedef struct {...} OH_MIDICallbacks
```

#### 概述

客户端回调结构体，用于监听MIDI设备的热插拔事件和关键服务错误，包含设备热插拔和错误处理的回调函数指针，适用于需要在应用中实时感知MIDI设备状态变化并处理异常的场景。

起始版本： 24

相关模块： [OHMIDI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohmidi)

所在头文件： [native_midi_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_MIDICallback_OnDeviceChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_midicallback_ondevicechange) onDeviceChange | 处理设备热插拔事件的回调函数指针。 **起始版本：** 24 |
| [OH_MIDICallback_OnError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_midicallback_onerror) onError | 处理服务运行过程中发生的关键错误的回调函数指针。 **起始版本：** 24 |
