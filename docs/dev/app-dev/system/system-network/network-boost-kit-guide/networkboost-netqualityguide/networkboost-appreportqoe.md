---
title: "应用传输体验反馈"
original_url: /docs/dev/app-dev/system/system-network/network-boost-kit-guide/networkboost-netqualityguide/networkboost-appreportqoe
format: md
---


## 场景介绍

当应用传输体验发生变化时，应用将传输体验和传输的业务类型信息通过实时反馈接口传输给系统网络业务模块，系统网络业务模块进行精细化调度，实现网络加速。

例如：视频类App播放过程中卡顿，将卡顿信息上报后，Network Boost Kit将信息反馈给系统网络加速模块，该模块会记录播放卡顿信息，并根据当前网络情况，启用网络加速能力。

## 接口说明

具体API说明详见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netquality#netqualityreportqoe)。

| 接口名 | 描述 |
| --- | --- |
| reportQoe(appQoe: AppQoe): void | 应用反馈传输体验信息。 |

## 开发步骤

1. 导入Network Boost Kit模块。

   ```
   import { netQuality } from '@kit.NetworkBoostKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 调用reportQoe接口将应用传输体验信息通知给系统。

   ```
   try{
     let serviceType: netQuality.ServiceType = 'shortVideo';
     let qoeType: netQuality.BadQoeCause = 'serverErr';
     let appQoE: netQuality.AppQoe = {
       serviceType,
       qoeType
     };
     netQuality.reportQoe(appQoE);
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
