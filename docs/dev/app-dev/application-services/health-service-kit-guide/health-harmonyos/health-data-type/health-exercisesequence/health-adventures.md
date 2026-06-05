---
displayed_sidebar: appDevSidebar
title: "户外探险"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-adventures
format: md
---


户外探险相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.adventures.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-1) | 户外探险 | 部分专业手表 |

## 关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.adventures.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| distance | 距离统计 | [DistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#distancesummary) | M |
| step | 步数统计 | [StepSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stepsummary) | O |
| cadence | 步频统计 | [CadenceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cadencesummary) | O |
| altitude | 海拔统计 | [AltitudeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitudesummary) | O |

## 关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.adventures.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| markPoint | 标记点采样详情 | [MarkPoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#markpoint)[] | O |
| altitude | 海拔详情 | [Altitude](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitude)[] | O |
