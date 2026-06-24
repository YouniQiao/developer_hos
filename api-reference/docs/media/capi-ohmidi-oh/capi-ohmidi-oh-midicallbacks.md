---
title: "OH_MIDICallbacks"
upstream_id: "harmonyos-references/capi-ohmidi-oh-midicallbacks"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:00.631930"
---

# OH_MIDICallbacks

```
typedef struct {...} OH_MIDICallbacks
```

#### 概述

客户端回调结构体，包含设备变化和错误处理的回调函数。

起始版本： 24

相关模块： [OHMIDI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohmidi)

所在头文件： [native_midi_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_MIDICallback_OnDeviceChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_midicallback_ondevicechange) onDeviceChange | 处理设备热插拔事件的回调。 **起始版本：** 24 |
| [OH_MIDICallback_OnError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_midicallback_onerror) onError | 处理关键服务错误的回调。 **起始版本：** 24 |
