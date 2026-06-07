---
displayed_sidebar: appDevSidebar
title: "取消订阅空间事件"
original_url: /docs/dev/app-dev/application-services/enterprise-space-kit-guide/enterprisespace-spacemanager-guide/enterprisespace-unsubscribe-event
format: md
---


## 场景介绍

Enterprise Space Kit为应用提供取消订阅空间事件的能力，支持应用在特定场景下灵活管理空间事件的订阅状态。例如，当应用需要关闭、某个功能模块不再使用时，可通过调用该方法主动取消对特定空间事件的订阅。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#unsubscribeevent)。

| 接口名 | 描述 |
| --- | --- |
| [unsubscribeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#unsubscribeevent)(subscribeId:number): void | 取消订阅空间事件，在相关事件触发时，不再通知应用侧。 |

## 开发步骤

1. 导入Enterprise Space Kit模块。

   ```
   import { spaceManager } from '@kit.EnterpriseSpaceKit';
   ```
2. 调用[unsubscribeEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/enterprisespace-spacemanager#unsubscribeevent)接口，取消订阅空间事件，并查看打印信息。

   ```
   const subscribeId: number = 100;
   try {
     spaceManager.unsubscribeEvent(subscribeId);
     console.info('Succeeded in unsubscribing event');
   } catch (err) {
     console.error(`Failed to unsubscribe event. Code: ${err.code}, message: ${err.message}`);
   }
   ```
