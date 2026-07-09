---
title: "OH_MIDIEvent"
upstream_id: "harmonyos-references/capi-ohmidi-oh-midievent"
catalog: "harmonyos-references"
content_hash: "15a834ff8663"
synced_at: "2026-07-09T01:00:12.630419"
---

# OH_MIDIEvent

```
typedef struct {...} OH_MIDIEvent
```

#### 概述

MIDI事件结构体（通用）。事件数据以Universal MIDI Packets（UMP）格式传输。原始字节流（MIDI 1.0）数据需要先转换为UMP格式后再填充此结构体。

起始版本： 24

相关模块： [OHMIDI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohmidi)

所在头文件： [native_midi_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-midi-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint64_t timestamp | 时间戳，单位为纳秒。 通过clock_gettime(CLOCK_MONOTONIC, &time)获取基准时间。值为0表示立即发送。 **起始版本：** 24 |
| size_t length | UMP数据包中的32位字（word）数量。 例如：Type 1消息占1个字（32位），Type 2消息占2个字（64位）。 此字段表示UMP数据中uint32_t字的数量，而非字节数。 **起始版本：** 24 |
| uint32_t *data | 指向UMP数据的指针，包含原始UMP字（uint32_t）。 此指针必须指向4字节对齐的内存地址，以满足UMP规范对32位边界对齐的要求。 **起始版本：** 24 |
