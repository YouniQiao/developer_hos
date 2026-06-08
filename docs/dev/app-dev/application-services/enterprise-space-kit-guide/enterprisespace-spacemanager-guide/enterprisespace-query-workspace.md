---
displayed_sidebar: appDevSidebar
title: "查询工作空间"
original_url: /docs/dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-query-workspace
format: md
upstream_id: dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-query-workspace
last_sync: 2026-06-07
sync_hash: ebad525f
upstream_hash: 44a4e3f0c633
---

## 场景介绍

Enterprise Space Kit为应用提供查询工作空间信息的能力。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#queryworkspace)。

| 接口名 | 描述 |
| --- | --- |
| [queryWorkspace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#queryworkspace)(queryFlag: [QueryType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#querytype)): Promise\<WorkspaceInfo[]\> | 查询工作空间信息并返回结果。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[queryWorkspace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#queryworkspace)接口，查询工作空间，并且查看打印信息。

   ```
   const queryFlag: spaceManager.QueryType = spaceManager.QueryType.ALL;
   try {
     const spaces: spaceManager.WorkspaceInfo[] = await spaceManager.queryWorkspace(queryFlag);
     console.info(`Succeeded in querying workspace` + JSON.stringify(spaces));
   } catch (err) {
     console.error(`Failed to query workspace. Code: ${err.code}, message: ${err.message}`);
   }
   ```
