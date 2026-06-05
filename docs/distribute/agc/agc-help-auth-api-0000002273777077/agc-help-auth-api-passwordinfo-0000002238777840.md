---
title: "PasswordInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-passwordinfo-0000002238777840
format: md
---


更新密码操作相关的密码信息类。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| password | string | 新的密码。 |
| verifyCode | string | 验证码。申请验证码时VerifyCodeAction需使用VerifyCodeAction.RESET\_PASSWORD方式。 |
| providerType | [ProviderType](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-providertype-0000002273781649) | 渠道类型，'email' 、 'phone' 、 'hwid' 或 'selfBuild'。 |
