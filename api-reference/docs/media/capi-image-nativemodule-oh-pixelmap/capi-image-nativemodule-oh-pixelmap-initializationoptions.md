---
title: "OH_Pixelmap_InitializationOptions"
upstream_id: "harmonyos-references/capi-image-nativemodule-oh-pixelmap-initializationoptions"
catalog: "harmonyos-references"
content_hash: "3d389c6b9e30"
synced_at: "2026-07-28T16:51:51.999978"
---

# OH_Pixelmap_InitializationOptions

```
struct OH_Pixelmap_InitializationOptions
```

#### 概述

OH_Pixelmap_InitializationOptions是Native层封装的初始化选项结构体，用于在创建Pixelmap时指定其属性，可配置图片宽高、像素格式、透明度类型等参数，适用于需要在Native层创建Pixelmap并自定义其初始化属性的场景。

使用[OH_PixelmapInitializationOptions_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_create)函数创建OH_Pixelmap_InitializationOptions对象；使用完成后需调用[OH_PixelmapInitializationOptions_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_release)函数释放资源，两者需配对使用，否则会导致内存泄漏。

OH_Pixelmap_InitializationOptions结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| uint32_t | width | 图片宽，单位：像素（px）。取值需大于0，最大值受系统内存限制。 | [OH_PixelmapInitializationOptions_GetWidth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_getwidth) | 获取图片宽。 |
| uint32_t | width | 图片宽，单位：像素（px）。取值需大于0，最大值受系统内存限制。 | [OH_PixelmapInitializationOptions_SetWidth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setwidth) | 设置图片宽。 |
| uint32_t | height | 图片高，单位：像素（px）。取值需大于0，最大值受系统内存限制。 | [OH_PixelmapInitializationOptions_GetHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_getheight) | 获取图片高。 |
| uint32_t | height | 图片高，单位：像素（px）。取值需大于0，最大值受系统内存限制。 | [OH_PixelmapInitializationOptions_SetHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setheight) | 设置图片高。 |
| int32_t | pixelFormat | 像素格式，取值参考[PIXEL_FORMAT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#pixel_format)。根据图片是否需要透明度通道及对内存占用的要求选择合适的像素格式，具体各枚举值的适用场景请参考PIXEL_FORMAT枚举说明。 | [OH_PixelmapInitializationOptions_GetPixelFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_getpixelformat) | 获取像素格式。 |
| int32_t | pixelFormat | 像素格式，取值参考[PIXEL_FORMAT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#pixel_format)。根据图片是否需要透明度通道及对内存占用的要求选择合适的像素格式，具体各枚举值的适用场景请参考PIXEL_FORMAT枚举说明。 | [OH_PixelmapInitializationOptions_SetPixelFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setpixelformat) | 设置像素格式。 |
| int32_t | alphaType | 透明度类型，取值参考[PIXELMAP_ALPHA_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#pixelmap_alpha_type)。根据图片是否需要预乘透明度处理选择合适的类型，具体各枚举值的适用场景请参考PIXELMAP_ALPHA_TYPE枚举说明。 | [OH_PixelmapInitializationOptions_GetAlphaType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_getalphatype) | 获取透明度类型。 |
| int32_t | alphaType | 透明度类型，取值参考[PIXELMAP_ALPHA_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#pixelmap_alpha_type)。根据图片是否需要预乘透明度处理选择合适的类型，具体各枚举值的适用场景请参考PIXELMAP_ALPHA_TYPE枚举说明。 | [OH_PixelmapInitializationOptions_SetAlphaType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapinitializationoptions_setalphatype) | 设置透明度类型。 |

起始版本： 12

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [pixelmap_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h)
