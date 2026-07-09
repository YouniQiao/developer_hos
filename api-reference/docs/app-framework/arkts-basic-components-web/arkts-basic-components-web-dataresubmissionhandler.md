---
title: "Class (DataResubmissionHandler)"
upstream_id: "harmonyos-references/arkts-basic-components-web-dataresubmissionhandler"
catalog: "harmonyos-references"
content_hash: "ddea37526cf9"
synced_at: "2026-07-09T00:58:53.373679"
---

# Class (DataResubmissionHandler)

DataResubmissionHandler是Web组件中处理网页表单数据重新提交的处理类。当网页需要重新提交之前已发送的表单数据时，Web组件会通过onDataResubmitted事件回调提供DataResubmissionHandler实例给应用，允许应用决定是否重新提交表单数据或取消导航。

![](./img/note_3.0-zh-cn.png)

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 9开始支持。
- 示例效果请以真机运行为准。

#### constructor9+

constructor()

DataResubmissionHandler的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### resend9+

resend(): void

重新发送表单数据。

系统能力： SystemCapability.Web.Webview.Core

示例：

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller })
        .onDataResubmitted((event) => {
          console.info('onDataResubmitted');
          event.handler.resend();
        })
    }
  }
}
```

#### cancel9+

cancel(): void

取消重新发送表单数据。

系统能力： SystemCapability.Web.Webview.Core

示例：

```
// xxx.ets
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: 'www.example.com', controller: this.controller })
        .onDataResubmitted((event) => {
          console.info('onDataResubmitted');
          event.handler.cancel();
        })
    }
  }
}
```
