---
title: "UsbDdkInterfaceDescriptor"
upstream_id: "harmonyos-references/capi-usbddk-usbddkinterfacedescriptor"
catalog: "harmonyos-references"
content_hash: "6224d6232a54"
synced_at: "2026-07-09T00:59:57.151293"
---

# UsbDdkInterfaceDescriptor

```
typedef struct UsbDdkInterfaceDescriptor {...} UsbDdkInterfaceDescriptor
```

#### 概述

接口描述符。

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [struct UsbInterfaceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbinterfacedescriptor) interfaceDescriptor | 标准接口描述符。 |
| [struct UsbDdkEndpointDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkendpointdescriptor)* endPoint | 该接口所包含的端点描述符。 |
| const uint8_t* extra | 未做解析的描述符，包含特定于类或供应商的描述符。 |
| uint32_t extraLength | 未做解析的描述符长度。 |
