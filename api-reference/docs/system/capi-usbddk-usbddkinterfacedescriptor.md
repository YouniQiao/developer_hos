---
title: "UsbDdkInterfaceDescriptor"
upstream_id: "harmonyos-references/capi-usbddk-usbddkinterfacedescriptor"
catalog: "harmonyos-references"
content_hash: "711f45f270e0"
synced_at: "2026-08-29T18:17:11.806981"
---

# UsbDdkInterfaceDescriptor

```
typedef struct UsbDdkInterfaceDescriptor {...} UsbDdkInterfaceDescriptor
```

#### 概述

接口描述符，包含标准接口描述符和端点描述符等信息。

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [struct UsbInterfaceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbinterfacedescriptor) interfaceDescriptor | 标准接口描述符。 |
| [struct UsbDdkEndpointDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkendpointdescriptor)* endPoint | 该接口所包含的端点描述符，可为空指针表示无端点（不包含控制端点0）。 |
| const uint8_t* extra | 未做解析的描述符指针，包含特定于类或供应商的描述符。 |
| uint32_t extraLength | 未做解析的描述符长度。 |
