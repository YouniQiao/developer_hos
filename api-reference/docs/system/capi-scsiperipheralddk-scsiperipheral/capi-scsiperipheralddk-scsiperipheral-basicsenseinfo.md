---
title: "ScsiPeripheral_BasicSenseInfo"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-basicsenseinfo"
catalog: "harmonyos-references"
content_hash: "ba47c51ac2c4"
synced_at: "2026-07-09T00:59:56.698285"
---

# ScsiPeripheral_BasicSenseInfo

```
typedef struct ScsiPeripheral_BasicSenseInfo {...} ScsiPeripheral_BasicSenseInfo
```

#### 概述

sense data的基本信息。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t responseCode | 响应码。 |
| bool valid | 信息有效标志位。 |
| uint64_t information | Information字段。 |
| uint64_t commandSpecific | Command-specific information字段。 |
| bool sksv | Sense key specific字段的标志位。 |
| uint32_t senseKeySpecific | Sense key specific字段。 |
