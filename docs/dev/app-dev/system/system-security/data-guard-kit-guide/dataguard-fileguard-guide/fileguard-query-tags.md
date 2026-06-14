---
displayed_sidebar: appDevSidebar
title: "获取文件属性标签"
original_url: /docs/dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-query-tags
format: md
upstream_id: dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-query-tags
last_sync: 2026-06-13
sync_hash: 24ab753b
---


## 场景介绍

Enterprise Data Guard Kit为应用提供获取文件属性标签的能力，HarmonyOS系统根据管控策略和文件属性标签对文件实行管控。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard")。

| 接口名 | 描述 |
| --- | --- |
| [queryFileTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#queryfiletag "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#queryfiletag")(path: string, callback: AsyncCallback<[FileTagInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#filetaginfo "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#filetaginfo")>): void | 使用Callback方式获取文件属性标签。 |
| [queryFileTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#queryfiletag-1 "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#queryfiletag-1")(path: string): Promise<[FileTagInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#filetaginfo "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#filetaginfo")> | 使用Promise方式获取文件属性标签。 |

## 开发步骤

1. 导入模块。

   ```
   import { fileGuard } from '@kit.EnterpriseDataGuardKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard")对象guard，调用接口queryFileTag，获取文件属性标签。

   * 通过回调函数方式，获取文件属性标签。

     ```
     function queryFileTagCallback() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/test/test.txt';
       guard.queryFileTag(path, (err: BusinessError, data: fileGuard.FileTagInfo) => {
         if (err) {
           console.error(`Failed to query file tag. Code: ${err.code}, message: ${err.message}.`);
           return;
         }
         console.info(`Succeeded in querying file tag.`);
       });
     }
     ```
   * 通过Promise方式，获取文件属性标签。

     ```
     function queryFileTagPromise() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/test/test.txt';
       guard.queryFileTag(path).then((data: fileGuard.FileTagInfo) => {
         console.info(`Succeeded in querying file tag.`);
       }).catch((err: BusinessError) => {
         console.error(`Failed to query file tag. Code: ${err.code}, message: ${err.message}.`);
       });
     }
     ```