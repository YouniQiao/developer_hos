---
format: md
title: "注册的自定义字体在webview中无效"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-16
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-16
last_sync: 2026-06-07
sync_hash: 67acdb85
---
**问题现象**

通过@ohos.font.registerFont接口注册的自定义字体在webview中设置对应的family无法正确显示。在webview H5中设置DOM style font-family也无效。

**解决措施**

将字体文件放置在工程的rawfile目录下，在H5代码中使用@font-face指定自定义字体用于显示文本。在需要应用自定义字体的元素中，配置font-family属性。

H5侧：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
  <style>
    @font-face {
      font-family: 'MaoKenWangXingYuan';src: url('./MaoKenWangXingYuan.ttf');
    }
    #title {
      font-family: 'MaoKenWangXingYuan';
    }
  </style>
</head>
<body>
<h1 id="title">猫啃忘形圆</h1>
</body>
</html>
```
