---
title: "healthModels (运动健康数据模型)"
upstream_id: "harmonyos-references/health-api-healthmodels"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:26.939816"
---

# healthModels (运动健康数据模型)

本模块提供运动健康数据模型。

起始版本： 5.0.0(12)

#### 导入模块

```
import { healthStore } from '@kit.HealthServiceKit';
```
 ![](./img/note_3.0-zh-cn.png) 此模块为healthStore子模块，需通过healthStore.healthModels方式使用。

#### Adventures

type Adventures = healthStore.ExerciseSequence<healthFields.AdventuresSummary, healthFields.AdventuresDetail>

户外探险锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 户外探险锻炼记录数据模型。 |

#### Basketball

type Basketball = healthStore.ExerciseSequence<healthFields.BasketballSummary, healthFields.BasketballDetail>

篮球锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 篮球锻炼记录数据模型。 |

#### Biathlon

type Biathlon = healthStore.ExerciseSequence<healthFields.BiathlonSummary, healthFields.BiathlonDetail>

冬季两项锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 冬季两项锻炼记录数据模型。 |

#### BloodOxygenSaturation

type BloodOxygenSaturation = healthStore.SamplePoint<healthFields.BloodOxygenSaturation>

血氧采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 血氧采样数据模型。 |

#### BloodOxygenSaturationAggregateRequest

type BloodOxygenSaturationAggregateRequest = healthStore.AggregateRequest<healthFields.BloodOxygenSaturationAggregation>

血氧采样数据聚合统计请求模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest) | 血氧采样数据聚合统计请求模型。 |

#### BloodOxygenSaturationAggregateResult

type BloodOxygenSaturationAggregateResult = healthStore.AggregateResult<healthFields.BloodOxygenSaturationAggregation>

血氧聚合结果数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult) | 血氧聚合结果数据模型。 |

#### BloodPressure

type BloodPressure = healthStore.SamplePoint<healthFields.BloodPressure>

血压采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 血压采样数据模型。 |

#### Bmx

type Bmx = Cycling

BMX自行车锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthModels.Cycling](#cycling) | BMX自行车锻炼记录数据模型。 |

#### BodyTemperature

type BodyTemperature = healthStore.SamplePoint<healthFields.BodyTemperature>

体温采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 体温采样数据模型。 |

#### BodyTemperatureAggregateRequest

type BodyTemperatureAggregateRequest = healthStore.AggregateRequest<healthFields.BodyTemperatureAggregation>

体温采样数据聚合统计请求模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest) | 体温采样数据聚合统计请求模型。 |

#### BodyTemperatureAggregateResult

type BodyTemperatureAggregateResult = healthStore.AggregateResult<healthFields.BodyTemperatureAggregation>

体温聚合结果数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult) | 体温聚合结果数据模型。 |

#### BreathHoldingTest

type BreathHoldingTest = healthStore.ExerciseSequence<healthFields.BreathHoldingTestSummary, healthFields.BreathHoldingTestDetail>

闭气测试锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 闭气测试锻炼记录数据模型。 |

#### BreathHoldingTrain

type BreathHoldingTrain = healthStore.ExerciseSequence<healthFields.BreathHoldingTrainSummary, healthFields.BreathHoldingTrainDetail>

闭气训练锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 闭气训练锻炼记录数据模型。 |

#### Cycling

type Cycling = healthStore.ExerciseSequence<healthFields.CyclingSummary, healthFields.CyclingDetail>

户外骑行锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 户外骑行锻炼记录数据模型。 |

#### DailyActivities

type DailyActivities = healthStore.SamplePoint<healthFields.DailyActivities>

日常活动采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 日常活动采样数据模型。 |

#### DailyActivitiesAggregateRequest

type DailyActivitiesAggregateRequest = healthStore.AggregateRequest<healthFields.DailyActivitiesAggregation>

日常活动采样数据聚合统计请求模型。

元服务API：从版本5.0.0(12)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest) | 日常活动采样数据聚合统计请求模型。 |

#### DailyActivitiesAggregateResult

type DailyActivitiesAggregateResult = healthStore.AggregateResult<healthFields.DailyActivitiesAggregation>

日常活动聚合结果数据模型。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult) | 日常活动聚合结果数据模型。 |

#### Diving

