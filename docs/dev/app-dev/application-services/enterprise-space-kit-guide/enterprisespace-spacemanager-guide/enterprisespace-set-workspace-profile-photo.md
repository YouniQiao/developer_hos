---
displayed_sidebar: appDevSidebar
title: "设置工作空间资料照片"
original_url: /docs/dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-set-workspace-profile-photo
format: md
---


## 场景介绍

Enterprise Space Kit为应用提供设置工作空间资料照片的能力。所有工作空间都可以设置资料照片。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspaceprofilephoto)。

| 接口名 | 描述 |
| --- | --- |
| [setWorkspaceProfilePhoto](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspaceprofilephoto)(workspaceId: number, photo: string): Promise\<void\> | 设置工作空间资料照片。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[setWorkspaceProfilePhoto](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspaceprofilephoto)接口，设置工作空间资料照片，并且查看打印信息。

   ```
   const workspaceId: number = 100;
   const photo: string = '{"type":0,"defaultImg":"data:image/png;base64,iVBO******Jggg==}';
   try {
     await spaceManager.setWorkspaceProfilePhoto(workspaceId, photo);
     console.info('Succeeded in setting workspace profile photo');
   } catch (err) {
     console.error(`Failed to set workspace profile photo. Code: ${err.code}, message: ${err.message}`);
   }
   ```
