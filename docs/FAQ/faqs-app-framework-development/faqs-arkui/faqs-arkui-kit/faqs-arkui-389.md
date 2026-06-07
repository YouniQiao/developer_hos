---
format: md
title: "Router路由跳转页面失败，可能有哪些原因"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-389
---


**1.har包中的page，未使用命名路由跳转**

HAR包中不支持在配置文件中声明pages页面，但是可以包含page并通过命名路由跳转，可参考：[命名路由](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing#命名路由)。

**2.import导入问题**

检查是否正确import目标页面，可以参考[命名路由](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-routing#命名路由)的配置进行排查。
