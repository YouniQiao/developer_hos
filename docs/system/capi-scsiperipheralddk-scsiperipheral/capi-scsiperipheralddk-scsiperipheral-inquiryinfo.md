---
title: "ScsiPeripheral_InquiryInfo"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-inquiryinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:34.242784"
---

# ScsiPeripheral_InquiryInfo

```
typedef struct ScsiPeripheral_InquiryInfo {...} ScsiPeripheral_InquiryInfo
```

#### 概述

SCSI inquiry 数据。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t deviceType | 设备类型。 |
| char idVendor[[SCSIPERIPHERAL_VENDOR_ID_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h) + 1] | 制造商 id。 |
| char idProduct[[SCSIPERIPHERAL_PRODUCT_ID_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h) + 1] | 产品 id。 |
| char revProduct[[SCSIPERIPHERAL_PRODUCT_REV_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h) + 1] | 产品版本。 |
| [ScsiPeripheral_DeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap)* data | 所有的查询数据。 |
