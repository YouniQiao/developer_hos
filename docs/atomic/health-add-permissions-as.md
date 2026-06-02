---
title: "管理用户授权"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/health-add-permissions-as
---

## 场景介绍

应用拉起华为账号登录和授权界面，由用户授权相应的数据访问权限。用户可以自主选择授权的数据类型，可以只授权部分数据权限。

应用所能操作的用户数据，是用户授权和运动健康服务审批通过的数据权限的交集。

![](./img/20858acd.png)

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [requestAuthorizations](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorerequestauthorizations)(context: [common.UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1), request: [AuthorizationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#authorizationrequest)): Promise\&lt;[AuthorizationResponse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#authorizationresponse)\&gt; | 用户授权，入参为UIAbility上下文和授权参数[AuthorizationRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#authorizationrequest)，添加需要读写的数据类型，拉起账号授权页面，引导用户完成授权，返回结果中的数据类型列表，其对应权限在[应用申请权限](https://developer.huawei.com/consumer/cn/doc/atomic-guides/health-apply-as)和用户授权权限的交集中。 |
| [cancelAuthorizations](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorecancelauthorizations)(): Promise\&lt;void\&gt; | 取消用户所有授权。 |

## 开发前检查

* 完成[申请运动健康服务](https://developer.huawei.com/consumer/cn/doc/atomic-guides/health-apply-as)与[配置Client ID](https://developer.huawei.com/consumer/cn/doc/atomic-guides/health-configuration-client-id-as)。
* 确保授权参数中的数据类型权限已在申请运动健康服务时勾选，权限说明参考[权限说明](https://developer.huawei.com/consumer/cn/doc/atomic-guides/health-permission-description-as)。
* 接口需在页面或自定义组件生命周期内调用。接口首次调用前，需先使用[init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstoreinit)方法进行初始化。
* 错误码请参考[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-healthservice)。

## 开发步骤

### 用户授权

1.导入运动健康功能模块及相关公共模块。

```
import { healthStore } from '@kit.HealthServiceKit';
import { common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```

2.创建授权请求。

```
let authorizationParameter: healthStore.AuthorizationRequest = {
  readDataTypes: [healthStore.samplePointHelper.dailyActivities.DATA_TYPE],
  writeDataTypes: []
}
```

3.调用[requestAuthorizations](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorerequestauthorizations)方法执行登录授权请求，并处理返回结果。

```
try {
  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext
  let authorizationResponse =
    await healthStore.requestAuthorizations(this.getUIContext().getHostContext() as common.UIAbilityContext,
      authorizationParameter);
  hilog.info(0x0000, 'testTag', 'Succeeded in requesting authorization.');
  authorizationResponse.writeDataTypes.forEach(dataType => {
    hilog.info(0x0000, 'testTag', `grantedWriteDataType is : ${dataType.name}`);
  });
  authorizationResponse.readDataTypes.forEach(dataType => {
    hilog.info(0x0000, 'testTag', `grantedReadDataTypes is : ${dataType.name}`);
  });
} catch (err) {
  hilog.error(0x0000, 'testTag', `Failed to request authorization. Code: ${err.code}, message: ${err.message}`);
}
```

### 取消授权

1.导入运动健康服务功能模块及相关公共模块。

```
import { healthStore } from '@kit.HealthServiceKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
```

2.调用[cancelAuthorizations](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/health-api-healthstore#healthstorecancelauthorizations)方法执行取消授权，并处理返回结果。

```
try {
  await healthStore.cancelAuthorizations();
  hilog.info(0x0000, 'testTag', 'Succeeded in canceling authorization.');
} catch (err) {
  hilog.error(0x0000, 'testTag', `Failed to cancel authorization. Code: ${err.code}, message: ${err.message}`);
}
```
