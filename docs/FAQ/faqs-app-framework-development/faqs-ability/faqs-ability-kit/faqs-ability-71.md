---
format: md
title: "如何获取App版本号，版本名，屏幕分辨率等信息"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-71
---


1. 通过@kit.AbilityKit中的bundleManager模块查询bundleInfo，其中包含App版本号和版本名。

   ```
   import { BusinessError } from '@kit.BasicServicesKit';
   import { bundleManager } from '@kit.AbilityKit';

   // ...
   bundleManager.getBundleInfoForSelf(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION).then((bundleInfo) => {
     let versionName = bundleInfo.versionName; //App version name
     let versionNo = bundleInfo.versionCode; //App version code
   }).catch((error: BusinessError) => {
     console.error('get bundleInfo failed, error is ' + error);
   })
   ```
2. 在context.config中获取screenDensity，其中包含屏幕分辨率信息。

   ```
   import { common } from '@kit.AbilityKit';

   // ...
   // In the utility class: Save the context to AppStorage in the EntryAbility - onCreate lifecycle, then use AppStorage to retrieve it in the utility class
   let context = AppStorage.get('context') as common.UIAbilityContext;

   let screenDensity = context.config.screenDensity;
   ```
