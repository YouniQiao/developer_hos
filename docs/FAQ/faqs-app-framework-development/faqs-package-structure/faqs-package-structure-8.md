---
format: md
title: "HAR包中使用window作为Toast时无法引入页面组件"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-8
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-8
last_sync: 2026-06-07
sync_hash: ba8cbd04
---
**问题现象**

在HAR包中使用一个window作为弹窗，该window通过一个page页面实现。使用window.setUIContent方法引入page时，出现导入失败的问题。

**解决措施**

1. HAR不包含page，建议在HAP中声明窗口以放置HAR或HSP组件。
2. 实现弹窗Toast，可以使用ArkTS组件来自定义弹窗组件。

**参考链接**

[自定义弹窗](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box)
