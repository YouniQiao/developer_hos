---
displayed_sidebar: appDevSidebar
title: "查询工作空间策略"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-get-workspace-policy
format: md
---


## 场景介绍

从6.0.2(22)开始，支持查询工作空间策略的能力。

Enterprise Space Kit为应用提供查询工作空间策略的能力。从6.0.2(22)版本开始支持深度冻结策略“lockdown”，从6.1.0(23)版本开始支持个人空间创建引导页展示策略“spaceguide”。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getworkspacepolicy)。

| 接口名 | 描述 |
| --- | --- |
| [getWorkspacePolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getworkspacepolicy)(key: string, workspaceId?: number): Promise\<number\> | 查询工作空间策略并返回结果。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块和相关依赖模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用接口[getWorkspacePolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getworkspacepolicy)，查询空间策略，并且查看打印信息。

   ```
   const key: string = 'lockdown';
   const workspaceId: number = 100;
   try {
     const value: number = await spaceManager.getWorkspacePolicy(key, workspaceId);
     console.info(`Succeeded in getting workspace policy. value: ${value}`);
   } catch (err) {
     console.error(`Failed to get workspace policy. Code: ${err.code}, message: ${err.message}`);
   }
   ```
