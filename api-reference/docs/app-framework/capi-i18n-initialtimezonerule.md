---
title: "InitialTimeZoneRule"
upstream_id: "harmonyos-references/capi-i18n-initialtimezonerule"
catalog: "harmonyos-references"
content_hash: "5851f4021335"
synced_at: "2026-07-09T00:59:08.628634"
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
| int32_t rawOffset | 时区的原始偏移量，单位为毫秒（ms）。 |
| int32_t dstSavings | 夏令时的偏移量，单位为毫秒（ms）。 |
