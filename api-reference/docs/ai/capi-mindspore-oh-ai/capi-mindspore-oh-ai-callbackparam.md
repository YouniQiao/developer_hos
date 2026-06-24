---
title: "OH_AI_CallBackParam"
upstream_id: "harmonyos-references/capi-mindspore-oh-ai-callbackparam"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:58.724665"
---

# OH_AI_CallBackParam

```
typedef struct OH_AI_CallBackParam {...} OH_AI_CallBackParam
```

#### 概述

回调函数中传入的算子信息。

起始版本： 9

相关模块： [MindSpore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mindspore)

所在头文件： [model.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-model-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* node_name | 算子名称。 |
| char* node_type | 算子类型。 |
