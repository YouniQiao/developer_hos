---
displayed_sidebar: appDevSidebar
title: "一键登录场景下无法获取到明文手机号如何解决"
original_url: /docs/dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-4
format: md
---


阅读此章节前请先保证已在华为账号一键登录场景成功获取到匿名手机号。在华为账号一键登录场景下无法获取到明文手机号时，建议通过以下步骤排查解决：

1. 华为账号未绑定手机号，该异常场景应用需要展示其他登录方式。
2. 使用华为账号一键登录服务的账号必须是中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）华为账号。
3. 应用用于向服务端获取手机号的authCode需要通过调用华为账号一键登录组件获取，详情可参考一键登录[客户端开发](/docs/dev/app-dev/application-services/account-kit-guide/account-quick-login/account-phone-unionid-login#客户端开发)。
