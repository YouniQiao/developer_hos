---
title: "输入法子类型开发指南"
original_url: /docs/dev/app-dev/application-framework/ime-kit/input-method-subtype-guide
format: md
upstream_id: dev/app-dev/application-framework/ime-kit/input-method-subtype-guide
last_sync: 2026-06-07
sync_hash: 91a4b910
---
输入法子类型允许输入法展现不同的输入模式或语言，用户可以根据需要在不同模式和语言中切换。如输入法的中文键盘、英文键盘等，都属于输入法的子类型。

## 输入法子类型的配置与实现

1. 输入法应用开发者只需要注册实现一个InputMethodExtensionAbility，所有的输入法子类型共用该InputMethodExtensionAbility，在[module.json5配置文件](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)中添加metadata，name为ohos.extension.input\_method，用于配置所有子类型的资源信息。

   ```
   "extensionAbilities": [
     {
       "srcEntry": "./ets/InputMethodExtensionAbility/InputMethodService.ets",
       "name": "InputMethodService",
       "label": "$string:MainAbility_label",
       "description": "$string:extension_ability_descriptor",
       "type": "inputMethod",
       "exported": true,
       "metadata": [
         {
           "name": "ohos.extension.input_method",
           "resource": "$profile:input_method_config"
         }
       ]
     }
   ],
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/InputMethod/KikaInputMethod/entry/src/main/module.json5#L36-L53" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：module.json5</a></div>

2. 子类型配置文件input\_method\_config.json需要放在应用资源目录的profile文件夹中，格式如下，字段释义参照[InputMethodSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod-subtype#inputmethodsubtype)；开发者需要严格按照配置文件格式及字段进行子类型信息配置，locale字段的配置参照[i18n-locale-culture](/docs/dev/app-dev/application-framework/localization-kit/i18n/i18n-locale-culture#实现原理)。

   ```
   {
     "subtypes": [
       {
         "icon": "$media:icon",
         "id": "InputMethodExtAbility",
         "label": "$string:english",
         "locale": "en-US",
         "mode": "lower"
       },
       {
         "icon": "$media:icon",
         "id": "InputMethodExtAbility1",
         "label": "$string:chinese",
         "locale": "zh-CN",
         "mode": "lower"
       }
     ]
   }
   ```
3. 输入法应用中监听子类型事件，根据不同的子类型，可以加载不同的软键盘界面，或者通过状态变量控制软键盘显示效果。

   ```
   // 设置监听子类型事件，改变输入法应用界面
   inputMethodAbility.on('setSubtype', (inputMethodSubtype: InputMethodSubtype) => {
     if (inputMethodSubtype.id === 'InputMethodExtAbility') {
       AppStorage.setOrCreate('subtypeChange', 0);
     }
     if (inputMethodSubtype.id === 'InputMethodExtAbility1') {
       AppStorage.setOrCreate('subtypeChange', 1);
     }
   });
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/InputMethod/KikaInputMethod/entry/src/main/ets/InputMethodExtensionAbility/model/KeyboardController.ets#L572-L582" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：KeyboardController.ets</a></div>


## 输入法子类型相关信息的获取

1. 开发者可以通过调用[getCurrentInputMethodSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodgetcurrentinputmethodsubtype9)获取当前输入法应用的当前子类型。
2. 开发者可以通过调用[listCurrentInputMethodSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#listcurrentinputmethodsubtype9)获取当前输入法应用的所有子类型。
3. 开发者可以通过调用[listInputMethodSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#listinputmethodsubtype9)获取指定输入法应用的所有子类型。

## 输入法子类型的切换

1. 开发者可以通过调用[switchCurrentInputMethodSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodswitchcurrentinputmethodsubtype9)切换当前输入法应用的子类型。
2. 开发者可以通过调用[switchCurrentInputMethodAndSubtype](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inputmethod#inputmethodswitchcurrentinputmethodandsubtype9)切换至指定输入法应用的指定子类型。
