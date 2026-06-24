---
title: "DisplaySoloist_ExpectedRateRange"
upstream_id: "harmonyos-references/capi-nativedisplaysoloist-displaysoloist-expectedraterange"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:05.760899"
---

# DisplaySoloist_ExpectedRateRange

```
typedef struct {...} DisplaySoloist_ExpectedRateRange
```

#### 概述

提供期望帧率范围结构体。

起始版本： 12

相关模块： [NativeDisplaySoloist](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativedisplaysoloist)

所在头文件： [native_display_soloist.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-display-soloist-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t min | 期望帧率范围最小值，取值范围为[0,120]。 |
| int32_t max | 期望帧率范围最大值，取值范围为[0,120]。 |
| int32_t expected | 期望帧率，取值范围为[0,120]。 |
