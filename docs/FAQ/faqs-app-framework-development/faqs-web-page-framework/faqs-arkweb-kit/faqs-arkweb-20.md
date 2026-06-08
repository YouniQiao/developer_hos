---
format: md
title: "javaScriptProxy和registerJavaScriptProxy有什么区别，能注册多少个对象"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-20
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-20
last_sync: 2026-06-07
sync_hash: 7f4ab855
---
从功能上讲，二者都可以注入JavaScript对象到window对象中，并在window对象中调用该对象的方法。

从接口角度来看，javaScriptProxy是Web组件的方法，而registerJavaScriptProxy是WebviewController的方法。

从注册对象的角度来看，前者仅支持注册一个对象，而后者支持注册多个对象。

从生命周期上讲，javaScriptProxy在Web组件初始化调用，registerJavaScriptProxy在Web组件初始化完成后调用。

JavaScriptProxy可以参考[JavaScriptProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#javascriptproxy)，registerJavaScriptProxy可以参考[registerJavaScriptProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#registerjavascriptproxy)
