---
format: md
title: "Webview的runJavaScript和runJavaScriptExt有什么区别，在页面生命周期（如onPageShow、onPageEnd）的什么时候进行调用"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-21
---


二者均可异步执行JavaScript脚本，并通过回调或Promise返回执行结果。

区别上讲，[runJavaScript](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#runjavascript)返回脚本执行的结果只能是string，而[runJavaScriptExt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#runjavascriptext10)可以返回的类型支持[JsMessageType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-e#jsmessagetype10)，包括字符串、数组类型等。

runJavaScript参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| script | string | 是 | JavaScript脚本。 |
| callback | AsyncCallback\<string\> | 是 | 回调函数执行JavaScript脚本结果。JavaScript脚本若执行失败或无返回值时，返回null。 |

runJavaScriptExt参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| script | string | 是 | JavaScript脚本。 |
| callback | AsyncCallback[JsMessageExt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-jsmessageext) | 是 | 回调执行JavaScript脚本结果。 |

在调用时间上，二者均需在loadUrl完成后，例如在onPageEnd中调用。
