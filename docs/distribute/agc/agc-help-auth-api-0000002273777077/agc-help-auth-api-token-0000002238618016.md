---
title: "Token"
original_url: /docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-token-0000002238618016
format: md
---


AGC网关的Access Token结果信息。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| expiration | number | 获取当前Token的有效期。 |
| tokenString | string | 获取当前AGC网关Access Token的信息。 |

**Sample Code**

```
let token = await auth.getToken(false, Region.CN);
let tokenString = token.tokenString;
let expiration = token.expiration;
```
