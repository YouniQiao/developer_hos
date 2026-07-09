---
title: "AuthenticationExtensionsClientOutputs"
upstream_id: "harmonyos-references/_authentication_extensions_client_outputs"
catalog: "harmonyos-references"
content_hash: "093ce3eb6ba5"
synced_at: "2026-07-09T00:59:17.978407"
---

# AuthenticationExtensionsClientOutputs

#### 概述

身份认证扩展输出。

起始版本： 6.0.0(20)

相关模块： [FIDO2](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char * [placeholder](#placeholder) | 占位符，表示返回的JSON消息中包含key值"clientExtensionResults"。始终返回NULL。 |

#### 结构体成员变量说明

#### [h2]placeholder

```
char* AuthenticationExtensionsClientOutputs::placeholder
```
 描述

占位符，表示返回的JSON消息中包含"clientExtensionResults"这个key值。该值始终返回NULL。
