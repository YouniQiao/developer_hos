---
title: "文件下载管理"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/agent_download_control-0000002262990970
---

## 场景介绍

文件下载管理是各类应用中高频使用场景之一，如用户需要将网络文件下载至本地并进行管理。

本示例通过[@ohos.request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-request)的agent模块下载网络文件，使用[@ohos.file.fs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)管理已下载文件。

## 效果预览

![](./img/3e70894c.gif "点击放大")

## 实现思路

1. 使用agent模块创建与管理下载任务，根据任务状态定义不同交互动作。
2. 使用[@ohos.file.fs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)构建文件管理工具类，实现获取文件参数、删除文件等功能。

```
// 定义下载任务状态
@State @Watch('statusChange') status = Constants.STATUS_PREPARE;
// 根据任务状态变化切换交互图标
statusChange();
Image()
  .onClick(() => {
    // 根据任务状态变化切换点击处理逻辑
    this.fileOperate();
  });

fileOperate() {
  switch (this.status) {
    // 准备状态下进行点击，调用agent接口开始下载并更新任务状态
    case Constants.STATUS_PREPARE:
      this.status = Constants.STATUS_DOWNLOADING;
      this.start();
      break;
    // 下载中、暂停状态下分别调用agent接口暂停、重启方法
    // ...
    // 已完成状态下进行点击，调用FileUtil类方法清除文件
    case Constants.STATUS_FINISH:
      fileUtils.cleanFileByName(this.fileName);
      break;
    // ...
  };
};
// 查看下载文件页面调用FileUtil类方法获取已下载文件
this.fileList = fileUtils.listFiles();
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取网络权限：[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)。

## 工程目录

```
├──entry/src/main/ets                    // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──components
│  │  ├──DownloadedFile.ets              // 已下载文件组件
│  │  └──FileItem.ets                    // 文件下载任务组件
│  ├──constant
│  │  └──Constants.ets                   // 常量
│  ├──model
│  │  └──FileModel.ets                   // 文件模型
│  ├──pages
│  │  ├──DownloadedFilePage.ets          // 查看已下载文件页面
│  │  └──DownloadFilePage.ets            // 文件下载管理页面
│  └──utils
│     ├──AppRouter.ets                   // 路由工具
│     └──FileUtil.ets                    // 文件管理工具
└──entry/src/main/resources              // 应用资源目录
```

## 参考文档

[@ohos.request（上传下载）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-request)

[@ohos.file.fs（文件管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)

## 代码下载

[文件下载管理示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100038.15580328449787218857877533198160%3A50001231000000%3A2800%3A6C143E3D7BEFDE8F888909D473D7E935EAD613C5372FDE2C32A7D90CB412226C.zip?needInitFileName=true)
