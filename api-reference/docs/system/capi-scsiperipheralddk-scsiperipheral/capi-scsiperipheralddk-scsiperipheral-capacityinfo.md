---
title: "ScsiPeripheral_CapacityInfo"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-capacityinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:34.498961"
---

# ScsiPeripheral_CapacityInfo

```
typedef struct ScsiPeripheral_CapacityInfo {...} ScsiPeripheral_CapacityInfo
```

#### 概述

SCSI read capacity 数据。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t lbAddress | 返回的逻辑单元地址。 |
| uint32_t lbLength | 单个逻辑单元长度，单位：字节。 |
