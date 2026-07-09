---
title: "TimeZoneRuleQuery"
upstream_id: "harmonyos-references/capi-i18n-timezonerulequery"
catalog: "harmonyos-references"
content_hash: "577b690e7154"
synced_at: "2026-07-09T00:59:08.688388"
---

# TimeZoneRuleQuery

```
typedef struct TimeZoneRuleQuery {...} TimeZoneRuleQuery
```

#### 概述

用于传入查询的信息，并接收查询的结果。

起始版本： 22

相关模块： [i18n](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-i18n)

所在头文件： [timezone.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-timezone-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| double base | 查询的基准时间，单位为毫秒（ms），采用Unix时间戳格式。 |
| int32_t prevRawOffset | 上一次的时区原始偏移量，单位为毫秒（ms）。 |
| int32_t prevDSTSavings | 上一次的夏令时偏移量，单位为毫秒（ms）。 |
| bool inclusive | 查询结果是否包含基准时间。true：查询结果包含基准时间；false：查询结果不包含基准时间。 |
| double result | 查询结果，单位为毫秒（ms），采用Unix时间戳格式。 |
