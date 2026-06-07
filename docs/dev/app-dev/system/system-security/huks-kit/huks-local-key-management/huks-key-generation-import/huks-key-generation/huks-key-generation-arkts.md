---
displayed_sidebar: appDevSidebar
title: "生成密钥(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-arkts
format: md
---


以DH算法为例，生成随机密钥。具体的场景介绍及支持的算法规格，请参考[密钥生成支持的算法](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview#支持的算法)。

![](./img/38ddee6a.png)

密钥别名中禁止包含个人数据等敏感信息。

## 开发步骤

1. 指定密钥别名，密钥别名命名规范参考[密钥生成介绍及算法规格](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview)。
2. 初始化密钥属性集。

   * 通过[HuksParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksparam)封装密钥属性，搭配Array组成密钥属性集，并赋值给[HuksOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksoptions)中的properties字段。
   * 密钥属性集中必须包含[HuksKeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukskeyalg)、[HuksKeySize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukskeysize)、[HuksKeyPurpose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukskeypurpose)属性，即必传TAG：HUKS\_TAG\_ALGORITHM、HUKS\_TAG\_PURPOSE、HUKS\_TAG\_KEY\_SIZE。

   ![](./img/5737bfe3.png)

   一个密钥只能有一类PURPOSE，并且生成密钥时指定的用途要与使用时的方式一致，否则会导致异常。
3. 调用[generateKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksgeneratekeyitem9)，传入密钥别名和密钥属性集，生成密钥。

![](./img/b78c89b5.png)

如果业务再次使用相同别名调用HUKS生成密钥，HUKS将生成新密钥并直接覆盖历史的密钥文件。

```
import { huks } from '@kit.UniversalKeystoreKit';

/* 1.确定密钥别名 */
let keyAlias = 'dh_key';
/* 2.初始化密钥属性集 */
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
    console.error(`promise: generateKeyItem input arg invalid, ` + JSON.stringify(error));
    return 'Failed';
  }
}

async function testGenKey(): Promise<string> {
  let ret = await publicGenKeyFunc(keyAlias, huksOptions);
  return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/UniversalKeystoreKit/GenerateKey/entry/src/main/ets/pages/Index.ets#L18-L84" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
