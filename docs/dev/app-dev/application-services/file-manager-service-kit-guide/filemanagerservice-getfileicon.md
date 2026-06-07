---
displayed_sidebar: appDevSidebar
title: "获取文件图标"
original_url: /docs/dev/app-dev/application-services/file-manager-service-kit-guide/filemanagerservice-getfileicon
format: md
---


## 场景介绍

根据文件类型获取对应的文件图标。

## 接口说明

| 接口名 | 描述 |
| --- | --- |
| function [getFileIconSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/filemanagerservice-arkts-filemanagerservice#filemanagerservicegetfileiconsync)(fileType: string): string | Resource | 根据文件类型获取文件图标。 |
| function [getFileIcon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/filemanagerservice-arkts-filemanagerservice#filemanagerservicegetfileicon)(fileType: string): Promise\<string | Resource\> | 根据文件类型获取文件图标。使用Promise异步回调。 |

## 示例代码

1.导入文件管理服务模块及相关模块

```
import { fileManagerService } from '@kit.FileManagerServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { uniformTypeDescriptor } from '@kit.ArkData';
```

2.申请权限。使用获取文件图标接口时，需要在module.json5中声明申请接口所需的权限：ohos.permission.GET\_FILE\_ICON。具体指导可见[声明权限](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions)。

3.获取文件图标

```
@Entry
@Component
struct Index {
  @State fileIcon: string | Resource = '';

  private getFileIconByFileExtension(filenameExtension: string): void {
    try {
      let typeId: string = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension(filenameExtension);
      this.fileIcon = fileManagerService.getFileIconSync(typeId);
    } catch (error) {
      let err: BusinessError = error as BusinessError;
      console.error('getFileIconByFileExtension failed with err: ' + JSON.stringify(err));
    }
  }

  build() {
    RelativeContainer() {
      Column() {
        Image(this.fileIcon)
          .height(88)
          .border({ width: 1, radius: 6 })
        Button('Update FileIcon')
          .onClick(() => {
            // 以txt格式为例
            this.getFileIconByFileExtension('.txt');
          })
      }
    }
    .height('100%')
    .width('100%')
  }
}
```
