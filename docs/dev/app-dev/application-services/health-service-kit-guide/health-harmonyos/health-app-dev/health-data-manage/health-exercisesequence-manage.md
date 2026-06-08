---
displayed_sidebar: appDevSidebar
title: "锻炼记录"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-exercisesequence-manage
last_sync: 2026-06-07
sync_hash: 321cbbcc
---
## 场景介绍

锻炼记录，记录用户一次活动的基本信息，包括锻炼的起止时间，运动类型，统计数据，详情数据等，支持写入、读取和删除，每条锻炼记录数据需要关联数据源。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [saveData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoresavedata-1)(exerciseSequence: [ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)[] | [ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)): Promise\<void\> | 保存锻炼记录，入参为单个[ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)或[ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)数组。 |
| [readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata-1)\<T extends [ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)\>(request: [ExerciseSequenceReadRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequencereadrequest)): Promise\<T[]\> | 查询锻炼记录，通过[ExerciseSequenceReadRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequencereadrequest)设置查询条件，可按数据类型，字段、时间范围等条件查询。 |
| [deleteData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoredeletedata-4)(exerciseSequence: [ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence) | [ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)[]): Promise\<void\> | 删除锻炼记录，按入参删除指定的锻炼记录，可传入单个[ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)或[ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)数组。 |
| [deleteData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoredeletedata-1)(request: [ExerciseSequenceDeleteRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequencedeleterequest) | [ExerciseSequenceDeleteRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequencedeleterequest)[]): Promise\<void\> | 删除锻炼记录，按[ExerciseSequenceDeleteRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequencedeleterequest)删除，可设置数据类型、时间范围、数据源等删除条件。 |

## 开发前检查

* 完成[申请运动健康服务](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-apply)与[配置Client ID](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id)。
* 接口首次调用前，需先使用[init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreinit)方法进行初始化。
* 需先通过[用户授权](/docs/dev/app-dev/application-services/health-litewearable-add-permissions#用户授权)接口引导用户授权，用户授权对应数据类型权限后，才有权限调用接口操作相关数据类型数据。
* 错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)，常见问题请参考[Health Service Kit常见问题](/docs/dev/app-dev/application-services/health-service-kit-guide/health-faqs)。

## 开发步骤

### 保存用户的锻炼记录

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 获取dataSourceId，参考[管理数据源](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage)，插入一个新的数据源或读取已有数据源。
3. 创建锻炼记录。

   ```
   // 构造跑步记录
   const startTime = 1698040800000; // 2023-10-23 14:00:00
   const endTime = 1698042600000; // 2023-10-23 14:30:00

   const runningSequence: healthStore.exerciseSequenceHelper.running.Model = {
     dataType: healthStore.exerciseSequenceHelper.DATA_TYPE,
     // insertDataSource插入数据源接口返回的dataSourceId，或读取已有数据源的dataSourceId
     dataSourceId: 'xxx',
     startTime: startTime, // 2023-10-23 14:00:00
     endTime: endTime, // 2023-10-23 14:30:00
     localDate: '10/23/2023',
     timeZone: '+0800',
     modifiedTime: new Date().getTime(),
     exerciseType: healthStore.exerciseSequenceHelper.running.EXERCISE_TYPE,
     duration: 1800,
     summaries: {
       distance: {
         totalDistance: 2000
       },
       calorie: {
         totalCalories: 20
       },
       speed: {
         avg: 5,
         max: 6
       }
     },
     details: {
       exerciseHeartRate: [
         {
           startTime: startTime,
           bpm: 88
         },
         {
           startTime: startTime + 5000,
           bpm: 89
         }
       ],
       speed: [
         {
           startTime: startTime,
           speed: 2.5
         },
         {
           startTime: startTime + 5000,
           speed: 2.3
         }
       ],
       altitude: [
         {
           startTime: startTime,
           altitude: 100
         },
         {
           startTime: startTime + 5000,
           altitude: 101
         }
       ]
     }
   };
   ```
4. 调用[saveData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoresavedata-1)方法执行保存数据请求，并处理返回结果。

   ```
   try {
     await healthStore.saveData(runningSequence);
     hilog.info(0x0000, 'testTag', 'Succeeded in saving data.');
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to save data. Code: ${err.code}, message: ${err.message}`);
   }
   ```

### 读取用户的锻炼记录

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 创建查询请求。

   ```
   // 查询跑步记录
   const sequenceReadRequest:
     healthStore.ExerciseSequenceReadRequest<healthStore.exerciseSequenceHelper.running.DetailFields> = {
     startTime: 1698040800000,
     endTime: 1698042600000,
     exerciseType: healthStore.exerciseSequenceHelper.running.EXERCISE_TYPE,
     count: 1,
     sortOrder: 1,
     readOptions: {
       withPartialDetails: ['exerciseHeartRate', 'altitude']
    }
   };
   ```
3. 调用[readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata-1)方法执行查询请求，并处理返回结果。

   ```
   try {
     const runningSequences =
       await healthStore.readData<healthStore.exerciseSequenceHelper.running.Model>(sequenceReadRequest);
     hilog.info(0x0000, 'testTag', 'Succeeded in reading data.');
     runningSequences.forEach((runningSequence) => {
       hilog.info(0x0000, 'testTag', `the start time is ${runningSequence.startTime}.`);
       hilog.info(0x0000, 'testTag', `the end time is ${runningSequence.endTime}.`);
       Object.keys(runningSequence.summaries).forEach((key) => {
         Object.keys(runningSequence.summaries[key]).forEach((fieldName) => {
           hilog.info(0x0000, 'testTag',
             `the summaries of ${key} field ${fieldName} is ${runningSequence.summaries[key][fieldName]}.`);
         });
       });
     });
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to read data. Code: ${err.code}, message: ${err.message}`);
   }
   ```

### 删除指定的锻炼记录

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 查询待删除的锻炼记录。

   ```
   // 查询跑步记录
   const sequenceReadRequest:
     healthStore.ExerciseSequenceReadRequest<healthStore.exerciseSequenceHelper.running.DetailFields> = {
     startTime: 1698040800000,
     endTime: 1698042600000,
     exerciseType: healthStore.exerciseSequenceHelper.running.EXERCISE_TYPE
   };
   const runningSequences =
     await healthStore.readData<healthStore.exerciseSequenceHelper.running.Model>(sequenceReadRequest);
   ```
3. 调用[deleteData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoredeletedata-4)方法执行删除请求，并处理返回结果。

   ```
   try {
     for (let index = 0; index < runningSequences.length; index++) {
       const runningSequence = runningSequences[index];
       await healthStore.deleteData(runningSequence);
     }
     hilog.info(0x0000, 'testTag', 'Succeeded in deleting data.');
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to delete data. Code: ${err.code}, message: ${err.message}`);
   }
   ```

### 根据请求删除用户锻炼记录

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 创建删除请求。

   ```
   let exerciseSequenceDeleteRequest: healthStore.ExerciseSequenceDeleteRequest = {
     exerciseType: healthStore.exerciseSequenceHelper.running.EXERCISE_TYPE,
     startTime: 1698633801000,
     endTime: 1698633801000
   }
   ```
3. 调用[deleteData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoredeletedata-1)方法执行删除请求，并处理返回结果。

   ```
   try {
     await healthStore.deleteData(exerciseSequenceDeleteRequest);
     hilog.info(0x0000, 'testTag', 'Succeeded in deleting data.');
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to delete data. Code: ${err.code}, message: ${err.message}`);
   }
   ```
