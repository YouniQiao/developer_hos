---
title: "EmailCredentialInfo"
original_url: /docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-emailcredentialinfo-0000002273617153
format: md
upstream_id: distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-emailcredentialinfo-0000002273617153
last_sync: 2026-06-07
sync_hash: fce1dbde
---
Email方式的凭证信息。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| kind | 'email' | 标识当前的凭证种类为Email类型。 |
| email | string | Email账号。 |
| password | string | 可选，密码。  密码和验证码必须选择其一，若同时输入了密码和验证码，则会对密码和验证码都做校验。 |
| verifyCode | string | 可选，验证码。  密码和验证码必须选择其一，若同时输入了密码和验证码，则会对密码和验证码都做校验。 |
