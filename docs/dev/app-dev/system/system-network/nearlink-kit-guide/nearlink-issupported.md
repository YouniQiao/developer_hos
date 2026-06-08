---
title: "查询是否支持星闪"
original_url: /docs/dev/app-dev/system/system-network/nearlink-kit-guide/nearlink-issupported
format: md
upstream_id: dev/app-dev/system/system-network/nearlink-kit-guide/nearlink-issupported
last_sync: 2026-06-07
sync_hash: 613034b8
---
## 场景介绍

从6.1.0(23)版本开始，新增查询是否支持星闪的能力。由于并非所有设备都支持星闪，使用星闪相关功能前可以主动查询当前设备是否支持星闪。

## 接口说明

提供查询当前设备是否支持星闪的方式。

| 接口名 | 描述 |
| --- | --- |
| [isNearLinkSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-manager#isnearlinksupported)(): boolean | 主动查询当前设备是否支持星闪。 |

## 开发步骤

![](./img/b524df68.png)

可以在设备“设置 > 多设备协同 > 星闪”（不同产品或系统版本可能为“设置 > 星闪和蓝牙 > 星闪”）路径下，查看当前设备是否支持星闪。

如果在不支持星闪的设备上调用星闪相关接口，可能会返回[801](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal#section801-该设备不支持此api)错误码。

1. 导入相关模块。

   ```
   import { manager } from '@kit.NearLinkKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 发起当前设备是否支持星闪的状态查询。

   ```
   try {
     let isSupported: boolean = manager.isNearLinkSupported();
     if (isSupported) {
       console.info('NearLink is supported on this device.');
     } else {
       console.info('NearLink is not supported on this device.');
     }
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
