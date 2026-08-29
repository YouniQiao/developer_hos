---
title: "ScsiPeripheral_Request"
upstream_id: "harmonyos-references/capi-scsiperipheralddk-scsiperipheral-request"
catalog: "harmonyos-references"
content_hash: "ee31b8d5671a"
synced_at: "2026-08-29T18:17:10.839063"
---

# ScsiPeripheral_Request

```
typedef struct ScsiPeripheral_Request {...} ScsiPeripheral_Request
```

#### 概述

SCSI请求参数结构体，用于构造与SCSI设备交互的请求参数，支持配置命令描述符块、数据缓冲区、超时时间等。

起始版本： 18

相关模块： [ScsiPeripheralDDK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk)

所在头文件： [scsi_peripheral_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t commandDescriptorBlock[[SCSIPERIPHERAL_MAX_CMD_DESC_BLOCK_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#宏定义)] | 命令描述符块，应遵循SCSI命令规范，填充对应命令的标准描述符格式。 |
| uint8_t cdbLength | 命令描述符块的长度，应确保长度和实际命令匹配，最大不超过[SCSIPERIPHERAL_MAX_CMD_DESC_BLOCK_LEN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsi-peripheral-types-h#宏定义)。 |
| int8_t dataTransferDirection | 数据传输方向：-1为无数据传输的命令，-2为从主机到设备的数据传输（写），-3为从设备到主机的数据传输（读），-4为双向数据传输。 |
| [ScsiPeripheral_DeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scsiperipheralddk-scsiperipheral-devicememmap)* data | 数据传输缓冲区的指针。 |
| uint32_t timeout | 超时时间（单位：ms）。 |
