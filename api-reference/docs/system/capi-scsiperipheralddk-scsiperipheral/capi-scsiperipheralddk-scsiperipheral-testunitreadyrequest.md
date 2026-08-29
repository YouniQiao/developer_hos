---
title: "ScsiPeripheral_TestUnitReadyRequest"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-testunitreadyrequest"
catalog: "harmonyos-references"
content_hash: "90485d836744"
synced_at: "2026-08-29T18:17:10.932110"
---

# ScsiPeripheral_TestUnitReadyRequest

```
typedef struct ScsiPeripheral_TestUnitReadyRequest {...} ScsiPeripheral_TestUnitReadyRequest
```

#### 概述

SCSI命令（TEST UNIT READY）的请求结构体，通常用于确认逻辑单元是否就绪（逻辑单元是SCSI设备中可独立寻址的I/O操作实体）。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t control | Control字段，用于指定SCSI命令的控制信息。 |
| uint32_t timeout | 超时时间（单位：ms）。 |
