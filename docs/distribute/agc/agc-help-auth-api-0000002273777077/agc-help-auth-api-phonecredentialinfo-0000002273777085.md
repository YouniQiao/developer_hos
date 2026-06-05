---
title: "PhoneCredentialInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-phonecredentialinfo-0000002273777085
format: md
---


手机方式的凭证信息。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| kind | 'phone' | 标识当前的凭证种类为手机类型。 |
| countryCode | string | 国家码，例如中国：“86”。 |
| phoneNumber | string | 手机号码。 |
| password | string | 可选，密码。  密码和验证码必须选择其一，若同时输入了密码和验证码，则会对密码和验证码都做校验。 |
| verifyCode | string | 可选，验证码。  密码和验证码必须选择其一，若同时输入了密码和验证码，则会对密码和验证码都做校验。 |
