---
title: "Print_PrinterInfo"
upstream_id: "harmonyos-references/capi-oh-print-print-printerinfo"
catalog: "harmonyos-references"
content_hash: "6ead2c3d3396"
synced_at: "2026-07-09T00:59:44.040276"
---

# Print_PrinterInfo

```
typedef struct {...} Print_PrinterInfo
```

#### 概述

表示打印机信息。

起始版本： 12

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Print_PrinterState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_printerstate) printerState | 打印机状态。 |
| [Print_PrinterCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-printercapability) capability | 打印机能力。 |
| [Print_DefaultValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-defaultvalue) defaultValue | 打印机当前属性。 |
| bool isDefaultPrinter | 默认打印机。 |
| char *printerId | 打印机 ID。 |
| char *printerName | 打印机名称。 |
| char *description | 打印机描述。 |
| char *location | 打印机位置。 |
| char *makeAndModel | 打印机品牌和型号信息。 |
| char *printerUri | 打印机 URI。 |
| char *detailInfo | JSON 格式的详细信息。 支持的键包括： - **printerAlias**：string类型，表示打印机别名，**起始版本：** 24。 - **vendorId**：int类型，表示USB打印机的VID，**起始版本：** 12。 - **productId**：int类型，表示USB打印机的PID，**起始版本：** 12。 - **protocol**：string数组，表示探测到的打印机支持的协议列表，**起始版本：** 24。 - **ipp**：string类型，表示探测到的IPP协议对应的打印机URI，**起始版本：** 24。 - **ipps**：string类型，表示探测到的IPPS协议对应的打印机URI，**起始版本：** 24。 - **lpd**：string类型，表示探测到的LPD协议对应的打印机URI，**起始版本：** 24。 - **socket**：string类型，表示探测到的Socket协议对应的打印机URI，**起始版本：** 24。 |
