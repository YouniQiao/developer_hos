---
title: "文件隔离"
original_url: /docs/dev/app-dev/system/enterprisethreatprotection-virusremediation-isolate
format: md
upstream_id: dev/app-dev/system/enterprisethreatprotection-virusremediation-isolate
last_sync: 2026-06-07
sync_hash: e2666fcf
---
## 基本概念

文件隔离是指将检测到的威胁文件转移到安全隔离区。

## 场景介绍

在安全防护类应用检测到病毒、木马等恶意文件后可以使用文件隔离接口将恶意文件转移到安全隔离区，实现安全防护类应用对恶意文件的隔离能力。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#isolatethreatfile)。

| 接口 | 描述 |
| --- | --- |
| isolateThreatFile(path: string): Promise\<string\> | 对指定路径文件进行隔离并获得隔离ID。 |

## 开发步骤

1. 导入模块。

   ```
   import { virusRemediation } from '@kit.EnterpriseThreatProtectionKit';
   ```
2. 通过调用接口[isolateThreatFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#isolatethreatfile)，实现对恶意文件的安全隔离。path参数为目标文件的绝对路径。

   ```
   import { BusinessError } from '@kit.BasicServicesKit';

   // 隔离文件，打印被隔离文件对应的隔离id
   function isolateFilePromise() {
     // 恶意文件路径，此处为示例路径，实际使用时需替换为真实文件路径
     let maliciousFilePath: string = '/data/service/el2/test/test.txt';
     virusRemediation.isolateThreatFile(maliciousFilePath).then((id: string) => {
       console.info(`Succeeded in isolating file. Path: ${maliciousFilePath}, ID: ${id}.`);
     }).catch((err: BusinessError) => {
     // 根据错误码进行不同的业务处理
       if (err.code === 1023804001) {
         console.error('Invalid file type, only single files are supported.');
       } else if (err.code === 1023804002) {
         console.error('Application bundle path detected, please uninstall the app or disable running.');
       } else {
         console.error(`Failed to isolate file. Code: ${err.code}, message: ${err.message}.`);
       }
     });
   }
   ```
