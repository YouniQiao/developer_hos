---
title: "系统语言与区域"
original_url: /docs/dev/app-dev/application-framework/localization-kit/i18n/i18n-language-user-preferences/i18n-system-language-region
format: md
---


## 实现原理

在设置的“语言和地区”中可以添加多种语言，多种语言形成的列表称为语言列表，列表中的第一个语言称为系统语言。系统区域是依据区域ID划分的特定地区。

设置/切换系统语言时，系统会检查[扩展参数](/docs/dev/app-dev/application-framework/localization-kit/i18n/i18n-locale-culture)与系统语言是否匹配，若不匹配，则删除扩展参数。例如，当前系统语言设置为阿拉伯语“ar”时，使用本地数字为“arab”。当系统语言切换为马来西亚语“my”时，本地数字参数更改为马来西亚的本地数字“mymr”。当切换为中文时，因中文不支持设置本地数字，采用阿拉伯数字，因此本地数字的扩展参数会被移除。

从API version 21开始，开发者可以在开发者模式下通过[param工具](/docs/dev/app-dev/system/param-tool#获取系统参数的值)的“param get persist.global.language”命令获取系统语言。

## 开发步骤

接口具体使用方法和说明请参考[System](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#system9)的API接口文档。

1. 导入模块。

   ```
   import { i18n } from '@kit.LocalizationKit';
   import { BusinessError, commonEventManager } from '@kit.BasicServicesKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/LanguagePreferenceSetting.ets#L18-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LanguagePreferenceSetting.ets</a></div>

2. 使用场景。

* 获取系统语言、系统地区、系统区域。

  ```
  // 获取系统语言
  let systemLanguage = i18n.System.getSystemLanguage();  // systemLanguage为当前系统语言

  // 获取系统地区
  let systemRegion = i18n.System.getSystemRegion();  // systemRegion为当前系统地区

  // 获取系统区域
  let systemLocale: Intl.Locale = i18n.System.getSystemLocaleInstance();  // systemLocale为当前系统区域

  // 通过监听公共事件COMMON_EVENT_LOCALE_CHANGED可以感知系统语言、系统地区或系统区域变化
  let subscriber: commonEventManager.CommonEventSubscriber; // 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作
  let subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {
    events: [commonEventManager.Support.COMMON_EVENT_LOCALE_CHANGED]
  };
  // 创建订阅者
  commonEventManager.createSubscriber(subscribeInfo)
    .then((commonEventSubscriber: commonEventManager.CommonEventSubscriber) => {
      console.info('CreateSubscriber');
      subscriber = commonEventSubscriber;
      commonEventManager.subscribe(subscriber, (err, data) => {
        if (err) {
          console.error(`Failed to subscribe common event. error code: ${err.code}, message: ${err.message}.`);
          return;
        }
        console.info('The subscribed event has occurred.'); // 系统语言、系统地区或系统区域变化时执行
      })
    })
    .catch((err: BusinessError) => {
      console.error(`CreateSubscriber failed, code is ${err.code}, message is ${err.message}`);
    });
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/LanguagePreferenceSetting.ets#L23-L54" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LanguagePreferenceSetting.ets</a></div>
