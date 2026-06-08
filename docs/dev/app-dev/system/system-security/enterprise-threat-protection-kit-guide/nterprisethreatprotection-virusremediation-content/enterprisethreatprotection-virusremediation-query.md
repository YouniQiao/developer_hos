---
displayed_sidebar: appDevSidebar
title: "隔离查询"
original_url: /docs/dev/app-dev/system/system-security/enterprise-threat-protection-kit-guide/nterprisethreatprotection-virusremediation-content/enterprisethreatprotection-virusremediation-query
format: md
upstream_id: dev/app-dev/system/system-security/enterprise-threat-protection-kit-guide/nterprisethreatprotection-virusremediation-content/enterprisethreatprotection-virusremediation-query
last_sync: 2026-06-07
sync_hash: 4b0fb60e
---
## 基本概念

隔离查询功能帮助安全防护类应用获取当前用户下由该应用隔离的处于隔离状态的文件信息列表。

## 场景介绍

当安全防护类应用更新或卸载，导致原本存储在应用数据库中的隔离信息丢失时，可通过隔离查询接口，为安全防护类应用提供隔离信息查询的能力，快速获取自身应用已隔离的当前用户的文件信息，保障隔离恢复和隔离查询的可操作性。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#queryisolatedfiles)。

| 接口 | 描述 |
| --- | --- |
| queryIsolatedFiles(callback: [QueryCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#querycallback), batchNum?: number): void | 获取已隔离文件的文件信息。 |

## 开发步骤

1. 导入模块。

   ```
   import { virusRemediation } from '@kit.EnterpriseThreatProtectionKit';
   ```
2. 通过声明查询结果回调queryCallback，并调用[queryIsolatedFiles](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#queryisolatedfiles)接口，获取已隔离文件的文件信息。

   ```
   function startQueryTask() {
     // 查询隔离文件信息回调
     let onQuery: (files: virusRemediation.IsolatedFileInfo[]) => void = (files: virusRemediation.IsolatedFileInfo[]) => {
       files.forEach((value: virusRemediation.IsolatedFileInfo, index: number) => {
         console.info(`Succeeded in getting isolated file, file id: ${value.id}.`);
       })
     };
     // 查询隔离文件信息结束通知
     let onComplete: () => void = () => {
       console.info(`Query completed`);
     };
     // 查询隔离文件信息错误报告
     let onError: (code: number, message: string) => void = (code: number, message: string) => {
       console.error(`Query error, error code: ${code}, message: ${message}`);
     }
     let queryCallback: virusRemediation.QueryCallback = {
       onQuery: onQuery,
       onComplete: onComplete,
       onError: onError
     };
     try {
       virusRemediation.queryIsolatedFiles(queryCallback);
     } catch (error) {
       console.error(`Failed to get isolated file. Error: ${error}`);
     }
   }
   ```
