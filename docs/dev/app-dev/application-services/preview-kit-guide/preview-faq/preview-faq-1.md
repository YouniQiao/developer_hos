---
displayed_sidebar: appDevSidebar
title: "openPreview打开显示预览失败"
original_url: /docs/dev/app-dev/application-services/preview-kit-guide/preview-faq/preview-faq-1
format: md
---


Preview Kit的[openPreview](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/preview-arkts#openpreview)接口在传入文件预览信息时，当前仅支持传入文件的[uri](/docs/dev/app-dev/application-framework/core-file-kit/user-files/user-file-uri-intro)，不支持传入文件的沙箱路径。

如果调用openPreview接口后，显示预览失败，请检查传入的是否为uri并且检查传入的uri是否存在。
