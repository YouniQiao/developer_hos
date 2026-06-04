---
title: "多个Cookie如何进行批量设置"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-25
---

[Class (WebCookieManager)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager)提供了[configCookieSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager#configcookiesync11)方法与[configCookie](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webcookiemanager#configcookie11)方法，用于同步和异步设置 Cookie。目前，接口不支持一次性批量设置多个 Cookie，建议通过多次调用 `configCookie` 或 `configCookieSync` 方法来实现多个 Cookie 的设置。

```
import { webview } from '@kit.ArkWeb';

webview.once("webInited", () => {
  console.info("webInited setCookie");
  webview.WebCookieManager.configCookie("https://www.example.com", 'a=b');
  webview.WebCookieManager.configCookie("https://www.example.com", 'c=d');
  webview.WebCookieManager.configCookie("https://www.example.com", 'e=f');
})

@Entry
@Component
struct LoginCookieConfig {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Button('fetchCookieSync')
        .onClick(() => {
          try {
            let value = webview.WebCookieManager.fetchCookieSync('https://www.example.com');
            console.log(`fetchCookieSync cookie value is: ${value}`);
          } catch (error) {
            console.error(`fetchCookieSync failed,error is: ${JSON.stringify(error)}`);
          }
        })
      Web({ src: 'www.example.com', controller: this.controller })
    }
  }
}
```
