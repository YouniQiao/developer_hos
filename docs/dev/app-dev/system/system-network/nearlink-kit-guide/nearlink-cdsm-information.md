---
displayed_sidebar: appDevSidebar
title: "获取星闪合作设备集合信息"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-cdsm-information
---

## 场景介绍

从6.1.1(24)开始支持获取星闪合作设备集合信息。

合作设备集合是由多个成员设备协同提供特定服务的整体，例如一副星闪耳机包含左右两个耳机单元。当配对的外设属于某个合作设备集合时，通过[getPairedDevices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-manager#getpaireddevices)接口仅能获取该集合中首个配对的成员设备，无法直接获取其他成员设备信息。作为集合使用者，可通过主动查询或订阅通知的方式，获取该合作设备集合内所有成员设备的完整信息。

更多技术细节可参考[星闪标准](https://www.isla.org.cn/trial)《星闪无线通信系统 基础应用层 合作设备集合管理》。

## 接口说明

提供2种获取星闪开关状态的方式，主动查询和订阅状态变化。

| 接口名 | 描述 |
| --- | --- |
| [createCdsmClient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-cdsm#createcdsmclient)(address: string): [CdsmClient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-cdsm#cdsmclient) | 创建合作设备集合客户端实例。 |
| [getCdsmInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-cdsm#getcdsminfo)(): [CdsmInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-cdsm#cdsminfo) | 主动查询合作设备集合里所有成员设备的信息。 |
| [onCdsmInfoChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-cdsm#oncdsminfochange)(callback: Callback<CdsmInfo>): void | 订阅合作设备集合成员设备的信息变化事件。 |
| [offCdsmInfoChange](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-cdsm#offcdsminfochange)(callback?: Callback<CdsmInfo>): void | 取消订阅合作设备集合成员设备的信息变化事件。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { cdsm } from '@kit.NearLinkKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { Callback } from '@kit.BasicServicesKit';
   ```
2. 创建合作设备集合客户端实例，参数addr是通过[getPairedDevices](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-manager#getpaireddevices)获取的设备地址，并且此设备是合作设备集合的成员设备。

   ```
   let addr: string = '00:11:22:33:AA:FF';
   let client: cdsm.CdsmClient;
   try {
     client = cdsm.createCdsmClient(addr);
     console.info('client: ' + JSON.stringify(client));
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
3. 主动查询合作设备集合里所有成员设备的信息。

   ```
   try {
     let cdsmInformation: cdsm.CdsmInfo = client.getCdsmInfo();
     console.info('cdsmInformation:' + JSON.stringify(cdsmInformation));
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
4. 通过注册的方式订阅合作设备集合成员设备的信息变化。

   ```
   let callback: Callback<cdsm.CdsmInfo> = (data: cdsm.CdsmInfo) => {
     console.info('CdsmInfo:' + JSON.stringify(data));
   };

   try {
     client.onCdsmInfoChange(callback);
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
5. 取消订阅合作设备集合成员设备的信息变化。

   ```
   try {
     client.offCdsmInfoChange(callback);
   } catch (err) {
     console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
   }
   ```
