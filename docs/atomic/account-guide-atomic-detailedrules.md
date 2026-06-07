---
title: "华为账号登录管理细则"
original_url: /docs/dev/atomic-dev/atomic-account-development/account-guide-atomic-detailedrules
format: md
---


为了确保用户获得良好的登录体验，根据[《华为开发者服务协议》](https://developer.huawei.com/consumer/cn/doc/start/agreement-0000001052728169)、[《华为APIs使用协议》](/docs/distribute/app-dist/app-market/x20240513/x20209)、[《元服务审核指南》](/docs/distribute/app-dist/app-market/x50000/x50129/x50129-overview)等相关协议条款及现行法律法规，平台制定了华为账号登录管理细则，使用华为账号登录的元服务请遵照执行，具体要求如下：

## 上架审核要求

华为账号提供的登录能力方便元服务获取用户的身份标识，快速建立账号体系。提交至华为应用市场的HarmonyOS 元服务，需要遵循如下规范：

（1）如果您的元服务内需要构建账号体系时，必须使用华为账号[静默登录](/docs/dev/atomic-dev/atomic-account-development/account-atomic-silent-login#场景介绍)能力。

（2）如果您需要将用户与已注册账号关联时，为用户同步历史数据资产，可以向用户申请[获取手机号](/docs/dev/atomic-dev/account-guide-atomic-get-phone/account-guide-atomic-get-phone-overview)。

（3）元服务内不允许出现显性登录页面（含提示语等），即不允许出现“登录/注册”等字样，更多的账号相关规范详见[账号最佳设计实践](/docs/design/atomic-service-design/best-practices/accounts)。

## 附则

本细则是一份动态更新的文档，我们会根据相关法律法规的变化以及行业发展，不定期对细则内容进行修改或更新，请您持续关注本细则，以便获得最新信息。
