---
displayed_sidebar: appDevSidebar
title: "防窥保护"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-dlpantipeep
format: md
---


## 场景介绍

支持应用根据屏幕窥视状态保护机主隐私，如拉起系统级蒙层遮盖窗口，非机主状态下不进行个性化推荐，隐藏浏览记录、支付记录、收藏记录等敏感信息。其中系统使用智能判断将长期通过人脸解锁手机的人作为防窥保护的机主。若防窥保护开关未打开，可以拉起设置弹窗或提醒用户进入设置页开启。

## 开发前置条件

1. 需要在设备开启人脸识别。
2. 在设备上选择“设置 > 隐私与安全 > 防窥保护”，开启防窥保护开关。通过人脸验证后，打开需要加入保护的应用开关。

## 约束与限制

满足以下所有条件：

1. 本特性需要设备上存在防窥保护选项。开发者可通过在设备上选择“设置 > 隐私与安全 > 防窥保护”查看防窥保护选项。
2. HarmonyOS系统：HarmonyOS 6.0.0 Beta1及以上。
3. DevEco Studio版本：DevEco Studio 6.0.0 Beta1及以上。
4. HarmonyOS SDK版本: HarmonyOS 6.0.0 Beta1 SDK及以上。
5. 防窥保护功能使用智能判断，通过传感器判断您周边环境给您风险提醒。判断因素包括人脸距离设备是否在一定的范围内、人脸是否有遮挡、周围环境是否有充足的光线。当距离较近或较远、人脸被遮挡、周围环境较暗时，可能会引起识别误差，从而导致系统未提醒或者误提醒。如果您认为智能判断可能有误，您可以尝试调整位置和光线，重新使用人脸解锁手机等操作，并再次使用该功能帮助您防窥。

## 业务流程

![](./img/7fb5aa6c.jpg)

**流程说明：**

