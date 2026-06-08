---
displayed_sidebar: appDevSidebar
title: "迁移模式设置"
original_url: /docs/dev/app-dev/system/system-network/network-boost-kit-guide/networkboost-nethandoverguide/networkboost-reporthandovermode
format: md
upstream_id: dev/app-dev/system/system-network/network-boost-kit-guide/networkboost-nethandoverguide/networkboost-reporthandovermode
last_sync: 2026-06-07
sync_hash: 3d0aebef
---
## 场景介绍

应用可通过该接口变更连接迁移模式，包括委托模式由系统发起连接迁移，和自主模式由应用发起连接迁移。

## 接口说明

具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-nethandover#nethandoversethandovermode)。

| 接口名 | 描述 |
| --- | --- |
| setHandoverMode(mode: HandoverMode): void | 应用设置迁移模式，默认为委托模式。 |

## 开发步骤

1. 导入Network Boost Kit模块。

   ```
   import { netHandover} from '@kit.NetworkBoostKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 调用setHandoverMode接口，设置为自主模式，禁止系统发起连接迁移。

   ```
   try{
     let mode: netHandover.HandoverMode = netHandover.HandoverMode.DISCRETION;
     netHandover.setHandoverMode(mode);
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
