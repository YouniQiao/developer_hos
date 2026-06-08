---
displayed_sidebar: appDevSidebar
title: "删除文件到回收站"
original_url: /docs/dev/app-dev/application-services/file-manager-service-kit-guide/filemanagerservice-deletetotrash
format: md
upstream_id: dev/app-dev/application-services/file-manager-service-kit-guide/filemanagerservice-deletetotrash
last_sync: 2026-06-07
sync_hash: daad4f33
---
## 场景介绍

删除公共目录的文件到回收站。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [deleteToTrash](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/filemanagerservice-arkts-filemanagerservice#filemanagerservicedeletetotrash)(uri: string): Promise\<string\> | 删除指定文件到回收站，并返回文件删除到回收站后的uri。使用Promise异步回调。 |

## 示例代码

1.导入文件管理服务模块及相关模块

```
import { fileManagerService } from '@kit.FileManagerServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
```

2.删除指定文件到回收站

```
async function deleteFile() {
  // 以内置存储目录为例
  // 示例代码targetUri表示Download目录下文件
  // 开发者应根据自己实际获取的uri进行开发，并确保对该文件有读写权限
  let targetUri: string = "file://docs/storage/Users/currentUser/Download/1.txt";
  try {
    let trashUri: string = await fileManagerService.deleteToTrash(targetUri);
    console.info("trashUri: " + trashUri);
  } catch (err) {
    let error: BusinessError = err as BusinessError;
    console.error("delete failed, errCode:" + error.code + ", errMessage:" + error.message);
  }
}
```
