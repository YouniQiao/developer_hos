---
displayed_sidebar: appDevSidebar
title: "潜水"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-diving
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-exercisesequence/health-diving
last_sync: 2026-06-07
sync_hash: ecbf9738
---
## 自由潜水

### 自由潜水相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.diving.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-8) | 自由潜水 | 部分专业手表 |

### 自由潜水关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.diving.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-7)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| divingFeature | 自由潜水特征数据 | [DivingFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingfeature) | M |
| location | 位置统计 | [LocationSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#locationsummary) | O |
| divingDepth | 潜水深度统计 | [DivingDepthSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingdepthsummary) | O |
| waterTemperature | 水温统计 | [WaterTemperatureSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#watertemperaturesummary) | O |

### 自由潜水关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.diving.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-7)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| divingDepth | 潜水深度详情 | [DivingDepth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingdepth)[] | O |
| waterTemperature | 水温详情 | [WaterTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#watertemperature)[] | O |

## 水肺潜水

### 水肺潜水相关锻炼记录类型如下：

| **锻炼记录子类型常量** | **描述** | 数据来源 |
| --- | --- | --- |
| [exerciseSequenceHelper.scubaDiving.EXERCISE\_TYPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#常量-23) | 水肺潜水 | 部分专业手表 |

### 水肺潜水关联的统计数据说明

* 字段定义：[exerciseSequenceHelper.scubaDiving.SummaryFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#summaryfields-22)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| scubaDivingFeature | 水肺潜水特征数据 | [ScubaDivingFeature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#scubadivingfeature) | M |
| location | 位置统计 | [LocationSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#locationsummary) | O |
| divingDepth | 潜水深度统计 | [DivingDepthSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingdepthsummary) | O |
| waterTemperature | 水温统计 | [WaterTemperatureSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#watertemperaturesummary) | O |

### 水肺潜水关联的明细数据说明

* 字段定义：[exerciseSequenceHelper.scubaDiving.DetailFields](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper#detailfields-22)

| **字段**列表 | 描述 | **类型** | 可选/必选 |
| --- | --- | --- | --- |
| divingDepth | 潜水深度详情 | [DivingDepth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#divingdepth)[] | O |
| waterTemperature | 水温详情 | [WaterTemperature](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields#watertemperature)[] | O |
