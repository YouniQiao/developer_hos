---
title: "通过网络请求而来的Cookie如何同步配置到web中"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-24
format: md
---


获取到的cookie利用[Class (WebCookieManager)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager)提供的[configCookieSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager#configcookiesync11)方法与[configCookie](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager#configcookie11)方法可以实现对Cookie值的同步与异步设置，这样将请求而来的cookie同步到web中。

```
import { webview } from '@kit.ArkWeb'
@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();
  headers : Array<webview.WebHeader> = [{ headerKey : "msg",headerValue : 'hello'}];
  build() {
    Column() {
      Button('configCookieSync')
        .onClick(() => {
          try {
            webview.WebCookieManager.configCookieSync('https://www.example.com', 'a=b;c=d;e=f');
          } catch (error) {
            console.error(`ErrorCode: ${error.code},  Message: ${error.message}`);
          }
        })
      Button('fetchCookieSync')
        .onClick(() => {
          try {
            let value = webview.WebCookieManager.fetchCookieSync('https://www.example.com');
            console.log("fetchCookieSync cookie = " + value);
          } catch (error) {
            console.error(`ErrorCode: ${error.code},  Message: ${error.message}`);
          }
        })
      Column() {
        Web({ src: 'www.example.com', controller: this.controller })
          .width('100%')
          .height('100%')
      }
      .layoutWeight(1)
    }
  }
}
```
