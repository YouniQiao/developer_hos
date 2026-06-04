---
title: "聊天页-文件加密发送"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/chat_page_file_encryption-0000002424613385
---

## 场景介绍

聊天页-文件加密发送是社交通讯类应用中的典型场景之一。

本示例基于[文件管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)、[文件URI](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri)和[选择器](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker)实现从系统文件中选择文件发送或加密后再发送，点击已发送的加密文件可将文件保存到系统内。

## 效果预览

![](./img/b63f157f.png "点击放大")

## 实现思路

1. 若设备支持API达到20，将[DocumentSelectOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker#documentselectoptions)的属性isEncryptionSupported置为true，通过FileUtils的selectFile函数拉起支持加密功能的文件管理器。

   ```
   // ChatPage.ets
     @Builder
     menuBuilder(ic: Resource, text: Resource) {
       Column({ space: Constants.SPACE_8 }) {
         ...
       }
       .onClick(() => {
         if (this.resourceManager?.getStringSync(text.id) ===
         this.resourceManager?.getStringSync($r('app.string.file').id)) {
           if (this.currentAPIVersion && this.currentAPIVersion >= 19) {
             let documentSelectOptions = new picker.DocumentSelectOptions();
             documentSelectOptions.isEncryptionSupported = true;
             selectFile(this.context, documentSelectOptions, this.files);
           } else {...
           }
         }
       })
     }
   // FileUtils.ets
   export function selectFile(context: common.Context, documentSelectOptions: picker.DocumentSelectOptions, files:Array<FileInfo>) {...} // 选择一个文件
   export function copyIntoFile(srcDir: string, destFileUri: string): number {...}                    // 将选择的文件拷贝入应用沙箱
   export function preview(fileName: string, fileUri: string, context: Context) {...}                 // 预览文件
   export function creatFileInfo(documentSelectResult: string[], filesDir: string): FileInfo {...}    // 创建一个文件信息对象
   ```
2. 用[@CustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box)实现点击文件弹出“确认是否保存加密文件”的自定义弹窗，若确认，则通过[DocumentViewPicker.save](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker#save)保存加密文件到本地。

   ```
   // CustomDialog.ets
   @CustomDialog
   export struct SaveEncryptedFileDialog {
       ...                                                                                            // 判断是否保存加密文件
   }

   // FileUtilsNewFeatures.ets
   export function  saveDlpFile(clickedFileUri: string,context: common.Context) {                     // 保存加密文件
     let documentSaveOptions = new picker.DocumentSaveOptions();
     documentSaveOptions.fileSuffixChoices = ['.pdf.dlp', '.pdf', '.txt', '.txt.dlp','.doc','.docs', '.doc.dlp', '.docs.dlp','.xls','.xls.dlp', '.xlsx', '.xlsx.dlp'];
     ...
     documentViewPicker.save(documentSaveOptions).then((documentSaveResult: Array<string>) => {
       ...
     })
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

![](./img/db578ac8.png)

* 本示例仅运行在API Version 20 Release及以上版本时，展示文件加密功能。
* 点击聊天页下方“+”图标，选择“文件”，会拉起系统文件管理应用，点击下方“加密分享”按钮并输入华为账号后加密文件，点击“完成”按钮发送文件。点击发送出的文件，若文件是加密文件，将弹出弹窗确认“是否将文件保存到系统”，若选择“是”，将拉起系统文件管理应用保存文件；若不是加密文件，则跳转到预览页面。（备注：加密功能只支持文档类文件（包含格式：‘.txt’，‘.doc’，‘.docs’，‘.xls’，‘.xlsx’，‘.pdf’）；且本示例只能发送文档类文件，图片、视频、音频等媒体类文件暂不支持。）

## 工程目录

```
├──entry/src/main/ets                 // 代码区
│  ├──common
│  │  └──Constants.ets                // 常量
│  ├──components
│  │  └──CustomDialog.ets             // 自定义弹窗-保存加密文件
│  ├──entryability
│  │  └──EntryAbility.ets             // 程序入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──fileUtils
│  │  ├──FileInfo.ets                 // 文件信息
│  │  ├──FileUtils.ets                // 文件处理工具
│  │  └──FileUtilsNewFeatures.ets     // 文件处理工具-新特性相关
│  └──pages
│     └──ChatPage.ets                 // 聊天页
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[@ohos.file.fs（文件管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)

[@ohos.file.fileuri（文件URI）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fileuri)

[@ohos.file.picker（选择器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker)

[自定义弹窗(CustomDialog)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box)

## 代码下载

[聊天页-文件加密发送示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260507100639.23138533292221075613738685240617%3A20260604144430%3A2800%3AE3F141650EA8968D51F33B71B5C7645C6411072C53DB37A6C6B685D204676C6C.zip?needInitFileName=true)
