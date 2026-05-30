---
title: "TokenResult"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-auth-api-tokenresult-0000002238777828
---

已登录用户的Access Token结果信息。

#### Method Summary

| Qualifier and Type | Method Name and Description |
| --- | --- |
| string | [getString](#section1696914441077)()  获取当前登录用户的Access Token信息。 |
| number | [getExpirePeriod](#section18283511686)()  获取当前登录用户Token的有效期。 |

#### Methods

#### [h2]getString

| Method |
| --- |
| getString():string  获取当前登录用户的Access Token信息。 |

**Return**

| Type | Description |
| --- | --- |
| string | 返回当前登录用户的Access Token信息。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

auth.getCurrentUser().then(user => {
  if (user == null) {
    return;
  }
  user.getToken(false).then(tokenResult =>{
    let tokenString = tokenResult.getToken();
  }).catch((err: BusinessError) => {
    // 获取Access Token失败
  });
}
```

#### [h2]getExpirePeriod

| Method |
| --- |
| getExpirePeriod():number  获取当前登录用户Token的有效期。 |

**Return**

| Type | Description |
| --- | --- |
| number | 返回Token的有效期，单位为秒。 |

**Sample Code**

```
import auth from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

auth.getCurrentUser().then(user => {
  if (user == null) {
    return;
  }
  user.getToken(false).then(tokenResult =>{
    let tokenPeriod = tokenResult.getExpirePeriod();
  }).catch((err: BusinessError) => {
    // 获取Access Token有效期失败
  });
}
```
