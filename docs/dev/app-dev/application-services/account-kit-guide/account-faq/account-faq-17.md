---
displayed_sidebar: appDevSidebar
title: "一键登录场景下，应用已展示一键登录页，此时用户退出、切换或注销华为账号应该如何处理"
original_url: /docs/dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-17
format: md
upstream_id: dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-17
last_sync: 2026-06-07
sync_hash: 00e95cac
---
应用通过[订阅华为账号的登录/登出事件](/docs/dev/app-dev/application-services/account-kit-guide/account-quick-login/account-login-state)监听当前设备华为账号的登录状态，若监听到华为账号登出事件，则需跳转至其他登录页面；若监听到华为账号登录事件，则需重新获取匿名手机号并刷新一键登录页。示例代码详见[华为账号一键登录SampleCode](https://gitcode.com/HarmonyOS_Samples/accountkit-samplecode-clientdemo-arkts)。
