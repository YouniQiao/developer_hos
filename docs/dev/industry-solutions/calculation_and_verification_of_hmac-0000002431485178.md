---
title: "HMAC的计算与验证"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/calculation_and_verification_of_hmac-0000002431485178
---

## 场景介绍

HMAC的计算与验证是实用工具类应用的高频使用场景之一，通常用于确保数据在传输或存储过程中未被篡改。

本示例基于[@ohos.security.cryptoFramework](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework)的MAC（Message Authentication Code，消息认证码）计算能力，使用指定的摘要算法实现HMAC的计算与验证，发送方发送的HMAC与接收方计算的HMAC一致即代表数据未被篡改。

## 效果预览

![](./img/375f58c0.png "点击放大")

## 实现思路

1. 使用[cryptoFramework.createSymKeyGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatesymkeygenerator)、[SymKeyGenerator.convertKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#convertkey-1)方法，生成HMAC的对称密钥(SymKey)。

   ```
   async function genSymKeyByData(symKeyData: Uint8Array): Promise<cryptoFramework.SymKey> {
     let symKeyBlob: cryptoFramework.DataBlob = { data: symKeyData };
     let aesGenerator = cryptoFramework.createSymKeyGenerator('HMAC|SHA256');
     let symKey = await aesGenerator.convertKey(symKeyBlob);
     return symKey;
   }
   ```
2. 使用[cryptoFramework.createMac](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#cryptoframeworkcreatemac)方法根据摘要算法新建Mac实例，并初始化该实例。

   ```
   let macAlgName = 'SHA256'; // 摘要算法名，根据具体采用摘要算法设置
   let mac = cryptoFramework.createMac(macAlgName);
   await mac.init(key);
   ```
3. 使用[Mac.update](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#update-8)方法传入自定义消息，进行消息认证码计算。

   ```
   let message = data; // 待进行HMAC的数据
   await mac.update({ data: new Uint8Array(buffer.from(message, 'utf-8').buffer) });
   let macResult = await mac.doFinal();
   ```
4. 根据原始数据和密钥再次计算消息认证码，并与接收的消息认证码进行比对，比对无误代表数据未被篡改。

   ```
   async function verifyHmac(data: string, secretKey: string, receivedMac: Uint8Array): Promise<boolean> {
     let computedMac = await computeHmac(data, secretKey);
     return computedMac.toString() === receivedMac.toString();
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──components
│  │  └──InputCard.ets             // 输入框组件
│  ├──constants
│  │  └──CommonConstants.ets       // 常量
│  ├──entryability
│  │  └──EntryAbility.ets          // 入口
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets    // 应用备份恢复能力
│  ├──model
│  │  └──HMACMode.ets              // 操作模式枚举
│  ├──pages
│  │  └──MainPage.ets              // 主页
│  └──utils
│     └──HMACUtils.ets             // 加密工具
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[@ohos.security.cryptoFramework（加解密算法库框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework)

## 代码下载

[HMAC的计算与验证示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101759.94299291982752897782583257202423%3A50001231000000%3A2800%3AD394CEFB241F539C9362EBE1768A9B1A658A2FECBF48D638B15000B7E6234CC9.zip?needInitFileName=true)
