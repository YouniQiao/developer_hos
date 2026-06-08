---
title: "如何在webview中使用H5中的alert"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-46
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-46
last_sync: 2026-06-07
sync_hash: bf2cb136
---
**参考代码**

使用Web组件的[onAlert](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onalert)属性可以监听网页触发alert()告警弹窗事件，之后使用[警告弹窗 (AlertDialog)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-alert-dialog-box)实现弹窗的效果与逻辑。

```
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebviewAlert {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: $rawfile('WebviewAlert.html'), controller: this.controller })
        .onAlert((event) => {
          if (event) {
            console.log('event.url:' + event.url);
            console.log('event.message:' + event.message);
            this.getUIContext().showAlertDialog({
              title: 'onAlert',
              message: 'text',
              primaryButton: {
                value: 'cancel',
                action: () => {
                  event.result.handleCancel();
                }
              },
              secondaryButton: {
                value: 'ok',
                action: () => {
                  event.result.handleConfirm();
                }
              },
              cancel: () => {
                event.result.handleCancel();
              }
            })
          }
          return true;
        })
    }
  }
}
```

H5侧：

```
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8">
</head>
<body>
<h1>WebView onAlert Demo</h1>
<button onclick="myFunction()">Click here</button>
<script>
    function myFunction() {
      alert("Hello World");
    }
</script>
</body>
</html>
```
