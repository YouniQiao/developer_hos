---
displayed_sidebar: appDevSidebar
title: "设置工作空间信息"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-set-workspace-info
format: md
---


## 场景介绍

Enterprise Space Kit为应用提供设置工作空间信息的能力。在企业初始化阶段，设置工作空间信息，方便企业绑定域账号。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspaceinfo)。

| 接口名 | 描述 |
| --- | --- |
| [setWorkspaceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspaceinfo)(workspaceId: number, domainInfo: [WorkspaceDomainInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#workspacedomaininfo)): Promise\<void\> | 设置工作空间信息。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[setWorkspaceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspaceinfo)接口，设置工作空间信息，并且查看打印信息。

   ```
   const workspaceId: number = 100;
   const domainInfo: spaceManager.WorkspaceDomainInfo = {
     domain: 'test1',
     workspaceName: 'test2',
     accountId: 'test3',
     isAuthenticated: false,
     serverConfigId: 'test4',
     enterpriseWorkspaceName: 'default'
   };

   try {
     await spaceManager.setWorkspaceInfo(workspaceId, domainInfo);
     console.info('Succeeded in setting workspace info');
   } catch (err) {
     console.error(`Failed to set workspace info. Code: ${err.code}, message: ${err.message}`);
   }
   ```