1. 用户在“设置 > 隐私与安全 > 防窥保护”中开启当前应用的功能开关，或应用提供设置入口，用户点击后通过调用[requestAntiPeepOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api#requestantipeepoptions)接口拉起设置弹窗进行设置。
2. 调用[isDlpAntiPeepSwitchOn](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api#isdlpantipeepswitchon)接口查询当前应用开关的状态。
3. 调用[on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api#ondlpantipeep)接口注册防窥保护通知，根据检测结果返回不同的状态：机主自身注视屏幕时返回非窥视状态；机主与非机主同时注视屏幕时返回被窥视状态；没有机主使用手机或机主分享场景，返回非窥视状态。
4. 手动调用[getDlpAntiPeepInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api#getdlpantipeepinfo)接口返回当前应用的窥视状态。
5. 调用[setAntiPeepMaskLayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api#setantipeepmasklayer)接口，拉起系统级蒙层。
6. 调用[passDlpAntiPeepInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api#passdlpantipeepinfo)接口修改窥视状态，直到手机锁屏或应用退出前一直会返回非窥视状态。
7. 调用[off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api#offdlpantipeep)接口解除注册防窥保护通知。

## 接口说明

以下是获取防窥状态信息相关接口，更多接口及使用方法请参见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-dlpantipeep-api)。

| 接口名 | 描述 |
| --- | --- |
| isDlpAntiPeepSwitchOn(): Promise\<boolean\> | 检查是否打开防窥保护。 |
| on(type: 'dlpAntiPeep', callback: Callback\<DlpAntiPeepStatus\>): void | 订阅防窥保护状态通知。 |
| off(type: 'dlpAntiPeep', callback?: Callback\<DlpAntiPeepStatus\>): void | 解除订阅防窥保护状态通知。 |
| getDlpAntiPeepInfo(): DlpAntiPeepStatus | 获取当前应用的窥视状态。 |
| passDlpAntiPeepInfo(): void | 直到手机锁屏或应用退出前一直会返回非窥视状态。 |
| setAntiPeepMaskLayer(windowId: number): Promise\<void\> | 拉起系统级窗口蒙层遮盖。 |
| requestAntiPeepOptions(context: Context): Promise\<AntiPeepOptionsResult\> | 拉起设置弹框请求用户打开防窥保护开关。 |
| publishAntiPeepInformation(): Promise\<void\> | 发布防窥保护提示信息。 |

## 开发步骤

![](./img/6a31ca10.png)

* 在开发准备过程中，需要申请权限：ohos.permission.DLP\_GET\_HIDE\_STATUS，用于获取当前应用使用过程中被非机主本人窥视屏幕相关状态信息。申请方式请参考：[申请使用受限权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions-in-acl)
* 开发者需向用户说明数据使用的目的、方式和范围。

1. 导入防窥保护模块及相关公共模块。

   ```
   import { dlpAntiPeep } from '@kit.DeviceSecurityKit';
   import { window } from '@kit.ArkUI';
   import { common } from '@kit.AbilityKit';
   ```
2. 调用检查接口确认当前应用是否开启防窥保护，开启防窥保护时调用防窥保护订阅接口获取窥视状态信息。

   ```
   @Entry
   @Component
   struct Index {
     @State message: string = 'DlpAntiPeep';
     private hasShownMask: boolean = false;

     // 防窥状态变化回调
     private onStatusChange = async (status: dlpAntiPeep.DlpAntiPeepStatus): Promise<void> => {
       if (status === dlpAntiPeep.DlpAntiPeepStatus.PASS) { // 表示当前状态为无人窥视
         console.info('DlpAntiPeepStatus is PASS.');
       } else if (status === dlpAntiPeep.DlpAntiPeepStatus.HIDE) { // 表示有人在窥屏，应用可以进行隐私保护操作。
         console.info('DlpAntiPeepStatus is HIDE.');
         if (!this.hasShownMask) {
           await this.setMaskLayer(); // 拉起系统蒙层
         }
       }
     }

     // 检查防窥保护开关并订阅通知
     async aboutToAppear() {
       try {
         const isOpen = await dlpAntiPeep.isDlpAntiPeepSwitchOn();
         if (isOpen) {
           dlpAntiPeep.on('dlpAntiPeep', this.onStatusChange);
         } else {
           // 开关未开启，引导用户设置
           const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
           const result = await dlpAntiPeep.requestAntiPeepOptions(context);
           if (result === dlpAntiPeep.AntiPeepOptionsResult.SUCCESS ||
               result === dlpAntiPeep.AntiPeepOptionsResult.ALREADY_ON) { // 表示防窥保护开关开启成功或已开启
             dlpAntiPeep.on('dlpAntiPeep', this.onStatusChange);
           }
         }
       } catch (error) {
         console.error(`Failed to init DlpAntiPeep. Code: ${error.code}, message: ${error.message}`);
       }
     }

     // 取消订阅防窥保护通知
     aboutToDisappear() {
       try {
         dlpAntiPeep.off('dlpAntiPeep', this.onStatusChange);
       } catch (error) {
         console.error(`Failed to off DlpAntiPeep. Code: ${error.code}, message: ${error.message}`);
       }
     }

     onPageShow() {
       console.info('Page shown, reset mask flag');
       this.hasShownMask = false;
     }

     // 拉起系统蒙层
     private async setMaskLayer(): Promise<void> {
       try {
         const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
         const windowClass = await window.getLastWindow(context);
         const windowId = windowClass.getWindowProperties().id;
         await dlpAntiPeep.setAntiPeepMaskLayer(windowId);
         this.hasShownMask = true; // 避免窥视状态时频繁拉起蒙层
       } catch (error) {
         console.error(`Failed to set AntiPeep MaskLayer. Code: ${error.code}, message: ${error.message}`);
       }
     }

     build() {
       Column() {
         Text(this.message)
           .fontSize(20)
           .margin(20)
       }
       .width('100%')
       .height('100%')
       .justifyContent(FlexAlign.Center)
     }
   }
   ```
