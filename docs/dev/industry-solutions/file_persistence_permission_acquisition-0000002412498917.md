---
title: "批量文件读写权限持久化"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/file_persistence_permission_acquisition-0000002412498917
---

## 场景介绍

批量文件读写权限持久化是各类应用中的高频使用场景之一，如用户批量选择文件导入并完成编辑后，若需要再次编辑，可在历史记录中选择并打开。

本示例使用[DocumentViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker#documentviewpicker)导入批量文件，基于[@ohos.fileshare](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fileshare)进行文件持久化授权，实现后续访问文件时无需再次拉起Picker进行选择授权，可直接读写文件并刷新最近访问文件列表。

## 效果预览

![](./img/05830056.png "点击放大")

## 实现思路

1. 使用[DocumentViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker#documentviewpicker)选择文件。

   ```
   let documentSelectOptions = new picker.DocumentSelectOptions()
   documentSelectOptions.fileSuffixFilters = ['.txt', '.pdf', '.docx', '.doc', '.xlsx', '.pptx', 'rtf', '.html',
   '.htm', '.md', '.json', '.epub', '.caj', '.zip'];
   let documentPicker = new picker.DocumentViewPicker()
   pathArray = await documentPicker.select(documentSelectOptions)
   ```
2. 对被选中的文件，进行[持久化授权](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/file-persistpermission)。

   ```
   let policies: Array<fileShare.PolicyInfo> = this.getFilePolicyInfo(pathArray)
   try {
     await fileShare.persistPermission(policies)
     if (this.dataPreferences) {
       this.dataPreferences.clearSync()
       this.dataPreferences.putSync('pathArray', pathArray)
       this.dataPreferences.flushSync()
     }
   } catch (err) {
     this.dataPreferences?.clearSync()
   }
   ```
3. 打开最近访问文件列表时，只需通过对preferences首选项中的文件进行激活授权，即可实现后续文件读写并刷新最近访问文件列表。

   ```
   let uris = await getPersistPermissionUtils().getFilePathExist(context)
   await getPersistPermissionUtils().activatePermissionExample(uris)
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取持久化访问文件Uri权限：[ohos.permission.FILE\_ACCESS\_PERSIST](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionfile_access_persist)。

![](./img/100183fa.png)

需采用受限权限申请方式申请使用该权限。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──common
│  │  └──Constants.ets
│  │  └──FileUtil.ets
│  │  └──Logger.ets
│  │  └──PersistPermissionUtils.ets
│  ├──components
│  │  └──FileItem.ets
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──FileDataSource.ets
│  │  └──FileModel.ets
│  │──pages
│  │  ├──Index.ets                        // 首页
│  │  └──QueryFilePage.ets
│  └──taskpool
│     ├──base
│     │  ├──BaseTask.ets
│     │  ├──TaskExecutor.ets
│     │  └──TaskManager.ets
│     ├──GenerateThumbnailTask.ets
│     ├──ImportFileTask.ets
│     └──QuerySandBoxFile.ets
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[授权持久化](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/file-persistpermission)

[@ohos.fileshare（文件分享）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fileshare)

[@ohos.file.picker（选择器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-picker)

## 代码下载

[批量文件读写权限持久化示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260311161407.63066354175078654734711151406670%3A20260604160255%3A2800%3A3FDB987D1D78B2F41E15780DAEA5673D089C41D9BDF9C94FECBCA2E29449F8C3.zip?needInitFileName=true)
