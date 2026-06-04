---
title: "三种RSA加解密方法"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/rsa_encryption_and_decryption-0000002465072997
---

## 场景介绍

RSA加解密是实用工具类应用的高频使用场景之一，可以在传递信息时有效进行信息加密。

本示例通过[@ohos.security.cryptoFramework](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework)实现字符串RSA加解密，主要用到3种方式：RSA非对称密钥（PKCS1模式）、RSA非对称密钥长数据分段加解密、RSA非对称密钥（PKCS1\_OAEP模式）。

## 效果预览

![](./img/70b8e396.png "点击放大")

## 实现思路

RSA非对称密钥（PKCS1模式）、RSA非对称密钥长数据分段加解密、RSA非对称密钥（PKCS1\_OAEP模式）这三种方式的流程相似，但其中的数据处理和参数配比存在细微区别。

* 加密：通过[@ohos.security.cryptoFramework](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework)指定“RSA密钥类型”RSA512和“素数个数”PRIMES\_2来创建RSA-512密钥生成器实例，向实例内传入“非对称密钥类型”RSA512和“填充模式PKCS1”创建RSA-PKCS1加密器。传入对应的ENCRYPT\_MODE加密参数以及密钥中的公钥初始化加密器。

  成功初始化加密器后，传入需要加密的信息input（input是经过转换处理的，原始信息message是string类型需要转换为DataBlob类型），并且将加密后的二进制信息通过Base64编码助手实例转换为string类型的信息返回。
* 解密：通过cryptoFramework指定“RSA密钥类型”RSA512和“素数个数”PRIMES\_2来创建RSA-512生成器实例，向实例内传入“非对称密钥类型”RSA512和“填充模式PKCS1”创建RSA-PKCS1解密器。传入对应的ENCRYPT\_MODE解密参数以及密钥中的私钥初始化解密器。

  成功初始化解密器以后传入需要解密的信息input（input是经过转换处理的，原始信息message是string类型需要转换为DataBlob类型），并且将加密后的二进制信息通过Base64编码助手实例转换成string类型的信息返回。

  ```
  // 1.RSA加解密PKCS1模式加密过程
  // 将公钥数据封装为DataBlob对象
  let priKeyBlob: cryptoFramework.DataBlob = { data: pubKey };
  // 转换公钥并生成密钥对
  rsaGenerator.convertKey(null, pubKeyBlob, (err, keyPair) => {
    // 指定“RSA密钥类型”RSA512和“素数个数”PRIMES_2来创建RSA-512密钥生成器
    let rsaGenerator = cryptoFramework.createAsyKeyGenerator('RSA512|PRIMES_2');
    // 传入“非对称密钥类型”RSA512和“填充模式PKCS1”创建RSA-PKCS1加密器
    let cipher = cryptoFramework.createCipher('RSA512|PKCS1');
    // 初始化加密器
    cipher.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, keyPair.pubKey, null, (err, data) => {
      // 将输入消息转为Uint8Array
      let input: cryptoFramework.DataBlob = { data: stringToUint8Array(message) };
      // 执行加密操作
      cipher.doFinal(input, (err, data) => {
        // 将加密结果转为Base64字符串
        let result = that.encodeToStringSync(data.data);
        callback(result); // 通过回调返回加密结果
      })
    })
  })
  // 2.RSA加解密PKCS1模式解密过程
  // 指定“RSA密钥类型”RSA512和“素数个数”PRIMES_2来创建RSA-512密钥生成器
  let rsaGenerator = cryptoFramework.createAsyKeyGenerator(RSA512_PRIMES_2);
  // 传入“非对称密钥类型”RSA512和“填充模式PKCS1”创建解密器
  let cipher = cryptoFramework.createCipher(RSA512_PKCS1);
  // 创建Base64编码助手实例
  let that = new util.Base64Helper();
  // 将Base64编码的私钥解码为二进制数据
  let priKey = that.decodeSync(RSA_DECRYPT_KEY);
  // 将私钥数据封装为DataBlob对象
  let priKeyBlob: cryptoFramework.DataBlob = { data: priKey };
  // 转换私钥并生成密钥对
  rsaGenerator.convertKey(null, priKeyBlob, (err, keyPair) => {
    // 初始化解密器
    cipher.init(cryptoFramework.CryptoMode.DECRYPT_MODE, keyPair.priKey, null, (err, data) => {
        // 将Base64编码的密文解码为二进制数据
        let newMessage = that.decodeSync(message);
        // 将密文数据封装为DataBlob对象
        let input: cryptoFramework.DataBlob = { data: newMessage };
        // 执行解密操作
        cipher.doFinal(input, (err, data) => {
          // 将解密结果转为字符串
          let result = uint8ArrayToString(data.data);
          callback(null,result); // 通过回调返回解密结果
        })
    })
  })
  ```

