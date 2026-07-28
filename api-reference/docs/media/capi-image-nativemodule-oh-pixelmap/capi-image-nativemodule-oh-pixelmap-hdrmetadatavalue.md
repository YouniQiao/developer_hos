---
title: "OH_Pixelmap_HdrMetadataValue"
upstream_id: "harmonyos-references/capi-image-nativemodule-oh-pixelmap-hdrmetadatavalue"
catalog: "harmonyos-references"
content_hash: "d4bd7001eccc"
synced_at: "2026-07-28T16:51:51.958808"
---

# OH_Pixelmap_HdrMetadataValue

```
typedef struct OH_Pixelmap_HdrMetadataValue {...} OH_Pixelmap_HdrMetadataValue
```

#### 概述

Pixelmap使用的HDR元数据值，和OH_Pixelmap_HdrMetadataKey相对应。当传入相应的[OH_Pixelmap_HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)中的关键字作为入参时，可通过本结构体设置或获取对应类型的元数据值。该结构体用于[OH_PixelmapNative_SetMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapnative_setmetadata)及[OH_PixelmapNative_GetMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapnative_getmetadata)接口，适用于需要对HDR图像进行元数据管理与渲染处理的场景，帮助应用正确设置和获取HDR元数据以实现HDR图像的高动态范围显示效果。

起始版本： 12

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [pixelmap_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_Pixelmap_HdrMetadataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype) type | [OH_Pixelmap_HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)中HDR_METADATA_TYPE关键字对应的HDR元数据值类型，用于表示HDR元数据的类型。不同取值对应不同类型的HDR元数据，需根据HDR图像的实际元数据类型选择合适的值，并填充对应类型的元数据成员字段。 |
| [OH_Pixelmap_HdrStaticMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmap-hdrstaticmetadata) staticMetadata | [OH_Pixelmap_HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)中HDR_STATIC_METADATA关键字对应的元数据值类型，用于存储HDR静态元数据。 |
| [OH_Pixelmap_HdrDynamicMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmap-hdrdynamicmetadata) dynamicMetadata | [OH_Pixelmap_HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)中HDR_DYNAMIC_METADATA关键字对应的元数据值类型，用于存储HDR动态元数据，格式遵循相关HDR动态元数据标准。 |
| [OH_Pixelmap_HdrGainmapMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmap-hdrgainmapmetadata) gainmapMetadata | [OH_Pixelmap_HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)中HDR_GAINMAP_METADATA关键字对应的元数据值类型，用于存储HDR增益图元数据，参考ISO 21496-1。 |