type Diving = healthStore.ExerciseSequence<healthFields.DivingSummary, healthFields.DivingDetail>

自由潜水锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 自由潜水锻炼记录数据模型。 |

#### Elliptical

type Elliptical = healthStore.ExerciseSequence<healthFields.EllipticalSummary, healthFields.EllipticalDetail>

椭圆机锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 椭圆机锻炼记录数据模型。 |

#### Emotion

type Emotion = healthStore.SamplePoint<healthFields.Emotion>

情绪采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.1.0(18)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 情绪采样数据模型。 |

#### GolfCourseModel

type GolfCourseModel = healthStore.ExerciseSequence<healthFields.GolfCourseModelSummary, healthFields.GolfCourseModelDetail>

高尔夫场地模式锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 高尔夫场地模式锻炼记录数据模型。 |

#### GolfPractice

type GolfPractice = healthStore.ExerciseSequence<healthFields.GolfPracticeSummary, healthFields.GolfPracticeDetail>

高尔夫练习场模式锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 高尔夫练习场模式锻炼记录数据模型。 |

#### HeartRate

type HeartRate = healthStore.SamplePoint<healthFields.HeartRate>

动态心率采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 动态心率采样数据模型。 |

#### HeartRateAggregateRequest

type HeartRateAggregateRequest = healthStore.AggregateRequest<healthFields.HeartRateAggregation>

动态心率采样数据聚合统计请求模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest) | 动态心率采样数据聚合统计请求模型。 |

#### HeartRateAggregateResult

type HeartRateAggregateResult = healthStore.AggregateResult<healthFields.HeartRateAggregation>

动态心率聚合结果数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult) | 动态心率聚合结果数据模型。 |

#### HeartRateVariability

type HeartRateVariability = healthStore.SamplePoint<healthFields.HeartRateVariability>

心率变异性采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.1.0(18)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 心率变异性采样数据模型。 |

#### Height

type Height = healthStore.SamplePoint<healthFields.Height>

身高采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 身高采样数据模型。 |

#### Hiking

type Hiking = Walking

徒步锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthModels.Walking](#walking) | 徒步锻炼记录数据模型。 |

#### IndoorCycling

type IndoorCycling = Cycling

室内单车锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthModels.Cycling](#cycling) | 室内单车锻炼记录数据模型。 |

#### IndoorRunning

type IndoorRunning = Running

室内跑步锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthModels.Running](#running) | 室内跑步锻炼记录数据模型。 |

#### IndoorWalking

type IndoorWalking = Walking

室内步行锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthModels.Walking](#walking) | 室内步行锻炼记录数据模型。 |

#### JumpingRope

type JumpingRope = healthStore.ExerciseSequence<healthFields.JumpingRopeSummary, healthFields.JumpingRopeDetail>

跳绳锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 跳绳锻炼记录数据模型。 |

#### MenstrualCycle

type MenstrualCycle = healthStore.HealthSequence<healthFields.MenstrualCycle, healthFields.MenstrualCycleDetail>

生理周期健康记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 6.1.1(24)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence) | 生理周期健康记录数据模型。 |

#### MountainHike

type MountainHike = healthStore.ExerciseSequence<healthFields.MountainHikeSummary, healthFields.MountainHikeDetail>

登山锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 登山锻炼记录数据模型。 |

#### OpenWaterSwim

type OpenWaterSwim = healthStore.ExerciseSequence<healthFields.OpenWaterSwimSummary, healthFields.OpenWaterSwimDetail>

开放水域游泳锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 开放水域游泳锻炼记录数据模型。 |

#### PoolSwim

type PoolSwim = healthStore.ExerciseSequence<healthFields.PoolSwimSummary, healthFields.PoolSwimDetail>

泳池游泳锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 泳池游泳锻炼记录数据模型。 |

#### RestingHeartRate

type RestingHeartRate = healthStore.SamplePoint<healthFields.RestingHeartRate>

静息心率采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 静息心率采样数据模型。 |

#### RestingHeartRateAggregateRequest

type RestingHeartRateAggregateRequest = healthStore.AggregateRequest<healthFields.RestingHeartRateAggregation>

静息心率采样数据聚合统计请求模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest) | 静息心率采样数据聚合统计请求模型。 |

#### RestingHeartRateAggregateResult

type RestingHeartRateAggregateResult = healthStore.AggregateResult<healthFields.RestingHeartRateAggregation>

