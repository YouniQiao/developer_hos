---
format: md
title: "系统目前是否支持webrtc的功能，规格是什么"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-64
---


1. WebView支持WebRTC的P2P功能和音视频流功能。

2. 在非WebView场景中，HarmonyOS不直接提供WebRTC，但会提供技术支持，例如支持第三方gn+ninja交叉编译方式适配WebRTC，具体包括以下两点：

* SDK支持GN和Ninja的交叉编译方式。
* 提供编译样例指导。
