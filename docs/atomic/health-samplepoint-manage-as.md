---
title: "聚合查询运动健康采样数据"
original_url: /docs/dev/atomic-dev/health-app-dev-as/health-samplepoint-manage-as
format: md
upstream_id: dev/atomic-dev/health-app-dev-as/health-samplepoint-manage-as
last_sync: 2026-06-07
sync_hash: 14b5c51c
---
## 场景介绍

运动健康采样数据，表示在某时刻（或一段时间）采集到的特定数据类型的样本，由时间、样本值及采样的数据源组成，支持聚合查询。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [aggregateData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreaggregatedata)\&lt;T extends [AggregateResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregateresult)\&gt;(request: [AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest) | [AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)[]): Promise\&lt;T[]\&gt; | 聚合查询运动健康采样数据，通过[AggregateRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#aggregaterequest)设置查询的数据类型、聚合策略。 |

![](./img/9bc4ed07.png)

aggregateData接口读取今日日常活动数据，数据上报存在延时，读取实时日常活动数据建议使用[读取实时三环数据](/docs/dev/atomic-dev/health-app-dev-as/health-three-ring-read-as)接口。

## 开发前检查

* 完成[申请运动健康服务](/docs/dev/atomic-dev/health-preparations-as/health-apply-as)与[配置Client ID](/docs/dev/atomic-dev/health-preparations-as/health-configuration-client-id-as)。
* 接口首次调用前，需先使用[init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreinit)方法进行初始化。
* 需先通过[用户授权](/docs/dev/atomic-dev/health-app-dev-as/health-add-permissions-as#用户授权)接口引导用户授权，用户授权对应数据类型权限后，才有权限调用接口操作相关数据类型数据。
* 错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)。

## 开发步骤

### 聚合查询

1.导入运动健康服务功能模块及相关公共模块。

```
import { healthStore } from '@kit.HealthServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```

2.创建聚合查询请求。

```
let aggregateRequest: healthStore.AggregateRequest<healthStore.samplePointHelper.dailyActivities.AggregateFields> = {
  dataType: healthStore.samplePointHelper.dailyActivities.DATA_TYPE,
  metrics: {
    step: ['sum'],
    calorie: ['sum'],
    distance: ['sum'],
    climbHighAltitude:['sum'],
    isIntensity: ['sum'],
    isStand: ['sum']
 },
  groupBy: {
    unitType: healthStore.GroupUnitType.DAY
  },
  startLocalDate: '10/30/2023',
  endLocalDate: '10/30/2023'
}
```

3.调用[aggregateData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreaggregatedata)方法执行查询请求，并处理返回结果。

```
try {
  const aggregateResults = await healthStore.aggregateData<healthStore.samplePointHelper.dailyActivities.AggregateResult>(aggregateRequest);
  hilog.info(0x0000, 'testTag', 'Succeeded in reading data.');
  aggregateResults.forEach((aggregateResult) => {
    hilog.info(0x0000, 'testTag', `the start time is ${aggregateResult.startTime}.`);
    hilog.info(0x0000, 'testTag', `the end time is ${aggregateResult.endTime}.`);
    Object.keys(aggregateResult.fields).forEach((fieldName) => {
      hilog.info(0x0000, 'testTag', `the sum of ${fieldName} is ${aggregateResult.fields[fieldName].sum}.`);
    });
  });
} catch (err) {
  hilog.error(0x0000, 'testTag', `Failed to read data. Code: ${err.code}, message: ${err.message}`);
}
```
