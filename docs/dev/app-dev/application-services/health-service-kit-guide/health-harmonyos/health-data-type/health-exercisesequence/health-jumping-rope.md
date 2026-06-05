---
displayed_sidebar: appDevSidebar
title: "跳绳"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-jumping-rope
format: md
---


跳绳相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.jumpingRope.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-16) | 跳绳 | AI跳绳、智能跳绳设备 |

## 关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.jumpingRope.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-15)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| jumpingRopeFeature | 跳绳特征数据 | [JumpingRopeFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#jumpingropefeature) | M |
| calorie | 热量统计 | [CalorieSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#caloriesummary) | M |
| skipSpeed | 跳跃速度统计 | [SkipSpeedSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skipspeedsummary) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

## 关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.jumpingRope.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-15)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
| skipSpeed | 跳跃速度详情 | [SkipSpeed](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#skipspeed)[] | O |
