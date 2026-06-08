---
title: "创建索引"
original_url: /docs/dev/app-dev/application-framework/localization-kit/i18n/i18n-sorting/i18n-sorting-index
format: md
upstream_id: dev/app-dev/application-framework/localization-kit/i18n/i18n-sorting/i18n-sorting-index
last_sync: 2026-06-07
sync_hash: 66e841fe
upstream_hash: 842e584868b2
---

## 功能介绍

当列表选项过多时，用户需要滑动窗口查找目标选项。为了提高查找效率，可以使用创建索引的方法。创建索引方式实质是打标签。例如，在联系人页面右侧通常会有“ABCD”的英文标记与联系人姓名首字母对应。若需寻找王同学，点击“W”可直接跳转到目标项范围。诸如“ABCD”的英文标记称为索引，通过创建索引的方式快速让窗口滑动到相应范围，找到目标选项。

## 开发步骤

接口具体使用方法和说明请参考[IndexUtil](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-i18n#indexutil8)的API文档。

1. 导入模块。

   ```
   import { i18n } from '@kit.LocalizationKit';
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/MultilingualSorting.ets#L19-L21" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MultilingualSorting.ets</a></div>

2. 获取索引列表和索引值。

   ```
   // 创建索引
   let indexUtil: i18n.IndexUtil = i18n.getInstance('zh-CN');
   let indexList = indexUtil.getIndexList(); // indexList = ['…', 'A', 'B', 'C', ... 'X', 'Y', 'Z', '…']

   // 多语言index混排
   indexUtil.addLocale('ru-RU');
   // indexList = ['…', 'A', 'B', 'C', ... 'X', 'Y', 'Z', '…', 'А', 'Б', 'В', ... 'Э', 'Ю', 'Я', '…']
   indexList = indexUtil.getIndexList();

   // 获取字符串的索引值
   let index = indexUtil.getIndex('你好'); // index = 'N'
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/International/Internationalization/entry/src/main/ets/i18napplication/MultilingualSorting.ets#L32-L44" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MultilingualSorting.ets</a></div>
