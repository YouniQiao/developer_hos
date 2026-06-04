---
title: "如何在Web请求时添加header头"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-37
---

可以通过loadUrl方法设置headers。该方法接收两个参数：url表示需要加载的URL，headers为数组类型表示附加的HTTP请求头。

```
// With parameter headers
this.controller.loadUrl('www.example.com', [{ headerKey: "headerKey", headerValue: "headerValue" }]);
```

**参考链接**

[loadUrl](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#loadurl)

[WebHeader](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-i#webheader)