* RSA非对称密钥长数据分段加解密的加解密过程与RSA非对称密钥（PKCS1模式）类似，区别在于对数据进行了分段循环处理。当明文大于单次加解密支持的数据长度时，需要将待加解密数据分为合适长度的数据段，并对每个数据段执行加解密操作，此代码将数据按64个字节一组拆分，多次加密。使用1024位密钥，每次将生成128字节密文。

  ```
  // 长数据加密处理
  // 循环处理每个明文段
  for (let i = 0; i < plainText.data.length; i += 64) {
    // 获取当前段的数据
    let updateMessage = plainText.data.subarray(i, i + 64);
    // 将数据段封装为DataBlob对象
    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };
    // 对当前段进行加密
    let updateOutput = cipher.doFinalSync(updateMessageBlob);
    // 合并加密后的数据到总密文中
    let mergeText = new Uint8Array(cipherText.length + updateOutput.data.length);
    mergeText.set(cipherText);
    mergeText.set(updateOutput.data, cipherText.length);
    cipherText = mergeText;
  }
  // 将最终的密文数组封装为DataBlob对象并返回
  let cipherBlob: cryptoFramework.DataBlob = { data: cipherText };
  return cipherBlob;

  // 长数据解密处理
  // 循环处理每个密文段
  for (let i = 0; i < cipherText.data.length; i += 128) {
    // 获取当前段的密文数据
    let updateMessage = cipherText.data.subarray(i, i + 128);
    // 将密文段封装为DataBlob对象
    let updateMessageBlob: cryptoFramework.DataBlob = { data: updateMessage };
    // 对当前段进行解密
    let updateOutput = decoder.doFinalSync(updateMessageBlob);
    // 合并解密后的数据到总数据
    let mergeText = new Uint8Array(decryptText.length + updateOutput.data.length);
    mergeText.set(decryptText);
    mergeText.set(updateOutput.data, decryptText.length);
    decryptText = mergeText;
  }
  ```
* RSA非对称密钥（PKCS1\_OAEP模式）与RSA加解密PKCS1模式类似，区别在于可设置pSource字节流以定义OAEP填充的编码输入。

  ```
  // 加解密的cipher设置，将指定参数OAEP_MGF1_PSRC_UINT8ARR和pSourc设置为加密对象
  // RSA加解密PKCS1-OAEP模式填充字节流P。
  let pSource = new Uint8Array([1, 2, 3, 4]);
  cipher.setCipherSpec(cryptoFramework.CipherSpecItem.OAEP_MGF1_PSRC_UINT8ARR, pSource);
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                                  // 代码区
│  ├──common
│  │  ├──Decrypt.ets                                   // 解密页面
│  │  └──Encrypt.ets                                   // 加密页面
│  ├──entryAbility
│  │  └──EntryAbility.ets
│  ├──model
│  │  ├──CipherModel.ts                                // 加密与解密方法
│  │  └──Logger.ts                                     // 日志工具
│  └──pages
│     ├──Index.ets                                     // 首页
│     ├──RSA.ets                                       // 加解密方式选择页面
│     └──RSAPage.ets                                   // 加密与解密页面
└──entry/src/main/resources                            // 应用资源目录
```

## 参考文档

[@ohos.security.cryptoFramework（加解密算法库框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoframework)

[非对称密钥加解密算法规格](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/crypto-asym-encrypt-decrypt-spec)

## 代码下载

[三种RSA加解密方法示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210101759.02507045269908472268154942885478%3A50001231000000%3A2800%3AABD97D07B015EED22AA3CCF67F005DA85AD5E8465C27EB075BA31B99EDEAB536.zip?needInitFileName=true)
