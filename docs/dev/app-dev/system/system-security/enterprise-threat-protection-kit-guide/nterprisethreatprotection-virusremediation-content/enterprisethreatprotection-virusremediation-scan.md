---
title: "启动应用目录文件扫描任务"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisethreatprotection-virusremediation-scan
format: md
---


## 基本概念

启动应用目录文件扫描功能帮助安全防护类应用在开始扫描前获取应用文件列表。

## 场景介绍

由于应用沙箱限制，安全防护类应用无法获取设备上安装应用的相关文件。启动应用目录文件扫描任务可帮助安全防护类应用获取应用安装包目录与应用el2级别加密数据目录下的文件列表，为威胁分析扫描和处置奠定基础。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#scanbundlefiles)。

| 接口 | 描述 |
| --- | --- |
| scanBundleFiles(type: [ScanTargetType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#scantargettype), callback: [ScanCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#scancallback), bundleName?: string, batchNum?: number): void | 扫描应用安装包目录或应用el2级别加密数据目录并返回指定目录下的路径列表。 |

## 开发步骤

1. 导入模块。

   ```
   import { virusRemediation } from '@kit.EnterpriseThreatProtectionKit';
   ```
2. 通过声明扫描结果回调scanFileCallback，并调用接口[scanBundleFiles](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisethreatprotection-virusremediation-interface#scanbundlefiles)，实现目标目录下文件列表的获取。bundleName参数用于指定要扫描的应用包名，不填则返回所有允许扫描的应用的文件。

   ```
   // 按照目标类型扫描对应目录的文件，查看打印结果
   function startFileScanTask() {
     // 接收扫描结果的回调函数，用于处理扫描得到的文件路径列表
     let onReceive: (paths: string[]) => void = (files: Array<string>) => {
       files.forEach((value: string, index: number) => {
         console.info(`Succeeded in getting file: ${value}.`);
       })
     };
     // 扫描完成通知回调
     let onComplete: () => void = () => {
       console.info(`Scan completed`);
     };
     // 扫描错误报告回调
     let onError: (code: number, message: string) => void = (code: number, message: string) => {
       console.error(`Scan error, error code: ${code}, message: ${message}`);
     }
     let scanFileCallback: virusRemediation.ScanCallback = {
       onReceive: onReceive,
       onComplete: onComplete,
       onError: onError
     };
     // 调用 scanBundleFiles 方法扫描应用安装包目录下的文件，并通过 scanFileCallback 回调处理结果
     try {
       virusRemediation.scanBundleFiles(virusRemediation.ScanTargetType.BUNDLE, scanFileCallback);
     } catch (error) {
       console.error(`Failed to scan bundle files. Error: ${error}`);
     }
   }
   ```
