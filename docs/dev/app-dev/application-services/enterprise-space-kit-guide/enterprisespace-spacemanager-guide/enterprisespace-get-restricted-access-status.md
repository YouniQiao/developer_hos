---
displayed_sidebar: appDevSidebar
title: "获取系统服务进程不可访问的后台用户数据状态"
original_url: /docs/dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-get-restricted-access-status
format: md
---


## 场景介绍

从6.0.1(21)开始，支持获取系统服务进程不可访问的后台用户数据状态的能力。

Enterprise Space Kit为应用提供获取系统服务进程管控不可访问后台用户数据的状态，用于确认系统服务进程是否被管控访问后台用户数据。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getrestrictedaccessbackgrounduserdatastatus)。

| 接口名 | 描述 |
| --- | --- |
| [getRestrictedAccessBackgroundUserdataStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getrestrictedaccessbackgrounduserdatastatus)(userData: [UserDataEnum](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#userdataenum)): Promise\<boolean\> | 获取系统服务进程管控不可访问后台用户数据的状态。使用Promise异步回调。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用接口[getRestrictedAccessBackgroundUserdataStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#getrestrictedaccessbackgrounduserdatastatus)，提供获取系统服务进程管控不可访问后台用户数据的状态，并且查看打印信息。

   ```
   const userData: spaceManager.UserDataEnum = spaceManager.UserDataEnum.ENTERPRISE;
   try {
     const status: boolean = await spaceManager.getRestrictedAccessBackgroundUserdataStatus(userData);
     console.info(`Succeeded in getting restricted access background user data status. status: ${status}`);
   } catch (err) {
     console.error(`Failed to get restricted access background user data status. Code: ${err.code}, message: ${err.message}`);
   }
   ```
