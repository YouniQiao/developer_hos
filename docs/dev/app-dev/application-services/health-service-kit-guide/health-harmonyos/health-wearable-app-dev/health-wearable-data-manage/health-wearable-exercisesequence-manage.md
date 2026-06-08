---
displayed_sidebar: appDevSidebar
title: "读取锻炼记录"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-wearable-app-dev/health-wearable-data-manage/health-wearable-exercisesequence-manage
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-wearable-app-dev/health-wearable-data-manage/health-wearable-exercisesequence-manage
last_sync: 2026-06-07
sync_hash: fc5b9b3a
---
## 场景介绍

读取最新一条锻炼记录。

## 约束与限制

从5.1.1(19) Release版本开始支持。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata-1)\<T extends [ExerciseSequence](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequence)\>(request: [ExerciseSequenceReadRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#exercisesequencereadrequest)): Promise\<T[]\> | 查询最新一条锻炼记录。 |

![](./img/8d3a333b.png)

当前ExerciseSequenceReadRequest里的时间参数暂不生效，仅支持返回手表侧最新一条数据。

## 开发前检查

* 完成[申请运动健康服务](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-apply)与[配置Client ID](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id)。
* 接口首次调用前，需先使用[init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreinit)方法进行初始化。
* 需先通过[用户授权](/docs/dev/app-dev/application-services/health-litewearable-add-permissions#用户授权)接口引导用户授权，用户授权对应数据类型权限后，才有权限调用接口操作相关数据类型数据。
* 错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)，常见问题请参考[Health Service Kit常见问题](/docs/dev/app-dev/application-services/health-service-kit-guide/health-faqs)。

## 开发步骤

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
