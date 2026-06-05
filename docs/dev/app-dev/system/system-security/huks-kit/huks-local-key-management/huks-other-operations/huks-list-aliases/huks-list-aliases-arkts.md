---
displayed_sidebar: appDevSidebar
title: "查询密钥别名集(ArkTS)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-list-aliases-arkts
format: md
---


HUKS提供了接口供应用查询密钥别名集。

![](./img/1c280094.png)

轻量级智能穿戴不支持查询密钥别名集功能。

从API 23开始支持[群组密钥](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview)特性。

## 开发步骤

1. 初始化密钥属性集，用于查询指定密钥别名集TAG。TAG仅支持[HUKS\_TAG\_AUTH\_STORAGE\_LEVEL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukstag)。
2. 调用接口[listAliases](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukslistaliases12)，查询密钥别名集。

```
/*
 * 以下查询密钥别名集Promise操作使用为例
 */
import { huks } from '@kit.UniversalKeystoreKit'

async function testListAliases() {
  /* 1.初始化密钥属性集 */
  let queryProperties: Array<huks.HuksParam> = [
    {
      tag: huks.HuksTag.HUKS_TAG_AUTH_STORAGE_LEVEL,
      value: huks.HuksAuthStorageLevel.HUKS_AUTH_STORAGE_LEVEL_DE
    }
  ];
  let queryOptions: huks.HuksOptions = {
    properties: queryProperties
  };

  try {
    /* 2.查询密钥别名集 */
    let result: huks.HuksListAliasesReturnResult = await huks.listAliases(queryOptions);
    console.info(`promise: listAliases success`);
  } catch (error) {
    console.error(`promise: listAliases fail`);
    throw (error as Error);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/UniversalKeystoreKit/OtherOperations/QueryKeyAliasSet/entry/src/main/ets/pages/QueryKeyAliasSet.ets#L16-L43" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：QueryKeyAliasSet.ets</a></div>
