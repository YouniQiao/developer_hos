---
title: "FIDO2_CapabilityArray"
upstream_id: "harmonyos-references/_f_i_d_o2___capability_array"
catalog: "harmonyos-references"
content_hash: "4615a7a82d43"
synced_at: "2026-07-09T00:59:18.548925"
---

# FIDO2_CapabilityArray

#### 概述

描述能力数组。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t [number](#number) | 能力的数量。 |
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
