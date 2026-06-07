---
displayed_sidebar: appDevSidebar
title: "体温"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-samplepoint/health-body-temperature
format: md
---


## 体温

此数据记录用户在一小段时间内的体温数据。

Harmony SDK类型常量：[samplePointHelper.bodyTemperature.DATA\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#常量-2)

### OAuth权限

联盟卡片申请的权限名称：健康数据 > 体温数据

### 采样明细数据

**明细字段说明**

* 字段定义：[samplePointHelper.bodyTemperature.Fields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#fields-2)

| **字段**列表 | 描述 | **类型** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| bodyTemperature | 体温 | number | M | 摄氏度 | [34, 42] |

**数据开放说明**

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata) | 分钟级 | 部分手表支持 |

### 采样统计数据

**聚合统计策略说明**

字段定义：[samplePointHelper.bodyTemperature.AggregateFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#aggregatefields-1)

| **字段**列表 | 描述 | 聚合策略 | **类型** | 单位 |
| --- | --- | --- | --- | --- |
| bodyTemperature | 体温 | avg | max | min | count | number | 摄氏度 |

**数据开放说明**

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.aggregateData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreaggregatedata) | 分钟级 | 部分手表支持 |

## 皮肤体温

此数据记录用户在一小段时间内的皮肤温度数据。

* Harmony SDK类型常量：[samplePointHelper.skinTemperature.DATA\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#常量-9)

### OAuth权限

联盟卡片申请的权限名称：健康数据 > 体温数据

### 采样明细数据

**明细字段说明**

* 字段定义：[samplePointHelper.skinTemperature.Fields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#fields-9)

| **字段**列表 | 描述 | **类型** | 可选/必选 | 单位 | 取值范围 |
| --- | --- | --- | --- | --- | --- |
| skinTemperature | 皮肤温度 | number | M | 摄氏度 | [20, 42] |

**数据开放说明**

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata) | 分钟级 | 部分手表支持 |

### 采样统计数据

**聚合统计策略说明**

字段定义：[samplePointHelper.skinTemperature.AggregateFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-samplepointhelper#aggregatefields-5)

| **字段**列表 | 描述 | 聚合策略 | **类型** | 单位 |
| --- | --- | --- | --- | --- |
| skinTemperature | 皮肤温度 | avg | max | min | count | number | 摄氏度 |

**数据开放说明**

| 开放API | 查询及时性 | 数据源 |
| --- | --- | --- |
| [healthStore.aggregateData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreaggregatedata) | 分钟级 | 部分手表支持 |
