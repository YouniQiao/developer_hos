---
displayed_sidebar: appDevSidebar
title: "游泳"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-swim
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-swim
last_sync: 2026-06-07
sync_hash: 76ddec0d
---
## 开放水域游泳

### 开放水域游泳相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.openWaterSwim.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-18) | 开放水域游泳 | 手环、手表 |

### 开放水域游泳关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.openWaterSwim.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-17)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| openWaterSwimFeature | 开放水域游泳特征数据 | [OpenWaterSwimFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#openwaterswimfeature) | M |
| distance | 距离统计 | [DistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#distancesummary) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |
| swimStrokeRate | 划水频率统计 | [SwimStrokeRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#swimstrokeratesummary) | O |
| swolf | SWOLF统计 | [SwolfSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#swolfsummary) | O |

### 开放水域游泳关联的明细数据说明

字段定义：[exerciseSequenceHelper.openWaterSwim.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-17)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| location | 位置详情 | [Location](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#location)[] | O |
| speed | 速度详情 | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |
| swimStrokeRate | 划水频率详情 | [SwimStrokeRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#swimstrokerate)[] | O |
| swolf | SWOLF详情 | [Swolf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#swolf)[] | O |

## 泳池游泳

### 泳池游泳相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.poolSwim.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-19) | 泳池游泳 | 手环、手表 |

### 泳池游泳关联的统计数据说明

字段定义：[exerciseSequenceHelper.poolSwim.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-18)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| poolSwimFeature | 泳池游泳特征数据 | [PoolSwimFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#poolswimfeature) | M |
| distance | 距离统计 | [DistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#distancesummary) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |
| speed | 速度统计 | [SpeedSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speedsummary) | O |
| swimStrokeRate | 划水频率统计 | [SwimStrokeRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#swimstrokeratesummary) | O |
| swolf | SWOLF统计 | [SwolfSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#swolfsummary) | O |

### 泳池游泳关联的明细数据说明

字段定义：[exerciseSequenceHelper.poolSwim.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-18)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |
| swimStrokeRate | 划水频率详情 | [SwimStrokeRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#swimstrokerate)[] | O |
| swolf | SWOLF详情 | [Swolf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#swolf)[] | O |
