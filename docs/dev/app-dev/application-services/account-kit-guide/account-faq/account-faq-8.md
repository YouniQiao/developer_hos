---
displayed_sidebar: appDevSidebar
title: "无法获取到头像昵称如何解决"
original_url: /docs/dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-8
format: md
---


1. 确认获取authorizationCode时，调用[AuthorizationWithHuaweiIDRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication#authorizationwithhuaweiidrequest)接口是否传入正确的scope：'profile'。

   ```
   import { authentication } from '@kit.AccountKit';

   // 创建授权请求，并设置参数
   const authRequest = new authentication.HuaweiIDProvider().createAuthorizationWithHuaweiIDRequest();
   // 获取头像昵称需要传如下scope
   authRequest.scopes = ['profile'];
   // 若开发者需要进行服务端开发，则需传如下permission获取authorizationCode
   authRequest.permissions = ['serviceauthcode'];
   ```
2. 确认通过[AuthenticationController.executeRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication#executerequest-1)接口执行授权请求后，响应返回的Authorization Code在5分钟有效期内。
3. 确认调用的是华为账号服务器[获取头像昵称](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-user-info-get-nickname-and-avatar)接口。
