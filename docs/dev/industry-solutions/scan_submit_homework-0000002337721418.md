---
title: "扫描提交作业"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/scan_submit_homework-0000002337721418
---

## 场景介绍

扫描提交作业是教育类应用的高频使用场景之一，如学生需要将纸质作业以拍照上传的方式提交给老师批阅。

本示例基于[DocumentScanner](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-document-scanner)实现作业扫描功能，即用手机拍摄文档并转换为高清扫描件，支持PDF格式文档保存、预览。

## 效果预览

![](./img/5104391f.png "点击放大")

## 实现思路

利用[DocumentScanner](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-document-scanner)扫描文档并生成PDF文件，若PDF文件存在，则拷贝到目标路径，并更新文件存在状态。扫描提交成功后，返回上一页并更新作业提交状态。

```
// 扫描配置初始化
this.docScanConfig.saveOptions = [SaveOption.PDF]; // 保存为PDF
this.docScanConfig.maxShotCount = 30;              // 限制最大拍摄30张
// 扫描结果回调处理
DocumentScanner({
  scannerConfig: this.docScanConfig,
  onResult: (code: number, saveType: SaveOption, uris: string[]) => {
    if (code === 0 && this.pageParam) {
      readWriteFile(uris[0], this.pageParam.homeworkDetail.pdfFileUri); // 文件复制
      this.pageParam.pdfFileExist = true; // 更新文件存在状态
    }
  }
})
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──common
│  │  └─Constants.ets                         // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  ├──DocScan.ets                          // 文档扫描
│  │  ├──MainPage.ets                         // 主页
│  │  ├──PdfPreview.ets                       // PDF预览
│  │  └──SubmitHomeworkDetail.ets             // 作业提交详情操作页
│  ├──util
│  │  └──HomeworkDetail.ets                   // 作业数据与工具函数
│  └──views
│     └──HomeworkListView.ets                 // 作业组件
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[DocumentScanner（文档扫描控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-document-scanner)

## 代码下载

[扫描提交作业示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310135928.66802028716348039885835345041867%3A20260604124942%3A2800%3A251681DFCBEBDF017F4660E05119CDCD177E6BEEB6C07DB347AD8D0F9E147A16.zip?needInitFileName=true)
