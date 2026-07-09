---
title: "ScsiPeripheral_ReadCapacityRequest"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-readcapacityrequest"
catalog: "harmonyos-references"
content_hash: "2d8b8321edbc"
synced_at: "2026-07-09T00:59:56.465458"
---

# ScsiPeripheral_ReadCapacityRequest

```
typedef struct ScsiPeripheral_ReadCapacityRequest {...} ScsiPeripheral_ReadCapacityRequest
```

#### 概述

SCSI命令（read capacity）的请求结构体。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t lbAddress | 逻辑单元地址。 |
| uint8_t control | Control字段，用于指定一些控制信息。 |
| uint8_t byte8 | CDB的第八个字节。 |
| uint32_t timeout | 超时时间（单位: 毫秒）。 |
