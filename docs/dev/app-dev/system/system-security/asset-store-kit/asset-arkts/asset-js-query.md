---
displayed_sidebar: appDevSidebar
title: "查询关键资产(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-query
---

## 接口介绍

开发者可以查阅API文档，获取关键资产查询接口的详细说明：[query(query: AssetMap)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetquery)、同步接口[querySync(query: AssetMap)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#assetquerysync12)。

在查询关键资产时，关键资产属性的内容（AssetMap）参数如下表所示：

![](./img/c7af7c16.png)

下表中“ALIAS”和名称包含“DATA\_LABEL”的关键资产属性，用于存储业务自定义信息，其内容不会被加密，请勿存放敏感个人数据。

查询关键资产明文SECRET需要解密，目前不支持批量查询，查询时间较长，需要将RETURN\_TYPE设置为ALL；只查询其他关键资产属性不需解密，支持批量查询，查询时间较短，需要将RETURN\_TYPE设置为ATTRIBUTES。

| 属性名称（Tag） | 属性内容（Value） | 是否必选 | 说明 |
| --- | --- | --- | --- |
| ALIAS | 类型为Uint8Array，长度为1-256字节。 | 可选 | 关键资产别名，每条关键资产的唯一索引。 |
| ACCESSIBILITY | 类型为number，取值范围详见[Accessibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#accessibility)。 | 可选 | 基于锁屏状态的访问控制。 |
| REQUIRE\_PASSWORD\_SET | 类型为boolean。 | 可选 | 是否仅在设置了锁屏密码的情况下，可访问关键资产。为true时表示查询仅用户设置了锁屏密码才允许访问的关键资产；为false时表示查询无论用户是否设置锁屏密码，均可访问的关键资产。 |
| AUTH\_TYPE | 类型为number，取值范围详见[AuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#authtype)。 | 可选 | 访问关键资产所需的用户认证类型。 |
| SYNC\_TYPE | 类型为number，取值范围详见[SyncType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#synctype)。 | 可选 | 关键资产支持的同步类型。 |
| IS\_PERSISTENT | 类型为boolean。 | 可选 | 在应用卸载时是否需要保留关键资产。为true时表示查询应用卸载后会被保留的关键资产；为false时表示查询应用卸载后会被删除的关键资产。 |
| DATA\_LABEL\_CRITICAL\_1 | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且有完整性保护。  **说明：** API12前长度为1-512字节。 |
| DATA\_LABEL\_CRITICAL\_2 | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且有完整性保护。  **说明：** API12前长度为1-512字节。 |
| DATA\_LABEL\_CRITICAL\_3 | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且有完整性保护。  **说明：** API12前长度为1-512字节。 |
| DATA\_LABEL\_CRITICAL\_4 | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且有完整性保护。  **说明：** API12前长度为1-512字节。 |
| DATA\_LABEL\_NORMAL\_1 | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且无完整性保护。  **说明：** API12前长度为1-512字节。 |
| DATA\_LABEL\_NORMAL\_2 | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且无完整性保护。  **说明：** API12前长度为1-512字节。 |
| DATA\_LABEL\_NORMAL\_3 | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且无完整性保护。  **说明：** API12前长度为1-512字节。 |
| DATA\_LABEL\_NORMAL\_4 | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且无完整性保护。  **说明：** API12前长度为1-512字节。 |
| DATA\_LABEL\_NORMAL\_LOCAL\_112+ | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。 |
| DATA\_LABEL\_NORMAL\_LOCAL\_212+ | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。 |
| DATA\_LABEL\_NORMAL\_LOCAL\_312+ | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。 |
| DATA\_LABEL\_NORMAL\_LOCAL\_412+ | 类型为Uint8Array，长度为1-2048字节。 | 可选 | 关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。 |
| RETURN\_TYPE | 类型为number，取值范围详见[ReturnType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset#returntype)。 | 可选 | 关键资产查询返回的结果类型。 |
| RETURN\_LIMIT | 类型为number。 | 可选 | 关键资产查询返回的结果数量。 |
| RETURN\_OFFSET | 类型为number，取值范围：1-65536。 | 可选 | 关键资产查询返回的结果偏移量。  **说明：** 用于分批查询场景时，指定从第几个结果开始返回。 |
| RETURN\_ORDERED\_BY | 类型为number，取值范围：asset.Tag.DATA\_LABEL\_xxx。 | 可选 | 关键资产查询返回的结果排序依据，仅支持按照附属信息排序。  **说明：** 默认按照关键资产新增的顺序返回。 |
| REQUIRE\_ATTR\_ENCRYPTED14+ | 类型为boolean。 | 可选 | 是否查询业务自定义附属信息被加密的数据。为true时表示查询业务自定义附属信息加密存储的数据，为false时表示查询业务自定义附属信息不加密存储的数据。默认值为false。 |
| GROUP\_ID18+ | 类型为Uint8Array，长度为7-127字节。 | 可选 | 待查询的关键资产所属群组，默认查询不属于任何群组的关键资产。 |

## 约束和限制

批量查询的关键资产需要通过IPC通道传输给业务。由于IPC缓冲区大小的限制，建议当查询超过40条关键资产时，进行分批查询，每次查询数量不超过40条。

## 代码示例

![](./img/d2881076.png)

本模块提供了异步和同步两套接口，以下为异步接口的使用示例，同步接口详见[@ohos.security.asset (关键资产存储服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-asset)。

在指定群组中查询一条关键资产明文的使用示例详见[查询单条群组关键资产明文](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-group-access-control#查询单条群组关键资产明文)，在指定群组中查询一条关键资产属性的使用示例详见[查询单条群组关键资产属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-group-access-control#查询单条群组关键资产属性)。

在查询前，需确保已有关键资产，可参考[指南文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-js-add)新增关键资产，否则将抛出NOT\_FOUND错误（错误码24000002）。

### 查询单条关键资产明文

查询别名是demo\_alias的关键资产明文。

1. 引用头文件，定义工具函数。

   ```
   import { asset } from '@kit.AssetStoreKit';
   import { util } from '@kit.ArkTS';
   import { BusinessError } from '@kit.BasicServicesKit';

   function stringToArray(str: string): Uint8Array {
     let textEncoder = new util.TextEncoder();
     return textEncoder.encodeInto(str);
   }

   function arrayToString(arr: Uint8Array): string {
     let textDecoder = util.TextDecoder.create('utf-8', { ignoreBOM: true });
     let str = textDecoder.decodeToString(arr, { stream: false });
     return str;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/query_plaintext.ets#L17-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：query_plaintext.ets</a></div>

2. 参考如下示例代码，进行业务功能开发。

   ```
   let query: asset.AssetMap = new Map();
   query.set(asset.Tag.ALIAS, stringToArray('demo_alias')); // 指定了关键资产别名，最多查询到一条满足条件的关键资产。
   query.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ALL); // 此处表示需要返回关键资产的所有信息，即属性+明文。返回明文需要解密，查询时间较长。
   try {
     asset.query(query).then((res: Array<asset.AssetMap>) => {
       for (let i = 0; i < res.length; i++) {
         // 解析secret。
         let secret: Uint8Array = res[i].get(asset.Tag.SECRET) as Uint8Array;
         // 将Uint8Array转为string类型。
         let secretStr: string = arrayToString(secret);
       }
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to query Asset plaintext. Code is ${err.code}, message is ${err.message}`);
       // ...
     });
   } catch (error) {
     let err = error as BusinessError;
     console.error(`Failed to query Asset plaintext. Code is ${err.code}, message is ${err.message}`);
     // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/query_plaintext.ets#L36-L64" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：query_plaintext.ets</a></div>


### 查询单条关键资产属性

查询别名是demo\_alias的关键资产属性。

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

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/query_attr.ets#L17-L26" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：query_attr.ets</a></div>

2. 参考如下示例代码，进行业务功能开发。

   ```
   let query: asset.AssetMap = new Map();
   query.set(asset.Tag.ALIAS, stringToArray('demo_alias')); // 指定了关键资产别名，最多查询到一条满足条件的关键资产
   query.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ATTRIBUTES); // 此处表示仅返回关键资产属性，不包含关键资产明文
   try {
     asset.query(query).then((res: Array<asset.AssetMap>) => {
       for (let i = 0; i < res.length; i++) {
         // 解析属性。
         let accessibility: number = res[i].get(asset.Tag.ACCESSIBILITY) as number;
         console.info(`Succeeded in getting accessibility, which is: ${accessibility}.`);
       }
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to query Asset attribute. Code is ${err.code}, message is ${err.message}`);
       // ...
     });
   } catch (error) {
     let err = error as BusinessError;
     console.error(`Failed to query Asset attribute. Code is ${err.code}, message is ${err.message}`);
     // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/query_attr.ets#L30-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：query_attr.ets</a></div>


### 批量查询关键资产属性

批量查询标签为demo\_label的关键资产属性，共返回10条符合条件的查询结果，结果按DATA\_LABEL\_NORMAL\_1属性内容排序。

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

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/query_batch_attrs.ets#L17-L26" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：query_batch_attrs.ets</a></div>

2. 参考如下示例代码，进行业务功能开发。

   ```
   let query: asset.AssetMap = new Map();
   query.set(asset.Tag.RETURN_TYPE, asset.ReturnType.ATTRIBUTES); // 此处表示仅返回关键资产属性，不包含关键资产明文。
   query.set(asset.Tag.DATA_LABEL_NORMAL_1, stringToArray('demo_label'));
   query.set(asset.Tag.RETURN_LIMIT, 10); // 此处表示查询10条满足条件的关键资产。
   query.set(asset.Tag.RETURN_ORDERED_BY, asset.Tag.DATA_LABEL_NORMAL_1); // 此处查询结果以DATA_LABEL_NORMAL_1属性内容排序。
   try {
     asset.query(query).then((res: Array<asset.AssetMap>) => {
       for (let i = 0; i < res.length; i++) {
         // 解析属性。
         let accessibility: number = res[i].get(asset.Tag.ACCESSIBILITY) as number;
         console.info(`Succeeded in getting accessibility, which is: ${accessibility}.`);
       }
       // ...
     }).catch((err: BusinessError) => {
       console.error(`Failed to query batch Asset attributes. Code is ${err.code}, message is ${err.message}`);
       // ...
     });
   } catch (error) {
     let err = error as BusinessError;
     console.error(`Failed to query batch Asset attributes. Code is ${err.code}, message is ${err.message}`);
     // ...
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreArkTS/entry/src/main/ets/operations/query_batch_attrs.ets#L30-L59" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：query_batch_attrs.ets</a></div>
