---
title: "加密导出导入密钥(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-wrap-key/huks-wrap-key-arkts
format: md
---


从API 20开始，支持加密导出导入密钥。

当前指导提供以下加密导出导入密钥示例：

* [加密导出导入普通密钥](#加密导出导入普通密钥)
* [普通密钥导入为群组密钥](#普通密钥导入为群组密钥)

## 开发步骤

1. 初始化生成密钥属性集，需要设置[HUKS\_TAG\_IS\_ALLOWED\_WRAP](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukstag)，指定密钥允许导出。
2. 调用[generateKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksgeneratekeyitem9)生成密钥，具体请参考[密钥生成](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview)。
3. 调用[wrapKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukswrapkeyitem20)加密导出密钥。
4. 调用[unwrapKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksunwrapkeyitem20)加密导入密钥。如果是从普通密钥导入为群组密钥，需要传入TUI PIN类型的AuthToken，认证TUI PIN并获取AuthToken请参考[数字盾服务](/docs/dev/app-dev/system/system-security/device-security-kit-guide/devicesecurity-trustedauth-service/devicesecurity-trustedauth-verifybypwd#开发步骤)。

## 开发案例

### 加密导出导入普通密钥

```
import { huks } from '@kit.UniversalKeystoreKit';

let keyAlias = "testWrapKey";
let properties: Array<huks.HuksParam> = [
  {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE
  },
  {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_GCM
  },
  /* 生成密钥时指定允许加密导出 */
  {
    tag: huks.HuksTag.HUKS_TAG_IS_ALLOWED_WRAP,
    value: true
  }
];

let options: huks.HuksOptions = {
  properties: properties,
};

let wrapKeyProperties: Array<huks.HuksParam> = [
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_WRAP_TYPE,
    value: huks.HuksKeyWrapType.HUKS_KEY_WRAP_TYPE_HUK_BASED
  }
];

let wrapKeyOptions: huks.HuksOptions = {
  properties: wrapKeyProperties,
};

let wrappedKey: Uint8Array;

async function testGenerateKey() {
  await huks.generateKeyItem(keyAlias, options)
    .then((data) => {
      console.info(`promise: generateKeyItem success`);
    })
    .catch((error: Error) => {
      console.error(`promise: generateKeyItem failed`);
    });
}

async function testWrapKey(){
  await testGenerateKey();

  await huks.wrapKeyItem(keyAlias, wrapKeyOptions)
    .then((data) => {
      wrappedKey = data.outData as Uint8Array;
      console.info(`promise: wrapKeyItem success, data = ${JSON.stringify(data)}`);
    })
    .catch((error: Error) => {
      console.error(`promise: wrapKeyItem failed`);
    });

  await huks.unwrapKeyItem(keyAlias, wrapKeyOptions, wrappedKey)
    .then((data) => {
      console.info(`promise: unwrapKeyItem success`);
    })
    .catch((error: Error) => {
      console.error(`promise: unwrapKeyItem failed`);
    });
}
```

### 普通密钥导入为群组密钥

从API 23开始，支持从普通密钥导入为群组密钥。

```
import { huks } from '@kit.UniversalKeystoreKit';
import { trustedAuthentication } from '@kit.DeviceSecurityKit';

let keyAlias = "testWrapKey";
let properties: Array<huks.HuksParam> = [
  {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE
  },
  {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_GCM
  },
  /* 生成密钥时指定允许加密导出 */
  {
    tag: huks.HuksTag.HUKS_TAG_IS_ALLOWED_WRAP,
    value: true
  }
];

let options: huks.HuksOptions = {
  properties: properties,
};

let wrapKeyProperties: Array<huks.HuksParam> = [
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_WRAP_TYPE,
    value: huks.HuksKeyWrapType.HUKS_KEY_WRAP_TYPE_HUK_BASED
  }
];

let wrapKeyOptions: huks.HuksOptions = {
  properties: wrapKeyProperties,
};

let wrappedKey: Uint8Array;

async function testGenerateKey() {
  await huks.generateKeyItem(keyAlias, options)
    .then((data) => {
      console.info(`promise: generateKeyItem success`);
    })
    .catch((error: Error) => {
      console.error(`promise: generateKeyItem failed`);
    });
}

async function testWrapKey(){
  await testGenerateKey();

  await huks.wrapKeyItem(keyAlias, wrapKeyOptions)
    .then((data) => {
      wrappedKey = data.outData as Uint8Array;
      console.info(`promise: wrapKeyItem success, data = ${JSON.stringify(data)}`);
    })
    .catch((error: Error) => {
      console.error(`promise: wrapKeyItem failed`);
    });

  challenge = new Uint8Array(32);
  let label: trustedAuthentication.TUILable;
  let authID: bigint;
  /* 认证TUI PIN之前需要先创建数字盾，请参考数字盾服务，authID和label仅做示例 */
  let authToken = await trustedAuthentication.trustedAuthentication(challenge, authID, label);
  wrapKeyOptions.wrapKeyProperties.push({
    tag: huks.HuksTag.HUKS_TAG_AUTH_TOKEN,
    value: authToken.authToken
  })

  await huks.unwrapKeyItem(keyAlias, wrapKeyOptions, wrappedKey)
    .then((data) => {
      console.info(`promise: unwrapKeyItem success`);
    })
    .catch((error: Error) => {
      console.error(`promise: unwrapKeyItem failed`);
    });
}
```
