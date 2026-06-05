---
title: "EmailCredentialInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-emailcredentialinfo-0000002273617153
format: md
---


Email方式的凭证信息。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| kind | 'email' | 标识当前的凭证种类为Email类型。 |
| email | string | Email账号。 |
| password | string | 可选，密码。  密码和验证码必须选择其一，若同时输入了密码和验证码，则会对密码和验证码都做校验。 |
| verifyCode | string | 可选，验证码。  密码和验证码必须选择其一，若同时输入了密码和验证码，则会对密码和验证码都做校验。 |
