---
title: "PDF预览模式下添加或删除批注"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/add_delete_annotations_in_pdf_preview-0000002384668918
---

## 场景介绍

PDF预览模式下添加或删除批注是综合办公类应用中的高频使用场景之一。

本示例通过[@ohos.file.fs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)文件管理获取原始PDF文件字节流，基于[PdfView](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfview-component#section724521414201)组件实现原始PDF文件加载，支持在PDF预览模式下添加、删除批注并保存。

## 效果预览

![](./img/a4e35b6c.png "点击放大")

## 实现思路

1. 通过[@ohos.file.fs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)获取原始PDF文件字节流，通过[PdfView](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfview-component#section724521414201)组件加载原始PDF文件。
2. 初始化PDF各类监听事件，并用数组存储每页手动批注数量，当保存文件时写入数据库。
3. 创建[@ohos.data.relationalStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore)关系型数据库，用于保存每个页面的原始批注和手动批注。
4. 获取原始PDF每页批注数量，并存入数据库中，手动批注数量初始化为0，后续删除个人添加的批注时，从此索引开始。
5. 保存所有手动批注时，将数组记录的手动批注数据全部保存至数据库。
6. 删除所有批注时，查询数据库中手动批注不为0的数据并进行批注删除操作，删除完成后更新数据库。
7. 删除和保存操作需重置手动批注记录数组。

## 约束与限制

* 本示例支持API Version 17 Release及以上版本。
* 本示例支持HarmonyOS 5.0.5 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 5.0.5 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                                   // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──Index.ets                                      // 入口界面
│  └──toolability
│     └──PdfKitAbility.ets                              // pdf和rdb能力相结合的接口
└──entry/src/main/resources                             // 应用资源目录
```

## 参考文档

[@ohos.file.fs（文件管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)

[PdfView（PDF预览组件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/pdf-arkts-pdfview-component)

[@ohos.data.relationalStore模块描述](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore)

## 代码下载

[PDF预览模式下添加或删除批注示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310113134.33701561515330383028663609752065%3A20260604130658%3A2800%3A4FDAD3971F4B12A430CF337FED91884CE117FBBD98A4445F60950764E61563B7.zip?needInitFileName=true)
