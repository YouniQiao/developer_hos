---
title: "ScsiPeripheral_DeviceMemMap"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap"
catalog: "harmonyos-references"
content_hash: "0f3c9e5622a6"
synced_at: "2026-07-09T00:59:56.069102"
---

# ScsiPeripheral_DeviceMemMap

```
typedef struct ScsiPeripheral_DeviceMemMap {...} ScsiPeripheral_DeviceMemMap
```

#### 概述

通过调用[OH_ScsiPeripheral_CreateDeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-api-h#oh_scsiperipheral_createdevicememmap)创建的设备内存映射。使用该设备内存映射的缓冲区可以提供更好的性能。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t* const address | 缓冲区地址。 |
| const size_t size | 缓冲区大小。 |
| uint32_t offset | 已使用缓冲区的偏移量。默认值为0，表示没有偏移，缓冲区从指定地址开始。 |
| uint32_t bufferLength | 已使用缓冲区的长度。默认情况下，该值等于缓冲区的大小，表示整个缓冲区都被使用。 |
| uint32_t transferredLength | 已传输数据的长度。 |
