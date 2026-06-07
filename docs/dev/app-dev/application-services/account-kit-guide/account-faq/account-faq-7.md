---
displayed_sidebar: appDevSidebar
title: "HarmonyOS APK应用和HarmonyOS应用在一键登录场景下的用户数据如何互通"
original_url: /docs/dev/app-dev/application-services/account-kit-guide/account-faq/account-faq-7
format: md
---


终端设备从HarmonyOS 3.x/4.x（简称HarmonyOS）升级到HarmonyOS NEXT/5.0.x及之后版本（简称HarmonyOS NEXT）。

1. HarmonyOS APK应用使用OpenID关联用户数据时，将用户数据关系切换成UnionID，具体切换指导可以参考：[通过OpenID获取UnionID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-get-unionid)。
2. HarmonyOS APK应用使用UnionID关联用户数据时，在HarmonyOS NEXT/5.0.x上接入华为账号一键登录获取手机号后，应用需要同时将UnionID和手机号与用户信息进行关联，最终实现应用使用华为账号一键登录和手机号登录数据互通。详细流程可以参考：[用户场景设计](/docs/dev/app-dev/application-services/account-kit-guide/account-quick-login/account-phone-unionid-login#用户场景设计)。

![](./img/13addaea.png)
