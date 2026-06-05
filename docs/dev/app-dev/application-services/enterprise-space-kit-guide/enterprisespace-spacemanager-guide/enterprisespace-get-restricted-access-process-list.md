---
displayed_sidebar: appDevSidebar
title: "获取不可访问后台用户数据的系统服务进程列表"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/enterprisespace-get-restricted-access-process-list
format: md
---


## 场景介绍

从6.0.1(21)开始，支持获取不可访问后台用户数据的系统服务进程列表的能力。

Enterprise Space Kit为应用提供获取通过接口[addRestrictedAccessBackgroundUserdataProcessList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#addrestrictedaccessbackgrounduserdataprocesslist)添加管控的系统服务进程列表的功能。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getrestrictedaccessbackgrounduserdataprocesslist)。

| 接口名 | 描述 |
| --- | --- |
| [getRestrictedAccessBackgroundUserdataProcessList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getrestrictedaccessbackgrounduserdataprocesslist)(userData: [UserDataEnum](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#userdataenum)): Promise\<ProcessConfigInfo[]\> | 获取不可访问后台用户数据的系统服务进程列表。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用接口[getRestrictedAccessBackgroundUserdataProcessList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getrestrictedaccessbackgrounduserdataprocesslist)，获取不可访问后台用户数据的系统服务进程列表，并且查看打印信息。

   ```
   const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
   try {
     const processConfigInfos: spaceManager.ProcessConfigInfo[] = await spaceManager.getRestrictedAccessBackgroundUserdataProcessList(userData);
     console.info(`Succeeded in getting restricted access background user data process list. process config infos: ${JSON.stringify(processConfigInfos)}`);
   } catch (err) {
     console.error(`Failed to get restricted access background user data process list. Code: ${err.code}, message: ${err.message}`);
   }
   ```
