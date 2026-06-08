---
title: "Web组件如何访问本地的资源文件，并添加查询参数"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-39
format: md
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-39
last_sync: 2026-06-07
sync_hash: 272f967e
---
本地资源文件应存放在模块的“src/main/resources/rawfile”文件夹下，可通过 $rawfile('文件名') 访问。

目前不支持直接添加查询参数。但可以通过Web组件加载HTML文件，使用`window.location.href`跳转到带有参数的本地HTML页面。具体示例代码请参考文档。

```
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct WebComponent {
  controller: webview.WebviewController = new webview.WebviewController();

  build() {
    Column() {
      Web({ src: $rawfile('index.html'), controller: this.controller })
        .javaScriptAccess(true)
    }
  }
}
```

在“src\\main\\resources\\rawfile”文件夹下创建index.html和details.html文件。

index.html：

```
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript"> window.onload = function() { window.location.href = "details.html"; }
    </script>
</head>
<body></body>
</html>
```

details.html：

```
<!DOCTYPE html>
<html>
<head><title>详情页</title></head>
<body><h1>欢迎来到详情页！</h1>
<p>您已成功从首页跳转到此页，并在URL中添加了参数。</p></body>
</html>
```
