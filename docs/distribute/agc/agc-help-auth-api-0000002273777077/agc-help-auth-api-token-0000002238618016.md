---
title: "Token"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-token-0000002238618016
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
