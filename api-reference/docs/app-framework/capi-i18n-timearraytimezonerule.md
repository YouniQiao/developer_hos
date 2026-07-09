---
title: "TimeArrayTimeZoneRule"
upstream_id: "harmonyos-references/capi-i18n-timearraytimezonerule"
catalog: "harmonyos-references"
content_hash: "dc6481ecb84e"
synced_at: "2026-07-09T00:59:08.697127"
---

# TimeArrayTimeZoneRule

```
typedef struct TimeArrayTimeZoneRule {...} TimeArrayTimeZoneRule
```

#### 概述

起始时间戳数组定义的时区规则。

起始版本： 22

相关模块： [i18n](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n)

所在头文件： [timezone.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* name | 时区规则的名称。 |
| int32_t rawOffset | 时区的原始偏移量，单位为毫秒（ms）。 |
| int32_t dstSavings | 夏令时的偏移量，单位为毫秒（ms）。 |
| double* startTimes | 规则生效的起始时间戳数组，起始时间戳单位为毫秒（ms）。 |
| int32_t numStartTimes | 规则生效的起始时间戳数组的大小。 |
| [TimeRuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h#timeruletype) timeRuleType | 时间规则类型。 |
