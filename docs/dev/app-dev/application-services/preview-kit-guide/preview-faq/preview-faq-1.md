---
displayed_sidebar: appDevSidebar
title: "openPreview打开显示预览失败"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-faq-1
format: md
---


Preview Kit的[openPreview](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/preview-arkts#openpreview)接口在传入文件预览信息时，当前仅支持传入文件的[uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/user-file-uri-intro)，不支持传入文件的沙箱路径。

如果调用openPreview接口后，显示预览失败，请检查传入的是否为uri并且检查传入的uri是否存在。
