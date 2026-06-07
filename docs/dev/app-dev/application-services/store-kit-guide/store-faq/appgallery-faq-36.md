---
displayed_sidebar: appDevSidebar
title: "按需加载成功后，跳转动态模块页面失败？"
original_url: /docs/dev/app-dev/application-services/store-kit-guide/store-faq/appgallery-faq-36
format: md
---


**问题现象**

按需加载成功后，开发者业务需要跳转到动态模块的页面，使用Navigation跨包路由时返回100005错误码。

**可能原因**

6.0.2(22)及之前版本，不支持Navigation跨包路由方式，从6.1.0(23)开始，[支持开发者使用Navigation跨包路由跳转到动态安装的HSP中的页面](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-cross-package#系统路由表)，建议检查升级HarmonyOS版本。
