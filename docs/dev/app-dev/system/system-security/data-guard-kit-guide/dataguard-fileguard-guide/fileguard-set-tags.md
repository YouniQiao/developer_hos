---
displayed_sidebar: appDevSidebar
title: "设置文件属性标签"
original_url: /docs/dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-set-tags
format: md
upstream_id: dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-set-tags
last_sync: 2026-06-13
sync_hash: bd734c6d
---


## 场景介绍

Enterprise Data Guard Kit为应用提供对文件设置属性标签的能力，方便应用对管控文件进行标识、分类。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard")。

| 接口名 | 描述 |
| --- | --- |
| [setFileTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setfiletag "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setfiletag")(path: string, level: [SecurityLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#securitylevel "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#securitylevel"), tag: string, callback: AsyncCallback<void>): void | 使用Callback方式设置文件属性标签。 |
| [setFileTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setfiletag-1 "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setfiletag-1")(path: string, level: [SecurityLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#securitylevel "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#securitylevel"), tag: string): Promise<void> | 使用Promise方式设置文件属性标签。 |
| [setFileCustomTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setfilecustomtag "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setfilecustomtag")(path: string, tagList: Array<string>, callback: AsyncCallback<void>): void; | 使用Callback方式设置文件自定义属性标签。 |
| [setFileCustomTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setfilecustomtag-1 "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#setfilecustomtag-1")(path: string, tagList: Array<string>): Promise<void>; | 使用Promise方式设置文件自定义属性标签。 |
| [unsetFileCustomTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#unsetfilecustomtag "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#unsetfilecustomtag")(path: string, tagList: Array<string>, callback: AsyncCallback<void>): void; | 使用Callback方式取消设置文件自定义属性标签。 |
| [unsetFileCustomTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#unsetfilecustomtag-1 "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#unsetfilecustomtag-1")(path: string, tagList: Array<string>): Promise<void>; | 使用Promise方式取消设置文件自定义属性标签。 |

## 开发步骤

1. 导入模块。

   ```
   import { fileGuard } from '@kit.EnterpriseDataGuardKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard")对象guard，调用接口setFileTag或setFileCustomTag，设置文件属性标签，自定义属性标签可通过unsetFileCustomTag取消设置。

   * 通过回调函数方式，设置文件属性标签。

     ```
     function setFileTagCallback() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/test/test.txt';
       let tag: string = 'test';
       guard.setFileTag(path, fileGuard.SecurityLevel.EXTERNAL, tag, (err: BusinessError) => {
         if (err) {
           console.error(`Failed to set file tag. Code: ${err.code}, message: ${err.message}.`);
           return;
         }
         console.info(`Succeeded in setting file tag.`);
       });
     }
     ```
   * 通过Promise方式，设置文件属性标签。

     ```
     function setFileTagPromise() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/test/test.txt';
       let tag: string = 'test';
       guard.setFileTag(path, fileGuard.SecurityLevel.EXTERNAL, tag).then(() => {
         console.info(`Succeeded in setting file tag.`);
       }).catch((err: BusinessError) => {
         console.error(`Failed to set file tag. Code: ${err.code}, message: ${err.message}.`);
       });
     }
     ```