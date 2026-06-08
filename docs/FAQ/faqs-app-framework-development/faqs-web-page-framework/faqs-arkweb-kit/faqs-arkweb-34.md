---
title: "如何控制只在Web组件第一次加载url的时候触发onPageBegin，onPageEnd"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-34
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-34
last_sync: 2026-06-07
sync_hash: cd97a2a2
---
使用onAppear事件控制仅在首次加载URL时触发onPageBegin和onPageEnd，参考代码如下：

```
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct OnlyOnTheFirstTrigger {
  controller: webview.WebviewController = new webview.WebviewController();
  isFirst: boolean = false;

  build() {
    Column() {
      Web({
        src: 'www.example.com', controller: this.controller
      })
        .onAppear(() => {
          this.isFirst = true;
        })
        .onPageBegin(() => {
          if (this.isFirst) {
            this.isFirst = false;
            console.info('First page loading triggered');
          }
        })
    }
    .width('100%')
    .height('100%')
  }
}
```
