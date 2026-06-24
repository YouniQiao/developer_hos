---
title: "UsbDdkConfigDescriptor"
upstream_id: "harmonyos-references/capi-usbddk-usbddkconfigdescriptor"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:35.882748"
---

# UsbDdkConfigDescriptor

```
typedef struct UsbDdkConfigDescriptor {...} UsbDdkConfigDescriptor
```

#### 概述

配置描述符。

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

所在头文件： [usb_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [struct UsbConfigDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbconfigdescriptor) configDescriptor | 标准配置描述符。 |
| [struct UsbDdkInterface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkinterface)* interface | 该配置所包含的接口。 |
| const uint8_t* extra | 未做解析的描述符，包含特定于类或供应商的描述符。 |
| uint32_t extraLength | 未做解析的描述符长度。 |
