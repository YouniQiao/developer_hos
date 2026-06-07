---
displayed_sidebar: appDevSidebar
title: "删除系统服务进程不可访问后台用户数据路径列表"
original_url: /docs/dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-del-restricted-access-process-list
format: md
---


## 场景介绍

从6.0.1(21)开始，支持删除系统服务进程不可访问后台用户数据路径列表的能力。

Enterprise Space Kit为应用提供删除系统服务进程不可访问后台用户数据路径列表的功能。用于应用删除管控系统服务进程时的场景。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#deleterestrictedaccessbackgrounduserdataprocesslist)。

| 接口名 | 描述 |
| --- | --- |
| [deleteRestrictedAccessBackgroundUserdataProcessList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#deleterestrictedaccessbackgrounduserdataprocesslist)(userData: [UserDataEnum](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#userdataenum)), processName: string): Promise\<void\> | 删除系统服务进程不可访问后台用户数据路径列表。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用接口[deleteRestrictedAccessBackgroundUserdataProcessList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#deleterestrictedaccessbackgrounduserdataprocesslist)，删除系统服务进程不可访问后台用户数据路径列表，并且查看打印信息。

   ```
   const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
   const processName: string = 'testSa';
   try {
     await spaceManager.deleteRestrictedAccessBackgroundUserdataProcessList(userData, processName);
     console.info(`Succeeded in deleting restricted access background user data process list`);
   } catch (err) {
     console.error(`Failed to delete restricted access background user data process list. Code: ${err.code}, message: ${err.message}`);
   }
   ```
