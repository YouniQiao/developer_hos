---
title: "PasswordInfo"
original_url: /docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-passwordinfo-0000002238777840
format: md
upstream_id: distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-passwordinfo-0000002238777840
last_sync: 2026-06-07
sync_hash: bdce5d1f
---
更新密码操作相关的密码信息类。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| password | string | 新的密码。 |
| verifyCode | string | 验证码。申请验证码时VerifyCodeAction需使用VerifyCodeAction.RESET\_PASSWORD方式。 |
| providerType | [ProviderType](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-providertype-0000002273781649) | 渠道类型，'email' 、 'phone' 、 'hwid' 或 'selfBuild'。 |
