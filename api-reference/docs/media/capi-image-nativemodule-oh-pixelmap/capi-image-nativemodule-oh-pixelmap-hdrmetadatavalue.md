---
title: "OH_Pixelmap_HdrMetadataValue"
upstream_id: "harmonyos-references/capi-image-nativemodule-oh-pixelmap-hdrmetadatavalue"
catalog: "harmonyos-references"
content_hash: "83221dfaf94e"
synced_at: "2026-07-09T01:00:34.562634"
---

# OH_Pixelmap_HdrMetadataValue

```
typedef struct OH_Pixelmap_HdrMetadataValue {...} OH_Pixelmap_HdrMetadataValue
```

#### 概述

Pixelmap使用的HDR元数据值，和OH_Pixelmap_HdrMetadataKey关键字相对应。用于[OH_PixelmapNative_SetMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapnative_setmetadata)及[OH_PixelmapNative_GetMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmapnative_getmetadata)，有相应[OH_Pixelmap_HdrMetadataKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatakey)关键字作为入参时，设置或获取到本结构体中相对应的元数据类型的值。

起始版本： 12

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [pixelmap_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_Pixelmap_HdrMetadataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-pixelmap-native-h#oh_pixelmap_hdrmetadatatype) type | HDR_METADATA_TYPE关键字对应的具体值。 |
| [OH_Pixelmap_HdrStaticMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmap-hdrstaticmetadata) staticMetadata | HDR_STATIC_METADATA关键字对应的具体值。 |
| [OH_Pixelmap_HdrDynamicMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmap-hdrdynamicmetadata) dynamicMetadata | HDR_DYNAMIC_METADATA关键字对应的具体值。 |
| [OH_Pixelmap_HdrGainmapMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmap-hdrgainmapmetadata) gainmapMetadata | HDR_GAINMAP_METADATA关键字对应的具体值。 |
