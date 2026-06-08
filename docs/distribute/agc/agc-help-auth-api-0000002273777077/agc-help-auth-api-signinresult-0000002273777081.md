---
title: "SignInResult"
original_url: /docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-signinresult-0000002273777081
format: md
upstream_id: distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-signinresult-0000002273777081
last_sync: 2026-06-07
sync_hash: 01dcdb5d
---
登录结果信息。

#### Method Summary

| Qualifier and Type | Method Name and Description |
| --- | --- |
| [AuthUser](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-authuser-0000002273781645) | [getUser](#section266352765)()  返回当前登录的用户信息。 |

#### Methods

#### [h2]getUser

| Method |
| --- |
| getUser():[AuthUser](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-authuser-0000002273781645)  返回当前登录的用户信息。 |

**Return**

| Type | Description |
| --- | --- |
| [AuthUser](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-authuser-0000002273781645) | 当前登录的用户信息。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';

auth.signIn(credential).then(result=>{
  let user = result.getUser();
})
```