静息心率聚合结果数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult) | 静息心率聚合结果数据模型。 |

#### Rower

type Rower = healthStore.ExerciseSequence<healthFields.RowerSummary, healthFields.RowerDetail>

划船机锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 划船机锻炼记录数据模型。 |

#### Rowing

type Rowing = healthStore.ExerciseSequence<healthFields.RowingSummary, healthFields.RowingDetail>

赛艇锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 赛艇锻炼记录数据模型。 |

#### Running

type Running = healthStore.ExerciseSequence<healthFields.RunningSummary, healthFields.RunningDetail>

户外跑步锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 户外跑步锻炼记录数据模型。 |

#### ScubaDiving

type ScubaDiving = healthStore.ExerciseSequence<healthFields.ScubaDivingSummary, healthFields.ScubaDivingDetail>

水肺潜水锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 水肺潜水锻炼记录数据模型。 |

#### Skiing

type Skiing = healthStore.ExerciseSequence<healthFields.SkiingSummary, healthFields.SkiingDetail>

滑雪锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 滑雪锻炼记录数据模型。 |

#### SkinTemperature

type SkinTemperature = healthStore.SamplePoint<healthFields.SkinTemperature>

皮肤体温采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 皮肤体温采样数据模型。 |

#### SkinTemperatureAggregateRequest

type SkinTemperatureAggregateRequest = healthStore.AggregateRequest<healthFields.SkinTemperatureAggregation>

皮肤体温采样数据聚合统计请求模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest) | 皮肤体温采样数据聚合统计请求模型。 |

#### SkinTemperatureAggregateResult

type SkinTemperatureAggregateResult = healthStore.AggregateResult<healthFields.SkinTemperatureAggregation>

皮肤体温聚合结果数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult) | 皮肤体温聚合结果数据模型。 |

#### Sled

type Sled = healthStore.ExerciseSequence<healthFields.SledSummary, healthFields.SledDetail>

滑雪橇锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 滑雪橇锻炼记录数据模型。 |

#### SleepNapRecord

type SleepNapRecord = healthStore.HealthSequence<healthFields.SleepNap, healthFields.SleepDetail>

零星小睡健康记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence) | 零星小睡健康记录数据模型。 |

#### SleepRecord

type SleepRecord = healthStore.HealthSequence<healthFields.Sleep, healthFields.SleepDetail>

夜间睡眠健康记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence) | 夜间睡眠健康记录数据模型。 |

#### Snowboarding

type Snowboarding = healthStore.ExerciseSequence<healthFields.SnowboardingSummary, healthFields.SnowboardingDetail>

单板滑雪锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 单板滑雪锻炼记录数据模型。 |

#### Spinning

type Spinning = Cycling

动感单车锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthModels.Cycling](#cycling) | 动感单车锻炼记录数据模型。 |

#### Sports

type Sports = healthStore.ExerciseSequence<healthFields.SportsSummary, healthFields.SportsDetail>

通用锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 通用锻炼记录数据模型。 |

#### Stress

type Stress = healthStore.SamplePoint<healthFields.Stress>

压力采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 压力采样数据模型。 |

#### StressAggregateRequest

type StressAggregateRequest = healthStore.AggregateRequest<healthFields.StressAggregation>

压力采样数据聚合统计请求模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest) | 压力采样数据聚合统计请求模型。 |

#### StressAggregateResult

type StressAggregateResult = healthStore.AggregateResult<healthFields.StressAggregation>

压力聚合结果数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult) | 压力聚合结果数据模型。 |

#### TrailRunning

type TrailRunning = Running

越野跑锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthModels.Running](#running) | 越野跑锻炼记录数据模型。 |

#### Walking

type Walking = healthStore.ExerciseSequence<healthFields.WalkingSummary, healthFields.WalkingDetail>

户外步行锻炼记录数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | 户外步行锻炼数据模型记录。 |

#### Weight

type Weight = healthStore.SamplePoint<healthFields.Weight>

体重采样数据模型。

系统能力： SystemCapability.Health.HealthStore

起始版本： 5.0.0(12)

模型约束： 此接口仅可在Stage模型下使用。

| 类型 | **说明** |
| --- | --- |
| [healthStore.SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint) | 体重采样数据模型。 |
