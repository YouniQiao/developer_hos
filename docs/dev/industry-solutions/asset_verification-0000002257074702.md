---
title: "密码保险箱自定义"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/asset_verification-0000002257074702
---

## 场景介绍

密码保险箱自定义是便捷生活类应用中高频使用场景之一，如用户需要存储、删除、查询账号密码、证件、住址和联系方式等关键资产信息。

本示例基于[关键资产存储服务](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset)，提供用户隐私敏感信息的安全存储、删除和基于生物识别的认证访问能力。

## 效果预览

![](./img/ed08e605.gif "点击放大")

![](./img/7d6d07b9.png)

* 输入密码和生物识别认证界面无法录制。
* 使用生物识别功能需要设置指纹密码。

## 实现思路

1. 输入需要保存的关键资产信息，调用[asset.addSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetaddsync12)方法存储关键资产。

   ```
   static async addAsset(account: string, password: string, label: string, context: UIContext) {
     let attr: asset.AssetMap = new Map();
     attr.set(asset.Tag.ALIAS, Asset.stringToArray(account));
     attr.set(asset.Tag.SECRET, Asset.stringToArray(password));
     attr.set(asset.Tag.DATA_LABEL_NORMAL_1, Asset.stringToArray(label));
     attr.set(asset.Tag.AUTH_TYPE, asset.AuthType.ANY);
     attr.set(asset.Tag.IS_PERSISTENT, true);
     try {
       asset.addSync(attr);
       // ...
     } catch (error) {
       // ...
     }
   }
   ```

2. 输入需要删除的关键资产信息，调用[asset.removeSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetremovesync12)方法删除相关关键资产。

   ```
   static async removeAssetPromise(deleteAccount: string, context: UIContext) {
     let attr: asset.AssetMap = new Map();
     attr.set(asset.Tag.ALIAS, Asset.stringToArray(deleteAccount));
     try {
       asset.removeSync(attr);
       // ...
     } catch (error) {
       // ...
     }
   }
   ```

3. 输入需要查询的关键资产信息，调用[asset.preQuerySync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetprequerysync12)方法实现关键资产的预查询。

   ```
   static async preQueryAssetPromise(checkAccount: string): Promise<Uint8Array> {
     let assetMap: asset.AssetMap = new Map();
     assetMap.set(asset.Tag.AUTH_VALIDITY_PERIOD, Constants.PERIOD);
     assetMap.set(asset.Tag.AUTH_TYPE, asset.AuthType.ANY);
     if (checkAccount.length > 0) {
       assetMap.set(asset.Tag.ALIAS, Asset.stringToArray(checkAccount));
     }
     try {
       return asset.preQuerySync(assetMap);
     } catch (error) {
       return new Uint8Array(0);
     }
   }
   ```

4. 预查询通过后，需要二次精确查询，调用[userAuth.getUserAuthInstance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth#userauthgetuserauthinstance10)方法实现用户认证功能。

   ```
   static async getAuthToken(challenge: Uint8Array, context: UIContext,
     callback: (isSuccess: boolean, challenge: Uint8Array) => void) {
     let authParam: userAuth.AuthParam = {
       challenge: challenge,
       authType: [userAuth.UserAuthType.FINGERPRINT],
       authTrustLevel: userAuth.AuthTrustLevel.ATL1,
     };
     let widgetParam: userAuth.WidgetParam = {
       title: Constants.SCREEN_LOCK_PASSWORD,
     };
     try {
       let userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
       userAuthInstance.on('result', {
         onResult(result) {
           // ...
         }
       });
       userAuthInstance.start();
     } catch (error) {
       // ...
     }
   }
   ```

5. 用户认证通过后，调用[asset.querySync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetquerysync12)方法进行二次精确查询。

   ```
   static async queryAuthAssetPromise(checkAccount: string, context: UIContext, challenge: Uint8Array,
     authToken: Uint8Array): Promise<Map<string, string>> {
     let accountList: Map<string, string>[] = [];
     let attr: asset.AssetMap = new Map();
     let account: Map<string, string> = new Map<string, string>();
     if (checkAccount.length > 0) {
       attr.set(asset.Tag.ALIAS, Asset.stringToArray(checkAccount));
       attr.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ALL);
       attr.set(asset.Tag.AUTH_CHALLENGE, challenge);
       attr.set(asset.Tag.AUTH_TOKEN, authToken);
     }
     try {
       let data: Array<asset.AssetMap> = asset.querySync(attr);
       accountList = Asset.convertAssetList(data, accountList);
       return accountList[0];
     } catch (error) {
       // ...
       return account;
     }
   }
   ```

6. 二次查询后调用[asset.postQuerySync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetpostquerysync12)方法返回查询结果。

   ```
   static async postQueryAssetPromise(challenge: Uint8Array) {
     let attr: asset.AssetMap = new Map();
     attr.set(asset.Tag.AUTH_CHALLENGE, challenge);
     try {
       asset.postQuerySync(attr);
     } catch (error) {
       // ...
     }
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 获取存储持久化数据权限：[ohos.permission.STORE\_PERSISTENT\_DATA](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissionstore_persistent_data)。
* 获取使用生物识别进行身份认证权限：[ohos.permission.ACCESS\_BIOMETRIC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissionaccess_biometric)。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──constants
│  │  └──Constants.ets                  // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──MainPage.ets                   // 主页
│  │  └──QueryResult.ets                // 查询结果
│  ├──utils
│  │  └──Asset.ets                      // 增删查函数
│  └──view
│     ├──Delete.ets                     // 删除
│     ├──Query.ets                      // 查询
│     └──Save.ets                       // 保存
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[@ohos.security.asset（关键资产存储服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset)

[@ohos.userIAM.userAuth（用户认证）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-useriam-userauth)

## 代码下载

[密码保险箱自定义示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205165522.73636565477229081373972556841393%3A50001231000000%3A2800%3A5BBE1D4CA0ED780A6CA555C6F474492907F78A14CB61106CD2A02A80764BF13C.zip?needInitFileName=true)
