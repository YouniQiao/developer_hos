---
title: "OH_ImageReceiverOptions"
upstream_id: "harmonyos-references/capi-image-nativemodule-oh-imagereceiveroptions"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:29.709615"
---

# OH_ImageReceiverOptions

```
typedef struct OH_ImageReceiverOptions OH_ImageReceiverOptions
```

#### 概述

用于定义OH_ImageReceiverOptions数据类型名称。

OH_ImageReceiverOptions是native层封装的图片接收器选项设置器结构体，用于创建OH_ImageReceiverNative时传入设置参数。OH_ImageReceiverOptions结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。

创建OH_ImageReceiverOptions对象使用[OH_ImageReceiverOptions_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceiveroptions_create)函数。

释放OH_ImageReceiverOptions对象使用[OH_ImageReceiverOptions_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceiveroptions_release)函数。

OH_ImageReceiverOptions结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| Image_Size | size | 图像大小 | [OH_ImageReceiverOptions_GetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceiveroptions_getsize) | 获取OH_ImageReceiverOptions对象的Image_Size。 |
| Image_Size | size | 图像大小 | [OH_ImageReceiverOptions_SetSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceiveroptions_setsize) | 设置OH_ImageReceiverOptions对象的Image_Size。 |
| int32_t | capacity | 图片缓存容量 | [OH_ImageReceiverOptions_GetCapacity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceiveroptions_getcapacity) | 获取OH_ImageReceiverOptions对象的图片缓存容量。 |
| int32_t | capacity | 图片缓存容量 | [OH_ImageReceiverOptions_SetCapacity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h#oh_imagereceiveroptions_setcapacity) | 设置OH_ImageReceiverOptions对象的图片缓存容量。 |

起始版本： 12

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [image_receiver_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-receiver-native-h)
