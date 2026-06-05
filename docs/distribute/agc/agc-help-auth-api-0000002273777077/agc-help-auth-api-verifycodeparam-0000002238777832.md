---
title: "VerifyCodeParam"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-verifycodeparam-0000002238777832
format: md
---


获取验证码的相关参数类。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| verifyCodeType | [PhoneVerifyCode](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-phoneverifycode-0000002273617149) | [EmailVerifyCode](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-emailverifycode-0000002238618020) | 编译器会根据其中kind自动推断类型，例如其内部kind填为：'phone'，则类型被推断为“PhoneVerifyCode”。 |
| action | [VerifyCodeAction](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-verifycodeaction-0000002238622568) | 验证码动作类型。 |
| lang | string | 验证码文字语言，例如中文：“zh\_CN”。 |
| sendInterval | number | 可选，验证码超时时间，默认为60s。 |
