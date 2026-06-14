---
displayed_sidebar: appDevSidebar
title: "获取解密硬盘数据的企业恢复密钥"
original_url: /docs/dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyfordecryptdata
format: md
upstream_id: dev/app-dev/system/system-security/data-guard-kit-guide/dataguard-enterprise-recoverykey/recoverykey-getkeyfordecryptdata
last_sync: 2026-06-13
sync_hash: 55cc2a80
---


## 场景介绍

为应用提供获取企业恢复密钥的能力，在企业公钥证书配置成功后，可直接获取企业恢复密钥，用于解密已加密的硬盘数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/FE3XDj3IS7i1QG7IBtIMsA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260613T014232Z&HW-CC-Expire=86400&HW-CC-Sign=9FAE39B3955228D28EC21A58DB885889974B252D39E2B521348B6962BB824377) 

企业恢复密钥仅可被获取一次，获取到企业恢复密钥后，可在持有企业私钥的设备上解密，并进行相应的存储。如果需要再次获取，需要先调用[删除企业恢复密钥](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-delete "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-delete")能力，再调用该能力。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey")。

| 接口名 | 描述 |
| --- | --- |
| [getEnterpriseRecoveryKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#getenterpriserecoverykey "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#getenterpriserecoverykey")(userId: number): Promise<[EnterpriseRecoveryKeyInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#enterpriserecoverykeyinfo "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#enterpriserecoverykeyinfo")> | 使用Promise方式获取恢复密钥。 |

## 开发步骤

1. 导入模块。

   ```
   import { recoveryKey } from '@kit.EnterpriseDataGuardKit';
   import { BusinessError, osAccount } from '@kit.BasicServicesKit';
   ```
2. 调用接口[getEnterpriseRecoveryKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#getenterpriserecoverykey "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#getenterpriserecoverykey")，传入需要获取企业恢复密钥的用户ID，获取企业恢复密钥。

   ```
   async function testGetEnterpriseRecoveryKey() {
     try {
       let accountManager: osAccount.AccountManager = osAccount.getAccountManager();
       let userId: number = await accountManager.getOsAccountLocalId();
       recoveryKey.getEnterpriseRecoveryKey(userId).then((info: recoveryKey.EnterpriseRecoveryKeyInfo) => {
         console.info(`Succeeded in getting enterprise recovery key.`);
       }).catch((error: BusinessError) => {
         console.error(`Failed to get enterprise recovery key. Code: ${error.code}, message: ${error.message}`);
       });
     } catch (e) {
       console.error(`Failed to testGetEnterpriseRecoveryKey. Code: ${e.code}, message: ${e.message}`);
     }
   }
   ```