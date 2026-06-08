---
format: md
title: "WebView中，双向交互可以使用JSBridge技术，也可以使用端口通信技术，这两者有什么区别"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-11
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-11
last_sync: 2026-06-07
sync_hash: 9b58a176
---
**场景描述**

1. 通过WebMessagePort可以进行消息的发送以及接收。
2. 通过runJavaScript、registerJavaScriptProxy的JSBridge技术也能实现消息的收发。

这两者的主要区别在于数据量的传递规格和适用场景。选择方案时，需要根据具体需求来决定：

**解决措施**

JSBridge是一种JavaScript与Web客户端之间的通信机制。通过JSBridge，可以在WebView中调用客户端提供的功能，也可以从客户端调用JavaScript函数。对于复杂的通信需求，可以使用端口通信技术实现更灵活的跨平台通信。

* 使用runJavaScript与registerJavaScriptProxy的JSBridge技术：
  + 特点：调用函数，不需要一直保持通道。
  + 使用场景：对于函数调用的场景，可以选择runJavaScript或者registerJavaScriptProxy实现。
* 使用WebMessagePort建立端口通信：
  + 特点：建立通道，实时监听，持续消耗资源。
  + 使用场景：对于需要双向通信、数据实时更新、聊天应用以及传输大文件（如图片）等场景，建议选择端口通信技术，以确保更稳定的通信。

**参考链接**

[应用侧调用前端页面函数](/docs/dev/app-dev/application-framework/arkweb/web-use-frontend-page-js/web-in-app-frontend-page-function-invoking)

[前端页面调用应用侧函数](/docs/dev/app-dev/application-framework/arkweb/web-use-frontend-page-js/web-in-page-app-function-invoking)

[建立应用侧与前端页面数据通道](/docs/dev/app-dev/application-framework/arkweb/web-use-frontend-page-js/web-app-page-data-channel)
