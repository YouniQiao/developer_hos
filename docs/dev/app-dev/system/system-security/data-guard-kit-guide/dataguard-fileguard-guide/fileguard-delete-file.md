---
title: "删除指定路径下的文件"
original_url: /docs/dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-delete-file
format: md
---


## 场景介绍

Enterprise Data Guard Kit为应用提供对指定路径下文件的删除能力。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard)。

| 接口名 | 描述 |
| --- | --- |
| [deleteFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#deletefile)(path: string, callback: AsyncCallback\<void\>): void | 使用Callback方式删除指定路径下的文件。 |
| [deleteFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#deletefile-1)(path: string): Promise\<void\> | 使用Promise方式删除指定路径下的文件。 |

## 开发步骤

1. 导入模块。

   ```
   import { fileGuard } from '@kit.EnterpriseDataGuardKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，调用接口deleteFile，删除扫描范围内的文件。

   * 通过回调函数方式，删除扫描范围内的文件。

     ```
     function deleteFileCallback() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/test.txt';
       guard.deleteFile(path, (err: BusinessError) => {
         if (err) {
           console.error(`Failed to delete file. Code: ${err.code}, message: ${err.message}.`);
         } else {
           console.info(`Succeeded in deleting file.`);
         }
       });
     }
     ```
   * 通过Promise方式，删除扫描范围内的文件。

     ```
     function deleteFilePromise() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/{account_id}/hmdfs/account/files/Docs/Documents/test.txt';
       guard.deleteFile(path).then(() => {
         console.info(`Succeeded in deleting file.`);
       }).catch((err: BusinessError) => {
         console.error(`Failed to delete file. Code: ${err.code}, message: ${err.message}.`);
       });
     }
     ```
