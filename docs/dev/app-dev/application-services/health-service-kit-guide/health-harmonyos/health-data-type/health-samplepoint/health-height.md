---
displayed_sidebar: appDevSidebar
title: "身高"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-height
format: md
---


此数据记录用户在某时刻的身高数据。

Harmony SDK类型常量：[samplePointHelper.height.DATA\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#常量-7)

![](./img/a9f5c25b.png)

Wearable设备暂不支持该数据类型。

## OAuth权限

联盟卡片申请的权限名称：健康数据 > 体脂数据

## 采样明细数据

### 明细字段说明

字段定义：[samplePointHelper.height.Fields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#fields-7)

| **字段**列表 | 描述 | **类型** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| height | 身高 | number | M | 厘米 | - |

### 数据开放说明

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata) | 小时级 | 运动健康App个人信息 |
