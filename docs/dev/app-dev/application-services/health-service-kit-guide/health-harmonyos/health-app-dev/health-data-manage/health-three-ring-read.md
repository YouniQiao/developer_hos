---
displayed_sidebar: appDevSidebar
title: "实时三环数据"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-three-ring-read
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-data-manage/health-three-ring-read
last_sync: 2026-06-07
sync_hash: 738a8992
---
## 场景介绍

实时三环数据，包括实时步数，活动热量，锻炼时长，活动小时数以及目标类数据。

![](./img/01edc7d8.png)

此接口使用日常活动数据类型读权限，参考[权限说明](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-permission-description)。

## 约束与限制

从5.1.1(19) Release版本开始支持。

## OAuth权限

联盟卡片申请的权限名称：日常活动 > 日常活动数据（读）

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [readActivityReport](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthservice#workoutreadactivityreport)(): Promise[ActivityReport](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthservice#activityreport) | 读取实时三环数据。 |

## 开发前检查

* 完成[申请运动健康服务](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-apply)与[配置Client ID](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-configuration-client-id)。
* 接口首次调用前，需先使用[init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreinit)方法进行初始化。
* 需先通过[用户授权](/docs/dev/app-dev/application-services/health-litewearable-add-permissions#用户授权)接口引导用户授权，用户授权日常活动数据类型读权限（参考[权限说明](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-permission-description)）后，才有权限读取实时三环数据。
* 错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)，常见问题请参考[Health Service Kit常见问题](/docs/dev/app-dev/application-services/health-service-kit-guide/health-faqs)。

## 开发步骤

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import { healthService } from '@kit.HealthServiceKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 调用[readActivityReport](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthservice#workoutreadactivityreport)方法读取实时三环数据，并处理返回结果。

   ```
   try {
     const result: healthService.workout.ActivityReport = await healthService.workout.readActivityReport();

     hilog.info(0x0000, 'testTag', 'Succeeded in reading ActivityReport');
     Object.keys(result).forEach(key => {
       hilog.info(0x0000, 'testTag', `the ${key} is ${result[key]}`);
     });
   } catch (err) {
     hilog.error(0x0000, 'testTag', `Failed to read ActivityReport. Code: ${err.code}, message: ${err.message}`);
   }
   ```
