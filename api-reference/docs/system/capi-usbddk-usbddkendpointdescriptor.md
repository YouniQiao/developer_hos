---
title: "UsbDdkEndpointDescriptor"
upstream_id: "harmonyos-references/capi-usbddk-usbddkendpointdescriptor"
catalog: "harmonyos-references"
content_hash: "3592f73695ac"
synced_at: "2026-07-09T00:59:57.106315"
---

# UsbDdkEndpointDescriptor

```
typedef struct UsbDdkEndpointDescriptor {...} UsbDdkEndpointDescriptor
```

#### 概述

端点描述符。

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [struct UsbEndpointDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbendpointdescriptor) endpointDescriptor | 标准端点描述符。 |
| const uint8_t* extra | 未做解析的描述符，包含特定于类或供应商的描述符。 |
| uint32_t extraLength | 未做解析的描述符长度。 |
