---
displayed_sidebar: appDevSidebar
title: "篮球"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-basketball
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-basketball
last_sync: 2026-06-07
sync_hash: edb2eb62
---
篮球相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.basketball.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-2) | 篮球 | 篮球精灵手环 |

## 关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.basketball.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-1)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| basketballFeature | 篮球特征数据 | [BasketballFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#basketballfeature) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| jump | 跳跃统计 | [JumpSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#jumpsummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

## 关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.basketball.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-1)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| jump | 跳跃详情 | [Jump](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#jump)[] | O |
| speed | 速度详情 | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |
