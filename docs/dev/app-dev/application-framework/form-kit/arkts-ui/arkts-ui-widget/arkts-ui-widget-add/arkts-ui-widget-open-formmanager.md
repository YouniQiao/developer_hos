---
title: "应用内拉起卡片管理加桌"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-open-formmanager
---

从API version 18开始，Form Kit提供在应用内将ArkTS卡片添加到桌面的能力，以方便用户后续便捷查看信息或快速进入应用。

## 开发步骤

下面给出示例，实现如下功能：在应用内点击“添加卡片到桌面”按钮，拉起卡片管理页面。用户可在卡片管理页面，点击“添加至桌面”按钮，此时在桌面即可看到新添加的卡片。

1. [创建卡片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-creation)。
2. 通过[openFormManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formprovider#formprovideropenformmanager18)方法在应用内添加拉起卡片管理页面入口。

   ```
   // entry/src/main/ets/pages/Index.ets
   import { formProvider } from '@kit.FormKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   import { Want } from '@kit.AbilityKit';
   import { promptAction } from '@kit.ArkUI';
   import { hilog } from '@kit.PerformanceAnalysisKit';

   const DOMAIN = 0x0000;

   @Entry
   @Component
   struct Index {
     build() {
       Row() {
         Column() {
           // 添加拉起卡片管理页面按钮
           Button($r('app.string.open_form_manager_button'))
             .onClick(() => {
               const want: Want = {
                 bundleName: "com.samples.formmanagerdemo",
                 abilityName: 'EntryFormAbility',
                 parameters: {
                   'ohos.extra.param.key.form_dimension': 2,
                   'ohos.extra.param.key.form_name': 'widget',
                   'ohos.extra.param.key.module_name': 'entry'
                 },
               };
               try {
                 // 点击按钮后调用openFormManager方法，拉起卡片管理页面
                 formProvider.openFormManager(want);
               } catch (error) {
                 promptAction.openToast({ message: (error as BusinessError).message });
                 hilog.info(DOMAIN, 'testTag', 'catch error ', 'code:', (error as BusinessError).code, 'message:',
                   (error as BusinessError).message);
               }
             })
             .margin({ top: 10, bottom: 10 })
         }
         .width('100%')
       }
       .height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Form/FormManagerDemo/entry/src/main/ets/pages/Index.ets#L15-L59" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>


   资源文件如下：

   ```
   // entry/src/main/resources/base/element/string.json
   {
     "string": [
       {
         "name": "open_form_manager_button",
         "value": "添加应用卡片到桌面"
       }
     ]
   }
   ```
3. 用户可在卡片管理页面，点击“添加至桌面”或者“添加至负一屏”，此时在桌面或者负一屏即可看到新添加的卡片。结果示例如下。

   ![](./img/73ce9463.gif)
