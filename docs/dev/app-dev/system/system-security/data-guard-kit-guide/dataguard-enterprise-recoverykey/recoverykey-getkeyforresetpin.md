---
displayed_sidebar: appDevSidebar
title: "获取重置锁屏密码的企业恢复密钥"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-getkeyforresetpin
---

## 场景介绍

为企业用户提供获取企业恢复密钥的能力，可以在用户忘记锁屏密码时，使用该企业恢复密钥重置用户的锁屏密码。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey)。

| 接口名 | 描述 |
| --- | --- |
| [verifyUserIdentityEnterprise](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#verifyuseridentityenterprise)(userId: number, userType: number, pinCode: string): Promise<void> | 使用Promise方式验证用户锁屏密码。 |
| [verifyUserByDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#verifyuserbydialog)(userId: number): Promise<void> | 通过Dialog弹框验证用户锁屏密码。 |
| [getEnterpriseRecoveryKeyForResettingPin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#getenterpriserecoverykeyforresettingpin)(userId: number, userType: number): Promise<[EnterpriseRecoveryKeyInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#enterpriserecoverykeyinfo)> | 使用Promise方式获取用于重置锁屏密码的企业恢复密钥。 |

## 开发步骤

1. 导入模块。

   ```
   import { buffer } from '@kit.ArkTS';
   import { BusinessError, osAccount } from '@kit.BasicServicesKit';
   import { recoveryKey } from '@kit.EnterpriseDataGuardKit';
   ```
2. 通过验证锁屏密码，获取重置锁屏密码的恢复密钥。调用接口[verifyUserIdentityEnterprise](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#verifyuseridentityenterprise)验证用户的锁屏密码，需提供用户ID、用户类型及用户锁屏密码，并在30秒内调用接口[getEnterpriseRecoveryKeyForResettingPin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#verifyuserbydialog)以获取用于重置锁屏密码的企业恢复密钥。若超时后调用，系统会返回异常代码[1014400001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-error-code#section1014400001-系统内部错误)。

   ```
   /**
    * @param pinCode 用户输入的锁屏密码
    */
   async function testGetEnterpriseRecoveryKeyForPin(pinCode: string) {
     try {
       let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
       let userId: number = await accountManager.getOsAccountLocalId();
       let accountType: osAccount.OsAccountType = await accountManager.getOsAccountType();
       console.info(`getOsAccountType,userId: ${userId}, accountType: ${accountType}`);
       let userType: number = accountType.valueOf();

       recoveryKey.verifyUserIdentityEnterprise(userId, userType, pinCode).then(() => {
         console.info(`Succeeded in verifying user identity.`);
         recoveryKey.getEnterpriseRecoveryKeyForResettingPin(userId, userType)
           .then((info: recoveryKey.EnterpriseRecoveryKeyInfo) => {
             console.info(`Succeeded in getting enterprise recovery key for resetting pin.`);
             console.info(`EnterpriseRecoveryKeyInfo enterpriseRecoveryKey: ${buffer.from(info.enterpriseRecoveryKey)
               .toString('hex')}`);
             console.info(`EnterpriseRecoveryKeyInfo exportPublicKey: ${buffer.from(info.exportPublicKey)
               .toString('hex')}`);
             console.info(`EnterpriseRecoveryKeyInfo iv: ${buffer.from(info.iv).toString('hex')}`);
             console.info(`EnterpriseRecoveryKeyInfo tag: ${buffer.from(info.tag).toString('hex')}`);
           })
           .catch((err: BusinessError) => {
             console.error(`Failed to get enterprise recovery key for resetting pin. Code: ${err.code}, message: ${err.message}`);
           })
       }).catch((error: BusinessError) => {
         console.error(`Failed to verified user identity. Code: ${error.code}, message: ${error.message}`);
       })
     } catch (e) {
       console.error(`Failed to getEnterpriseRecoveryKeyForPin. Code: ${e.code}, message: ${e.message}`);
     }
   }
   ```
3. 通过弹框验证锁屏密码，获取重置锁屏密码的恢复密钥。调用接口[verifyUserByDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#verifyuserbydialog)，通过Dialog弹框在5分钟内输入锁屏密码，点击确认后，并在30秒内调用接口[getEnterpriseRecoveryKeyForResettingPin](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#verifyuserbydialog)以获取用于重置锁屏密码的企业恢复密钥。若超时后调用，系统会返回异常代码[1014400001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-error-code#section1014400001-系统内部错误)。

   ```
   async function testGetEnterpriseRecoveryKeyForPinByDialog() {
     try {
       let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
       let userId: number = await accountManager.getOsAccountLocalId();
       let accountType: osAccount.OsAccountType = await accountManager.getOsAccountType();
       console.info(`getOsAccountType,userId: ${userId}, accountType: ${accountType}`);
       let userType: number = accountType.valueOf();

       recoveryKey.verifyUserByDialog(userId).then(() => {
         console.info(`Succeeded in verifying user identity by dialog.`);
         recoveryKey.getEnterpriseRecoveryKeyForResettingPin(userId, userType)
           .then((info: recoveryKey.EnterpriseRecoveryKeyInfo) => {
             console.info(`Succeeded in getting enterprise recovery key for resetting pin.`);
             console.info(`EnterpriseRecoveryKeyInfo enterpriseRecoveryKey: ${buffer.from(info.enterpriseRecoveryKey)
               .toString('hex')}`);
             console.info(`EnterpriseRecoveryKeyInfo exportPublicKey: ${buffer.from(info.exportPublicKey)
               .toString('hex')}`);
             console.info(`EnterpriseRecoveryKeyInfo iv: ${buffer.from(info.iv).toString('hex')}`);
             console.info(`EnterpriseRecoveryKeyInfo tag: ${buffer.from(info.tag).toString('hex')}`);
           })
           .catch((err: BusinessError) => {
             console.error(`Failed to get enterprise recovery key for resetting pin. Code: ${err.code}, message: ${err.message}`);
           })
       }).catch((error: BusinessError) => {
         console.error(`Failed to verified user identity by dialog. Code: ${error.code}, message: ${error.message}`);
       })
     } catch (e) {
       console.error(`Failed to getEnterpriseRecoveryKeyForPinByDialog. Code: ${e.code}, message: ${e.message}`);
     }
   }
   ```
