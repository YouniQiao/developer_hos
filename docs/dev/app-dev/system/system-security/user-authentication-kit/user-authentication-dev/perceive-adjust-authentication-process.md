---
title: "感知和调整认证过程"
original_url: /docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process
format: md
upstream_id: dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/perceive-adjust-authentication-process
last_sync: 2026-06-07
sync_hash: 99a70dcf
---
从API version 20开始，在应用发起身份认证时，可通过接口调整认证过程，以及感知认证过程。

调整认证过程：应用发起认证时通过[AuthParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authparam10)参数的skipLockedBiometricAuth属性控制是否跳过已禁用的生物认证。

感知认证过程：通过[on('authTip')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#onauthtip20)接口注册回调来获取认证过程中控件的拉起和退出提示，以及认证过程中用户的每一次认证失败结果。正确的顺序为先通过on注册回调，再通过[start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#start10)发起认证，start成功发起认证后on注册的回调才会收到信息。

## 接口说明

具体参数、返回值、错误码等描述，请参考对应的[@ohos.userIAM.userAuth (用户认证)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth)。

| 接口名称 | 功能描述 |
| --- | --- |
| AuthParam | 用户认证相关参数，包括挑战值、认证类型列表、认证等级等。  可通过skipLockedBiometricAuth参数控制是否跳过禁用的生物认证。  true表示生物认证冻结时自动跳过倒计时界面直接切换到其他方式的认证。  false表示不跳过；默认为false。 |
| on(type: 'authTip', callback: AuthTipCallback): void | 订阅身份认证过程中的提示信息。 |
| off(type: 'authTip', callback?: AuthTipCallback): void | 取消订阅认证过程中的提示信息。 |

## 开发步骤

1. [申请权限](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/prerequisites#申请权限)：ohos.permission.ACCESS\_BIOMETRIC。
2. 指定用户认证相关参数[AuthParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authparam10)（包括挑战值、认证类型[UserAuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthtype8)列表和认证等级[AuthTrustLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authtrustlevel8)）、配置认证控件界面[WidgetParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#widgetparam10)，调用[getUserAuthInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthgetuserauthinstance10)获取认证对象。
3. 调用[UserAuthInstance.on('authTip')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#onauthtip20)接口订阅身份认证过程中的提示信息。
4. 调用[UserAuthInstance.start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#start10)接口发起认证，通过[AuthTipCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authtipcallback20)回调返回认证中间状态[AuthTipInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authtipinfo20)。
5. 认证成功后，调用[UserAuthInstance.off('authTip')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#offauthtip20)接口取消订阅认证过程中的提示信息。

以跳过禁用的生物认证，订阅认证信息为例：

```
perceiveAndAdjustAuthentication() {
  try {
    const randData = getRandData();
    if (!randData) {
      return;
    }
    // 设置认证参数
    const authParam: userAuth.AuthParam = {
      challenge: randData,
      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],
      authTrustLevel: userAuth.AuthTrustLevel.ATL3,
      skipLockedBiometricAuth: true
    };
    // 配置认证界面
    const widgetParam: userAuth.WidgetParam = {
      title: resourceToString($r('app.string.title')),
    };
    // 获取认证对象
    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
    Logger.info('get userAuth instance successfully.');
    // 订阅认证过程中的提示信息。
    userAuthInstance.on('authTip', (authTipInfo: userAuth.AuthTipInfo) => {
      try {
        Logger.info('userAuthInstance callback.');
        this.result[ResultIndex.PERCEIVE_ADJUST] = (`${authTipInfo.tipType}`);
        // 认证完成后取消订阅
        userAuthInstance.off('result');
      } catch (error) {
        const err: BusinessError = error as BusinessError;
        Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);
      }
    });
    // 开始认证
    userAuthInstance.start();
    // ...
      // 取消订阅认证过程中的提示信息。
      userAuthInstance.off('authTip');
      Logger.info('off authTip successfully.');
      // 取消认证
      userAuthInstance.cancel();
      Logger.info('auth cancel successfully.');
      // ...
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    Logger.error(`auth failed, code is ${err?.code as number}, message is ${err?.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/UserAuthentication/entry/src/main/ets/pages/Index.ets#L407-L461" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 示例代码

* [感知和调整认证过程](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication)
