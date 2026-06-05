---
displayed_sidebar: appDevSidebar
title: "高尔夫"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-golf
format: md
---


## 高尔夫练习场

### 高尔夫练习场相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.golfPractice.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-11) | 高尔夫练习场 | 手环、手表 |

### 高尔夫练习场关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.golfPractice.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-10)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| golfPracticeFeature | 高尔夫练习场特征数据 | [GolfPracticeFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfpracticefeature) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

### 高尔夫练习场关联的明细数据说明

字段定义：[exerciseSequenceHelper.golfPractice.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-10)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |

## 高尔夫场地模式

### 高尔夫场地模式相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.golfCourseModel.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-10) | 高尔夫场地模式 | 手环、手表 |

### 高尔夫场地模式关联的统计数据说明

字段定义：[exerciseSequenceHelper.golfCourseModel.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-9)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| golfCourseModelFeature | 高尔夫场地模式特征数据 | [GolfCourseModelFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#golfcoursemodelfeature) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| step | 步数统计 | [StepSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#stepsummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |
| distance | 距离统计 | [DistanceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#distancesummary) | O |
| cadence | 步频统计 | [CadenceSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#cadencesummary) | O |
| altitude | 海拔统计 | [AltitudeSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitudesummary) | O |

### 高尔夫场地模式关联的明细数据说明

字段定义：[exerciseSequenceHelper.golfCourseModel.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-9)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| altitude | 海拔详情 | [Altitude](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#altitude)[] | O |
