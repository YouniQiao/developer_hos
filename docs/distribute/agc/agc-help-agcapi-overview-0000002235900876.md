---
title: "AppGallery Connect API"
original_url: /docs/distribute/agc/agc-help-agcapi-overview-0000002235900876
format: md
---


您不仅可以登录AppGallery Connect使用相关功能，还可以通过AppGallery Connect API定制AppGallery Connect提供的能力，实现流程自动化，提高您的工作效率。

在使用API前，您需要先获取AppGallery Connect的授权，您可以基于使用场景选择不同的授权方式：

* Service Account方式：使用此方式，您可以实现服务器与服务器之间接口的鉴权，相比API客户端方式更安全。

  ![](./img/agc-help-agcapi-overview-0000002235900876_0.png)

  Service Account即将替代API客户端，新创建凭据请您选择Service Account，并请尽快将您使用的API客户端切换到Service Account。
* API客户端方式：使用此方式，您可以以应用的身份进行API操作，API访问权限由API客户端的角色来确定。此方式适用您自己的IT系统对接AppGallery Connect使用。
* OAuth客户端方式：使用此方式，您的应用可以向用户提供应用的各种管理服务，您的用户可以是华为的开发者。用户可以使用华为账号登录您的应用，并以该用户自己的身份进行API操作，用户的API访问权限由其在团队内的角色来确定。此方式适合第三方IDE、工具对接AppGallery Connect时使用。

  ![](./img/agc-help-agcapi-overview-0000002235900876_1.png)

  OAuth客户端方式仅面向平台类应用的开发者开放，普通应用的开发者暂无法使用。

详细使用指导请参见[AppGallery Connect API](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-0000002236015554)。
