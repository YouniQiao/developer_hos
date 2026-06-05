---
displayed_sidebar: appDevSidebar
title: "情绪"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-emotion
format: md
---


此数据记录用户在某时刻的情绪数据。

Harmony SDK类型常量：[samplePointHelper.emotion.DATA\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#常量-4)

## OAuth权限

联盟卡片申请的权限名称：健康数据 > 情绪数据

## 采样明细数据

### 明细字段说明

字段定义：[samplePointHelper.emotion.Fields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#fields-4)

| **字段**列表 | 描述 | **类型** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| emotionStatus | 情绪状态 | number | M | - | [0, 100)  当前运动健康App仅展示以下值：  1：不愉悦  2：平静  3：愉悦 |

### 数据开放说明

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata) | 小时级 | 手表、手环等 |
