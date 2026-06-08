---
displayed_sidebar: appDevSidebar
title: "查询支持的认证能力"
original_url: /docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/obtain-supported-authentication-capabilities
format: md
upstream_id: dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/obtain-supported-authentication-capabilities
last_sync: 2026-06-07
sync_hash: ee904c50
---
不同的设备对于认证能力（人脸、指纹、口令）的支持性各有差异，开发者在发起认证前应当先查询当前设备支持的用户认证能力。

## 接口说明

具体参数、返回值、错误码等描述，请参考对应的[userAuth.getAvailableStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthgetavailablestatus9)。

| 接口名称 | 功能描述 |
| --- | --- |
| getAvailableStatus(authType : UserAuthType, authTrustLevel : AuthTrustLevel): void | 根据指定的认证类型、认证等级，检测当前设备是否支持相应的认证能力。 |

## 开发步骤

1. [申请权限](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-dev/prerequisites#申请权限)：ohos.permission.ACCESS\_BIOMETRIC。
2. 指定认证类型（[UserAuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthtype8)）和认证等级（[AuthTrustLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#authtrustlevel8)），调用[getAvailableStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthgetavailablestatus9)接口查询当前的设备是否支持相应的认证能力。

   认证可信等级的详细介绍请参见[认证可信等级划分原则](/docs/dev/app-dev/system/system-security/user-authentication-kit/user-authentication-overview#生物认证可信等级划分原则)。

以查询设备是否支持认证可信等级≥ATL3的人脸认证功能为例：

```
obtainingSupported() {
  try {
    // 查询认证能力是否支持
    userAuth.getAvailableStatus(userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL3);
    Logger.info('current auth trust level is supported.');
    return true;
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    Logger.error(`current auth trust level is not supported, code is ${err?.code}, message is ${err?.message}`);
    return false;
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/UserAuthentication/entry/src/main/ets/pages/Index.ets#L105-L119" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 示例代码

* [查询支持的认证能力](https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/UserAuthentication)
