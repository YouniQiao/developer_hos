---
title: "SignInParam"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-signinparam-0000002273777089
---

登录操作的参数类。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| credentialInfo | [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-credentialinfo-0000002273621689) | 凭证信息。编译器会根据其中kind自动推断类型，例如其内部kind填为：'phone'，则类型被推断为“PhoneCredentialInfo”。 |
| autoCreateUser | boolean | 可选，默认为true。表示如果尚未创建用户，是否自动创建。 |
