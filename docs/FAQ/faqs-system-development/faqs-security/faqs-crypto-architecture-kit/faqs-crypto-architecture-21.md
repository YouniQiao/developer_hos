---
format: md
title: "RSA加密数据报错401"
original_url: /docs/FAQ/faqs-system-development/faqs-security/faqs-crypto-architecture-kit/faqs-crypto-architecture-21
upstream_id: FAQ/faqs-system-development/faqs-security/faqs-crypto-architecture-kit/faqs-crypto-architecture-21
last_sync: 2026-06-07
sync_hash: 2ea97c20
---
生成RSA密钥长度与生成密钥时传入参数有关，例如生成2048位RSA密钥参数可以传'RSA2048|PRIMES\_2'或者'RSA2048|PRIMES\_3'。

**参考链接**

[RSA](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-encryption-decryption/crypto-encrypt-decrypt-spec/crypto-asym-encrypt-decrypt-spec#rsa)
