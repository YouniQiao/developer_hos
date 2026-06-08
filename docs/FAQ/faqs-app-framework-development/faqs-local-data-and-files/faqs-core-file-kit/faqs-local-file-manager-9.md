---
format: md
title: "文件分享能否使用Want配置打开具体应用，而不是显示选择窗口"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-9
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-9
last_sync: 2026-06-07
sync_hash: 872723f8
---
目前不支持使用Want配置打开具体应用。当前拉起的打开方式是通过设备内应用配置action: "ohos.want.action.sendData"来识别的，不能由业务自行指定。

**参考链接**

[应用文件分享](/docs/dev/app-dev/application-framework/core-file-kit/app-file/share-app-file)
