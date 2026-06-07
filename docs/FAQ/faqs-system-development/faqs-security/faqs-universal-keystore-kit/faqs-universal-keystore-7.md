---
format: md
title: "如何获取HarmonyOS签名证书的公钥信息"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-universal-keystore-kit/faqs-universal-keystore-7
---


获取HarmonyOS签名可以参考指南手动签名章节，公钥用于给数据加密，用公钥加密的数据只能使用私钥解密，可以通过以下命令获取公钥信息（需要提前安装安全套接字层密码库[Openssl](https://www.openssl.org/)）：

```
openssl x509 -in xxx.cer -pubkey -noout
```

**参考链接**

[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)
