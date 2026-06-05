---
title: "认证过程中取消认证"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cancel-authentication
format: md
---


统一用户认证框架提供了cancel接口，当应用在认证过程中，需要取消认证时可调用该接口。

## 接口说明

具体参数、返回值、错误码等描述，请参考对应的[cancel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#cancel10)。

此处仅展示了取消认证操作的接口，在取消认证前，需要先发起认证，发起认证的接口列表、详细说明可参考[发起认证](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-authentication)章节和API文档。

| 接口名称 | 功能描述 |
| --- | --- |
| cancel(): void | 取消本次认证操作。 |

## 开发步骤

1. [申请权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/prerequisites#申请权限)：ohos.permission.ACCESS\_BIOMETRIC。
2. 指定用户认证相关参数[AuthParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authparam10)（包括挑战值、认证类型[UserAuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthtype8)列表和认证等级[AuthTrustLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authtrustlevel8)），获取认证对象[UserAuthInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthinstance10)，并调用[UserAuthInstance.start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#start10)发起认证。此步骤详细说明可参考[发起认证](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/start-authentication)。
3. 使用已经成功发起认证的UserAuthInstance对象调用[UserAuthInstance.cancel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#cancel10)接口取消本次认证。

示例代码为发起认证可信等级≥ATL3的人脸+锁屏口令认证后，取消认证请求：

```
handleAuthResultAndCanceling(userAuthInstance: userAuth.UserAuthInstance, exampleNumber: number) {
  // ...
    // 启动认证
    userAuthInstance.start();
    Logger.info('auth start successfully.');
    // ...
      // 取消认证
      userAuthInstance.cancel();
      Logger.info('auth cancel successfully.');
      // ...
}

/*
 * cancel-authentication.md
 * 发起认证可信等级≥ATL3的人脸+锁屏密码认证后，取消认证请求
 * */
cancelingUserAuthentication() {
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
    };
    // 配置认证界面
    const widgetParam: userAuth.WidgetParam = {
      title: resourceToString($r('app.string.title')),
    };
    // 获取认证对象
    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
    Logger.info('get userAuth instance successfully.');
    this.handleAuthResultAndCanceling(userAuthInstance, ResultIndex.CANCEL);
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    Logger.error(`auth failed, code is ${err?.code as number}, message is ${err?.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/UserAuthentication/entry/src/main/ets/pages/Index.ets#L332-L401" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 示例代码

* [认证过程中取消认证](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication)
