---
title: "healthDataTypes (运动健康数据类型常量)(Lite)"
upstream_id: "harmonyos-references/health-api-healthdatatypes-lite"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:27.431320"
---

# healthDataTypes (运动健康数据类型常量)(Lite)

本模块提供运动健康数据类型常量。

起始版本： 6.1.1(24)

#### 导入模块

```
import healthStore from '@hms.health.store';
```
 ![](./img/note_3.0-zh-cn.png) 此模块为healthStore子模块，需通过healthStore.healthDataTypes方式使用。

#### 常量

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| WORKOUT | [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#datatype) | 锻炼记录数据类型。 |
| WORKOUT_SUMMARY | [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#datatype) | 锻炼记录统计数据类型。 |
| WORKOUT_DETAIL | [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#datatype) | 锻炼记录详情数据类型。 |
| WORKOUT_REALTIME | [healthStore.DataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#datatype) | 锻炼实时数据类型。 |
| BADMINTON | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 羽毛球子数据类型。 |
| PICKLEBALL | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 匹克球子数据类型。 |
| SOCCER | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 足球子数据类型。 |
| STAIR_CLIMBING | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 爬楼子数据类型。 |
| STRENGTH_TRAINING | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 力量训练子数据类型。 |
| TENNIS | [healthStore.SubDataType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#subdatatype) | 网球子数据类型。 |
