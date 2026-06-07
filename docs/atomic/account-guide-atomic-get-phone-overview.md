---
title: "获取手机号概述"
original_url: /docs/dev/atomic-dev/account-guide-atomic-get-phone/account-guide-atomic-get-phone-overview
format: md
---


当元服务需要获取用户手机号时，可通过调用Scenario Fusion Kit提供的Button组件，引导用户完成手机号授权。

Scenario Fusion Kit通过提供[快速验证手机号Button](/docs/dev/app-dev/application-services/scenario-fusion-kit-guide/scenario-fusion-button/scenario-fusion-button-getphonenumber)实现了Account Kit快速验证手机号授权功能：

| 场景 | 说明 |
| --- | --- |
| [快速验证](/docs/dev/atomic-dev/account-guide-atomic-get-phone/account-guide-atomic-get-phonenumber) | 对用户选择的华为账号绑定的手机号或者新增的手机号进行验证，**不保证是实时验证**，**仅首次需要用户授权**。 |

## 约束与限制

1. 元服务满足《[常见类型移动互联网应用程序必要个人信息范围规定](http://www.cac.gov.cn/2021-03/22/c_1617990997054277.htm)》（对第三方网站的内容，华为不承担任何责任）中使用手机号的必要业务场景。
2. 儿童账号无法通过快速验证获取到手机号。
