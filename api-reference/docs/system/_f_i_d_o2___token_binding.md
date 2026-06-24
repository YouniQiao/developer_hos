---
title: "FIDO2_TokenBinding"
upstream_id: "harmonyos-references/_f_i_d_o2___token_binding"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:40.809905"
---

# FIDO2_TokenBinding

#### 概述

Token binding协议，用于客户端与依赖方通信。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [FIDO2_TokenBindingStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_tokenbindingstatus-1) [status](#status) | 客户端的绑定状态。 |
| char * [id](#id) | 令牌绑定标识符。 标识符。长度限制0到512。 |

#### 结构体成员变量说明

#### [h2]id

```
char* FIDO2_TokenBinding::id
```
 描述

令牌绑定标识符。

#### [h2]status

```
FIDO2_TokenBindingStatus FIDO2_TokenBinding::status
```
 描述

客户端的绑定状态。
