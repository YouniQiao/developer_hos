---
title: "OH_AVMetadataExtractor_FrameInfo"
upstream_id: "harmonyos-references/capi-avmetadataextractor-oh-avmetadataextractor-frameinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:43.080598"
---

# OH_AVMetadataExtractor_FrameInfo

```
typedef struct {...} OH_AVMetadataExtractor_FrameInfo
```

#### 概述

定义从视频中提取出的帧的信息。

起始版本： 23

相关模块： [AVMetadataExtractor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avmetadataextractor)

所在头文件： [avmetadata_extractor_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avmetadata-extractor-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int64_t requestTimeUs | 用户传入的请求时间。 |
| int64_t actualTimeUs | 实际提取到的帧的时间；若提取失败，则为-1。 |
| [OH_PixelmapNative*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative) image | 从视频中提取出的帧图像；若提取失败，则为空指针。 |
| [OH_AVMetadataExtractor_FetchState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avmetadata-extractor-base-h#oh_avmetadataextractor_fetchstate) result | 本次帧提取操作的结果状态。 |
