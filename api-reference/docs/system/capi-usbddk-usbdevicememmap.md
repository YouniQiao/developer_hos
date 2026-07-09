---
title: "UsbDeviceMemMap"
upstream_id: "harmonyos-references/capi-usbddk-usbdevicememmap"
catalog: "harmonyos-references"
content_hash: "024c8da70534"
synced_at: "2026-07-09T00:59:57.414201"
---

# UsbDeviceMemMap

```
typedef struct UsbDeviceMemMap {...} UsbDeviceMemMap
```

#### 概述

设备内存映射，通过[OH_Usb_CreateDeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-api-h#oh_usb_createdevicememmap)创建设备内存映射，使用内存映射后的缓冲区，可提升数据传输性能。

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t* const address | 映射后的缓冲区地址。 |
| const size_t size | 缓冲区大小。 |
| uint32_t offset | 所使用的缓冲区的偏移量，默认为0，表示没有偏移，从映射后的缓冲区地址address开始。 |
| uint32_t bufferLength | 所使用的缓冲区的长度，默认等于缓冲区大小 size，表示使用全部的缓冲区。 |
| uint32_t transferedLength | 实际传输的数据的长度。 |
