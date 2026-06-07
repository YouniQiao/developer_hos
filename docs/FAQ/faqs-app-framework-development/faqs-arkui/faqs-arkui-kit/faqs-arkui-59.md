---
format: md
title: "弹窗组件无法进入onPageShow方法"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-59
---


自定义弹窗作为自定义组件的一种，拥有自定义组件生命周期aboutToAppear和aboutToDisappear。

onPageShow和onPageHide仅作为页面生命周期提供，@Entry修饰的自定义组件定义为页面，不适用于自定义弹窗。

**参考链接**

[自定义组件生命周期](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-page-custom-components-lifecycle)
