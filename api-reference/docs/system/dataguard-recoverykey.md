---
title: "recoveryKey（企业恢复密钥）"
upstream_id: "harmonyos-references/dataguard-recoverykey"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:37.965370"
---

# recoveryKey（企业恢复密钥）

在确保用户数据安全性的基础上，提供用于加密硬盘数据的安全解密机制和重置锁屏密码的企业恢复密钥。

仅供企业安全管控类MDM应用申请权限后使用。

起始版本： 5.0.3(15)

#### 导入模块

```
import { recoveryKey } from '@kit.EnterpriseDataGuardKit';
```

#### EnterpriseRecoveryKeyInfo

企业恢复密钥及相关加密参数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.PCService.RecoveryKeyService

起始版本： 5.0.3(15)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| enterpriseRecoveryKey | Uint8Array | 否 | 否 | AES-GCM-256加密后的企业恢复密钥。 |
| exportPublicKey | Uint8Array | 否 | 否 | AES-GCM-256加密时使用的临时公钥。 |
| iv | Uint8Array | 否 | 否 | AES-GCM-256加密时使用的iv。 |
| tag | Uint8Array | 否 | 否 | AES-GCM-256加密时使用的tag。 |

#### getEnterpriseRecoveryKey

getEnterpriseRecoveryKey(userId: number): Promise<EnterpriseRecoveryKeyInfo>

获取企业恢复密钥。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_RECOVERY_KEY

系统能力： SystemCapability.PCService.RecoveryKeyService

起始版本： 5.0.3(15)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | number | 是 | 需要获取企业恢复密钥的用户ID。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回企业恢复密钥及相关加密参数的对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[企业数据保护服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-dataguard)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1014400001 | System service exception. |
| 1014400201 | Invalid device type, current device is not enterprise device. |
| 1014400202 | Invalid userId. |
| 1014400203 | Enterprise recovery key is already existed. |

示例：

```
import { buffer } from '@kit.ArkTS';
import { BusinessError, osAccount } from '@kit.BasicServicesKit';
import { recoveryKey } from '@kit.EnterpriseDataGuardKit';

async function getEnterpriseRecoveryKey() {
  try {
    let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
    let userId: number = await accountManager.getOsAccountLocalId();
    recoveryKey.getEnterpriseRecoveryKey(userId).then((info: recoveryKey.EnterpriseRecoveryKeyInfo) => {
      console.info(`Succeeded in getting enterprise recovery key.`);
      console.info(`EnterpriseRecoveryKeyInfo enterpriseRecoveryKey: ${buffer.from(info.enterpriseRecoveryKey)
        .toString('hex')}`);
      console.info(`EnterpriseRecoveryKeyInfo exportPublicKey: ${buffer.from(info.exportPublicKey).toString('hex')}`);
      console.info(`EnterpriseRecoveryKeyInfo iv: ${buffer.from(info.iv).toString('hex')}`);
      console.info(`EnterpriseRecoveryKeyInfo tag: ${buffer.from(info.tag).toString('hex')}`);
    }).catch((error: BusinessError) => {
      console.error(`Failed to get enterprise recovery key. Code: ${error.code}, message: ${error.message}`);
    });
  } catch (e) {
    console.error(`Failed to testGetEnterpriseRecoveryKey. Code: ${e.code}, message: ${e.message}`);
  }
}
```

#### getAuthChallenge

getAuthChallenge(): Promise<Uint8Array>

获取挑战值，在发起更新企业公钥证书、删除企业恢复密钥数据流程前，需要先获取挑战值。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_RECOVERY_KEY

系统能力： SystemCapability.PCService.RecoveryKeyService

起始版本： 5.0.3(15)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回用于更新企业公钥证书或删除企业恢复密钥数据时的挑战值。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[企业数据保护服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-dataguard)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 1014400001 | System service exception. |
| 1014400201 | Invalid device type, current device is not enterprise device. |

示例：

```
import { buffer } from '@kit.ArkTS';
import { BusinessError } from '@kit.BasicServicesKit';
import { recoveryKey } from '@kit.EnterpriseDataGuardKit';

recoveryKey.getAuthChallenge().then((challenge: Uint8Array) => {
  console.info(`Succeeded in getting challenge. challenge is: ${buffer.from(challenge).toString('hex')}`);
}).catch((error: BusinessError) => {
  console.error(`Failed to get challenge. Code: ${error.code}, message: ${error.message}`);
});
```

#### updateEnterpriseCertificate

updateEnterpriseCertificate(signature: Uint8Array, cert: Uint8Array): Promise<number>

