---
title: "VideoProcessing_ColorSpaceInfo"
upstream_id: "harmonyos-references/capi-videoprocessing-videoprocessing-colorspaceinfo"
catalog: "harmonyos-references"
content_hash: "2a807c8b04ca"
synced_at: "2026-07-09T01:00:44.794538"
---

# VideoProcessing_ColorSpaceInfo

```
typedef struct VideoProcessing_ColorSpaceInfo {...} VideoProcessing_ColorSpaceInfo
```

#### 概述

视频颜色空间信息数据结构。

参考： [OH_VideoProcessing_IsColorSpaceConversionSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-processing-h#oh_videoprocessing_iscolorspaceconversionsupported)

起始版本： 12

相关模块： [VideoProcessing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-videoprocessing)

所在头文件： [video_processing_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-video-processing-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t metadataType | 视频元数据类型，参考[OH_NativeBuffer_MetadataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-buffer-common-h#oh_nativebuffer_metadatatype)。 |
| int32_t colorSpace | 视频颜色空间类型，参考[OH_NativeBuffer_ColorSpace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-buffer-common-h#oh_nativebuffer_colorspace)。 |
| int32_t pixelFormat | 视频像素格式，参考[OH_NativeBuffer_Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-buffer-common-h#oh_nativebuffer_format)。 |
