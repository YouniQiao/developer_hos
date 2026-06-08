---
title: "群组密钥介绍"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-group-key/huks-group-key-overview
format: md
upstream_id: dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-group-key/huks-group-key-overview
last_sync: 2026-06-07
sync_hash: 853427f3
---
从API 23开始，HUKS支持群组密钥功能，该功能是针对同一开发者开发的多个HAP应用，提供的跨应用密钥共享能力。

当多个HAP在配置中指定相同的组标识时，可共享同一组密钥资源，实现密钥在开发者自有应用生态内的安全复用，无需重复生成或手动传递密钥，简化跨应用加密场景的密钥管理流程。

![](./img/9e56b59d.png)

* 仅在手机、平板、PC/2in1、智能穿戴上支持群组密钥功能。
* 群组密钥严格限定在同一开发者相同组的HAP范围内。不同开发者的相同组或者相同开发者的不同组，都无法相互访问对方的群组密钥，从而保障密钥的隔离性与安全性。

## 规格说明

| 支持的本地密钥操作 | API级别 | 说明 |
| --- | --- | --- |
| [密钥生成](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview) | 23+ | 支持生成群组密钥。 |
| [密钥导入](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview) | 23+ | 支持导入群组密钥。 |
| [加密/解密](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-encryption-decryption/huks-encryption-decryption-overview) | 23+ | 支持使用群组密钥进行加密/解密。 |
| [签名/验签](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-signing-signature-verification/huks-signing-signature-verification-overview) | 23+ | 支持使用群组密钥进行签名/验签。 |
| [密钥协商](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-agreement/crypto-key-agreement-overview) | 23+ | 支持使用群组密钥进行密钥协商。 |
| [密钥派生](/docs/dev/app-dev/system/system-security/crypto-architecture-kit/crypto-key-derivation/crypto-key-derivation-overview) | 23+ | 支持使用群组密钥进行密钥派生。 |
| [访问控制](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-identity-authentication/huks-identity-authentication-overview) | 23+ | 支持使用群组密钥进行二次访问控制。 |
| [HMAC](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview) | 23+ | 支持使用群组密钥进行HMAC。 |
| [密钥删除](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-delete-key/huks-delete-key-arkts) | 23+ | 支持删除群组密钥。 |
| [密钥证明](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-attestation/huks-key-attestation-overview) | 23+ | 支持群组密钥的合法性证明。 |
| [查询密钥是否存在](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-check-key/huks-check-key-arkts) | 23+ | 支持查询群组密钥是否存在。 |
| [获取密钥属性](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-obtain-key-properties/huks-obtain-key-properties-arkts) | 23+ | 支持查询群组密钥的属性。支持获取DeveloperID和GroupID信息。 |
| [密钥导出](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-export-key/huks-export-key-arkts) | 23+ | 支持导出群组密钥。 |
| [查询密钥别名集](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-list-aliases/huks-list-aliases-arkts) | 23+ | 支持查询群组密钥别名集。 |
