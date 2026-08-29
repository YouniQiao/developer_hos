---
title: "Hid_RawDevInfo"
upstream_id: "harmonyos-references/capi-hidddk-hid-rawdevinfo"
catalog: "harmonyos-references"
content_hash: "be681e6aa451"
synced_at: "2026-08-29T18:17:10.622775"
---

# Hid_RawDevInfo

```
typedef struct Hid_RawDevInfo {...} Hid_RawDevInfo
```

#### 概述

HID原始设备信息，包含总线类型、供应商ID、产品ID等关键标识信息。开发者可以通过此结构体识别和区分不同的HID设备，通常用于设备识别、设备匹配、设备过滤等场景。

起始版本： 18

相关模块： [HidDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk)

所在头文件： [hid_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t busType | 总线类型，用于标识HID设备的物理连接方式。 |
| uint16_t vendor | 供应商ID。 |
| uint16_t product | 产品ID。 |
