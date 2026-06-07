---
displayed_sidebar: appDevSidebar
title: "读取运动健康采样数据"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-wearable-app-dev/health-wearable-data-manage/health-wearable-samplepoint-manage
format: md
---


## 场景介绍

读取最新一条运动健康采样数据。

## 约束与限制

从5.1.1(19) Release版本开始支持。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata)\<T extends [SamplePoint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepoint)\>(request: [SamplePointReadRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#samplepointreadrequest)): Promise\<T[]\> | 查询最新一条运动健康采样数据。 |

![](./img/0d4a19f7.png)

当前SamplePointReadRequest里的时间参数暂不生效，仅支持返回手表侧最新一条数据，读取实时日常活动数据使用[读取实时三环数据](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-three-ring-read)接口。

## 开发前检查

* 完成[申请运动健康服务](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-apply)与[配置Client ID](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id)。
* 接口首次调用前，需先使用[init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreinit)方法进行初始化。
* 需先通过[用户授权](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/health-add-permissions#用户授权)接口引导用户授权，用户授权对应数据类型权限后，才有权限调用接口操作相关数据类型数据。
* 错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)，常见问题请参考[Health Service Kit常见问题](/docs/dev/app-dev/application-services/health-service-kit-guide/health-faqs)。

## 开发步骤

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthStore } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 创建查询请求。

   ```
   let samplePointReadRequest: healthStore.SamplePointReadRequest = {
     samplePointDataType: healthStore.samplePointHelper.bodyTemperature.DATA_TYPE,
     startTime: 1698633801000,
     endTime: 1698633801000,
     fields: {
       bodyTemperature: 39
     }
   }
   ```
3. 调用[readData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorereaddata)方法执行查询请求，并处理返回结果。

   ```
   try {
     let samplePoints = await healthStore.readData(samplePointReadRequest);
     samplePoints.forEach((samplePoint) => {
       hilog.info(0x0000, 'testTag', `Succeeded in reading data, the bodyTemperature is ${samplePoint.fields.bodyTemperature}.`);
     });
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to read data. Code: ${err.code}, message: ${err.message}`);
   }
   ```
