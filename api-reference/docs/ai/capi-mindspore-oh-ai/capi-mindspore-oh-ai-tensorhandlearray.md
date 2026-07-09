---
title: "OH_AI_TensorHandleArray"
upstream_id: "harmonyos-references/capi-mindspore-oh-ai-tensorhandlearray"
catalog: "harmonyos-references"
content_hash: "d4a6a4d1a41f"
synced_at: "2026-07-09T01:01:43.337371"
---

# OH_AI_TensorHandleArray

```
typedef struct OH_AI_TensorHandleArray {...} OH_AI_TensorHandleArray
```

#### 概述

张量数组结构体，用于存储张量数组指针和张量数组长度。

起始版本： 9

相关模块： [MindSpore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mindspore)

所在头文件： [model.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-model-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| size_t handle_num | 张量数组长度。 |
| [OH_AI_TensorHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mindspore-oh-ai-tensorhandle)* handle_list | 指向张量数组的指针。 |
