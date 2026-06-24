---
title: "FIDO2_PublicKeyCredentialDescriptorArray"
upstream_id: "harmonyos-references/_f_i_d_o2___public_key_credential_descriptor_array"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:40.501431"
---

# FIDO2_PublicKeyCredentialDescriptorArray

#### 概述

PublicKey凭证描述符数组。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [allowCredentiallNum](#allowcredentiallnum) | 允许凭证数目，最大为20。 |
| [FIDO2_PublicKeyCredentialDescriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___public_key_credential_descriptor) * [allowCredentials](#allowcredentials) | 认证凭据的附加参数列表。默认值为[]。 |

#### 结构体成员变量说明

#### [h2]allowCredentiallNum

```
uint32_t FIDO2_PublicKeyCredentialDescriptorArray::allowCredentiallNum
```
 描述

允许凭证数目。

#### [h2]allowCredentials

```
FIDO2_PublicKeyCredentialDescriptor* FIDO2_PublicKeyCredentialDescriptorArray::allowCredentials
```
 描述

认证凭据的附加参数列表。默认值为[]。
