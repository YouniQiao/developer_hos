---
title: "Web加载失败时的白屏页面如何改为自定义错误页"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-96
format: md
---


**问题场景：**

在网络条件较差或链接资源有问题时，Web组件加载失败会出现白屏状态，这种场景下用户无法感知页面加载状态，导致体验较差，需要将白屏替换为自定义错误页面的方案。

**解决措施：**

应用可以监听页面加载异常的相关事件如[onErrorReceive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onerrorreceive)、[onHttpErrorReceive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onhttperrorreceive)和[onSslErrorEventReceive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onsslerroreventreceive9)等，在对应的回调中按需实现业务逻辑，如使用[loadurl](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#loadurl)加载自定义错误页；本文以[onErrorReceive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onerrorreceive)为例对主资源报错的场景进行处理，加载本地错误页面资源文件。

```
import { webview } from '@kit.ArkWeb';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Stack() {
      Web({ src: 'www.example.com', controller: this.controller })
        .onErrorReceive((event) => {
          // Only handle loading errors of the main framework to avoid duplicate processing of errors in sub-resources
          if (event && event.request.isMainFrame()) {
            try {
              // 加载自定义错误页面
              this.controller.loadUrl($rawfile('custom_failure_page.html'));
            } catch (error) {
              console.error(`ErrorCode: ${(error as BusinessError).code}, Message: ${(error as BusinessError).message}`);
            }
          }
        })
    }
  }
}
```
