---
title: "异常处理"
original_url: /docs/distribute/agc/agc-help-auth-0000002236336998/agc-help-auth-troubleshooting-0000002236337022
format: md
upstream_id: distribute/agc/agc-help-auth-0000002236336998/agc-help-auth-troubleshooting-0000002236337022
last_sync: 2026-06-07
sync_hash: 1acc547e
---
在某些情况下，程序无法按预想的情况正常执行，而是会发生异常。您可以根据[AGCAuthError](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-agcautherror-0000002273781653)实例对象或者AGCError实例对象返回的错误码定制实现自己的异常处理方案，给用户带来更友好体验。

#### 处理异常

处理接口异常时，您可以从接口抛出的异常来获取到请求失败的相关信息。您需要判断该方式回调的异常对象是否是一个[AGCAuthError](/docs/distribute/agc/agc-help-auth-api-0000002273777077/agc-help-auth-api-agcautherror-0000002273781653)实例对象，然后您可以根据返回的错误码定制实现您自己的异常处理场景。

```
import { AGCAuthError } from '@hw-agconnect/auth';
import { BusinessError } from '@kit.BasicServicesKit';

auth.signIn(signInParam).then(user => {
  // 登录成功
}).catch((error: BusinessError) => {
  // 登录失败
  if (error instanceof AGCAuthError) {
    // 根据错误码进行处理
  }
});
```

#### 错误码203817986特殊处理说明

用户登录成功后，认证服务SDK会保存当前用户的Access Token和Refresh Token。

* Access Token：用户的访问令牌，表明用户的唯一身份，涉及到用户级别的操作，都需要验证Access Token。
* Refresh Token：刷新用户的Access Token，由认证服务SDK自动刷新。

Access Token有效期为1小时，Refresh Token为2个月。用户如果连续2个月没有登录操作，在调用涉及用户级别的接口时，Refresh Token失效，会抛出错误码203817986。

您应该在代码中显式捕获该错误码，提示用户重新登录。
