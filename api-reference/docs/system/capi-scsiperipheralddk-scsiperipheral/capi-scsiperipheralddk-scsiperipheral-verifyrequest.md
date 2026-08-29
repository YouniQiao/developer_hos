---
title: "ScsiPeripheral_VerifyRequest"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-verifyrequest"
catalog: "harmonyos-references"
content_hash: "3cd395169ba7"
synced_at: "2026-08-29T18:17:11.489161"
---

# ScsiPeripheral_VerifyRequest

```
typedef struct ScsiPeripheral_VerifyRequest {...} ScsiPeripheral_VerifyRequest
```

#### 概述

SCSI命令（VERIFY）的请求结构体，该命令通常用于校验逻辑块的数据完整性。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t lbAddress | 起始逻辑块地址。 |
| uint16_t verificationLength | 要校验的连续逻辑块的数量。 |
| uint8_t control | Control字段，用于指定SCSI命令的控制信息。 |
| uint8_t byte1 | CDB（Command Descriptor Block，命令描述符块）的第一个字节。 |
| uint8_t byte6 | CDB（Command Descriptor Block，命令描述符块）的第六个字节。 |
| uint32_t timeout | 超时时间（单位：ms）。 |
