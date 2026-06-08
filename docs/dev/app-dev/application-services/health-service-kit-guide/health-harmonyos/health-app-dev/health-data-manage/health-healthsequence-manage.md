---
displayed_sidebar: appDevSidebar
title: "健康记录"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-healthsequence-manage
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-healthsequence-manage
last_sync: 2026-06-07
sync_hash: c9b35bb1
---
## 场景介绍

健康记录，记录健康记录的基本信息，包括健康记录的起止时间，数据类型，字段值，明细数据等，支持写入、读取和删除，每条健康记录需要关联数据源。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [saveData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoresavedata-2)(healthSequence: [HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)[] | [HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)): Promise\<void\> | 保存健康记录，入参为单个[HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)或[HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)数组。 |
| [readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata-2)\<T extends [HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)\>(request: [HealthSequenceReadRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequencereadrequest)): Promise\<T[]\> | 查询健康记录，通过[HealthSequenceReadRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequencereadrequest)设置查询条件，可按数据类型，字段、时间范围等条件查询。 |
| [deleteData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoredeletedata-5)(healthSequence: [HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence) | [HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)[]): Promise\<void\> | 删除健康记录，按入参删除指定的健康记录，可传入单个[HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)或[HealthSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequence)数组。 |
| [deleteData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoredeletedata-2)(request: [HealthSequenceDeleteRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequencedeleterequest) | [HealthSequenceDeleteRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequencedeleterequest)[]): Promise\<void\> | 删除健康记录，按[HealthSequenceDeleteRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthsequencedeleterequest)删除，可设置数据类型、时间范围、数据源等删除条件。 |

## 开发前检查

* 完成[申请运动健康服务](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-apply)与[配置Client ID](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id)。
* 接口首次调用前，需先使用[init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreinit)方法进行初始化。
* 需先通过[用户授权](/docs/dev/app-dev/application-services/health-litewearable-add-permissions#用户授权)接口引导用户授权，用户授权对应数据类型权限后，才有权限调用接口操作相关数据类型数据。
* 错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)，常见问题请参考[Health Service Kit常见问题](/docs/dev/app-dev/application-services/health-service-kit-guide/health-faqs)。

## 开发步骤

### 保存用户的健康记录

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 获取dataSourceId，参考[管理数据源](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-datasource-manage)，插入一个新的数据源或读取已有数据源。
3. 创建健康记录。

   ```
   let healthSequence: healthStore.healthSequenceHelper.sleepRecord.Model = {
     summaries: {
       fallAsleepTime: 1695740400000, // 2023-09-26 23:00:00
       wakeupTime: 1695769200000, // 2023-09-27 7:00:00
       sleepScore: 80,
       wakeCount: 2,
       sleepType: 1,
       shallowDuration: 14400,
       deepDuration: 7200,
       dreamDuration: 7200,
       wakeDuration: 0,
       duration: 28800
     },
     dataType: healthStore.healthSequenceHelper.sleepRecord.DATA_TYPE,
     // insertDataSource插入数据源接口返回的dataSourceId，或读取已有数据源的dataSourceId
     dataSourceId: 'xxx',
     localDate: '09/26/2023',
     startTime: 1695740400000,
     endTime: 1695769200000,
     timeZone: '+0800',
     modifiedTime: 1695769200000,
     details: {
       sleepSegment: [
         {
           startTime: 1695740400000, // 2023-09-26 23:00:00
           endTime: 1695747600000, // 2023-09-27 01:00:00
           sleepStatus: 2
         },
         {
           startTime: 1695747600000, // 2023-09-27 01:00:00
           endTime: 1695754800000, // 2023-09-27 03:00:00
           sleepStatus: 1
         },
         {
           startTime: 1695754800000, // 2023-09-27 03:00:00
           endTime: 1695762000000, // 2023-09-27 05:00:00
           sleepStatus: 3
         },
         {
           startTime: 1695762000000, // 2023-09-27 05:00:00
           endTime: 1695769200000, // 2023-09-27 07:00:00
           sleepStatus: 2
         }
       ]
     }
   }
   ```
4. 调用[saveData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoresavedata-2)方法执行保存数据请求，并处理返回结果。

   ```
   try {
     await healthStore.saveData(healthSequence);
     hilog.info(0x0000, 'testTag', 'Succeeded in saving data.');
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to save data. Code: ${err.code}, message: ${err.message}`);
   }
   ```

### 读取用户的健康记录

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 创建查询健康记录请求。

   ```
   let healthSequenceReadRequest: healthStore.HealthSequenceReadRequest = {
     healthSequenceDataType: healthStore.healthSequenceHelper.sleepRecord.DATA_TYPE,
     startTime: 1695740400000,
     endTime: 1695769200000,
     readOptions: {
       withDetails: true
     }
   }
   ```
3. 调用[readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata-2)方法执行查询请求，并处理返回结果。

   ```
   try {
     const healthSequences = await healthStore.readData(healthSequenceReadRequest);
     hilog.info(0x0000, 'testTag', 'Succeeded in reading data.');
     healthSequences.forEach((healthSequence) => {
       hilog.info(0x0000, 'testTag', `the start time is ${healthSequence.startTime}.`);
       hilog.info(0x0000, 'testTag', `the end time is ${healthSequence.endTime}.`);
       Object.keys(healthSequence.summaries).forEach((key) => {
         hilog.info(0x0000, 'testTag', `the summaries of ${key} is ${healthSequence.summaries[key]}.`);
       });
     });
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to read data. Code: ${err.code}, message: ${err.message}`);
   }
   ```

### 删除指定的健康记录

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 查询待删除健康记录。

   ```
   let healthSequenceReadRequest: healthStore.HealthSequenceReadRequest = {
     healthSequenceDataType: healthStore.healthSequenceHelper.sleepRecord.DATA_TYPE,
     startTime: 1695740400000,
     endTime: 1695769200000
   }
   const healthSequences = await healthStore.readData(healthSequenceReadRequest);
   ```
3. 调用[deleteData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoredeletedata-5)方法执行删除请求，并处理返回结果。

   ```
   try {
     for (let index = 0; index < healthSequences.length; index++) {
       const healthSequence = healthSequences[index];
       await healthStore.deleteData(healthSequence);
     }
     hilog.info(0x0000, 'testTag', 'Succeeded in deleting data.');
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to delete data. Code: ${err.code}, message: ${err.message}`);
   }
   ```

### 根据请求删除用户健康记录

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 创建删除健康记录请求。

   ```
   const healthSequenceDeleteRequest: healthStore.HealthSequenceDeleteRequest= {
     healthSequenceDataType: healthStore.healthSequenceHelper.sleepRecord.DATA_TYPE,
     startTime: 1695740400000,
     endTime: 1695769200000
   }
   ```
3. 调用[deleteData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoredeletedata-2)方法执行删除请求，并处理返回结果。

   ```
   try {
     await healthStore.deleteData(healthSequenceDeleteRequest);
     hilog.info(0x0000, 'testTag', 'Succeeded in deleting data.');
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to delete data. Code: ${err.code}, message: ${err.message}`);
   }
   ```
