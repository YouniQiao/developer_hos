---
title: "应用及文件系统空间统计"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-fs-space-statistics
format: md
---


在系统中，可能出现系统空间不够或者cacheDir等目录受系统配额限制等情况，需要应用开发者关注系统剩余空间，同时控制应用自身占用的空间大小。

## 接口说明

API的详细介绍请参见[ohos.file.statvfs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-statvfs)、[ohos.file.storageStatistics](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-storage-statistics)。

**表1** 文件系统空间和应用空间统计

| 模块 | 接口名 | 功能 |
| --- | --- | --- |
| @ohos.file.storageStatistics | getCurrentBundleStats | 获取当前应用的存储空间大小（单位为Byte）。 |
| @ohos.file.storageStatistics | getFreeSize | 异步获取内置存储的可用空间大小（单位为Byte）。  **说明**：从API version 15开始，支持该接口。 |
| @ohos.file.storageStatistics | getFreeSizeSync | 同步获取内置存储的可用空间大小（单位为Byte）。  **说明**：从API version 15开始，支持该接口。 |
| @ohos.file.storageStatistics | getTotalSize | 异步获取内置存储的总空间大小（单位为Byte）。  **说明**：从API version 15开始，支持该接口。 |
| @ohos.file.storageStatistics | getTotalSizeSync | 同步获取内置存储的总空间大小（单位为Byte）。  **说明**：从API version 15开始，支持该接口。 |
| @ohos.file.statvfs | getFreeSize | 获取指定文件系统的剩余空间大小（单位为Byte）。  **说明**：从API version 20开始，支持该接口。 |
| @ohos.file.statvfs | getTotalSize | 获取指定文件系统的总空间大小（单位为Byte）。  **说明**：从API version 20开始，支持该接口。 |

**表2** 应用空间统计

![](./img/45763d59.png)

表格中统计路径列涉及的目录均指应用的沙箱路径，查看路径前需要先进入对应的应用沙箱空间。进入沙箱空间需要执行以下命令：

1. hdc shell。
2. nsenter -t \{pid\} -m sh。

| BundleStats属性 | 含义 | 统计路径 |
| --- | --- | --- |
| appSize | 应用安装文件大小（单位为Byte） | 应用安装文件保存在以下目录：  /data/storage/el1/bundle |
| cacheSize | 应用缓存文件大小（单位为Byte） | 应用的缓存文件保存在以下目录：  /data/storage/$\{el1-el5\}/base/cache  /data/storage/$\{el1-el5\}/base/haps/$\{moduleName\}/cache  **说明**：$\{el1-el5\}指的是[el1，el2，el3，el4，el5目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory#应用文件目录与应用文件路径)。$\{moduleName\}是模块名。 |
| dataSize | 应用文件存储大小（除应用安装文件）（单位为Byte） | 应用文件通常由本地文件、分布式文件、数据库文件等部分组成。  本地文件保存在以下目录（注意缓存文件目录为以下目录的子目录）：  /data/storage/$\{el1-el5\}/base  分布式文件保存在以下目录：  /data/storage/el2/distributedfiles  数据库文件保存在以下目录：  /data/storage/$\{el1-el5\}/database  **说明**：$\{el1-el5\}指的是[el1，el2，el3，el4，el5目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory#应用文件目录与应用文件路径)。 |

## 开发示例

* 获取文件系统数据分区剩余空间大小。

  ```
  import { statfs } from '@kit.CoreFileKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';
  ```

  ```
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let path = context.filesDir;
  statfs.getFreeSize(path, (err: BusinessError, number: number) => {
    if (err) {
      console.error(`Invoke getFreeSize failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info(`Invoke getFreeSize succeeded, size is ${number}`);
    }
  });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/AppFsSpcaeStatisticsSample/entry/src/main/ets/pages/Index.ets#L171-L181" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 获取当前应用的存储空间大小。

  ```
  import { storageStatistics } from '@kit.CoreFileKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  ```

  ```
  storageStatistics.getCurrentBundleStats((err: BusinessError, bundleStats: storageStatistics.BundleStats) => {
    if (err) {
      console.error(`Invoke getCurrentBundleStats failed, code is ${err.code}, message is ${err.message}`);
    } else {
      console.info(`Invoke getCurrentBundleStats succeeded, appsize is ${bundleStats.appSize}`);
    }
  });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/AppFsSpcaeStatisticsSample/entry/src/main/ets/pages/Index.ets#L152-L160" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 异步获取内置存储的总空间大小。

  ```
  import { storageStatistics } from '@kit.CoreFileKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  ```

  ```
  storageStatistics.getTotalSize().then((number: number) => {
    console.info(`getTotalSize successfully, number is ${number}`);
  }).catch((err: BusinessError) => {
    console.error(`getTotalSize failed with error, code is ${err.code}, message is ${err.message}`);
  });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/AppFsSpcaeStatisticsSample/entry/src/main/ets/pages/Index.ets#L191-L197" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 同步获取内置存储的总空间大小。

  ```
  import { storageStatistics } from '@kit.CoreFileKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  ```

  ```
  try {
    let number = storageStatistics.getTotalSizeSync();
    console.info(`getTotalSizeSync successfully, number is ${number}`);
  } catch (err) {
    let error: BusinessError = err as BusinessError;
    console.error(`getTotalSizeSync failed with error, code is ${error.code}, message is ${error.message}`);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/AppFsSpcaeStatisticsSample/entry/src/main/ets/pages/Index.ets#L206-L214" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 异步获取内置存储的可用空间大小。

  ```
  import { storageStatistics } from '@kit.CoreFileKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  ```

  ```
  storageStatistics.getFreeSize().then((number: number) => {
    console.info(`getFreeSize successfully, number is ${number}`);
  }).catch((err: BusinessError) => {
    console.error(`getFreeSize failed with error, code is ${err.code}, message is ${err.message}`);
  });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/AppFsSpcaeStatisticsSample/entry/src/main/ets/pages/Index.ets#L220-L226" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 同步获取内置存储的可用空间大小。

  ```
  import { storageStatistics } from '@kit.CoreFileKit';
  import { BusinessError } from '@kit.BasicServicesKit';
  ```

  ```
  try {
    let number = storageStatistics.getFreeSizeSync();
    console.info(`getFreeSizeSync successfully, number is ${number}`);
  } catch (err) {
    let error: BusinessError = err as BusinessError;
    console.error(`getFreeSizeSync failed with error, code is ${error.code}, message is ${error.message}`);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/AppFsSpcaeStatisticsSample/entry/src/main/ets/pages/Index.ets#L235-L243" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
