---
displayed_sidebar: appDevSidebar
title: "跑步"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-running
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-running
last_sync: 2026-06-07
sync_hash: fd2ef062
---
跑步相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.running.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-22) | 户外跑步 | 手机、手表、手环 |
| [exerciseSequenceHelper.indoorRunning.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-14) | 室内跑步/跑步机 | 手机、手表、手环 |
| [exerciseSequenceHelper.trailRunning.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-29) | 越野跑 | 手机、手表、手环 |

## 关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.running.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-21)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| distance | 距离统计 | [DistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#distancesummary) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| speed | 速度统计 | [SpeedSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speedsummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |
| step | 步数统计 | [StepSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stepsummary) | O |
| cadence | 步频统计 | [CadenceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cadencesummary) | O |
| altitude | 海拔统计 | [AltitudeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitudesummary) | O |
| location | 位置统计 | [LocationSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#locationsummary) | O |
| runningForm | 跑姿统计 | [RunningFormSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningformsummary) | O |
| runningFeature | 跑步特征数据 | [RunningFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningfeature) | O |

## 关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.running.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-21)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |
| cadence | 步频详情 | [Cadence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cadence)[] | O |
| runningForm | 跑姿详情 | [RunningForm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#runningform)[] | O |
| location | 位置详情 | [Location](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#location)[] | O |
| altitude | 海拔详情 | [Altitude](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitude)[] | O |
