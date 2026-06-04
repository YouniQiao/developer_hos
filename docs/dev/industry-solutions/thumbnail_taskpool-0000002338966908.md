---
title: "taskpool批量图片加载"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/thumbnail_taskpool-0000002338966908
---

## 场景介绍

taskpool批量图片加载是便捷生活类应用的高频使用场景之一，如用户浏览包含大量图片或视频的长列表时，需快速加载多张缩略图以保证流畅度。

本示例使用[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)导入图片，基于[@ohos.taskpool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool)为应用程序提供多线程运行环境，生成缩略图并刷新列表展示。在运行过程中，对多线程任务进行管理，合理分配任务资源。

## 效果预览

![](./img/b6af8961.png "点击放大")

## 实现思路

1. 使用[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)获取图片，执行任务导入图片。

   ```
   let photoPicker = new photoAccessHelper.PhotoViewPicker();
   photoPicker.select(photoSelectOptions).then((photoSelectResult: photoAccessHelper.PhotoSelectResult) => {
     let task: ImportFileTask =
       new ImportFileTask(this.getUIContext().getHostContext()?.filesDir || '', photoSelectResult.photoUris, () => {
         this.getUIContext().getPromptAction().showToast({ message: $r('app.string.import_success') });
       });
     TaskManager.getInstance().executeTask(task);
   })
   ```
2. 在查询页面初始化时，调用[taskpool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool)执行缩略图生成展示任务。

   ```
   aboutToAppear(): void {
     if (!this.item) {
       return
     }
     this.thumbnail = this.item.thumbnail
     this.getShowInfo(this.item?.showTime, this.item?.showSize)
     if (this.thumbnail === undefined) {
      // 沙箱生成缩略图。
       let task = new GenerateThumbnailTask(this.item, (result: FileModel | undefined) => {
         if (result === undefined) {
           return;
         }
         // 导入缩略图。
         if (this.item) {
           this.item.thumbnail = result.thumbnail;
         }
         this.thumbnail = result.thumbnail;
       })
       // ...
     }
   }
   ```
3. 对执行的多线程任务进行管理，设置最大并发线程及最大等待线程。

   ```
   // 设置最大并发线程为3，控制并发量，防止资源耗尽。
   // 设置最大等待线程为1000。后插入的先执行，如果达到最大数就将前面的舍弃，缓冲任务请求，避免任务丢失。
   TaskManager.getInstance().execute(task, 3, 1000)
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets              // 代码区
│  ├──components
│  │  └──FileItem.ets              // 图片组件
│  ├──consts
│  │  └──Consts.ets
│  ├──entryability
│  │  └──EntryAbility.ets          // 程序入口类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──FileDataSource.ets
│  │  └──FileModel.ets
│  ├──pages
│  │  ├──QueryFilePage.ets         // 文件查询页面
│  │  └──ThumbnailPage.ets
│  ├──taskpool                     // taskpool组件
│  │  ├──base
│  │  │  ├──BaseTask.ets
│  │  │  ├──TaskExecutor.ets
│  │  │  └──TaskManager.ets
│  │  ├──GenerateThumbnailTask.ets
│  │  ├──ImportFileTask.ets
│  │  └──QuerySandBoxFile.ets
│  └──utils
│     ├──FileUtil.ets
│     └──Logger.ets
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[PhotoViewPicker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoviewpicker)

[@ohos.taskpool（启动任务池）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool)

## 代码下载

[taskpool批量图片加载示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260408170937.30413368924052021405528643548110%3A20260604122401%3A2800%3A8242B682F3F4E9752520E35C286F2C46A246D54F3C81B361D10E728A113D5760.zip?needInitFileName=true)
