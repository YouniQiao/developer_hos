---
displayed_sidebar: appDevSidebar
title: "滑雪"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-skiing
format: md
---


## 冬季两项

### 冬季两项相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.biathlon.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-3) | 冬季两项 | 手环、手表 |

### 冬季两项关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.biathlon.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-2)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

### 冬季两项关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.biathlon.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-2)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |

## 滑雪

### 滑雪相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.skiing.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-24) | 滑雪 | 手环、手表 |

### 滑雪关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.skiing.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-23)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| distance | 距离统计 | [DistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#distancesummary) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| skiingFeature | 滑雪特征数据 | [SkiingFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skiingfeature) | M |
| altitude | 海拔统计 | [AltitudeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitudesummary) | O |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

### 滑雪关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.skiing.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-23)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |
| location | 位置详情 | [Location](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#location)[] | O |
| altitude | 海拔详情 | [Altitude](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitude)[] | O |

## 单板滑雪

### 单板滑雪相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.snowboarding.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-26) | 单板滑雪 | 手环、手表 |

### 单板滑雪关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.snowboarding.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-25)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| distance | 距离统计 | [DistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#distancesummary) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| snowboardingFeature | 单板滑雪特征数据 | [SnowboardingFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#snowboardingfeature) | M |
| altitude | 海拔统计 | [AltitudeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitudesummary) | O |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

### 单板滑雪关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.snowboarding.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-25)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |
| location | 位置详情 | [Location](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#location)[] | O |
| altitude | 海拔详情 | [Altitude](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitude)[] | O |

## 滑雪橇

### 滑雪橇相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.sled.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-25) | 滑雪橇 | 手环、手表 |

### 滑雪橇关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.sled.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-24)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

### 滑雪橇关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.sled.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-24)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| speed | 速度详情 | [Speed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#speed)[] | O |
