---
title: "Print_PrinterInfo"
upstream_id: "harmonyos-references/capi-oh-print-print-printerinfo"
catalog: "harmonyos-references"
content_hash: "2856ff45ca41"
synced_at: "2026-08-29T18:17:00.105831"
---

# Print_PrinterInfo

```
typedef struct {...} Print_PrinterInfo
```

#### 概述

Print_PrinterInfo表示打印机信息，包含打印机的状态、能力、默认属性以及标识信息（如打印机ID、名称、描述、位置、品牌型号、URI等），适用于应用在打印场景中获取和展示打印机详细信息的场景，帮助开发者根据打印机能力与属性选择合适的打印设备。可通过 [OH_Print_StartPrinterDiscovery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#oh_print_startprinterdiscovery) 或 [OH_Print_QueryPrinterInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#oh_print_queryprinterinfo) 获取。

起始版本： 12

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Print_PrinterState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h#print_printerstate) printerState | 打印机的当前运行状态。 |
| [Print_PrinterCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-printercapability) capability | 打印机支持的能力集合，如支持的纸张尺寸、色彩模式等。 |
| [Print_DefaultValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print-print-defaultvalue) defaultValue | 打印机默认属性，如默认纸张尺寸、色彩模式等。 |
| bool isDefaultPrinter | 是否为默认打印机。true 表示是默认打印机，false 表示不是默认打印机。 |
| char *printerId | 打印机 ID。 |
| char *printerName | 打印机名称。 |
| char *description | 打印机描述。 |
| char *location | 打印机位置。 |
| char *makeAndModel | 打印机品牌和型号信息。 |
| char *printerUri | 打印机 URI，用于定位和访问打印机。格式形如 scheme://[user@]host[:port]/resource。 |
| char *detailInfo | JSON 格式的详细信息。 支持的键包括： - **printerAlias**：string 类型，表示打印机别名，**起始版本：** 24。 - **vendorId**：int 类型，表示 USB 打印机的 VID，取值范围 [0, 65535]，**起始版本：** 12。 - **productId**：int 类型，表示 USB 打印机的 PID，取值范围 [0, 65535]，**起始版本：** 12。 - **protocol**：string 数组，表示探测到的打印机支持的协议列表，取值包括 ipp、ipps、lpd、socket，**起始版本：** 24。 - **ipp**：string 类型，表示探测到的 IPP 协议对应的打印机 URI，**起始版本：** 24。 - **ipps**：string 类型，表示探测到的 IPPS 协议对应的打印机 URI，**起始版本：** 24。 - **lpd**：string 类型，表示探测到的 LPD 协议对应的打印机 URI，**起始版本：** 24。 - **socket**：string 类型，表示探测到的 Socket 协议对应的打印机 URI，**起始版本：** 24。 |
