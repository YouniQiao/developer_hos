---
title: "获取文件URI"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/fileguard-get-file-url
---

## 场景介绍

Enterprise Data Guard Kit为应用提供获取文件路径信息的能力，该路径可被应用直接打开，从而辅助判断是否是KIA文件。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard)。

| 接口名 | 描述 |
| --- | --- |
| [getFileUri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#getfileuri)(path: string, callback: AsyncCallback<[FilePathInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#filepathinfo)>): void | 使用Callback方式获取文件路径信息。 |
| [getFileUri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#getfileuri-1)(path: string): Promise<[FilePathInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#filepathinfo)> | 使用Promise方式获取文件路径信息。 |

## 开发步骤

1. 导入模块。

   ```
   import { fileGuard } from '@kit.EnterpriseDataGuardKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，调用接口getFileUri，获取文件URI。

   * 通过回调函数方式，获取文件URI。

     ```
     function getFileUriCallback() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/{account_id}/hmdfs/account/files/test/test.txt';
       guard.getFileUri(path, (err: BusinessError, data: fileGuard.FilePathInfo) => {
         if (err) {
           console.error(`Failed to get file uri. Code: ${err.code}, message: ${err.message}.`);
         } else {
           console.info(`Succeeded in getting file uri.`);
         }
       });
     }
     ```
   * 通过Promise方式，获取文件URI。

     ```
     function getFileUriPromise() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/{account_id}/hmdfs/account/files/test/test.txt';
       guard.getFileUri(path).then((data: fileGuard.FilePathInfo) => {
         console.info(`Succeeded in getting the uri of file.`);
       }).catch((err: BusinessError) => {
         console.error(`Failed to get the uri of file. Code: ${err.code}, message: ${err.message}.`);
       });
     }
     ```
