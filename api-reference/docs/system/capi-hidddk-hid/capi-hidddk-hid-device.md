---
title: "Hid_Device"
upstream_id: "harmonyos-references/capi-hidddk-hid-device"
catalog: "harmonyos-references"
content_hash: "60dfa58af9c5"
synced_at: "2026-07-09T00:59:55.611266"
---

# Hid_Device

```
typedef struct Hid_Device {...} Hid_Device
```

#### 概述

设备基本信息。

起始版本： 11

相关模块： [HidDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk)

所在头文件： [hid_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* deviceName | 设备名称 |
| uint16_t vendorId | 厂商ID |
| uint16_t productId | 产品ID |
| uint16_t version | 版本号 |
| uint16_t bustype | 总线类型 |
| Hid_DeviceProp* properties | 由[Hid_DeviceProp](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h#hid_deviceprop)表示的设备特性 |
| uint16_t propLength | 设备特性数量 |
