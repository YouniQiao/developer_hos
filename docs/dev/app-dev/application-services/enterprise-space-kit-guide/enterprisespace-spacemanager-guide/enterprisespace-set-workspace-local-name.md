---
displayed_sidebar: appDevSidebar
title: "设置空间本地名称"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-set-workspace-local-name
format: md
---


## 场景介绍

从6.1.0(23)开始，支持设置工作空间本地名称的能力。

Enterprise Space Kit为应用提供设置工作空间本地名称（即工作空间的账号名称），企业工作空间和个人工作空间都可设置本地名称。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspacelocalname)。

| 接口名 | 描述 |
| --- | --- |
| [setWorkspaceLocalName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspacelocalname)(localName: string, workspaceId?: number): Promise\<void\> | 设置工作空间本地名称。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[setWorkspaceLocalName](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspacelocalname)接口，设置工作空间本地名称，并且查看打印信息。

   ```
   const localName: string = 'localName'; // 设置的工作空间的本地名称。
   const workspaceId: number = 100; // 工作空间ID。
   try {
     await spaceManager.setWorkspaceLocalName(localName, workspaceId);
     console.info('Succeeded in setting workspace local name');
   } catch (err) {
     console.error(`Failed to set workspace local name. Code: ${err.code}, message: ${err.message}`);
   }
   ```