更新企业公钥证书流程，需要先调[getAuthChallenge](#getauthchallenge)接口获取挑战值并[签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-signature)。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_RECOVERY_KEY

系统能力： SystemCapability.PCService.RecoveryKeyService

起始版本： 5.0.3(15)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| signature | Uint8Array | 是 | 挑战值的[签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-signature)。 |
| cert | Uint8Array | 是 | PEM格式的公钥证书，以二进制的格式完整传递。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回0表示更新企业公钥证书成功，失败无返回。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[企业数据保护服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-dataguard)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1014400001 | System service exception. |
| 1014400201 | Invalid device type, current device is not enterprise device. |
| 1014400204 | Invalid signature. |
| 1014400205 | Invalid cert. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { recoveryKey } from '@kit.EnterpriseDataGuardKit';

// 在实际应用中，signature 应替换为由企业的公钥、私钥和挑战值生成的签名。
let signature: Uint8Array = new Uint8Array([0]);
// 在实际应用中，cert 应需替换为企业证书数据。
let cert: Uint8Array = new Uint8Array([0]);
recoveryKey.updateEnterpriseCertificate(signature, cert).then((ret: number)=>{
  console.info(`Succeeded in updating certificate. result is: ${ret}`);
}).catch((error: BusinessError) => {
  console.error(`Failed to update certificate. Code: ${error.code}, message: ${error.message}`);
});
```

#### deleteEnterpriseRecoveryKey

deleteEnterpriseRecoveryKey(userId: number, signature: Uint8Array): Promise<number>

删除企业恢复密钥相关数据，需要先调[getAuthChallenge](#getauthchallenge)接口获取挑战值并[签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-signature)。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_RECOVERY_KEY

系统能力： SystemCapability.PCService.RecoveryKeyService

起始版本： 5.0.3(15)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | number | 是 | 需要删除企业恢复密钥的用户ID。 |
| signature | Uint8Array | 是 | 挑战值的[签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-signature)。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回0表示删除企业恢复密钥成功，失败无返回。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[企业数据保护服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-dataguard)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. |
| 1014400001 | System service exception. |
| 1014400201 | Invalid device type, current device is not enterprise device. |
| 1014400202 | Invalid userId. |
| 1014400204 | Invalid signature. |

示例：

```
import { BusinessError, osAccount } from '@kit.BasicServicesKit';
import { recoveryKey } from '@kit.EnterpriseDataGuardKit';

async function deleteEnterpriseRecoveryKey() {
  try {
    // 在实际应用中，signature 应替换为由企业的公钥、私钥和挑战值生成的签名。
    let signature: Uint8Array = new Uint8Array([0]);
    let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
    let userId: number = await accountManager.getOsAccountLocalId();
    recoveryKey.deleteEnterpriseRecoveryKey(userId, signature).then((ret: number)=>{
      console.info(`Succeeded in deleting enterprise recovery key. result is: ${ret}`);
    }).catch((error: BusinessError)=>{
      console.error(`Failed to delete enterprise recovery key. Code: ${error.code}, message: ${error.message}`);
    });
  } catch (e) {
    console.error(`Failed to deleteEnterpriseRecoveryKey. Code: ${e.code}, message: ${e.message}`);
  }
}
```

#### verifyUserIdentityEnterprise

verifyUserIdentityEnterprise(userId: number, userType: number, pinCode: string): Promise<void>

验证企业用户身份。在导出企业恢复密钥以重置锁屏密码之前，请先验证用户的锁屏密码。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_RECOVERY_KEY

系统能力： SystemCapability.PCService.RecoveryKeyService

起始版本： 6.0.0(20)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | number | 是 | 需要导出企业恢复密钥的用户ID。 |
| userType | number | 是 | [用户类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-osaccount#osaccounttype)。可以通过调用[getOsAccountType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-osaccount#getosaccounttype9)获取。 |
| pinCode | string | 是 | 用户锁屏密码，字符长度不超过64位。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[企业数据保护服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-dataguard)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 1014400001 | System service exception. |
| 1014400103 | Authentication is failed. |
| 1014400201 | Invalid device type, current device is not enterprise device. |
| 1014400202 | Invalid userId. |

示例：

```
import { BusinessError, osAccount } from '@kit.BasicServicesKit';
import { recoveryKey } from '@kit.EnterpriseDataGuardKit';

/**
 * @param pinCode 用户输入的锁屏密码
 */
async function verifyUserIdentityEnterprise(pinCode: string) {
  try {
    let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
    let accountType: osAccount.OsAccountType = await accountManager.getOsAccountType();

    let userId: number = await accountManager.getOsAccountLocalId();
    let userType: number = accountType.valueOf();
    recoveryKey.verifyUserIdentityEnterprise(userId, userType, pinCode).then(() => {
      console.info(`Succeeded in verifying user identity.`);
    }).catch((error: BusinessError) => {
      console.error(`Failed to verified user identity. Code: ${error.code}, message: ${error.message}`);
    })
  } catch (e) {
    console.error(`Failed to verifyUserIdentityEnterprise. Code: ${e.code}, message: ${e.message}`);
  }
}
```

#### verifyUserByDialog

verifyUserByDialog(userId: number): Promise<void>

通过弹框验证企业用户身份。在导出企业恢复密钥以重置锁屏密码之前，通过弹框验证企业用户身份。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_RECOVERY_KEY

系统能力： SystemCapability.PCService.RecoveryKeyService

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | number | 是 | 需要导出企业恢复密钥的用户ID，需为正整数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[企业数据保护服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-dataguard)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 1014400001 | System service exception. |
| 1014400006 | The user canceled the identity authentication process. |
| 1014400102 | Identity authentication timed out. |
| 1014400201 | Invalid device type, current device is not enterprise device. |
| 1014400202 | Invalid userId. |

示例：

```
import { osAccount, BusinessError } from '@kit.BasicServicesKit';
import { recoveryKey } from '@kit.EnterpriseDataGuardKit';

async function getEnterpriseRecoveryKeyForPinByDialog() {
  try {
    let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
    let userId: number = await accountManager.getOsAccountLocalId();
    recoveryKey.verifyUserByDialog(userId).then(() => {
      console.info(`Succeeded in verifying user identity by dialog.`);
    }).catch((error: BusinessError) => {
      console.error(`Failed to verified user identity by dialog. Code: ${error.code}, message: ${error.message}`);
    })
  } catch (e) {
    console.error(`Failed to getEnterpriseRecoveryKeyForPinByDialog. Code: ${e.code}, message: ${e.message}`);
  }
}
```

#### getEnterpriseRecoveryKeyForResettingPin

getEnterpriseRecoveryKeyForResettingPin(userId: number, userType: number): Promise<EnterpriseRecoveryKeyInfo>

导出用于重置锁屏密码的企业恢复密钥。先需要调用[verifyUserIdentityEnterprise](#verifyuseridentityenterprise)或[verifyUserByDialog](#verifyuserbydialog)接口验证身份，并在30秒内调用此接口。若超时后调用，系统会返回异常代码[1014400001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-dataguard#section1014400001-系统内部错误)。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ENTERPRISE_RECOVERY_KEY

系统能力： SystemCapability.PCService.RecoveryKeyService

起始版本： 6.0.0(20)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | number | 是 | 需要导出企业恢复密钥的用户ID。 |
| userType | number | 是 | [用户类型](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-osaccount#osaccounttype)。可以通过调用[getOsAccountType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-osaccount#getosaccounttype9)获取。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回企业恢复密钥及相关加密参数的对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[企业数据保护服务错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-enterprise-dataguard)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 1014400001 | System service exception. |
| 1014400201 | Invalid device type, current device is not enterprise device. |
| 1014400202 | Invalid userId. |

示例：

```
import { buffer } from '@kit.ArkTS';
import { BusinessError, osAccount } from '@kit.BasicServicesKit';
import { recoveryKey } from '@kit.EnterpriseDataGuardKit';

async function getEnterpriseRecoveryKeyForResettingPin() {
  try {
    let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
    let accountType: osAccount.OsAccountType = await accountManager.getOsAccountType();
    // 获取用户ID
    let userId: number = await accountManager.getOsAccountLocalId();
    // 获取用户类型
    let userType: number = accountType.valueOf();
    recoveryKey.getEnterpriseRecoveryKeyForResettingPin(userId, userType)
      .then((info: recoveryKey.EnterpriseRecoveryKeyInfo) => {
        console.info(`Succeeded in getting enterprise recovery key for resetting pin.`);
        // 打印企业恢复密钥及相关加密参数
        console.info(`EnterpriseRecoveryKeyInfo enterpriseRecoveryKey: ${buffer.from(info.enterpriseRecoveryKey)
          .toString('hex')}`);
        console.info(`EnterpriseRecoveryKeyInfo exportPublicKey: ${buffer.from(info.exportPublicKey)
          .toString('hex')}`);
        console.info(`EnterpriseRecoveryKeyInfo iv: ${buffer.from(info.iv).toString('hex')}`);
        console.info(`EnterpriseRecoveryKeyInfo tag: ${buffer.from(info.tag).toString('hex')}`);
      }).catch((err: BusinessError) => {
      console.error(`Failed to get enterprise recovery key for resetting pin. Code: ${err.code}, message: ${err.message}`);
    })
  } catch (e) {
    console.error(`Failed to getEnterpriseRecoveryKeyForResettingPin. Code: ${e.code}, message: ${e.message}`);
  }
}
```
