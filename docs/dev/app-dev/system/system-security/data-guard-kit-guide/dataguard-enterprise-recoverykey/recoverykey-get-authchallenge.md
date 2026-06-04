---
displayed_sidebar: appDevSidebar
title: "获取挑战值"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/recoverykey-get-authchallenge
---

## 场景介绍

请求获取挑战值，在发起更新企业公钥证书、删除已有企业恢复密钥流程前，需要获取挑战值，并进行签名，以确认企业身份。

## 接口说明

详细接口说明可参考[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey)。

| 接口名 | 描述 |
| --- | --- |
| [getAuthChallenge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#getauthchallenge)(): Promise<Uint8Array> | 使用Promise方式获取挑战值。 |

## 开发步骤

1. 导入模块。

   ```
   import { recoveryKey } from '@kit.EnterpriseDataGuardKit';
   import { BusinessError } from '@kit.BasicServicesKit';
   ```
2. 调用接口[getAuthChallenge](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataguard-recoverykey#getauthchallenge)，获取挑战值。

   ```
   function testGetAuthChallenge() {
     recoveryKey.getAuthChallenge().then((challenge: Uint8Array) => {
       console.info(`Succeeded in getting challenge.`);
     }).catch((error: BusinessError) => {
       console.error(`Failed to get challenge. Code: ${error.code}, message: ${error.message}`);
     });
   }
   ```
