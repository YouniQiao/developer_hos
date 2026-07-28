---
title: "FIDO2_AttestationFormatsArray"
upstream_id: "harmonyos-references/_f_i_d_o2___attestation_formats_array"
catalog: "harmonyos-references"
content_hash: "2180258c1562"
synced_at: "2026-07-28T16:50:30.894167"
---

# FIDO2_AttestationFormatsArray

#### 概述

依赖方的数组可以使用此成员指定一个关于认证方使用的证明语句格式的首选项。

起始版本： 6.0.0(20)

相关模块： [FIDO2（通行密钥服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

所在头文件： [fido2_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [attestationFormatsNum](#attestationformatsnum) | 认证凭据的附加参数列表长度。取值范围：[0, 10]。 |
| char ** [attestationFormats](#attestationformats) | 认证凭据的附加参数列表。 |

#### 结构体成员变量说明

#### [h2]attestationFormats

```
char** FIDO2_AttestationFormatsArray::attestationFormats
```
 描述

认证凭据的附加参数列表。

#### [h2]attestationFormatsNum

```
uint32_t FIDO2_AttestationFormatsArray::attestationFormatsNum
```
 描述

认证凭据的附加参数列表长度。
