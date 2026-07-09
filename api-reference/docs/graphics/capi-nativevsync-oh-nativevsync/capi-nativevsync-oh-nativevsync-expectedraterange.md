---
title: "OH_NativeVSync_ExpectedRateRange"
upstream_id: "harmonyos-references/capi-nativevsync-oh-nativevsync-expectedraterange"
catalog: "harmonyos-references"
content_hash: "deecff94c2b2"
synced_at: "2026-07-09T01:01:01.750500"
---

# OH_NativeVSync_ExpectedRateRange

```
typedef struct {...} OH_NativeVSync_ExpectedRateRange
```

#### 概述

期望帧率范围结构体。

起始版本： 20

相关模块： [NativeVsync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativevsync)

所在头文件： [native_vsync.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-vsync-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t min | 帧率范围的最小帧率。 |
| int32_t max | 帧率范围的最大帧率。 |
| int32_t expected | 帧率范围的期望帧率。 |
