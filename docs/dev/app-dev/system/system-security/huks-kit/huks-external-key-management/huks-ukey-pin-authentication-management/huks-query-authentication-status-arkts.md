---
displayed_sidebar: appDevSidebar
title: "查询认证状态(ArkTS)"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-query-authentication-status-arkts
format: md
---


从API 22开始，huksExternalCrypto提供PIN码认证状态查询功能接口。应用可以通过该接口查询PIN码是否认证通过。具体的场景介绍及规格，请参考[Ukey PIN码认证介绍及规格](/docs/dev/app-dev/system/system-security/huks-kit/huks-external-key-management/huks-ukey-pin-authentication-management/huks-ukey-pin-authentication-management-overview)。

## 开发步骤

1. 通过证书管理系统能力提供的[证书选择接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22)获取[keyUri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-certmanagerdialog#certreference22)，并将其作为resourceId。
2. 调用查询认证状态接口[getUkeyPinAuthState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptogetukeypinauthstate)验证PIN码。

## 开发案例

```
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function getUkeyPinAuthState(): Promise<huksExternalCrypto.HuksExternalPinAuthState> {
  let ret: huksExternalCrypto.HuksExternalPinAuthState = huksExternalCrypto.HuksExternalPinAuthState.HUKS_EXT_CRYPTO_PIN_NO_AUTH;
  try {
    /* 1.构造查询PIN码状态参数 */
    const testResourceId = JSON.stringify({
      providerName: "testProviderName",
      bundleName: "com.example.cryptoapplication",
      abilityName: "CryptoExtension",
      index: {
        key: "testKey"
      } as ESObject
    });
    const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];

    /* 2.调用getUkeyPinAuthState */
    await huksExternalCrypto.getUkeyPinAuthState(testResourceId, extProperties)
      .then((data) => {
        console.info(`promise: getUkeyPinAuthState success , data : ${data}`);
      }).catch((error: BusinessError) => {
        console.error(`promise: getUkeyPinAuthState failed, errCode : ${error.code}, errMsg : ${error.message}`);
      });
  } catch (error) {
    console.error(`promise: getUkeyPinAuthState input arg invalid`);
  }
  return ret;
}

async function testGetUkeyPinAuthState() {
  let ret: huksExternalCrypto.HuksExternalPinAuthState = await getUkeyPinAuthState();
  if (ret != huksExternalCrypto.HuksExternalPinAuthState.HUKS_EXT_CRYPTO_PIN_AUTH_SUCCEEDED) {
    console.error(`getUkeyPinAuthState failed`);
    return;
  }

  console.info(`getUkeyPinAuthState success`);
}
```
