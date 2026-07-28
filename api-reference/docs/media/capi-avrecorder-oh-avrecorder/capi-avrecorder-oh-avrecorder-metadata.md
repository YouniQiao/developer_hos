---
title: "OH_AVRecorder_Metadata"
upstream_id: "harmonyos-references/capi-avrecorder-oh-avrecorder-metadata"
catalog: "harmonyos-references"
content_hash: "f4907f00f5e4"
synced_at: "2026-07-28T16:52:00.344072"
---

# OH_AVRecorder_Metadata

```
typedef struct OH_AVRecorder_Metadata {...} OH_AVRecorder_Metadata
```

#### 概述

元数据信息数据结构。

起始版本： 18

相关模块： [AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder)

所在头文件： [avrecorder_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* genre | 媒体资源的体裁分类。 |
| char* videoOrientation | 视频的旋转方向，仅支持特定角度值：0、90、180、270，单位为度。 |
| [OH_AVRecorder_Location](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-location) location | 视频的地理位置信息。 |
| [OH_AVRecorder_MetadataTemplate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-oh-avrecorder-metadatatemplate) customInfo | 从 moov.meta.list 读取的自定义参数键值映射。 |
