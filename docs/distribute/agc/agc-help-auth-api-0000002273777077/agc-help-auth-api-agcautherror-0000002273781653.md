---
title: "AGCAuthError"
original_url: /docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-agcautherror-0000002273781653
format: md
upstream_id: distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-agcautherror-0000002273781653
last_sync: 2026-06-07
sync_hash: a0a05067
upstream_hash: cb591ac2bc05
---

异常行为枚举类。

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| code | number | 异常错误码。 |
| message | string | 异常消息。 |

#### 错误码

捕捉认证服务SDK的异常，其中2038XXXXX的错误码为后端服务器的错误信息，其他的为SDK内部错误信息。

| 错误码 | 错误码值 | 说明 |
| --- | --- | --- |
| NULL\_TOKEN | 1210001 | Token为空，建议重新登录。 |
| NOT\_SIGN\_IN | 1210002 | 当前无已登录用户。 |
| USER\_LINK\_FAILED | 1210003 | 用户关联失败。 |
| USER\_UNLINK\_FAILED | 1210004 | 用户取消关联失败。 |
| ALREADY\_SIGN\_IN\_USER | 1210005 | 已经使用一个账号登录，在未登出情况下使用此账号或者其他账号登录。 |
| FAIL\_TO\_GET\_ACCESS\_TOKEN | 1210006 | 获取Access Token失败。 |
| FAIL\_TO\_UPDATE\_PROFILE | 1210007 | 更新用户信息失败。 |
| FAIL\_TO\_UPDATE\_EMAIL | 1210008 | 更新用户邮箱失败。 |
| CREDENTIAL\_INVALID | 1210009 | 凭证信息不合法。 |
| INVALID\_EMAIL | 203817223 | 输入的邮箱地址不合法。 |
| INVALID\_PHONE | 203817224 | 输入的手机号码不合法。 |
| GET\_UID\_ERROR | 203817728 | 获取用户ID失败。 |
| UID\_PRODUCTID\_NOT\_MATCH | 203817729 | 用户ID和项目ID不匹配。 |
| GET\_USER\_INFO\_ERROR | 203817730 | 获取用户信息失败。 |
| PRODUCT\_STATUS\_ERROR | 203817744 | 项目没有开通认证服务。 |
| PASSWORD\_VERIFICATION\_CODE\_OVER\_LIMIT | 203817811 | 密码验证码次数超过限制。 |
| INVALID\_TOKEN | 203817984 | Client Token不可用。 |
| INVALID\_ACCESS\_TOKEN | 203817985 | Access Token不可用。 |
| INVALID\_REFRESH\_TOKEN | 203817986 | Refresh Token不可用。  用户的Refresh Token过期，重新登录，获取新的Refresh Token。 |
| TOKEN\_AND\_PRODUCTID\_NOT\_MATCH | 203817987 | Token和product\_id（即项目ID）不匹配，建议检查“agconnect-services.json”是否与平台上申请的信息一致。 |
| AUTH\_METHOD\_IS\_DISABLED | 203817988 | 不支持的认证方式。 |
| ACCESS\_TOKEN\_OVER\_LIMIT | 203817991 | AccessToken数量超过了限定数量，配额是每个项目每个用户每小时500个。 |
| FAIL\_TO\_USER\_LINK | 203817992 | 关联用户失败。 |
| FAIL\_TO\_USER\_UNLINK | 203817993 | 取消用户关联失败。 |
| ANONYMOUS\_SIGNIN\_OVER\_LIMIT | 203818019 | 同一IP下的匿名用户登录超过限制，配额是每小时100个请求。 |
| INVALID\_APPID | 203818020 | AppID不可用。 |
| INVALID\_APPSECRET | 203818021 | App Secret不可用。 |
| PASSWORD\_VERIFY\_CODE\_ERROR | 203818032 | 密码和验证码错误。 |
| SIGNIN\_USER\_STATUS\_ERROR | 203818036 | 用户被开发者停用。 |
| SIGNIN\_USER\_PASSWORD\_ERROR | 203818037 | 用户密码错误。 |
| PROVIDER\_USER\_HAVE\_BEEN\_LINKED | 203818038 | 身份验证提供方已经被其他用户绑定。 |
| PROVIDER\_HAVE\_LINKED\_ONE\_USER | 203818039 | 账号中该身份验证提供方类型已经被绑定过。 |
| FAIL\_GET\_PROVIDER\_USER | 203818040 | 获取身份验证提供方用户失败。 |
| CANNOT\_UNLINK\_ONE\_PROVIDER\_USER | 203818041 | 不能对单一的身份验证提供方做取消关联操作。 |
| VERIFY\_CODE\_INTERVAL\_LIMIT | 203818048 | 在发送间隔内发送验证码。 |
| VERIFY\_CODE\_EMPTY | 203818049 | 验证码为空。 |
| VERIFY\_CODE\_LANGUAGE\_EMPTY | 203818050 | 验证码发送语言为空。 |
| VERIFY\_CODE\_RECEIVER\_EMPTY | 203818051 | 验证码接收器为空。 |
| VERIFY\_CODE\_ACTION\_ERROR | 203818052 | 验证码类型为空。 |
| VERIFY\_CODE\_TIME\_LIMIT | 203818053 | 验证码发送次数超过限制。 |
| ACCOUNT\_PASSWORD\_SAME | 203818064 | 用户名密码一致。 |
| PASSWORD\_STRENGTH\_LOW | 203818065 | 密码强度太低。 |
| UPDATE\_PASSWORD\_ERROR | 203818066 | 更新密码失败。 |
| PASSWORD\_SAME\_AS\_BEFORE | 203818067 | 密码与老密码相同。 |
| PASSWORD\_IS\_EMPTY | 203818068 | 密码为空。 |
| PASSWORD\_LENGTH\_ERROR | 203818071 | 密码长度错误，请在AGC“认证服务-配置”页面确认密码复杂度。 |
| SENSITIVE\_OPERATION\_TIMEOUT | 203818081 | 敏感操作的最近登录时间超时。 |
| ACCOUNT\_HAVE\_BEEN\_REGISTERED | 203818082 | 账号已经被注册。 |
| UPDATE\_ACCOUNT\_ERROR | 203818084 | 更新账号失败。 |
| USER\_NOT\_REGISTERED | 203818087 | 用户没有注册。 |
| VERIFY\_CODE\_ERROR | 203818129 | 验证码错误。 |
| USER\_HAVE\_BEEN\_REGISTERED | 203818130 | 用户已经被注册。 |
| REGISTER\_ACCOUNT\_IS\_EMPTY | 203818132 | 注册账号为空。 |
| VERIFY\_CODE\_FORMAT\_ERROR | 203818134 | 验证码格式错误。 |
| VERIFY\_CODE\_AND\_PASSWORD\_BOTH\_NULL | 203818135 | 验证码和密码都为空。 |
| SEND\_EMAIL\_FAIL | 203818240 | 发送邮件失败。 |
| SEND\_MESSAGE\_FAIL | 203818241 | 发送短信失败。 |
| CONFIG\_LOCK\_TIME\_ERROR | 203818261 | 密码/验证码最大尝试次数超过设定值后对账号进行冻结处理，冻结期间用户无法使用该账号进行密码验证/验证码验证。 |
