---
title: "OH_ImageReceiverNative"
upstream_id: "harmonyos-references/capi-image-nativemodule-oh-imagereceivernative"
catalog: "harmonyos-references"
content_hash: "1ccd05b9db69"
synced_at: "2026-07-09T01:00:35.188194"
---

# OH_ImageReceiverNative

```
struct OH_ImageReceiverNative
```

#### 概述

OH_ImageReceiverNative是native层封装的图片接收器结构体，OH_ImageReceiverNative结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。

创建OH_ImageReceiverNative对象使用[OH_ImageReceiverNative_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_create)函数。

释放OH_ImageReceiverNative对象使用[OH_ImageReceiverNative_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_release)函数。

OH_ImageReceiverNative结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| uint64_t | surfaceId | 接收器的surfaceId | [OH_ImageReceiverNative_GetReceivingSurfaceId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_getreceivingsurfaceid) | 通过OH_ImageReceiverNative获取SurfaceId。 |
| OH_ImageNative | image | native层的image | [OH_ImageReceiverNative_ReadLatestImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_readlatestimage) | 通过OH_ImageReceiverNative获取最新的一张图片。 |
| OH_ImageNative | image | native层的image | [OH_ImageReceiverNative_ReadNextImage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_readnextimage) | 通过OH_ImageReceiverNative获取下一张图片。 |
| OH_ImageReceiver_OnCallback | callback | 图片接收器回调函数 | [OH_ImageReceiverNative_On](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_on) | 注册一个OH_ImageReceiver_OnCallback回调事件。 |
| OH_ImageReceiver_OnCallback | callback | 图片接收器回调函数 | [OH_ImageReceiverNative_Off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_off) | 关闭OH_ImageReceiver_OnCallback回调事件。 |
| Image_Size | size | ImageReceiver的大小 | [OH_ImageReceiverNative_GetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_getsize) | 通过OH_ImageReceiverNative获取ImageReceiver的大小。 |
| int32_t | capacity | 图片接收器容量 | [OH_ImageReceiverNative_GetCapacity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceivernative_getcapacity) | 通过OH_ImageReceiverNative获取ImageReceiver的容量。 |

起始版本： 12

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [image_receiver_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h)
