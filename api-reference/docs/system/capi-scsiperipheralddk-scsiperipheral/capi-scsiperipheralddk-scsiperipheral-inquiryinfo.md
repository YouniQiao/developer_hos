---
title: "ScsiPeripheral_InquiryInfo"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-inquiryinfo"
catalog: "harmonyos-references"
content_hash: "1f2ef4ff9217"
synced_at: "2026-08-29T18:17:11.168171"
---

# ScsiPeripheral_InquiryInfo

```
typedef struct ScsiPeripheral_InquiryInfo {...} ScsiPeripheral_InquiryInfo
```

#### 概述

SCSI INQUIRY 数据，用于存储SCSI外设的INQUIRY命令查询结果。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t deviceType | SCSI外设的设备类型，具体类型值定义参见SCSI标准协议。 |
| char idVendor[[SCSIPERIPHERAL_VENDOR_ID_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#宏定义) + 1] | 制造商 ID。 |
| char idProduct[[SCSIPERIPHERAL_PRODUCT_ID_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#宏定义) + 1] | 产品 ID。 |
| char revProduct[[SCSIPERIPHERAL_PRODUCT_REV_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#宏定义) + 1] | 产品版本。 |
| [ScsiPeripheral_DeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap)* data | 指向设备内存映射的指针，用于存储查询得到的数据。 |
