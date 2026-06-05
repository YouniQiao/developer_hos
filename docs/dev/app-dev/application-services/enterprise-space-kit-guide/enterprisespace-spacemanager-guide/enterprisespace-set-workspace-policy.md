---
displayed_sidebar: appDevSidebar
title: "设置工作空间策略"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-set-workspace-policy
format: md
---


## 场景介绍

从6.0.2(22)开始，支持设置工作空间策略的能力。

Enterprise Space Kit为应用提供设置工作空间策略的能力。从6.0.2(22)版本开始支持深度冻结策略“lockdown”，从6.1.0(23)版本开始支持个人空间创建引导页展示策略“spaceguide”。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspacepolicy)。

| 接口名 | 描述 |
| --- | --- |
| [setWorkspacePolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspacepolicy)(key: string, value: number, workspaceId?: number): Promise\<void\> | 设置工作空间策略。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块和相关依赖模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用接口[setWorkspacePolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#setworkspacepolicy)，设置空间策略，并且查看打印信息。

   ```
   const key: string = 'lockdown';
   const value: spaceManager.LockdownModePolicy = spaceManager.LockdownModePolicy.OFF;
   const workspaceId: number = 100;
   try {
     await spaceManager.setWorkspacePolicy(key, value, workspaceId);
     console.info(`Succeeded in setting workspace policy.`);
   } catch (err) {
     console.error(`Failed to set workspace policy. Code: ${err.code}, message: ${err.message}`);
   }
   ```
