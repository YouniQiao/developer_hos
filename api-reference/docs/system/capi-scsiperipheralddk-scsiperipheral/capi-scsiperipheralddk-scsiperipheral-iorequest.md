---
title: "ScsiPeripheral_IORequest"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-iorequest"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:33.620152"
---

# ScsiPeripheral_IORequest

```
typedef struct ScsiPeripheral_IORequest {...} ScsiPeripheral_IORequest
```

#### 概述

读/写操作的请求参数。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t lbAddress | 逻辑块起始地址。 |
| uint16_t transferLength | 需要操作的连续逻辑块的数量。 |
| uint8_t control | Control字段，用于指定一些控制信息。 |
| uint8_t byte1 | CDB的第一个字节。 |
| uint8_t byte6 | CDB的第六个字节。 |
| [ScsiPeripheral_DeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap)* data | 数据传输的缓冲区。 |
| uint32_t timeout | 超时时间（单位：毫秒）。 |
