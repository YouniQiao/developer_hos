---
title: "OH_MIDIDeviceInformation"
upstream_id: "harmonyos-references/capi-ohmidi-oh-midideviceinformation"
catalog: "harmonyos-references"
content_hash: "33fcae097a5c"
synced_at: "2026-08-29T18:17:22.851816"
---

# OH_MIDIDeviceInformation

```
typedef struct {...} OH_MIDIDeviceInformation
```

#### 概述

设备信息结构体，用于存储MIDI设备的详细信息，包括设备唯一标识符、设备类型（如USB、BLE）、支持的MIDI协议、设备名称、厂商ID、产品ID及物理地址等。适用于在MIDI设备枚举、识别和连接管理等场景中，获取并传递设备的完整属性信息。

起始版本： 24

相关模块： [OHMIDI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohmidi)

所在头文件： [native_midi_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int64_t midiDeviceId | MIDI设备的唯一标识符。 **起始版本：** 24 |
| [OH_MIDIDeviceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_mididevicetype) deviceType | 设备类型（USB或BLE）。 **起始版本：** 24 |
| [OH_MIDIProtocol](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_midiprotocol) nativeProtocol | 设备原生支持的MIDI协议。- OH_MIDI_PROTOCOL_1_0：设备是传统设备或当前配置为MIDI 1.0。 - OH_MIDI_PROTOCOL_2_0：设备使用MIDI 2.0协议。 **起始版本：** 24 |
| char deviceName[256] | 设备名称。 **起始版本：** 24 |
| uint64_t vendorId | 厂商ID。 **起始版本：** 24 |
| uint64_t productId | 产品ID。 **起始版本：** 24 |
| char deviceAddress[64] | 设备物理地址，采用冒号分隔的十六进制MAC地址格式，例如"00:11:22:33:44:55"，仅BLE设备类型时有效。 **起始版本：** 24 |
