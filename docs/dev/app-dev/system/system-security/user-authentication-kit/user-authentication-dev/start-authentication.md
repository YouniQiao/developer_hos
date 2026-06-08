---
title: "发起认证"
original_url: /docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/start-authentication
format: md
upstream_id: dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/start-authentication
last_sync: 2026-06-07
sync_hash: dc922cc1
---
应用发起身份认证请求，获取身份认证结果，以访问受保护的系统、服务或应用的功能和数据，包括用户个人数据。

## 接口说明

具体参数、返回值、错误码等描述，请参考对应的[userAuth.getUserAuthInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthgetuserauthinstance10)。

| 接口名称 | 功能描述 |
| --- | --- |
| getUserAuthInstance(authParam: AuthParam, widgetParam: WidgetParam): UserAuthInstance | 获取UserAuthInstance对象，用于执行用户身份认证，并支持使用[统一用户认证控件](#统一用户认证控件介绍)。 |
| on(type: 'result', callback: IAuthCallback): void | 订阅用户身份认证结果。 |
| off(type: 'result', callback?: IAuthCallback): void | 取消订阅用户身份认证结果。 |
| start(): void | 执行用户认证。 |

## 统一用户认证控件介绍

系统提供了统一用户认证控件供应用调用，使用统一用户认证控件的优势：

* 统一用户认证服务将通过该控件完成信息的识别和认证，再将认证结果返回给应用，整体过程安全可控，可以更好地保护用户的生物特征信息。
* 统一固定的UI组件样式，便于用户识别。

认证控件的样式如图所示，通过[WidgetParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#widgetparam10)配置对应参数。

![](./img/6094e3a8.png)

* 标注1：用户认证界面的标题（WidgetParam.title），不支持传空字串，最大长度为500字符。应用可在此配置符合场景的字符串，建议传入认证目的，例如用于支付、登录应用等。
* 标注2：当生物认证失败后，将显示一个按钮。点击该按钮，可以从生物认证切换到其他口令认证类型（AuthParam.authType）。

  开发者如需[切换自定义认证](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/apply-custom-authentication)，需要配置导航按键上显示的文本（WidgetParam.navigationButtonText），最大长度为60字符。API 10-17仅在单指纹、单人脸场景下支持配置。从API 18开始，增加支持人脸+指纹场景。

当前支持使用认证控件的认证类型包括：

* 锁屏口令认证
* 人脸认证
* 指纹认证
* 人脸+锁屏口令认证
* 指纹+锁屏口令认证
* 人脸+指纹+锁屏口令认证
* 人脸+自定义导航按键
* 指纹+自定义导航按键
* 人脸+指纹+自定义导航按键18+

## 开发步骤

1. [申请权限](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/prerequisites#申请权限)：ohos.permission.ACCESS\_BIOMETRIC。
2. 指定用户认证相关参数[AuthParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authparam10)（包括挑战值、认证类型[UserAuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthtype8)列表和认证等级[AuthTrustLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authtrustlevel8)）、配置认证控件界面[WidgetParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#widgetparam10)，调用[getUserAuthInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthgetuserauthinstance10)获取认证对象。
3. 调用[UserAuthInstance.on('result')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#onresult10-1)接口订阅认证结果。
4. 调用[UserAuthInstance.start](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#start10)接口发起认证，通过[IAuthCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#iauthcallback10)回调返回认证结果[UserAuthResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthresult10)。当认证成功时返回认证通过类型（[UserAuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthtype8)）和令牌信息（AuthToken）。

**示例1：**

发起用户认证，采用认证可信等级≥ATL3的人脸+指纹+锁屏口令认证，获取认证结果。

```
initiatingUserAuthentication1() {
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
    // 订阅认证结果
    userAuthInstance.on('result', {
      onResult: (result: userAuth.UserAuthResult) => {
        try {
          Logger.info('userAuthInstance callback.');
          this.result[ResultIndex.EXAMPLE_1] = (`${result.result}`);
          // 可在认证结束或其他业务需要场景，取消订阅认证结果。
          userAuthInstance.off('result');
        } catch (error) {
          const err: BusinessError = error as BusinessError;
          Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);
        }
      }
    });
    // 启动认证
    userAuthInstance.start();
    Logger.info('auth start successfully.');
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/UserAuthentication/entry/src/main/ets/pages/Index.ets#L126-L169" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


**示例2：**

发起用户认证，采用认证可信等级≥ATL3的人脸+认证类型相关+复用设备解锁最大有效时长认证，获取认证结果。

```
initiatingUserAuthentication2() {
  // 设置认证参数
  let reuseUnlockResult: userAuth.ReuseUnlockResult = {
    reuseMode: userAuth.ReuseMode.AUTH_TYPE_RELEVANT,
    reuseDuration: userAuth.MAX_ALLOWABLE_REUSE_DURATION,
  };
  try {
    const randData = getRandData();
    if (!randData) {
      return;
    }
    const authParam: userAuth.AuthParam = {
      challenge: randData,
      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],
      authTrustLevel: userAuth.AuthTrustLevel.ATL3,
      reuseUnlockResult: reuseUnlockResult,
    };
    // 配置认证界面
    const widgetParam: userAuth.WidgetParam = {
      title: resourceToString($r('app.string.title')),
    };
    // 获取认证对象
    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
    Logger.info('get userAuth instance successfully.');
    // 订阅认证结果
    userAuthInstance.on('result', {
      onResult: (result: userAuth.UserAuthResult) => {
        try {
          Logger.info('userAuthInstance callback.');
          this.result[ResultIndex.EXAMPLE_2] = (`${result.result}`);
          // 可在认证结束或其他业务需要场景，取消订阅认证结果。
          userAuthInstance.off('result');
        } catch (error) {
          const err: BusinessError = error as BusinessError;
          Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);
        }
      }
    });
    // 启动认证
    userAuthInstance.start();
    Logger.info('auth start successfully.');
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/UserAuthentication/entry/src/main/ets/pages/Index.ets#L176-L224" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


**示例3：**

发起用户认证，采用认证可信等级≥ATL3的人脸+任意应用认证类型相关+复用任意应用最大有效时长认证，获取认证结果。

```
initiatingUserAuthentication3() {
  // 设置认证参数
  let reuseUnlockResult: userAuth.ReuseUnlockResult = {
    reuseMode: userAuth.ReuseMode.CALLER_IRRELEVANT_AUTH_TYPE_RELEVANT,
    reuseDuration: userAuth.MAX_ALLOWABLE_REUSE_DURATION,
  };
  try {
    const randData = getRandData();
    if (!randData) {
      return;
    }
    const authParam: userAuth.AuthParam = {
      challenge: randData,
      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],
      authTrustLevel: userAuth.AuthTrustLevel.ATL3,
      reuseUnlockResult: reuseUnlockResult,
    };
    // 配置认证界面
    const widgetParam: userAuth.WidgetParam = {
      title: resourceToString($r('app.string.title')),
    };
    // 获取认证对象
    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
    Logger.info('get userAuth instance successfully.');
    // 订阅认证结果
    userAuthInstance.on('result', {
      onResult: (result: userAuth.UserAuthResult) => {
        try {
          Logger.info('userAuthInstance callback.');
          this.result[ResultIndex.EXAMPLE_3] = (`${result.result}`);
          // 可在认证结束或其他业务需要场景，取消订阅认证结果。
          userAuthInstance.off('result');
        } catch (error) {
          const err: BusinessError = error as BusinessError;
          Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);
        }
      }
    });
    // 启动认证
    userAuthInstance.start();
    Logger.info('auth start successfully.');
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/UserAuthentication/entry/src/main/ets/pages/Index.ets#L231-L279" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


**示例4：**

以模应用弹窗方式拉起身份认证控件对用户进行身份认证：

![](./img/a1d2d272.png)

在PC/2in1设备上，应用如果使用模应用弹窗方式发起认证（即配置用户界面参数[widgetParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#widgetparam10)时传入了有效的uiContext），收到认证结果后，若需弹出其他窗口，应先获取控件弹窗释放的标志消息，通过[on('authTip')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#onauthtip20)接口订阅控件释放消息（authTipInfo.tipCode = UserAuthTipCode.WIDGET\_RELEASED）。

```
initiatingUserAuthentication4() {
  // 设置认证参数
  try {
    const randData = getRandData();
    if (!randData) {
      return;
    }
    const authParam: userAuth.AuthParam = {
      challenge: randData,
      authType: [userAuth.UserAuthType.PIN, userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT],
      authTrustLevel: userAuth.AuthTrustLevel.ATL3,
    };
    // 配置认证界面
    const widgetParam: userAuth.WidgetParam = {
      title: resourceToString($r('app.string.title')),
      uiContext: this.getUIContext().getHostContext()
    };
    // 获取认证对象
    const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
    Logger.info('get userAuth instance successfully.');
    // 订阅认证结果
    userAuthInstance.on('result', {
      onResult: (result: userAuth.UserAuthResult) => {
        try {
          Logger.info('userAuthInstance callback.');
          this.result[ResultIndex.EXAMPLE_4] = (`${result.result}`);
          // 可在认证结束或其他业务需要场景，取消订阅认证结果。
          userAuthInstance.off('result');
        } catch (error) {
          const err: BusinessError = error as BusinessError;
          Logger.error(`onResult failed, code: ${err?.code}, Message: ${err?.message}`);
        }
      }
    });
    // 启动认证
    userAuthInstance.start();
    Logger.info('auth start successfully.');
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    Logger.error(`auth failed, code is ${err?.code}, message is ${err?.message}`);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/UserAuthentication/entry/src/main/ets/pages/Index.ets#L286-L330" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 示例代码

* [发起认证](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication)
