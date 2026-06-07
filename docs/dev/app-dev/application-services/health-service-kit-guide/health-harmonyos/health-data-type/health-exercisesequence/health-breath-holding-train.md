---
displayed_sidebar: appDevSidebar
title: "潜水闭气训练"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-breath-holding-train
format: md
---


潜水闭气训练相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.breathHoldingTrain.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-6) | 潜水闭气训练 | 部分专业手表、手环 |

## 关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.breathHoldingTrain.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-5)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| breathHoldingTrainFeature | 潜水闭气训练特征数据 | [BreathHoldingTrainFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#breathholdingtrainfeature) | M |
| exerciseHeartRate | 运动心率统计 | [ExerciseHeartRateSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartratesummary) | O |

## 关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.breathHoldingTrain.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-5)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| exerciseHeartRate | 运动心率详情 | [ExerciseHeartRate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#exerciseheartrate)[] | O |
