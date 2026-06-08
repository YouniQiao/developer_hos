---
displayed_sidebar: appDevSidebar
title: "管理用户授权"
original_url: /docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions
format: md
upstream_id: dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-app-dev/health-add-permissions
last_sync: 2026-06-07
sync_hash: 9cb4a80c
---
## 场景介绍

应用拉起华为账号同步和授权界面，由用户授权相应的数据访问权限。用户可以自主选择授权的数据类型，可以只授权部分数据权限。

应用所能操作的用户数据，是用户授权和运动健康服务审批通过的数据权限的交集。

## 约束与限制

从6.1.1(24) 版本开始，Lite Wearable设备新增支持health Service Kit特性。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [requestAuthorizations](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#healthstorerequestauthorizations)(request: AuthorizationRequest): AuthorizationResponse | 用户授权，入参为授权参数[AuthorizationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#authorizationrequest)，添加需要读写的数据类型，拉起账号授权页面，引导用户完成授权，返回结果中的数据类型列表，其对应权限在[应用申请权限](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-permission-description)和用户授权权限的交集中。 |
| [getAuthorizations](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#healthstoregetauthorizations)(request: AuthorizationRequest): AuthorizationResponse | 查询用户权限，入参为[AuthorizationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore-lite#authorizationrequest)，添加需要查询的数据类型，查询传入类型是否有权限，返回结果中的数据类型列表，其对应权限在[应用申请权限](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-data-type/health-permission-description)和用户授权权限的交集中。 |

## 开发前检查

* 完成[申请运动健康服务](/docs/dev/app-dev/application-services/health-service-kit-guide/health-harmonyos/health-preparations/health-apply)。
* 常见问题请参考[Health Service Kit常见问题](/docs/dev/app-dev/application-services/health-service-kit-guide/health-faqs)。

## 开发步骤

1. 导入运动健康服务功能模块及相关公共模块。

   ```
   import healthStore from '@hms.health.store';
   ```
2. 查询权限。

   ```
   function getAuthorizations() {
     let queryAuthorizationRequest = {
       readDataTypes: [healthStore.healthDataTypes.WORKOUT_SUMMARY],
       writeDataTypes: [healthStore.healthDataTypes.WORKOUT_SUMMARY],
       scopes: ['https://www.huawei.com/healthkit/workout']
     }

     try {
       let queryAuthorizationResponse = healthStore.getAuthorizations(queryAuthorizationRequest);
     } catch (err) {
       // 异常场景处理
     }
   }
   ```
3. 发起用户授权请求。

   ```
   function requestAuthorizations() {
     let authorizationParameter = {
       readDataTypes: [healthStore.healthDataTypes.WORKOUT_SUMMARY],
       writeDataTypes: [healthStore.healthDataTypes.WORKOUT_SUMMARY],
       scopes: ['https://www.huawei.com/healthkit/workout']
     }
     try {
       let authorizationResponse = healthStore.requestAuthorizations(authorizationParameter);
     } catch (err) {
       // 异常场景处理
     }
   }
   ```
