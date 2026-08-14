---
title: "OH_AVRecorder_MetadataTemplate"
upstream_id: "harmonyos-references/capi-avrecorder-oh-avrecorder-metadatatemplate"
catalog: "harmonyos-references"
content_hash: "3add9ce412c8"
synced_at: "2026-08-14T15:55:33.071799"
---

# OH_AVRecorder_MetadataTemplate

```
typedef struct OH_AVRecorder_MetadataTemplate {...} OH_AVRecorder_MetadataTemplate
```

#### 概述

定义音视频录制过程中元数据的基本模板，通过键值对（key-value）形式组织元数据，适用于需要在录制输出中附加自定义元数据（如标题、作者、描述等）的场景，便于对录制文件进行分类、检索和管理。开发者可通过AVRecorder的[OH_AVRecorder_Prepare](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-h#oh_avrecorder_prepare)接口将该结构体中的元数据设置到录制输出文件中。

起始版本： 18

相关模块： [AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder)

所在头文件： [avrecorder_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* key | 元数据的键。 |
| char* value | 元数据的值。 |
