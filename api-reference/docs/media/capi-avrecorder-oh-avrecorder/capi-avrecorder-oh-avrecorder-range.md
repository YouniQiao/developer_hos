---
title: "OH_AVRecorder_Range"
upstream_id: "harmonyos-references/capi-avrecorder-oh-avrecorder-range"
catalog: "harmonyos-references"
content_hash: "3d75703b500a"
synced_at: "2026-07-28T16:52:00.417374"
---

# OH_AVRecorder_Range

```
typedef struct OH_AVRecorder_Range {...} OH_AVRecorder_Range
```

#### 概述

表示AVRecorder相关参数（如比特率、帧率等）的取值范围。

起始版本： 18

相关模块： [AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder)

所在头文件： [avrecorder_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avrecorder-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t min | 范围的最小值。 |
| int32_t max | 范围的最大值。 |
