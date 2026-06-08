---
displayed_sidebar: appDevSidebar
title: "剪贴板粘贴框遮挡智能填充选择框"
original_url: /docs/dev/app-dev/application-services/scenario-fusion-kit-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-3
format: md
upstream_id: dev/app-dev/application-services/scenario-fusion-kit-guide/scenario-fusion-button-frequently-asked-questions/scenario-fusion-faq-3
last_sync: 2026-06-07
sync_hash: 649412d1
---
**现象描述**

![](./img/6b43c938.jpg)

**解决措施**

在代码文件中设置.selectionMenuHidden(true)，使剪贴板粘贴框隐藏。

```
      Row() {
        Text('收货人：').textAlign(TextAlign.End).width('25%')
        TextInput().width('75%').contentType(ContentType.PERSON_FULL_NAME).selectionMenuHidden(true)
      }
```
