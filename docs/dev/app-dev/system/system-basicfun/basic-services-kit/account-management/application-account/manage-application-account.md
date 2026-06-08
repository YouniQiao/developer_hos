---
title: "管理应用账号"
original_url: /docs/dev/app-dev/system/system-basicfun/basic-services-kit/account-management/application-account/manage-application-account
format: md
upstream_id: dev/app-dev/system/system-basicfun/basic-services-kit/account-management/application-account/manage-application-account
last_sync: 2026-06-07
sync_hash: cdfb752f
---
应用开发者可以使用[@ohos.account.appAccount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount)管理本应用的账号数据。

能力限制：应用卸载场景下，被卸载应用的账号数据会被删除；本地账号删除场景下，被删除本地账号下的所有应用的账号数据会被删除。

## 模拟器支持情况

本模块支持模拟器。

## 开发准备

1. 导入应用账号模块。

```
import { appAccount, BusinessError } from '@kit.BasicServicesKit';
```

1. 获取应用账号的实例对象。

```
const appAccountManager = appAccount.createAppAccountManager();
```

## 创建应用账号

用户在应用中登录后，开发者可以在系统中创建一个关联的应用账号，后续可以基于此账号进行数据管理。

具体开发实例如下：

1. 参数准备，指定账号名和可选配置。

```
    let name: string = 'ZhangSan';
    let options: appAccount.CreateAccountOptions = {
      customData: {
        age: '10'
      }
    };
```

1. 调用[createAccount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#createaccount9)接口，根据名称和选项创建应用账号。

```
    appAccountManager.createAccount(name, options).then(()=>{
      console.info('createAccount successfully');
    // ···
    }).catch((err: BusinessError)=>{
       console.error(`createAccount failed, error: code is ${err.code}, message is ${err.message}`);
    // ···
    });
```

## 查询应用账号列表

具体开发实例如下：

调用[getAllAccounts](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#getallaccounts9)接口查询账号列表。

```
    appAccountManager.getAllAccounts().then((data: appAccount.AppAccountInfo[]) => {
      console.info('getAllAccounts successfully, data: ' + JSON.stringify(data));
    // ···
    }).catch((err: BusinessError) => {
      console.error(`getAllAccounts failed, code is ${err.code}, message is ${err.message}`);
    // ···
    });
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Account/ManagerApplicationAccount/entry/src/main/ets/pages/Index.ets#L54-L66" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 存取账号的凭据

具体开发实例如下：

1. 准备参数，指定账号名、凭据类型和凭据。

```
    let name: string = 'ZhangSan';
    let credentialType: string = 'PIN_SIX';
    let credential: string = 'xxxxxx';
```

1. 调用[getCredential](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#getcredential9)接口，获取账号的凭据。

```
    appAccountManager.getCredential(name, credentialType).then((data: string) => {
      console.info('getCredential successfully, data: ' + data);
    // ···
    }).catch((err: BusinessError) => {
      console.error(`getCredential failed, code is ${err.code}, message is ${err.message}`);
    // ···
    });
```

1. 调用[setCredential](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#setcredential9)接口，设置账号的凭据。

```
    await appAccountManager.setCredential(name, credentialType, credential).then(() => {
      console.info('setCredential successfully');
    }).catch((err: BusinessError) => {
      console.error(`setCredential failed: code is ${err.code}, message is ${err.message}`);
    // ···
    });
```

## 存取账号的自定义数据

具体开发实例如下：

1. 准备参数，指定账号名和自定义键值。

```
    let name: string = 'ZhangSan';
    let key: string = 'age';
    let value: string = '12';
```

1. 调用[setCustomData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#setcustomdata9)接口，设置账号的自定义数据。

```
    await appAccountManager.setCustomData(name, key, value).then(() => {
      console.info('setCustomData successfully');
    }).catch((err: BusinessError) => {
      console.error(`setCustomData failed: code is ${err.code}, message is ${err.message}`);
    // ···
    });
```

1. 调用[getCustomData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#getcustomdata9)接口，获取账号的自定义数据。

```
    appAccountManager.getCustomData(name, key).then((data: string) => {
      console.info('getCustomData successfully, data: ' + data);
    // ···
    }).catch((err: BusinessError) => {
      console.error(`getCustomData failed, code is ${err.code}, message is ${err.message}`);
    // ···
    });
```

## 存取账号的授权令牌

具体开发实例如下：

1. 准备参数，指定账号名、账号所有者、授权类型和授权令牌。

```
    let name: string = 'ZhangSan';
    let owner: string = 'com.samples.managerapplicationaccount';
    let authType: string = 'getSocialData';
    let token: string = 'xxxxxx';
```

1. 调用[setAuthToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#setauthtoken9)接口，设置指定授权类型的授权令牌。

```
    await appAccountManager.setAuthToken(name, authType, token).then(() => {
      console.info('setAuthToken successfully');
    }).catch((err: BusinessError) => {
      console.error(`setAuthToken failed: code is ${err.code}, message is ${err.message}`);
    // ···
    });
```

1. 调用[getAuthToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#getauthtoken9)接口，获取指定授权类型的授权令牌。

```
    await appAccountManager.getAuthToken(name, owner, authType).then((data: string) => {
      console.info('getAuthToken successfully, data: ' + data);
    // ···
    }).catch((err: BusinessError) => {
      console.error(`getAuthToken failed, code is ${err.code}, message is ${err.message}`);
    // ···
    });
```

## 删除应用账号

用户退出登录后，应用需及时将相应的应用账号从系统中删除。

具体开发实例如下：

指定要删除的账号名称，调用[removeAccount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-appaccount#removeaccount9)接口删除账号。

```
    let name: string = 'ZhangSan';
    appAccountManager.removeAccount(name).then(() => {
      console.info('removeAccount successfully');
    // ···
    }).catch((err: BusinessError) => {
      console.error(`removeAccount failed, code is ${err.code}, message is ${err.message}`);
    // ···
    });
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Account/ManagerApplicationAccount/entry/src/main/ets/pages/Index.ets#L166-L179" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 示例代码

* [应用账号管理](https://gitcode.com/HarmonyOS_Samples/app-account-manager)
