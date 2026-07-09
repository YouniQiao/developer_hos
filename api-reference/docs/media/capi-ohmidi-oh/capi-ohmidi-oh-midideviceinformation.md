---
title: "OH_MIDIDeviceInformation"
upstream_id: "harmonyos-references/capi-ohmidi-oh-midideviceinformation"
catalog: "harmonyos-references"
content_hash: "0bedded9332b"
synced_at: "2026-07-09T01:00:12.628393"
---

# OH_MIDIDeviceInformation

```
typedef struct {...} OH_MIDIDeviceInformation
```

#### 概述

设备信息结构体。存储设备ID等相关信息。

起始版本： 24

相关模块： [OHMIDI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohmidi)

所在头文件： [native_midi_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int64_t midiDeviceId | MIDI设备的唯一标识符。 **起始版本：** 24 |
| [OH_MIDIDeviceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_mididevicetype) deviceType | 设备类型（USB、BLE等）。 **起始版本：** 24 |
| [OH_MIDIProtocol](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_midiprotocol) nativeProtocol | 设备原生支持的MIDI协议。- OH_MIDI_PROTOCOL_1_0：设备是传统设备或当前配置为MIDI 1.0。 - OH_MIDI_PROTOCOL_2_0：设备支持MIDI 2.0功能。 **起始版本：** 24 |
| char deviceName[256] | 设备名称。 **起始版本：** 24 |
| uint64_t vendorId | 厂商ID。 **起始版本：** 24 |
| uint64_t productId | 产品ID。 **起始版本：** 24 |
| char deviceAddress[64] | 设备物理地址（BLE设备）。 **起始版本：** 24 |
