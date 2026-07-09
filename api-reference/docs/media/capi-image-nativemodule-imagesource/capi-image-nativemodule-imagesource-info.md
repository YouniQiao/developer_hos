---
title: "OH_ImageSource_Info"
upstream_id: "harmonyos-references/capi-image-nativemodule-imagesource-info"
catalog: "harmonyos-references"
content_hash: "5a30ef9768d3"
synced_at: "2026-07-09T01:00:34.054444"
---

# OH_ImageSource_Info

```
struct OH_ImageSource_Info
```

#### 概述

OH_ImageSource_Info是native层封装的ImageSource信息结构体，OH_ImageSource_Info结构体不可直接操作，而是采用函数调用方式创建、释放结构体以及操作具体字段。

使用[OH_ImageSourceInfo_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_create)函数创建OH_ImageSource_Info对象。

使用[OH_ImageSourceNative_GetImageInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourcenative_getimageinfo)函数将OH_ImageSourceNative中的图像信息写入创建好的OH_ImageSource_Info对象。

使用[OH_ImageSourceInfo_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_release)函数释放OH_ImageSource_Info对象。

使用约束：OH_ImageSource_Info对象通常配合[OH_ImageSourceNative_GetImageInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourcenative_getimageinfo)使用，用于承载指定序号图片的宽、高、动态范围和MIME类型等信息。使用前需通过[OH_ImageSourceInfo_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_create)创建对象；使用完成后，应调用[OH_ImageSourceInfo_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_release)释放对象。

OH_ImageSource_Info结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| uint32_t | width | 图片宽度。 | [OH_ImageSourceInfo_GetWidth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_getwidth) | 获取图片的宽。 |
| uint32_t | height | 图片高度。 | [OH_ImageSourceInfo_GetHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_getheight) | 获取图片的高。 |
| bool | isHdr | 是否为高动态范围（HDR）的信息。 | [OH_ImageSourceInfo_GetDynamicRange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_getdynamicrange) | 获取图片是否为高动态范围的信息。 |
| [Image_MimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-image-string) | mimeType | 图片源的MIME类型。 | [OH_ImageSourceInfo_GetMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_getmimetype) | 获取图片的MimeType。 |

![](./img/note_3.0-zh-cn.png) 通过[OH_ImageSourceInfo_GetMimeType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_getmimetype)获取到的mimeType.data指向OH_ImageSource_Info对象内部持有的内存。调用[OH_ImageSourceInfo_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h#oh_imagesourceinfo_release)释放OH_ImageSource_Info后，该地址会失效；如需在释放后继续使用MIME类型数据，应在释放前自行深拷贝。

起始版本： 12

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [image_source_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-native-h)

相关开发指导： [使用Image_NativeModule完成图片解码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-source-c)、[图片区域解码与下采样(C/C++)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-region-and-downsampling-c)、[使用Image_NativeModule完成动图解码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-animated-decoding-c)、[使用Image_NativeModule完成HDR图片解码](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/image-hdr-decoding-c)
