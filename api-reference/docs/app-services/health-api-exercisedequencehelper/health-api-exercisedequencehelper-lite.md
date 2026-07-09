---
title: "exerciseSequenceHelper (锻炼记录类型常量)(Lite)"
upstream_id: "harmonyos-references/health-api-exercisedequencehelper-lite"
catalog: "harmonyos-references"
content_hash: "d93e7d4a9f06"
synced_at: "2026-07-09T01:01:20.706535"
---

# exerciseSequenceHelper (锻炼记录类型常量)(Lite)

本模块提供锻炼记录数据类型常量及数据模型。

起始版本： 6.1.1(24)

#### 导入模块

```
import healthStore from '@hms.health.store';
```
 ![](./img/note_3.0-zh-cn.png) 此模块为healthStore子模块，需通过healthStore.exerciseSequenceHelper方式使用。

#### 常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| DATA_TYPE | [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#datatype) | 锻炼记录数据类型。 |

#### badminton

羽毛球数据类型常量及数据模型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

#### [h2]常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE_TYPE | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 羽毛球子数据类型。 |

#### [h2]SummaryFields

type SummaryFields = healthFields.BadmintonSummary

羽毛球统计数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.BadmintonSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#badmintonsummary) | 羽毛球统计数据字段列表。 |

#### [h2]DetailFields

type DetailFields = healthFields.BadmintonDetail

羽毛球详情数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.BadmintonDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#badmintondetail) | 羽毛球详情数据字段列表。 |

#### tennis

网球数据类型常量及数据模型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

#### [h2]常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE_TYPE | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 网球子数据类型。 |

#### [h2]SummaryFields

type SummaryFields = healthFields.TennisSummary

网球统计数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.TennisSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#tennissummary) | 网球统计数据字段列表。 |

#### [h2]DetailFields

type DetailFields = healthFields.TennisDetail

网球详情数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.TennisDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#tennisdetail) | 网球详情数据字段列表。 |

#### stairClimb

爬楼数据类型常量及数据模型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

#### [h2]常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE_TYPE | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 爬楼子数据类型。 |

#### [h2]SummaryFields

type SummaryFields = healthFields.StairClimbSummary

爬楼统计数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.StairClimbSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#stairclimbsummary) | 爬楼统计数据字段列表。 |

#### [h2]DetailFields

type DetailFields = healthFields.StairClimbDetail

爬楼详情数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.StairClimbDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#stairclimbdetail) | 爬楼详情数据字段列表。 |

#### soccer

足球数据类型常量及数据模型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

#### [h2]常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE_TYPE | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 足球子数据类型。 |

#### [h2]SummaryFields

type SummaryFields = healthFields.SoccerSummary

足球统计数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.SoccerSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#soccersummary) | 足球统计数据字段列表。 |

#### [h2]DetailFields

type DetailFields = healthFields.SoccerDetail

足球详情数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.SoccerDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#soccerdetail) | 足球详情数据字段列表。 |

#### pickleBall

匹克球数据类型常量及数据模型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

#### [h2]常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE_TYPE | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 匹克球子数据类型。 |

#### [h2]SummaryFields

type SummaryFields = healthFields.PickleBallSummary

匹克球统计数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.PickleBallSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#pickleballsummary) | 匹克球统计数据字段列表。 |

#### [h2]DetailFields

type DetailFields = healthFields.PickleBallDetail

匹克球详情数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.PickleBallDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#pickleballdetail) | 匹克球详情数据字段列表。 |

#### strengthTraining

力量训练数据类型常量及数据模型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

#### [h2]常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| EXERCISE_TYPE | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 力量训练子数据类型。 |

#### [h2]SummaryFields

type SummaryFields = healthFields.StrengthTrainingSummary

力量训练统计数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.StrengthTrainingSummary](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#strengthtrainingsummary) | 力量训练统计数据字段列表。 |

#### [h2]DetailFields

type DetailFields = healthFields.StrengthTrainingDetail

力量训练详情数据字段列表。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthFields.StrengthTrainingDetail](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthfields-lite#strengthtrainingdetail) | 力量训练详情数据字段列表。 |
