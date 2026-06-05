---
title: "查询指定认证类型的认证冻结状态"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/obtain-auth-lock-state-capabilities
format: md
---


从API version 22开始，开发者可以参考下述开发指导，查询指定认证类型的认证冻结状态，以及剩余可认证次数或还需等待的认证冻结时间。

## 接口说明

具体参数、返回值、错误码等描述，请参考对应的[userAuth.getAuthLockState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthgetauthlockstate22)。

| 接口名称 | 功能描述 |
| --- | --- |
| getAuthLockState(authType: UserAuthType): Promise\<AuthLockState\> | 根据指定的认证类型，查询认证冻结状态，用于判断是否可以发起认证。 |

## 开发步骤

1. [申请权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/prerequisites#申请权限)：ohos.permission.ACCESS\_BIOMETRIC。
2. 指定认证类型（[UserAuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthtype8)），并调用[getAuthLockState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthgetauthlockstate22)接口查询指定认证类型的认证冻结状态。

以查询PIN认证类型的认证冻结状态为例：

```
async obtainingAuthLockState() : Promise<string> {
  try {
    Logger.info(`get auth lock state start`);
    const authLockState : userAuth.AuthLockState = await userAuth.getAuthLockState(userAuth.UserAuthType.PIN);
    if (authLockState.lockoutDuration === userAuth.PERMANENT_LOCKOUT_DURATION) {
      Logger.info('the authentication of given authType is permanent locked.');
    }
    const authLockStateContent : string = JSON.stringify(authLockState);
    Logger.info('get auth lock state successfully.');
    return authLockStateContent;
  } catch (error) {
    const errorMessage : string = `get auth lock state failed, err code is : ${error?.code}, err message is : ${error?.message}`;
    Logger.error(errorMessage);
    return errorMessage;
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/UserAuthentication/entry/src/main/ets/pages/Index.ets#L564-L582" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 示例代码

* [查询指定认证类型的认证冻结状态](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication)
