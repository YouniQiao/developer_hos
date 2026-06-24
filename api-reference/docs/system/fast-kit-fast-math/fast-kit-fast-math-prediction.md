---
title: "@hms.fast.mathPrediction (数理预测)"
upstream_id: "harmonyos-references/fast-kit-fast-math-prediction"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:14.172783"
---

# @hms.fast.mathPrediction (数理预测)

本模块提供基于历史采样数据对序列数据进行建模和预测的能力，适用于手势跟踪、动画曲线预测、运动轨迹预估等实时预测场景。

起始版本： 26.0.0

#### 导入模块

```
import { mathPrediction } from '@kit.FASTKit';
```

#### predictIndex

predictIndex(samples: IndexSample[]): number

基于历史采样数据预测下一帧的索引值。

系统能力： SystemCapability.FAST.Core

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| samples | [IndexSample](#indexsample)[] | 是 | 最近帧的采样点数组，按时间戳从早到晚排序。必须包含至少2个数据点，否则抛出错误码1023100001。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 预测的下一帧索引值（四舍五入为整数）。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-errorcode)。

| 错误码ID | 错误信息 |
| --- | --- |
| 1023100001 | Array length invalid. |

示例：

```
import { mathPrediction } from '@kit.FASTKit';
import { BusinessError } from '@kit.BasicServicesKit';

let samples: mathPrediction.IndexSample[] = [
  { index: 0, timestamp: 0 },
  { index: 10, timestamp: 100 },
  { index: 20, timestamp: 200 }
];
try {
  let predicted = mathPrediction.predictIndex(samples);
  console.info(`predicted index: ${predicted}`);
} catch (err) {
  let code = (err as BusinessError).code;
  let message = (err as BusinessError).message;
  console.error(`predictIndex failed, code: ${code}, message: ${message}`);
}
```

#### IndexSample

索引采样点，描述某一时刻的索引状态。

系统能力： SystemCapability.FAST.Core

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| index | number | 否 | 否 | 采样点id（例如帧索引），取值范围为所有整数。 |
| timestamp | number | 否 | 否 | 采样点的时间戳，单位：毫秒，取值范围为所有整数。 |
