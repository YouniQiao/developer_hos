---
title: "批量下载保存图片和视频"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/batch_download_images_and_videos-0000002464972285
---

## 场景介绍

批量下载图片和视频并保存至本地是实用工具类应用的高频使用场景之一。

本示例基于[@ohos.taskpool](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool)和[@ohos.net.http](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http)实现图片和视频资源批量下载的功能，[PhotoAccessHelper](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)实现将资源批量保存至本地的功能。

## 效果预览

![](./img/b74de16a.gif "点击放大")

## 实现思路

1. 在输入框中填入所需要下载的资源URL集合，并以英文分号分隔，然后点击“下载并保存”按钮，将资源URL进行分割。

   ```
   let str = this.content.replaceAll('\n', '').replaceAll(' ', '');
   let urls = str.split(';');
   urls = urls.filter((url) => url !== '');
   ```
2. URL分割完成后，对其进行分组，并创建相应的下载任务DownloadTask，然后通过[taskpool.execute](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool#taskpoolexecute)执行下载任务。

   ```
   let result: string[][] = [];
   for (let i = 0; i < uris.length; ) {
     result.push(uris.splice(i, i + CommonConstant.ONE_GROUP_COUNT));
   }
   this.taskState = new Array(result.length);
   this.isInit = true;
   this.taskState.fill(false);
   // 构建多个下载任务
   result.forEach((groupValue: string[], index: number) => {
     let downloadTask = new DownloadTask('DownloadTask', (resultModels: FileModel[]) => {
       // 下载任务执行完成后，获取其下载到的数据
       this.fileModels.push(...resultModels);
       this.taskState[index] = true;
       downloadTask.terminateTask();
     }, groupValue, this.filesDir);
     // 执行下载任务
     TaskExecutor.getInstance().execute<void>(downloadTask);
   });
   ```
3. 执行下载任务时通过[HttpRequest.request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http#request-2)发起下载请求，获取对应资源数据。

   ```
   const RESPONSE = await http.createHttp()
     .request(url, {
       method: http.RequestMethod.GET,
       maxLimit: CommonConstant.MAX_DOWNLOAD_LIMIT,
       expectDataType: http.HttpDataType.ARRAY_BUFFER,
       connectTimeout: CommonConstant.CONNECT_TIMEOUT,
       readTimeout: CommonConstant.READ_TIMEOUT
     });
   if (RESPONSE.responseCode === http.ResponseCode.OK) {
     // 获取响应数据实体，获取不到时代表当前响应内容不满足要求或者请求出错
     let respData = getRespData(url, RESPONSE);
     if (respData) {
       // 保存数据到沙箱文件
       saveDownloadFile(respData, storeDir);
       results.push(respData);
     }
   }
   ```
4. 所有下载任务执行完成后，将下载的图片和视频资源集中，通过[photoAccessHelper.showAssetsCreationDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper#showassetscreationdialog12)进行批量保存。

   ```
   this.saveUris = this.fileModels.map((fileModel) => {
     let uri = fileUri.getUriFromPath(fileModel.fileDir);
     fileModel.fileDir = uri;
     return uri;
   });
   this.configs = this.fileModels.map((fileModel) => {
     let photoCreationConfig: photoAccessHelper.PhotoCreationConfig = {
       title: fileModel.fileName,
       fileNameExtension: fileModel.fileExtension,
       photoType: fileModel.type === MediaType.IMAGE ? photoAccessHelper.PhotoType.IMAGE :
         photoAccessHelper.PhotoType.VIDEO
     };
     return photoCreationConfig;
   });
   // 保存图片和视频至本地
   this.saveToAlbum(context);
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取Internet网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──common
│  │  ├──CommonConstant.ets             // 通用常量
│  │  └──CommonEnum.ets                 // 枚举
│  ├──entryability
│  │  └──EntryAbility.ets               // 程序入口类
│  ├──model
│  │  └──DataModel.ets                  // 数据模型
│  ├──pages
│  │  └──MainPage.ets                   // 首页
│  ├──taskpool
│  │  ├──DownloadTask.ets               // 下载任务
│  │  ├──ProcessFunction.ets            // 处理函数
│  │  └──TaskExecutor.ets               // 任务执行器
│  └──utils
│     └──Logger.ets                     // 日志工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[@ohos.taskpool（启动任务池）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-taskpool)

[@ohos.net.http（数据请求）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http)

[Interface(PhotoAccessHelper)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-photoaccesshelper-photoaccesshelper)

## 代码下载

[批量下载保存图片和视频示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101800.39070452928476820104221437158884%3A50001231000000%3A2800%3AC6D5D8E4D54A2236BA197E66A40779F1D9DFEF4C42E6094057505737B87EE99B.zip?needInitFileName=true)
