---
title: "动态口令生成"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/dynamic_password_generation-0000002489836613
---

## 场景介绍

动态口令生成是实用工具类应用的高频使用场景之一，若用户开启两步验证，在银行、游戏等软件进行账号登录、权限变更、资金转账等涉及隐私的安全操作时，需要通过手机生成动态口令完成身份二次验证。

本示例主要基于[加解密算法库框架](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework)、[消息认证码算法](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-compute-mac-overview)和TOTP（Time-Based One-Time Password，基于时间的一次性密码）算法，实现生成六位动态口令的功能。

## 效果预览

![](./img/5a4b4b0f.png "点击放大")

## 实现思路

1. 使用从服务端共享的一个唯一的、随机生成的共享密钥secret（通常是Base32编码的16位字符串）生成[HMAC](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec#hmac)对称密钥。本示例中使用指定字符串代替，开发者可根据实际流程替换。

   ```
   static genSymKeyByData(secret: Uint8Array) {
     let aesGenerator = cryptoFramework.createSymKeyGenerator('HMAC');
     let symKeyBlob: cryptoFramework.DataBlob = { data: secret };
     let symKey = aesGenerator.convertKeySync(symKeyBlob);
     return symKey;
   }
   ```
2. 根据当前时间戳与时间步长timeStep（通常为30秒）计算时间步长数，并调整为大端序。同时，需要保证用户设备和服务端时钟大致同步，否则会导致计算结果不一致而影响后续生成结果。

   ```
   static calculateTimeCounter(timeStep: number): Uint8Array {
     let timeCounterNum = Math.floor(Date.now() / 1000 / timeStep); // 计算时间步长数
     let timeCounter = new DataView(new ArrayBuffer(8));
     timeCounter.setBigUint64(0, BigInt(timeCounterNum), false); // 调整为大端序
     return new Uint8Array(timeCounter.buffer);
   }
   ```
3. 基于摘要算法SHA1，创建消息认证码实例，传入对称密钥和时间步长数，通过[doFinalSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework#dofinalsync12-1)方法计算哈希值。

   ```
   let hmac = cryptoFramework.createMac('SHA1');
   hmac.initSync(symKey);
   hmac.updateSync({ data: timeCounter });
   let hash = hmac.doFinalSync().data;
   ```
4. 对于生成的哈希值，先取最后1字节低4位作为偏移量，再从偏移量开始截取4字节数据，将其转换为一个整数，最后通过取模，得到6位整数，如不足，则左边补0。

   ```
   static genOTPByHash(hash: Uint8Array, digits: number): string {
     let offset = hash[hash.length - 1] & 0x0F; // 取低4位作为偏移量
     let binary = ((hash[offset] & 0x7F) << 24) | ((hash[offset + 1] & 0xFF) << 16) |
         ((hash[offset + 2] & 0xFF) << 8) | (hash[offset + 3] & 0xFF); // 从偏移量开始截取4字节数据
     let otp = binary % Math.pow(10, digits); // 取模得到后6位
     return otp.toString().padStart(digits, '0');
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──constants
│  │  └──Constants.ets                  // 常量类
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──TokenPage.ets                  // 口令展示页面
│  └──utils
│     ├──HMACUtil.ets                   // 消息认证码工具类
│     └──LogUtil.ets                    // 日志工具类
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[@ohos.security.cryptoFramework（加解密算法库框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework)

[消息认证码计算介绍及算法规格](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-compute-mac-overview)

[对称密钥生成和转换规格](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-sym-key-generation-conversion-spec)

## 代码下载

[动态口令生成示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101800.81194380137833105599504575553253%3A50001231000000%3A2800%3A8BCA23BEFFD63449AFC498B003FBC515D2DECBDFC6A6E6F7D3B403087191263D.zip?needInitFileName=true)
