---
title: "Webview如何加载带有#路由的链接"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-86
format: md
---


Web组件的src使用'resource://rawfile/LoadWebLink.html#AAA'这种格式进行加载，具体可参考如下代码：

```
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct LoadWebLink {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    RelativeContainer() {
      Web({ src: 'resource://rawfile/LoadWebLink.html#AAA', controller: this.controller })
    }
    .height('100%')
    .width('100%')
  }
}
```
