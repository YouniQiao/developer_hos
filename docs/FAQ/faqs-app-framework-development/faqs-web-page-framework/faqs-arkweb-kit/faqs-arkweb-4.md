---
format: md
title: "onInterceptRequest拦截URL并自定义HTML文件，页面加载失败"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-4
---


**问题现象**

当使用onInterceptRequest拦截页面Web的src链接后返回自定义HTML时，如果自定义HTML文件中的script标签内容未加载，需要检查脚本路径和加载方式。

**解决措施**

设置拦截器时，需要同时设置setResponseEncoding、setResponseMimeType和setResponseHeader等参数，仅设置setResponseData内核将无法识别这是HTML文件。参考代码如下：

```
Web({ src: 'www.example.com',controller: this.controller })
  .onInterceptRequest((event) => {
    console.log('url:' + event.request.getRequestUrl())
    this.responseWeb = new WebResourceResponse();
    let head1: Header = {
      headerKey: "Connection",
      headerValue: "keep-alive"
    }
    let length = this.heads.push(head1)
    this.responseWeb.setResponseHeader(this.heads)
    this.responseWeb.setResponseData(this.webData)
    this.responseWeb.setResponseEncoding('utf-8')
    this.responseWeb.setResponseMimeType('text/html')
    this.responseWeb.setResponseCode(200)
    this.responseWeb.setReasonMessage('OK')
    return this.responseWeb
  })
```

**参考链接**

[Class (WebResourceResponse)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-webresourceresponse)
