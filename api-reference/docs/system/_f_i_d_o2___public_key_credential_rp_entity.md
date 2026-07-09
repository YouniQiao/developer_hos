---
title: "FIDO2_PublicKeyCredentialRpEntity"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_credential_rp_entity"
catalog: "harmonyos-references"
content_hash: "7f36ec22ac6c"
synced_at: "2026-07-09T00:59:19.123740"
---

# FIDO2_PublicKeyCredentialRpEntity

#### 概述

创建新凭据时依赖方的属性。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char * [id](#id) | 依赖方标识符。默认值为空。长度限制0到512。 |
| char * [name](#name) | 依赖方名称。 长度限制0到512。 |

#### 结构体成员变量说明

#### [h2]id

```
char* FIDO2_PublicKeyCredentialRpEntity::id
```
 描述

依赖方标识符。

#### [h2]name

```
char* FIDO2_PublicKeyCredentialRpEntity::name
```
 描述

依赖方名称。
