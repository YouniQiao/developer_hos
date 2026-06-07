---
displayed_sidebar: appDevSidebar
title: "1001502003 输入参数值无效的可能原因和解决办法"
original_url: /docs/dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-22
format: md
---


**问题现象**

调用接口报错1001502003 输入参数值无效。

**可能原因**

1. client\_id未配置或配置错误。
2. Profile文件无效。
3. 一键登录场景，传入的匿名手机号不正确，或是未调用授权API（[AuthorizationWithHuaweiIDRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication#authorizationwithhuaweiidrequest)）获取匿名手机号。
4. 接口传参异常，如调用授权API（[AuthorizationWithHuaweiIDRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication#authorizationwithhuaweiidrequest)）时scopes和permissions属性均为空。

**解决措施**

1. 在 AppGallery Connect（简称AGC）的[开发与服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject)中，选择对应的项目和对应的应用，在“常规 > 应用 ”下，找到**应用**的Client ID和APP ID。

   ![](./img/cd09e0e8.png)

   * 若Client ID和APP ID不同：请检查module type为entry的模块下module.json5中的client\_id是否配置或配置的值是否正确，参考[配置Client ID](/docs/dev/app-dev/application-services/account-client-id)。
   * 若Client ID和APP ID相同：可无需配置Client ID。
2. 请在AppGallery Connect中重新申请Profile文件并重新进行签名。在调试阶段，请参考[申请调试Profile](/docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-debug-profile-0000002248181278)，完成Profile申请并重新手动签名；在发布阶段，请参考[申请发布Profile](/docs/distribute/agc/agc-help-profile-0000002270709473/agc-help-release-profile-0000002248341090)，完成Profile申请并重新手动签名。
3. 需要通过授权API（[AuthorizationWithHuaweiIDRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication#authorizationwithhuaweiidrequest)）获取到匿名手机号，将其作为参数调用一键登录接口。
4. 检查[authentication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-authentication)相关接口参数。
