---
title: "元服务与系统联动切换未成年人模式"
original_url: /docs/dev/atomic-dev/account-follow-atomic-minorsprotection/account-system-atomic-minorsprotection
format: md
---


## 场景介绍

在未成年人模式下，元服务可通过以下两种方式获取系统未成年人模式状态，与系统未成年人模式进行联动：

1. 查询系统的未成年人模式是否开启：元服务启动时，可调用[getMinorsProtectionInfoSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#getminorsprotectioninfosync)接口，主动查询系统的未成年人模式状态；如系统未成年人模式为开启状态，则应自动开启元服务的未成年人模式；如系统未成年人模式为关闭状态，则应自动关闭元服务的未成年人模式。
2. 订阅[系统未成年人模式公共事件](#事件说明)感知系统的未成年人模式状态：元服务进程存在时，可订阅系统的未成年人模式公共事件，当订阅到系统未成年人模式开启或关闭时，元服务可自动进行未成年人模式状态切换。

![](./img/fe8ecfcf.png)

以上两种方式都需要元服务实现，如开发者不实现订阅系统未成年人模式公共事件，则元服务无法实时感知系统未成年人模式的变化。

示例：当元服务处于前台，如开发者不实现订阅系统未成年人模式公共事件，当用户从控制中心开启未成年人模式后，当前元服务无法实时感知系统未成年人模式的变化。

## 业务流程

![](./img/39f42b60.png)

流程说明：

1. 用户打开元服务时，元服务通过订阅[系统未成年人模式公共事件](#事件说明)感知系统未成年人模式的状态变化。如果订阅到系统未成年人模式开启事件，则开启元服务的未成年人模式，如果订阅到系统未成年人模式关闭事件，则展示内容不做限制，而且需关闭元服务的未成年人模式。
2. 调用[getMinorsProtectionInfoSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#getminorsprotectioninfosync)或[getMinorsProtectionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#getminorsprotectioninfo)获取系统未成年人模式的开启状态和年龄段信息，如果系统未成年人模式未开启，则展示内容不做限制。如果系统未成年人模式已开启，则需要根据返回的年龄段做内容分级，而且需开启元服务的未成年人模式。

## 接口说明

以下是元服务与系统联动切换未成年人模式的相关接口说明，更多接口及使用方法请参见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection)。

| 接口名 | 描述 |
| --- | --- |
| [getMinorsProtectionInfoSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#getminorsprotectioninfosync)(): [MinorsProtectionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#minorsprotectioninfo) | 同步接口，获取系统未成年人模式的开启状态，以及年龄段信息。 |
| [getMinorsProtectionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#getminorsprotectioninfo)(): Promise\&lt;[MinorsProtectionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#minorsprotectioninfo)\&gt; | 异步接口，获取系统未成年人模式的开启状态，以及年龄段信息。 |

![](./img/bc3075fc.png)

1. 当未成年人模式开启时，当前设备的开发者调试模式会被禁用，开发者可以进入设置-系统-开发者选项，点击USB调试开关，会校验健康使用设备密码，校验成功后可解除开发者调试模式限制。
2. 如开发者重新开启USB调试开关后，发现DevEco Studio工具上hilog日志未恢复到断连之前，请执行“hdc shell hilog -G 16M”来扩大hilog日志缓存区，若hilog日志仍无法完全展示，可取出hilog日志本地查看。更多命令请参见[hilog](/docs/dev/app-dev/system/hilog)。
3. 如开发者需要频繁使用未成年人模式开启状态或者年龄段信息，建议在获取结果后进行缓存，并通过订阅[系统未成年人模式公共事件](#事件说明)来刷新未成年人模式开启状态或者年龄段信息，避免重复调用接口带来的性能损耗。
4. 当设备处于开机未解锁状态下，开发者调用[getMinorsProtectionInfoSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#getminorsprotectioninfosync)接口时，其返回的minorsProtectionMode字段为false。

## 事件说明

以下是系统未成年人模式开启/关闭发送的广播事件。

| 事件名称 | 值 | 描述 |
| --- | --- | --- |
| [COMMON\_EVENT\_MINORSMODE\_ON](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/commoneventmanager-definitions#common_event_minorsmode_on12) | usual.event.MINORSMODE\_ON | 表示系统未成年人模式开启事件。 |
| [COMMON\_EVENT\_MINORSMODE\_OFF](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/commoneventmanager-definitions#common_event_minorsmode_off12) | usual.event.MINORSMODE\_OFF | 表示系统未成年人模式关闭事件。 |

![](./img/509f58f4.png)

未成年人模式开启事件触发时机：

主动开启系统未成年人模式，当前设备会发送未成年人模式开启事件。

## 开发前提

请先参考“开发准备”的[配置签名和指纹](/docs/dev/atomic-dev/account-guide-atomic-preparations/account-atomic-sign-fingerprints)章节，通过自动签名方式完成签名信息的配置。请注意，该接口无需配置公钥指纹、Client ID，也无需申请账号权限。

## 开发步骤

1. 导入[minorsProtection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection)模块及相关公共模块。

   ```
   import { minorsProtection } from '@kit.AccountKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';
   ```
2. 创建订阅者，订阅系统未成年人模式开启或关闭事件。推荐在元服务Ability的[onCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#oncreate)生命周期中调用。

   ```
   // 订阅者信息
   const subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {
     events: [commonEventManager.Support.COMMON_EVENT_MINORSMODE_ON,
       commonEventManager.Support.COMMON_EVENT_MINORSMODE_OFF]
   };

   // 如开发者使用await改写createSubscriber方法，需要把此变量定义到全局(struct外层)
   let subscriber: commonEventManager.CommonEventSubscriber;
   // 创建订阅者
   commonEventManager.createSubscriber(subscribeInfo)
     .then((commonEventSubscriber: commonEventManager.CommonEventSubscriber) => {
       // 这里获取到commonEventSubscriber对象需要暂存，用于后续事件回调。不可直接使用，否则会出现事件回调不生效的情况
       subscriber = commonEventSubscriber;
       // 订阅公共事件
       commonEventManager.subscribe(subscriber,
         (error: BusinessError, data: commonEventManager.CommonEventData) => {
           if (error) {
             dealCommonEventAllError(error);
             return;
           }
           if (data.event === commonEventManager.Support.COMMON_EVENT_MINORSMODE_ON) {
             // 订阅到开启事件，可以调用获取年龄段的接口，根据年龄段刷新内容展示，同时如开发者有缓存年龄段或未成年人模式开启状态，则需要刷新缓存
             return;
           }
           if (data.event === commonEventManager.Support.COMMON_EVENT_MINORSMODE_OFF) {
             // 订阅到关闭事件，关闭当前元服务的未成年人模式，刷新元服务内容展示，取消年龄限制，如开发者有缓存未成年人模式开启状态，则需要刷新缓存
           }
         });
     })
     .catch((error: BusinessError) => {
       dealCommonEventAllError(error);
     });
   ```

   ```
   function dealCommonEventAllError(error: BusinessError): void {
     hilog.error(0x0000, 'testTag', `Failed to subscribe. Code: ${error.code}, message: ${error.message}`);
   }
   ```
3. 选择以下一种方式获取未成年人模式的开启状态，以及年龄段信息。当元服务期望立即获取结果，推荐使用同步方式，当元服务期望使用非阻塞的方式调用接口，推荐使用Promise异步回调方式。推荐在自定义组件的[aboutToAppear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-lifecycle#abouttoappear)生命周期或者元服务Ability的[onCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#oncreate)生命周期中调用，如开发者有频繁使用到未成年人模式开启状态或年龄段信息，开发者则需把获取到的系统未成年人模式开启状态或年龄段缓存下来，通过订阅[未成年人模式公共事件](#事件说明)来刷新未成年人模式开启状态或年龄段。

   * 通过同步方式，调用[getMinorsProtectionInfoSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#getminorsprotectioninfosync)获取系统未成年人模式的开启状态，以及年龄段信息。

     ```
     if (canIUse('SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection')) {
       try {
         // 查询是否支持系统未成年人模式
         if (minorsProtection.supportMinorsMode()) {
           const minorsProtectionInfo: minorsProtection.MinorsProtectionInfo =
             minorsProtection.getMinorsProtectionInfoSync();
           // 获取未成年人模式开启状态
           const minorsProtectionMode: boolean = minorsProtectionInfo.minorsProtectionMode;
           // 如开发者有频繁使用到未成年人模式开启状态，这里则需缓存未成年人模式开启状态
           hilog.info(0x0000, 'testTag',
             `Succeeded in getting minorsProtectionMode is: ${minorsProtectionMode.valueOf()}`);
           // 未成年人模式已开启，获取年龄段信息
           if (minorsProtectionMode) {
             const ageGroup: minorsProtection.AgeGroup | undefined = minorsProtectionInfo.ageGroup;
             if (ageGroup) {
               hilog.info(0x0000, 'testTag', `Succeeded in getting lowerAge is: ${ageGroup.lowerAge}`);
               hilog.info(0x0000, 'testTag', `Succeeded in getting upperAge is: ${ageGroup.upperAge}`);
               // 根据年龄段刷新内容展示。如开发者有频繁使用到年龄段信息，这里则需缓存年龄段信息
             }
           } else {
             // 未成年人模式未开启，元服务需跟随系统未成年人模式，展示内容不做限制
           }
         } else {
           hilog.info(0x0000, 'testTag',
             'The current device environment does not support the youth mode, please check the current device environment.');
         }
       } catch (error) {
         hilog.error(0x0000, 'testTag',
           `Failed to invoke supportMinorsMode or getMinorsProtectionInfoSync. errCode: ${error.code}, errMessage: ${error.message}`);
       }
     } else {
       hilog.info(0x0000, 'testTag',
         'The current device does not support the invoking of the getMinorsProtectionInfoSync interface.');
     }
     ```
   * 通过Promise异步回调方式，调用[getMinorsProtectionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-minorsprotection#getminorsprotectioninfo)获取系统未成年人模式的开启状态，以及年龄段信息。

     ```
     if (canIUse('SystemCapability.AuthenticationServices.HuaweiID.MinorsProtection')) {
       try {
         // 查询是否支持系统未成年人模式
         if (minorsProtection.supportMinorsMode()) {
           minorsProtection.getMinorsProtectionInfo()
             .then((minorsProtectionInfo: minorsProtection.MinorsProtectionInfo) => {
               // 获取未成年人模式开启状态
               const minorsProtectionMode: boolean = minorsProtectionInfo.minorsProtectionMode;
               // 如开发者有频繁使用到未成年人模式开启状态，这里则需缓存未成年人模式开启状态
               hilog.info(0x0000, 'testTag',
                 `Succeeded in getting minorsProtectionMode is: ${minorsProtectionMode.valueOf()}`);
               // 未成年人模式已开启，获取年龄段信息
               if (minorsProtectionMode) {
                 const ageGroup: minorsProtection.AgeGroup | undefined = minorsProtectionInfo.ageGroup;
                 if (ageGroup) {
                   hilog.info(0x0000, 'testTag', `Succeeded in getting lowerAge is: ${ageGroup.lowerAge}`);
                   hilog.info(0x0000, 'testTag', `Succeeded in getting upperAge is: ${ageGroup.upperAge}`);
                   // 根据年龄段刷新内容展示。如开发者有频繁使用到年龄段信息，这里则需缓存年龄段信息
                 }
               } else {
                 // 未成年人模式未开启，元服务需跟随系统未成年人模式，展示内容不做限制
               }
             })
             .catch((error: BusinessError<Object>) => {
               dealGetMinorsInfoAllError(error);
             });
         } else {
           hilog.info(0x0000, 'testTag',
             'The current device environment does not support the youth mode, please check the current device environment.');
         }
       } catch (error) {
         hilog.error(0x0000, 'testTag',
           `Failed to invoke supportMinorsMode. errCode: ${error.code}, errMessage: ${error.message}`);
       }
     } else {
       hilog.info(0x0000, 'testTag',
         'The current device does not support the invoking of the getMinorsProtectionInfo interface.');
     }
     ```

     ```
     function dealGetMinorsInfoAllError(error: BusinessError<Object>): void {
       hilog.error(0x0000, 'testTag', `Failed to getMinorsProtectionInfo. Code: ${error.code}, message: ${error.message}`);
     }
     ```
