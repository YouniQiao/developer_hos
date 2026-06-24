---
title: "OH_ImagePackerNative"
upstream_id: "harmonyos-references/capi-image-nativemodule-oh-imagepackernative"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:29.144975"
---

# OH_ImagePackerNative

```
typedef struct OH_ImagePackerNative OH_ImagePackerNative
```

#### 概述

ImagePacker结构体类型，用于执行ImagePacker相关操作。

此结构体内容不可直接操作，采用函数调用方式操作具体字段，结构体内容和操作方式如下：

| 字段类型 | 字段名称 | 字段描述 | 操作函数 | 函数描述 |
| --- | --- | --- | --- | --- |
| OH_ImageSourceNative | imageSource | 图片源 | [OH_ImagePackerNative_PackToDataFromImageSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_imagepackernative_packtodatafromimagesource) | 将ImageSource编码为指定格式的数据。 |
| OH_PixelmapNative | pixelmap | native层的pixelmap | [OH_ImagePackerNative_PackToDataFromPixelmap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_imagepackernative_packtodatafrompixelmap) | 将Pixelmap编码为指定格式的数据。 |
| int32_t | imagesourceFd | ImageSource关联的文件描述符 | [OH_ImagePackerNative_PackToFileFromImageSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_imagepackernative_packtofilefromimagesource) | 将一个ImageSource编码到文件中。 |
| int32_t | pixelmapFd | pixelmap关联的文件描述符 | [OH_ImagePackerNative_PackToFileFromPixelmap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_imagepackernative_packtofilefrompixelmap) | 将一个Pixelmap编码到文件中。 |

创建OH_ImagePackerNative对象使用[OH_ImagePackerNative_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_imagepackernative_create)函数。

释放OH_ImagePackerNative对象使用[OH_ImagePackerNative_Release](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h#oh_imagepackernative_release)函数。

起始版本： 12

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [image_packer_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-packer-native-h)
