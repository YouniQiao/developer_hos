---
title: "ScsiPeripheral_TestUnitReadyRequest"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-testunitreadyrequest"
catalog: "harmonyos-references"
content_hash: "8fcc62416e4d"
synced_at: "2026-07-09T00:59:56.354822"
---

# ScsiPeripheral_TestUnitReadyRequest

```
typedef struct ScsiPeripheral_TestUnitReadyRequest {...} ScsiPeripheral_TestUnitReadyRequest
```

#### 概述

命令（test unit ready）的请求结构体。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t control | Control字段，用于指定一些控制信息。 |
| uint32_t timeout | 超时时间(单位: 毫秒)。 |
