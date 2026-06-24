---
title: "InitialTimeZoneRule"
upstream_id: "harmonyos-references/capi-i18n-initialtimezonerule"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:24.503676"
---

# InitialTimeZoneRule

```
typedef struct InitialTimeZoneRule {...} InitialTimeZoneRule
```

#### 概述

起始时区规则。

起始版本： 22

相关模块： [i18n](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n)

所在头文件： [timezone.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t rawOffset | 时区的原始偏移量。 |
| int32_t dstSavings | 夏令时的偏移量。 |
