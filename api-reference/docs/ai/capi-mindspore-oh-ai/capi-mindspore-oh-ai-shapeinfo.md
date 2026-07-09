---
title: "OH_AI_ShapeInfo"
upstream_id: "harmonyos-references/capi-mindspore-oh-ai-shapeinfo"
catalog: "harmonyos-references"
content_hash: "555e3070d239"
synced_at: "2026-07-09T01:01:43.336697"
---

# OH_AI_ShapeInfo

```
typedef struct OH_AI_ShapeInfo {...} OH_AI_ShapeInfo
```

#### 概述

形状维度大小，预留最大维度是32，当前实际支持的最大维度是8。

起始版本： 9

相关模块： [MindSpore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mindspore)

所在头文件： [model.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-model-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| size_t shape_num | 维度数组长度。 |
| int64_t shape[OH_AI_MAX_SHAPE_NUM] | 维度数组。 |
