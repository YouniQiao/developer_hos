---
displayed_sidebar: appDevSidebar
title: "心率变异性"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/ide-heart-rate-variability
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/ide-heart-rate-variability
last_sync: 2026-06-07
sync_hash: e04b6eab
---
此数据记录用户在某时刻的心率变异性数据。

Harmony SDK类型常量：[samplePointHelper.heartRateVariability.DATA\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#常量-6)

## OAuth权限

联盟卡片申请的权限名称：健康数据 > 心率数据

## 采样明细数据

### 明细字段说明

字段定义：[samplePointHelper.heartRateVariability.Fields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#fields-6)

| **字段**列表 | 描述 | **类型** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| heartRateVariabilityRMSSD | 心率变异性 | number | M | 毫秒 | (0, 200] |

### 数据开放说明

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata) | 小时级 | 手表、手环等 |
