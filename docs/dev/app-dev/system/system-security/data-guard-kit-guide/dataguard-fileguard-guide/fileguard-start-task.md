---
displayed_sidebar: appDevSidebar
title: "启动文件扫描任务"
original_url: /docs/dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-start-task
format: md
upstream_id: dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-fileguard-guide/fileguard-start-task
last_sync: 2026-06-07
sync_hash: c3b51f97
---
## 场景介绍

Enterprise Data Guard Kit为应用提供公共路径和指定目录的扫描能力，获取对应目录下的文件列表。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard)。

| 接口名 | 描述 |
| --- | --- |
| [startFileScanTask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#startfilescantask)(type: [CommonDirScanType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#commondirscantype), callback: [ScanFileCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#scanfilecallback), batchNum?: number): void | 通过Callback的方式，扫描公共目录并返回结果。 |
| [startFileScanTask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#startfilescantask-1)(path: string, callback: [ScanFileCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#scanfilecallback), batchNum?: number): void | 通过Callback的方式，扫描指定目录并返回结果。 |

## 开发步骤

1. 导入模块。

   ```
   import { fileGuard } from '@kit.EnterpriseDataGuardKit';
   ```
2. 初始化[FileGuard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-fileguard#fileguard)对象guard，并且声明扫描结果回调函数。

   * 按照文件类型扫描公共空间文件，查看打印结果。

     ```
     function startFileScanTaskUnderCommonDir() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let onReceiveFileList: (files: string[]) => void = (files: Array<string>) => {
         files.forEach((value: string, index: number) => {
           console.info(`Succeeded in getting file: ${value}.`);
         })
       };
       let onCompleteScanTask: (count: number) => void = (count: number) => {
         console.info(`Succeeded in getting count: ${count}.`);
       };
       let scanFileCallback: fileGuard.ScanFileCallback = {
         onReceiveFileList: onReceiveFileList,
         onTaskCompleted: onCompleteScanTask
       };
       guard.startFileScanTask(fileGuard.CommonDirScanType.MEDIA_ONLY, scanFileCallback);
     }
     ```
   * 扫描公共空间指定路径下的文件，查看打印结果。

     ```
     function startFileScanTaskUnderSpecifiedDir() {
       let guard: fileGuard.FileGuard = new fileGuard.FileGuard();
       let path: string = '/data/service/el2/test';
       let onReceiveFileList: (files: string[]) => void = (files: Array<string>) => {
         files.forEach((value: string, index: number) => {
           console.info(`Succeeded in getting file: ${value}.`);
         })
       };
       let onCompleteScanTask: (count: number) => void = (count: number) => {
         console.info(`Succeeded in getting count: ${count}.`);
       };
       let scanFileCallback: fileGuard.ScanFileCallback = {
         onReceiveFileList: onReceiveFileList,
         onTaskCompleted: onCompleteScanTask
       };
       guard.startFileScanTask(path, scanFileCallback);
     }
     ```
