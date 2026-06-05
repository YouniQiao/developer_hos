---
title: "SignInResult"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-signinresult-0000002273777081
format: md
---


登录结果信息。

#### Method Summary

| Qualifier and Type | Method Name and Description |
| --- | --- |
| [AuthUser](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-authuser-0000002273781645) | [getUser](#section266352765)()  返回当前登录的用户信息。 |

#### Methods

#### [h2]getUser

| Method |
| --- |
| getUser():[AuthUser](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-authuser-0000002273781645)  返回当前登录的用户信息。 |

**Return**

| Type | Description |
| --- | --- |
| [AuthUser](https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-authuser-0000002273781645) | 当前登录的用户信息。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.signIn(credential).then(result=>{
  let user = result.getUser();
})
```
