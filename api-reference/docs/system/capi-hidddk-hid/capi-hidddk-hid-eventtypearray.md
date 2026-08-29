---
title: "Hid_EventTypeArray"
upstream_id: "harmonyos-references/capi-hidddk-hid-eventtypearray"
catalog: "harmonyos-references"
content_hash: "c746b4e1dc56"
synced_at: "2026-08-29T18:17:10.321341"
---

# Hid_EventTypeArray

```
typedef struct Hid_EventTypeArray {...} Hid_EventTypeArray
```

#### 概述

事件类型编码数组，用于存储HID设备支持的事件类型信息。

起始版本： 11

相关模块： [HidDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk)

所在头文件： [hid_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Hid_EventType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h#hid_eventtype)* hidEventType | 事件类型编码数组的指针，指向调用方预先分配的数组（不允许为空指针），数组大小不小于length。 |
| uint16_t length | 数组的有效长度，不超过hidEventType数组的实际长度。 |
