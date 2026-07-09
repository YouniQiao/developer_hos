---
title: "usb_ddk_types.h"
upstream_id: "harmonyos-references/capi-usb-ddk-types-h"
catalog: "harmonyos-references"
content_hash: "f1abe4cbb700"
synced_at: "2026-07-09T00:59:55.113451"
---

# usb_ddk_types.h

#### 概述

提供USB DDK中的枚举变量、结构体定义与宏定义。

引用文件： <usb/usb_ddk_types.h>

库： libusb_ndk.z.so

系统能力： SystemCapability.Driver.USB.Extension

起始版本： 10

相关模块： [UsbDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [UsbControlRequestSetup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbcontrolrequestsetup) | UsbControlRequestSetup | 控制传输setup包，对应USB协议中的Setup Data。 |
| [UsbDeviceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbdevicedescriptor) | UsbDeviceDescriptor | 标准设备描述符，对应USB协议中Standard Device Descriptor。 |
| [UsbConfigDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbconfigdescriptor) | UsbConfigDescriptor | 标准配置描述符，对应USB协议中Standard Configuration Descriptor。 |
| [UsbInterfaceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbinterfacedescriptor) | UsbInterfaceDescriptor | 标准接口描述符，对应USB协议中Standard Interface Descriptor。 |
| [UsbEndpointDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbendpointdescriptor) | UsbEndpointDescriptor | 标准端点描述符，对应USB协议中Standard Endpoint Descriptor。 |
| [UsbDdkEndpointDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkendpointdescriptor) | UsbDdkEndpointDescriptor | 端点描述符。 |
| [UsbDdkInterfaceDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkinterfacedescriptor) | UsbDdkInterfaceDescriptor | 接口描述符。 |
| [UsbDdkInterface](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkinterface) | UsbDdkInterface | USB接口，是特定接口下备用设置的集合。 |
| [UsbDdkConfigDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbddkconfigdescriptor) | UsbDdkConfigDescriptor | 配置描述符。 |
| [UsbRequestPipe](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbrequestpipe) | UsbRequestPipe | 请求管道。 |
| [UsbDeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usbdevicememmap) | UsbDeviceMemMap | 设备内存映射，通过[OH_Usb_CreateDeviceMemMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-api-h#oh_usb_createdevicememmap)创建设备内存映射，使用内存映射后的缓冲区，获得更好的性能。 |
| [Usb_DeviceArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usb-devicearray) | Usb_DeviceArray | 设备ID清单，用于存放[OH_Usb_GetDevices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-api-h#oh_usb_getdevices)接口获取到的设备ID列表和设备数量。 |
| [Usb_NonRootHubArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usbddk-usb-nonroothubarray) | Usb_NonRootHubArray | 非根hub列表，用于存放[OH_Usb_GetNonRootHubs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-usb-ddk-api-h#oh_usb_getnonroothubs)接口获取到的非根hub设备ID列表和数量。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [UsbDdkErrCode](#usbddkerrcode) | UsbDdkErrCode | USB DDK 错误码定义。 |

#### 枚举类型说明

#### [h2]UsbDdkErrCode

```
enum UsbDdkErrCode
```
 描述

USB DDK 错误码定义。

起始版本： 10

| 枚举项 | 描述 |
| --- | --- |
| USB_DDK_SUCCESS = 0 | 操作成功。 |
| USB_DDK_FAILED = -1 | 操作失败。 **废弃版本：** 16 |
| USB_DDK_NO_PERM = 201 | 没有权限。 **起始版本：** 14 |
| USB_DDK_INVALID_PARAMETER = 401 | 非法参数，在API version 16之前值为-2。 |
| USB_DDK_MEMORY_ERROR = 27400001 | 内存相关的错误，包括：内存不足、内存数据拷贝失败、内存申请失败等，在API version 16之前值为-3。 |
| USB_DDK_INVALID_OPERATION = 27400002 | 非法操作，在API version 16之前值为-4。 |
| USB_DDK_NULL_PTR = -5 | 空指针异常。 **废弃版本：** 16 |
| USB_DDK_DEVICE_BUSY = -6 | 设备忙。 **废弃版本：** 16 |
| USB_DDK_IO_FAILED = 27400003 | 设备I/O操作失败。 **起始版本：** 14 |
| USB_DDK_TIMEOUT = 27400004 | 传输超时，在API version 16之前值为-7。 |
