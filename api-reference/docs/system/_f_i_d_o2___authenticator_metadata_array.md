---
title: "FIDO2_AuthenticatorMetadataArray"
upstream_id: "harmonyos-references/_f_i_d_o2___authenticator_metadata_array"
catalog: "harmonyos-references"
content_hash: "3d15d5fb3e99"
synced_at: "2026-07-09T00:59:18.294141"
---

# FIDO2_AuthenticatorMetadataArray

#### 概述

描述支持的认证器数组。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [number](#number) | 认证器数目。 |
| [FIDO2_AuthenticatorMetadata](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___authenticator_metadata) * [authenticators](#authenticators) | 认证器支持的扩展。 |

#### 结构体成员变量说明

#### [h2]authenticators

```
FIDO2_AuthenticatorMetadata* FIDO2_AuthenticatorMetadataArray::authenticators
```
 描述

认证器支持的扩展。

#### [h2]number

```
uint32_t FIDO2_AuthenticatorMetadataArray::number
```
 描述

认证器数目。
