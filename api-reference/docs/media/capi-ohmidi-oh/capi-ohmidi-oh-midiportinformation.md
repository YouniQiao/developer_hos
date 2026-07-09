---
title: "OH_MIDIPortInformation"
upstream_id: "harmonyos-references/capi-ohmidi-oh-midiportinformation"
catalog: "harmonyos-references"
content_hash: "5e272f409bff"
synced_at: "2026-07-09T01:00:12.635191"
---

# OH_MIDIPortInformation

```
typedef struct {...} OH_MIDIPortInformation
```

#### 概述

端口信息结构体。用于枚举端口，包含可显示的端口名称。

起始版本： 24

相关模块： [OHMIDI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohmidi)

所在头文件： [native_midi_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t portIndex | 端口在设备中的索引号。 **起始版本：** 24 |
| int64_t deviceId | 端口所属的MIDI设备ID。 **起始版本：** 24 |
| [OH_MIDIPortDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h#oh_midiportdirection) direction | 端口方向（输入或输出）。 **起始版本：** 24 |
| char name[64] | 端口名称。 **起始版本：** 24 |
