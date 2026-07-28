---
title: "FIDO2_CapabilityArray"
upstream_id: "harmonyos-references/_f_i_d_o2___capability_array"
catalog: "harmonyos-references"
content_hash: "14d0c795a0dc"
synced_at: "2026-07-28T16:50:31.208883"
---

# FIDO2_CapabilityArray

#### 概述

描述能力数组。

起始版本： 6.0.0(20)

相关模块： [FIDO2（通行密钥服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

所在头文件： [fido2_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [number](#number) | 能力数组长度。 |
| [FIDO2_Capability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___capability) * [capability](#capability) | 能力的数组。 |

#### 结构体成员变量说明

#### [h2]capability

```
FIDO2_Capability* FIDO2_CapabilityArray::capability
```
 描述

能力数组。

#### [h2]number

```
uint32_t FIDO2_CapabilityArray::number
```
 描述

能力数组长度。
