---
displayed_sidebar: appDevSidebar
title: "潜水闭气测试"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-breath-holding-test
format: md
---


潜水闭气测试相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.breathHoldingTest.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-5) | 潜水闭气测试 | 部分专业手表、手环 |

## 关联的统计数据说明

字段定义：[exerciseSequenceHelper.breathHoldingTest.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-4)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| breathHoldingTestFeature | 潜水闭气测试特征数据 | [BreathHoldingTestFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtestfeature) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

## 关联的明细数据说明

字段定义：[exerciseSequenceHelper.breathHoldingTest.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-4)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
