---
title: "添加、删除和获取放通应用列表"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fileguard-unrestricted-app-list
---

![](./img/ed12ada6.png)

从6.1.1(24)版本开始，新增添加、删除和获取放通应用列表的接口，支持用户维护放通应用列表。

## 场景介绍

为应用提供添加、删除和获取放通应用列表的能力，添加到列表中的应用将不受[updatePolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#updatepolicy)接口下发的网络、U盘、蓝牙、星闪、Samba客户端和服务端策略管控，但打印管控策略仍会受到限制。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard)。

| 接口名 | 描述 |
| --- | --- |
| [addUnrestrictedApplicationList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#addunrestrictedapplicationlist)(appIds: Array<string>, userId?: number): Promise<void> | 使用Promise方式添加放通应用列表。 |
| [removeUnrestrictedApplicationList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#removeunrestrictedapplicationlist)(appIds: Array<string>, userId?: number): Promise<void> | 使用Promise方式删除放通应用列表。 |
| [getUnrestrictedApplicationList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#getunrestrictedapplicationlist)(userId?: number): Promise<Array<string>> | 使用Promise方式获取放通应用列表。 |

## 开发步骤

1. 导入模块。

   ```
   import { fileGuard } from '@kit.EnterpriseDataGuardKit';
   import { osAccount, BusinessError } from '@kit.BasicServicesKit';
   import { bundleManager } from '@kit.AbilityKit';
   ```
2. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，调用接口[addUnrestrictedApplicationList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#addunrestrictedapplicationlist)，添加放通应用列表。

   ```
   async function testAddUnrestrictedApplicationList() {
     try {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
       let userId: number = await accountManager.getOsAccountLocalId();
       let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION |
         bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO;
       let bundleInfo: bundleManager.BundleInfo = await bundleManager.getBundleInfoForSelf(bundleFlags);
       let appId: string = bundleInfo.signatureInfo.appId;
       let appIds: string[] = [appId];

       guard.addUnrestrictedApplicationList(appIds, userId).then(() => {
         console.info(`Succeeded in adding the application to the unrestricted list.`);
       }).catch((error: BusinessError) => {
         console.error(`Failed to add the application to the unrestricted list. Code: ${error.code}, message: ${error.message}.`);
       })
     } catch (err) {
       console.error(`Failed to test addUnrestrictedApplicationList. Code: ${err.code}, message: ${err.message}.`);
     }
   }
   ```
3. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，调用接口[getUnrestrictedApplicationList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#getunrestrictedapplicationlist)，可以查看放通应用列表。

   ```
   async function testGetUnrestrictedApplicationList() {
     try {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
       let userId: number = await accountManager.getOsAccountLocalId();

       guard.getUnrestrictedApplicationList(userId).then((appIds: string[]) => {
         console.info(`Succeeded in getting the application to the unrestricted list. appIds: ${appIds.toString()}`);
       }).catch((error: BusinessError) => {
         console.error(`Failed to get the application to the unrestricted list. Code: ${error.code}, message: ${error.message}.`);
       })
     } catch (err) {
       console.error(`Failed to test getUnrestrictedApplicationList. Code: ${err.code}, message: ${err.message}.`);
     }
   }
   ```
4. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，调用接口[removeUnrestrictedApplicationList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#removeunrestrictedapplicationlist)，可以删除放通应用列表。

   ```
   async function testRemoveUnrestrictedApplicationList() {
     try {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
       let userId: number = await accountManager.getOsAccountLocalId();

       let bundleFlags = bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION |
         bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_SIGNATURE_INFO;
       let bundleInfo: bundleManager.BundleInfo = await bundleManager.getBundleInfoForSelf(bundleFlags);
       let appId: string = bundleInfo.signatureInfo.appId;
       let appIds: string[] = [appId];

       guard.removeUnrestrictedApplicationList(appIds, userId).then(() => {
         console.info(`Succeeded in removing the application to the unrestricted list.`);
       }).catch((error: BusinessError) => {
         console.error(`Failed to remove the application to the unrestricted list. Code: ${error.code}, message: ${error.message}.`);
       })
     } catch (err) {
       console.error(`Failed to test removeUnrestrictedApplicationList. Code: ${err.code}, message: ${err.message}.`);
     }
   }
   ```
