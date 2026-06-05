---
title: "本地化语言与地区名称"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/i18n-language-region-display
format: md
---


## 功能介绍

本地化语言与地区名称是指语言和地区按照本地的语言习惯显示，确保用户可识别，主要在展示语言与地区名称的场景下使用。例如，在简体中文环境下，简体中文显示为“简体中文”，英文显示为“英文”；在英文环境下，简体中文显示为“Simplified Chinese”，英文显示为“English”。

## 开发步骤

接口具体说明请参考[getDisplayCountry](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#getdisplaycountry9)和[getDisplayLanguage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#getdisplaylanguage9)的API文档。

1. 导入模块。

   ```
   import { i18n } from '@kit.LocalizationKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/NameLocalization.ets#L19-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NameLocalization.ets</a></div>

2. 使用场景。

* 本地化语言名称。支持获取语言名称在不同语言下的翻译，以获取德文语言名称的中文翻译为例：

  ```
  let displayLanguage = i18n.System.getDisplayLanguage('de', 'zh-Hans-CN'); // displayLanguage = '德文'
  // language: 语言两字母代码，如'zh'，'de'，'fr'等
  // locale: 表示区域ID的字符串，如'en-GB'、'en-US'、'zh-Hans-CN'等
  // sentenceCase: 返回的语言名称是否需要首字母大写，默认值：true
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/NameLocalization.ets#L26-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NameLocalization.ets</a></div>

* 本地化国家/地区名称。支持获取国家/地区名称在不同语言下的翻译，以获取沙特阿拉伯国家名称的英文翻译为例：

  ```
  let displayCountry = i18n.System.getDisplayCountry('SA', 'en-GB'); // displayCountry = 'Saudi Arabia'
  // country: 国家/地区两字母代码，如'CN'、'DE'、'SA'等
  // locale: 表示区域ID的字符串，如'en-GB'、'en-US'、'zh-Hans-CN'等
  // sentenceCase: 返回的国家/地区名称是否需要首字母大写，默认值：true
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/NameLocalization.ets#L33-L38" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：NameLocalization.ets</a></div>
