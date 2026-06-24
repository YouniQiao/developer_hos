---
title: "healthStore (运动健康数据服务)(Lite)"
upstream_id: "harmonyos-references/health-api-healthstore-lite"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:26.582688"
---

# healthStore (运动健康数据服务)(Lite)

本模块提供运动健康数据服务。

起始版本： 6.1.1(24)

#### 导入模块

```
import healthStore from '@hms.health.store';
```

#### AuthorizationBase

授权信息基类。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| readDataTypes | [DataType](#datatype)[] | 否 | 否 | 读数据类型。 |
| writeDataTypes | [DataType](#datatype)[] | 否 | 否 | 写数据类型。 |

#### AuthorizationRequest

授权请求参数类型，继承[AuthorizationBase](#authorizationbase)。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| readDataTypes | [DataType](#datatype)[] | 否 | 否 | 读数据类型。 |
| writeDataTypes | [DataType](#datatype)[] | 否 | 否 | 写数据类型。 |
| scopes | string[] | 否 | 是 | 非数据类型权限，使用scope授权，请参见[OAuth权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-cloudsync#oauth权限)，若未填写，默认为空。 |

#### AuthorizationResponse

授权响应返回类型，继承[AuthorizationBase](#authorizationbase)。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| readDataTypes | [DataType](#datatype)[] | 否 | 否 | 授权成功的读数据类型，其对应权限在[应用申请权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-apply)和用户授权权限的交集中。 |
| writeDataTypes | [DataType](#datatype)[] | 否 | 否 | 授权成功的写数据类型，其对应权限在[应用申请权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-apply)和用户授权权限的交集中。 |
| scopes | string[] | 否 | 是 | 非数据类型权限，使用scope授权，请参见[OAuth权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-cloudsync#oauth权限)，若未填写，默认为空。 |

#### DataReadRequest

读取请求参数基类，继承[DataRequest](#datarequest)。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| **名称** | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| count | number | 否 | 是 | 读取数据的条数，若未填写，默认为无条数限制。 取值范围：[1, ∞) |
| offset | number | 否 | 是 | 相对于当前位置的偏移，若未填写，默认为0，无偏移。 |
| sortOrder | [SortOrder](#sortorder) | 否 | 是 | 排序顺序，若未填写，默认为升序。 |

#### DataRequest

请求参数基类。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| **名称** | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| startLocalDate | string | 否 | 否 | 数据的开始本地日期，格式'MM/DD/YYYY'。 |
| endLocalDate | string | 否 | 否 | 数据的结束本地日期，格式'MM/DD/YYYY'。 |
| startTime | number | 否 | 否 | 请求的开始时间，Unix时间戳，以毫秒为单位。 取值范围：(0, ∞) |
| endTime | number | 否 | 否 | 请求的结束时间，Unix时间戳，以毫秒为单位。 取值范围：(0, ∞) |
| dataSourceOptions | [DataSourceOptions](#datasourceoptions) | 否 | 是 | 请求关联的数据源信息，若未填写，默认为无数据源限制。 |

#### DataSourceOptions

数据源选项类，用于查询和删除。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| **名称** | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| dataSourceId | string | 否 | 是 | 数据源的标识，由平台生成，无法更改，若未填写，默认为空。 |
| deviceUniqueId | string | 否 | 是 | 设备的UniqueId，若未填写，默认为空。 |
| appBundleName | string | 否 | 是 | 应用包名，若未填写，默认为空。 |
| appId | string | 否 | 是 | 应用的OAuth 2.0客户端ID(client_id)，若未填写，默认为空。 |

#### DataType

定义数据类型的类，每个数据类型字段都有唯一的id来标识。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| id | number | 是 | 否 | 数据类型唯一标识值。 |
| name | string | 是 | 是 | 数据类型的名称，若未填写，默认匹配id对应的名称。 |

#### ExerciseSequence

ExerciseSequence<K extends Record<string, [ExerciseSummary](#exercisesummary)> = Record<string, [ExerciseSummary](#exercisesummary)>,DK extends Record<string, [SequencePoint](#sequencepoint)[]> = Record<string, [SequencePoint](#sequencepoint)[]>>

锻炼记录数据类，继承[SampleDataBase](#sampledatabase)。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| exerciseType | [SubDataType](#subdatatype) | 否 | 否 | 锻炼记录子数据类型。 |
| duration | number | 否 | 是 | 锻炼时长，单位毫秒，若未填写，默认为结束时间减去开始时间。 取值范围：(0, ∞) |
| summaries | Pick | 否 | 否 | 统计数据，锻炼记录关联的统计数据类型参考[exerciseSequenceHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper)定义的模型。 |
| details | Pick | 否 | 是 | 详情数据，锻炼记录关联的详情数据类型参考[exerciseSequenceHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper)定义的模型，若未填写，默认为空。 |

#### ExerciseSequenceReadRequest

ExerciseSequenceReadRequest<DK extends Record<string, [SequencePoint](#sequencepoint)[]> = Record<string, [SequencePoint](#sequencepoint)[]>>

读取锻炼记录请求类，继承Omit<[DataReadRequest](#datareadrequest), 'startLocalDate' | 'endLocalDate'>。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| exerciseType | [SubDataType](#subdatatype) | [SubDataType](#subdatatype)[] | null | 否 | 否 | 锻炼记录子数据类型，为空时查询所有类型。 |
| readOptions | [SequenceReadOptions](#sequencereadoptions) | 否 | 是 | 详情数据选项，若未填写，默认为不查询详情数据。 |

#### ExerciseSummary

锻炼记录统计数据类，继承Record<string, [HealthValueType](#healthvaluetype) | [PaceValueType](#pacevaluetype)>。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| [P: string] | [HealthValueType](#healthvaluetype) | [PaceValueType](#pacevaluetype) | 否 | 否 | 统计数据字段。 |

#### HealthValueType

type HealthValueType = number | string | boolean | undefined

运动健康数据值类型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| number | 表示值类型为数字，可取任意值。 |
| string | 表示值类型为字符串，可取任意值。 |
| boolean | 表示值类型为布尔类型，可取true或false，具体含义以实际使用场景为准。 |
| undefined | 表示值类型为undefined，取值为空。 |

#### PaceValueType

type PaceValueType = Record<string, number>

配速数据类型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| Record | 配速数据字段。 |

#### SampleDataBase

健康数据基类。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| dataType | [DataType](#datatype) | 否 | 否 | 数据类型。 |
| dataSourceId | string | 否 | 否 | 数据源唯一标识值。LiteWearable设备开发，无需填写dataSourceId。 |
| localDate | string | 否 | 否 | 数据的本地日期，格式'MM/DD/YYYY'。 |
| startTime | number | 否 | 否 | 数据开始时间，Unix时间戳，以毫秒为单位。 取值范围：(0, ∞) |
| endTime | number | 否 | 否 | 数据结束时间，Unix时间戳，以毫秒为单位。 取值范围：(0, ∞) |
| timeZone | string | 否 | 否 | 数据所在的时区，格式为+0800。 |
| modifiedTime | number | 否 | 否 | 创建或修改时间，Unix时间戳，以毫秒为单位。 取值范围：(0, ∞) |

#### SequencePoint

运动健康数据详情点，继承Record<string, [HealthValueType](#healthvaluetype)>。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| startTime | number | 否 | 否 | 数据开始时间，Unix时间戳，以毫秒为单位。 取值范围：(0, ∞) |
| [P: string] | [HealthValueType](#healthvaluetype) | 否 | 否 | 详情数据点字段。 |

#### SequenceReadOptions

SequenceReadOptions<DK extends Record<string, [SequencePoint](#sequencepoint)[]> = Record<string, [SequencePoint](#sequencepoint)[]>>

读取运动健康记录详情数据选项类。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | **类型** | 只读 | 可选 | **说明** |
| --- | --- | --- | --- | --- |
| withDetails | boolean | 否 | 是 | 是否读取全部详情。true为读取全部详情，false为不读取详情，若未填写，则withPartialDetails参数生效。 |
| withPartialDetails | (keyof DK)[] | 否 | 是 | 读取部分详情数据类型（若需要读取部分详情，withDetails参数不能填写），锻炼记录与健康记录关联的详情数据类型分别参考[exerciseSequenceHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-exercisedequencehelper-lite)。 |

#### SortOrder

结果排序类型枚举对象。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 名称 | 值 | 说明 |
| --- | --- | --- |
| ASC | 0 | 升序。 |
| DESC | 1 | 降序。 |

#### SubDataType

type SubDataType = DataType

子数据类型。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

| 类型 | **说明** |
| --- | --- |
| [DataType](#datatype) | 数据类型。 |

#### healthStore.saveData

saveData(exerciseSequence: ExerciseSequence): void

保存锻炼记录数据。

![](./img/note_3.0-zh-cn.png) 上述接口调用前，需先使用[start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthservice-lite#workoutstart)方法确保运动联动已经开启。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

参数：

| **参数名** | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| exerciseSequence | [ExerciseSequence](#exercisesequence) | 是 | 单个锻炼记录。 |

错误码：

以下错误码的详细介绍请参见[运动健康服务ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)。

| 错误码ID | 错误信息 |
| --- | --- |
| [201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section201-鉴权失败) | Permission verification failed. Please ensure that the app has applied for the Health Service Kit, selected the product type, enabled the corresponding data read and write permissions, and the user has completed authorization. |
| [1002700001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002700001-系统内部错误) | Internal system error. |
| [1002700002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002700002-数据库异常) | Database processing error. |
| [1009104003](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1009104003-非法指令) | Illegal command. Called when workout is not started. |
| [1002701001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002701001-网络错误) | Network error. The network is unavailable. |
| [1002702001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002702001-账号未登录) | Account error. The user is not signed in with a HUAWEI ID. |
| [1002702002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002702002-账号异常) | Account error. Failed to obtain the HUAWEI ID information. |
| [1002703001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002703001-用户隐私未同意) | User privacy agreement not accepted. |

示例：

```
import healthStore from '@hms.health.store';

let healthSequence = {
  dataType: healthStore.healthDataTypes.WORKOUT_REALTIME,
  // insertDataSource插入数据源接口返回的DataSourceId
  dataSourceId: 'xxx',
  localDate: '09/26/2023',
  startTime: 1695740400000,  // 2023-10-23 14:00:00
  endTime: 1695769200000,   // 2023-10-23 14:30:00
  timeZone: '+0800',
  modifiedTime: 1695769200000,
  exerciseType: healthStore.exerciseSequenceHelper.badminton.EXERCISE_TYPE,
  duration: 1800000,
  summaries: {
    avgShotSpeed: 25.5,
    maxShotSpeed: 32.8,
    avgSpeed: 18.7,
    bestSpeed: 28.3,
    speed: 22.1,
    totalDistance: 1500,
    shots: 125,
    maxContinuousRally: 7,
    forehandStroke: 45,
    backhandStroke: 32,
    overhandStroke: 18,
    underhandStroke: 10,
    smash: 23,
    highClear: 15
  }
}
try {
  healthStore.saveData(healthSequence);
} catch (err) {
  // 异常处理流程
}
```

#### healthStore.readData

readData<T extends ExerciseSequence>(request: ExerciseSequenceReadRequest, callback: Callback<T[]>): void

读取锻炼记录数据。使用callback异步回调。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

参数：

| **参数名** | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| request | [ExerciseSequenceReadRequest](#exercisesequencereadrequest) | 是 | 读取锻炼记录请求，查询时间跨度范围为31天。在Lite Wearable设备上仅支持返回最新一条记录。 |
| callback | Callback | 是 | 回调函数，返回锻炼记录数据。 |

错误码：

以下错误码的详细介绍请参见[运动健康服务ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)。

| 错误码ID | 错误信息 |
| --- | --- |
| [201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section201-鉴权失败) | Permission verification failed. Please ensure that the app has applied for the Health Service Kit, selected the product type, enabled the corresponding data read and write permissions, and the user has completed authorization. |
| [1002700001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002700001-系统内部错误) | Internal system error. |
| [1002700002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002700002-数据库异常) | Database processing error. |
| [1002701001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002701001-网络错误) | Network error. The network is unavailable. |
| [1002702001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002702001-账号未登录) | Account error. The user is not signed in with a HUAWEI ID. |
| [1002702002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002702002-账号异常) | Account error. Failed to obtain the HUAWEI ID information. |
| [1002703001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice#section1002703001-用户隐私未同意) | User privacy agreement not accepted. |

示例：

```
import healthStore from '@hms.health.store';

// 查询跑步记录
const startTime = 1698040800000; // 2023-10-23 14:00:00
const endTime = 1698042600000; // 2023-10-23 14:30:00

const sequenceReadRequest = {
  startTime: startTime,
  endTime: endTime,
  exerciseType: healthStore.exerciseSequenceHelper.badminton.EXERCISE_TYPE,
  count: 1,
  sortOrder: healthStore.SortOrder.DESC,
  readOptions: {
    withPartialDetails: ['exerciseHeartRate']
 }
};

const callback = (samplePoints) => {
    // 锻炼记录数据回调处理流程
};

try {
  healthStore.readData(sequenceReadRequest, callback);
} catch (err) {
  // 异常
}
```

#### healthStore.requestAuthorizations

requestAuthorizations(request: AuthorizationRequest): AuthorizationResponse

用户授权。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

参数：

| **参数名** | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| request | [AuthorizationRequest](#authorizationrequest) | 是 | 授权请求参数，确保授权参数中的权限已在申请运动健康服务时勾选。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [AuthorizationResponse](#authorizationresponse) | 返回授权响应结果。 |

示例：

```
import healthStore from '@hms.health.store';

let authorizationParameter = {
  readDataTypes: [healthStore.healthDataTypes.WORKOUT_SUMMARY],
  writeDataTypes: [healthStore.healthDataTypes.WORKOUT_SUMMARY],
  scopes: ['https://www.huawei.com/healthkit/workout']
}

try {
  let authorizationResponse = healthStore.requestAuthorizations(authorizationParameter);
  // 授权响应结果处理
} catch (err) {
  // 异常处理流程
}
```

#### healthStore.getAuthorizations

getAuthorizations(request: AuthorizationRequest): AuthorizationResponse

查询已授权权限。

系统能力： SystemCapability.Health.HealthStore.Lite

起始版本： 6.1.1(24)

模型约束： 此接口仅可在FA模型下使用。

参数：

| **参数名** | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| request | [AuthorizationRequest](#authorizationrequest) | 是 | 查询权限请求参数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [AuthorizationResponse](#authorizationresponse) | 返回查询权限结果。 |

示例：

```
import healthStore from '@hms.health.store';

let queryAuthorizationRequest = {
  readDataTypes: [healthStore.healthDataTypes.WORKOUT_SUMMARY],
  writeDataTypes: [healthStore.healthDataTypes.WORKOUT_SUMMARY],
  scopes: ['https://www.huawei.com/healthkit/workout']
}

try {
  let queryAuthorizationResponse = healthStore.getAuthorizations(queryAuthorizationRequest);
  // 查询权限结果处理
} catch (err) {
  // 异常处理流程
}
```
