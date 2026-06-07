---
title: "获取密钥属性(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts
format: md
---


HUKS提供了接口供业务获取指定密钥的相关属性。在获取指定密钥属性前，需要确保已在HUKS中生成或导入持久化存储的密钥。

![](./img/94ec78df.png)

轻量级智能穿戴不支持获取密钥属性功能。

从API 23开始支持[群组密钥](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-group-key/huks-group-key-overview)特性。

## 开发步骤

1. 指定待查询的密钥别名keyAlias，密钥别名最大长度为128字节。
2. 调用接口[getKeyItemProperties](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksgetkeyitemproperties9)，传入参数keyAlias和options。options为预留参数，当前可传入空。
3. 返回值为[HuksReturnResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksreturnresult9)类型对象，获取的属性集在properties字段中。

```
import { huks } from '@kit.UniversalKeystoreKit';

/* 1. 设置密钥别名 */
let keyAlias = 'keyAlias';
/* option对象传空 */
let emptyOptions: huks.HuksOptions = {
  properties: []
};
let properties1: huks.HuksParam[] = [
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

let huksOptions: huks.HuksOptions = {
  properties: properties1,
  inData: new Uint8Array([])
}

/* 3.生成密钥 */
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

async function publicGenKeyFunc(keyAlias: string, huksOptions: huks.HuksOptions): Promise<string> {
  console.info(`enter promise generateKeyItem`);
  try {
    await generateKeyItem(keyAlias, huksOptions)
      .then((data) => {
        console.info(`promise: generateKeyItem success, data = ${JSON.stringify(data)}`);
      })
      .catch((error: Error) => {
        console.error(`promise: generateKeyItem failed, ${JSON.stringify(error)}`);
      });
    return 'Success';
  } catch (error) {
    console.error(`promise: generateKeyItem input arg invalid, ${JSON.stringify(error)}`);
    return 'Failed';
  }
}

async function testGenKey(): Promise<string> {
  let ret = await publicGenKeyFunc(keyAlias, huksOptions);
  return ret;
}

function check(): string {
  try {
    /* 1. 生成密钥 */
    testGenKey();
    /* 2. 获取密钥属性 */
    huks.getKeyItemProperties(keyAlias, emptyOptions, (error, data) => {
      if (error) {
        console.error(`callback: getKeyItemProperties failed, ${JSON.stringify(error)}`);
      } else {
        console.info(`callback: getKeyItemProperties success, data = ${JSON.stringify(data)}`);
      }
    });
    return 'Success';
  } catch (error) {
    console.error(`callback: getKeyItemProperties input arg invalid, ${JSON.stringify(error)}`);
    return 'Failed';
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/UniversalKeystoreKit/OtherOperations/GetKeyAttributes/entry/src/main/ets/pages/GetKeyAttributes.ets#L16-L103" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：GetKeyAttributes.ets</a></div>
