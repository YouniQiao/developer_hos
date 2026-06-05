---
displayed_sidebar: appDevSidebar
title: "同步（备份恢复）关键资产(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-sync
format: md
---


## 新增支持同步的关键资产

新增密码demo\_pwd（别名demo\_alias），附属信息为demo\_label，支持同步的关键资产。

1. 引用头文件，定义工具函数。

   ```
   import { asset } from '@kit.AssetStoreKit';
   import { util } from '@kit.ArkTS';
   import { BusinessError } from '@kit.BasicServicesKit';

   function stringToArray(str: string): Uint8Array {
     let textEncoder = new util.TextEncoder();
     return textEncoder.encodeInto(str);
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/add_sync.ets#L17-L26" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：add_sync.ets</a></div>

2. 参考如下示例代码，进行业务功能开发。

   ```
   let attr: asset.AssetMap = new Map();
   attr.set(asset.Tag.SECRET, stringToArray('demo_pwd'));
   attr.set(asset.Tag.ALIAS, stringToArray('demo_alias'));
   attr.set(asset.Tag.DATA_LABEL_NORMAL_1, stringToArray('demo_label'));
   attr.set(asset.Tag.SYNC_TYPE, asset.SyncType.TRUSTED_DEVICE); // 需指定在可信设备间同步（如新旧设备间克隆）。
   try {
     asset.add(attr).then(() => {
       console.info(`Succeeded in adding Asset with sync.`);
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to add Asset with sync. Code is ${err.code}, message is ${err.message}`);
       // ...
     })
   } catch (error) {
     let err = error as BusinessError;
     console.error(`Failed to add Asset with sync. Code is ${err?.code}, message is ${err?.message}`);
     // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/add_sync.ets#L30-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：add_sync.ets</a></div>


## 接入备份恢复扩展能力

为触发应用数据备份恢复，需要[应用接入数据备份恢复](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-file-backup-extension)。

## 查询关键资产同步结果

### 接口介绍

通过API文档查看查询关键资产同步结果接口[asset.querySyncResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetquerysyncresult20)。

在查询关键资产同步结果时，关键资产属性的内容（AssetMap）参数如下表所示。

| 属性名称（Tag） | 属性内容（Value） | 是否可选 | 说明 |
| --- | --- | --- | --- |
| REQUIRE\_ATTR\_ENCRYPTED14+ | 类型为boolean。 | 是 | 是否查询业务自定义附属信息被加密的关键资产同步结果。true表示查询业务自定义附属信息加密存储的关键资产同步结果，false表示查询业务自定义附属信息不加密存储的关键资产同步结果。默认值为false。 |
| GROUP\_ID18+ | 类型为Uint8Array，长度为7-127字节。 | 是 | 待查询的关键资产所属群组，默认查询不属于任何群组的关键资产同步结果。 |

### 代码示例

1. 引用头文件，定义工具函数。

   ```
   import { asset } from '@kit.AssetStoreKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/query_sync_result.ets#L17-L20" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：query_sync_result.ets</a></div>

2. 参考如下示例代码，进行业务功能开发。

   ```
   let query: asset.AssetMap = new Map();
   asset.querySyncResult(query).then((res: asset.SyncResult) => {
     console.info(`Succeeded in querying sync result: ${JSON.stringify(res)}`);
     // ...
   }).catch((err: BusinessError) => {
     console.error(`Failed to query sync result of Asset. Code is ${err.code}, message is ${err.message}`);
     // ...
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/query_sync_result.ets#L24-L37" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：query_sync_result.ets</a></div>


## 约束和限制

在可信设备间同步过程中，新旧设备的关键资产均需处于可访问的状态，否则可能出现关键资产无法同步的情况。

* 仅设置密码时可访问的关键资产，如果新旧设备中任意一台设备未设置锁屏密码，则无法同步成功。
* 仅屏幕处于解锁状态时可访问的关键资产，如果新旧设备中任意一台设备的屏幕未处于解锁状态，则无法同步成功。
* 仅用户认证通过后可访问的关键资产，如果旧设备未设置锁屏密码，则无法同步成功。
