---
title: "VerifyCodeResult"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-verifycoderesult-0000002238622564
---

验证码申请结果信息。

#### Method Summary

| Qualifier and Type | Method Name and Description |
| --- | --- |
| string | [getShortestInterval](#section9850751813)()  获取两次发送验证码的最小时间间隔。 |
| string | [getValidityPeriod](#section871618293810)()  获取验证码有效期。 |

#### Methods

#### [h2]getShortestInterval

| Method |
| --- |
| getShortestInterval(): string  获取两次发送验证码的最小时间间隔。 |

**Return**

| Type | Description |
| --- | --- |
| string | 返回最小时间间隔，单位为秒。 |

#### [h2]getValidityPeriod

| Method |
| --- |
| getValidityPeriod(): string  获取验证码有效期。 |

**Return**

| Type | Description |
| --- | --- |
| string | 返回验证码有效期，单位为秒。 |
