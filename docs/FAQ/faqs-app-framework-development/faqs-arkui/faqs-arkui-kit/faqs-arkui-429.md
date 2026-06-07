---
format: md
title: "如何区分onPageHide的两种场景：应用退到后台，以及有新的页面打开"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-429
---


**问题描述**

如何判断当前Page的onPageHide是由用户手动隐藏App进程到桌面引发的，还是用户打开新的页面遮盖住了当前Entry页面引发的？

**解决措施**

应用退到后台会触发UIAbility组件的[onBackground](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onbackground)生命周期回调，而新的页面打开不会触发，可在Page的onPageHide回调中通过调用UIAbilityContext的getAbilityState()方法，结合onBackground触发状态进行综合判断。
