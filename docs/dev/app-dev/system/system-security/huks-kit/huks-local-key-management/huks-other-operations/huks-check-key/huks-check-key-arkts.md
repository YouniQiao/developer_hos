---
displayed_sidebar: appDevSidebar
title: "查询密钥是否存在(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts
format: md
upstream_id: dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts
last_sync: 2026-06-07
sync_hash: 017d3aa7
---
HUKS提供了接口供应用查询指定密钥是否存在。

从API 23开始支持[群组密钥](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-group-key/huks-group-key-overview)特性。

## 开发步骤

1. 指定密钥别名，密钥别名命名规范参考[密钥生成介绍及算法规格](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview)。
2. 初始化密钥属性集。用于查询时指定密钥的属性，查询单个密钥或者非群组密钥，可传空。
3. 调用接口[hasKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukshaskeyitem11)，查询密钥是否存在。

```
import { huks } from '@kit.UniversalKeystoreKit';

let keyAlias = 'test_key';
let isKeyExist: Boolean;

let generateProperties: huks.HuksParam[] = [
  {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_DH
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_AGREE
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_DH_KEY_SIZE_2048
  }
];

let generateHuksOptions: huks.HuksOptions = {
  properties: generateProperties,
  inData: new Uint8Array([])
}

/* 1.生成密钥 */
function generateKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {
  return new Promise<void>((resolve, reject) => {
    try {
      huks.generateKeyItem(keyAlias, huksOptions, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    } catch (error) {
      throw (error as Error);
    }
  });
}

async function generateKey(keyAlias: string, huksOptions: huks.HuksOptions): Promise<void> {
  console.info(`enter promise generateKeyItem`);
  await generateKeyItem(keyAlias, huksOptions);
  console.info(`promise: generateKeyItem success`);
}

/* 2.检查密钥是否存在 */
let huksOptions: huks.HuksOptions = {
  properties: []
}

function hasKeyItem(keyAlias: string, huksOptions: huks.HuksOptions) {
  return new Promise<boolean>((resolve, reject) => {
    try {
      huks.hasKeyItem(keyAlias, huksOptions, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data.valueOf());
        }
      });
    } catch (error) {
      throw (error as Error);
    }
  });
}

async function checkKeyExistence(keyAlias: string, huksOptions: huks.HuksOptions): Promise<boolean> {
  console.info(`enter promise hasKeyItem`);
  const exists = await hasKeyItem(keyAlias, huksOptions);
  console.info(`promise: hasKeyItem success, isKeyExist = ${exists}`);
  return exists;
}

async function executeCheckKey(): Promise<string> {
  try {
    /* 1.生成密钥 */
    await generateKey(keyAlias, generateHuksOptions);

    /* 2.检查密钥是否存在 */
    isKeyExist = await checkKeyExistence(keyAlias, huksOptions);

    console.info(`Key check completed, isKeyExist = ${isKeyExist}`);
    return 'Success';
  } catch (error) {
    console.error(`Key check failed: ${JSON.stringify(error)}`);
    return 'Failed';
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/UniversalKeystoreKit/OtherOperations/CheckKeyExists/entry/src/main/ets/pages/CheckKeyExists.ets#L17-L109" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：CheckKeyExists.ets</a></div>
