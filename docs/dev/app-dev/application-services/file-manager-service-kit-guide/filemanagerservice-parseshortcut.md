---
displayed_sidebar: appDevSidebar
title: "解析文件快捷方式"
original_url: /docs/dev/app-dev/application-services/file-manager-service-kit-guide/filemanagerservice-parseshortcut
format: md
upstream_id: dev/app-dev/application-services/file-manager-service-kit-guide/filemanagerservice-parseshortcut
last_sync: 2026-06-07
sync_hash: 463bb648
---
从6.1.0(23)版本开始，新增支持解析文件快捷方式。

## 场景介绍

解析出指定快捷方式文件对应原文件的URI。常用在应用需要通过快捷方式文件打开原文件的场景。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| [parseShortcut](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/filemanagerservice-arkts-filemanagerservice#filemanagerserviceparseshortcut)(linkUri: string): Promise\<string\> | 根据快捷方式文件的URI解析出对应原文件的URI，并返回。使用Promise异步回调。 |

## 示例代码

1.导入文件管理服务模块及相关模块。

```
import { fileManagerService } from '@kit.FileManagerServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
```

2.根据指定快捷方式文件的URI解析出对应原文件的URI。

```
public static async getTargetUriByLinkUri() {
  // 示例代码linkUri表示快捷方式文件的URI，快捷方式文件的后缀为“.hlink”
  // 开发者应根据自己实际的URI进行开发，并确保对该文件有读写权限
  let linkUri: string = "file://docs/storage/Users/currentUser/Documents/1.jpg.hlink";
  try {
    let targetUri: string = await fileManagerService.parseShortcut(linkUri);
    console.info("targetUri is: " + targetUri);
  } catch (err) {
    let error: BusinessError = err as BusinessError;
    console.error("parse shortcut failed, errCode:" + error.code + ", errMessage:" + error.message);
  }
}
```
