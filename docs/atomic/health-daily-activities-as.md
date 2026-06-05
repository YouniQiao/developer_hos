---
title: "日常活动"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/health-daily-activities-as
format: md
---


此数据记录用户在一小段时间内的日常活动数据。

* Harmony SDK类型常量：[samplePointHelper.dailyActivities.DATA\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#常量-3)

## 采样统计数据

### 聚合统计策略说明

* 字段定义：[samplePointHelper.dailyActivities.AggregateFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#aggregatefields-2)

| **字段**列表 | 描述 | 聚合策略 | **类型** | 单位 |
| --- | --- | --- | --- | --- |
| step | 步数 | sum | number | 步 |
| calorie | 热量 | sum | number | 卡 |
| distance | 距离 | sum | number | 米 |
| isIntensity | 是否中高强度（按天聚合对应运动健康App三环数据中锻炼时长） | sum | number | - |
| climbHighAltitude | 爬高海拔差（支持正负） | sum | number | 米 |
| isStand | 是否站立（一个小时有活动记录，就标识这个小时的第一分钟为1，按天聚合对应运动健康App三环数据中活动小时数） | sum | number | - |

### 数据开放说明

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.aggregateData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreaggregatedata) | 10分钟级 | 手机、手表、手环等 |
