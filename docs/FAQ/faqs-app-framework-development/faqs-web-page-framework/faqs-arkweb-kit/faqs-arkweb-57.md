---
format: md
title: "如何解决webview loaddata白屏问题"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-57
upstream_id: FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-57
last_sync: 2026-06-07
sync_hash: a0988c7d
---
loadData使用不同的参数会有不同的效果，如果参数不对可能会造成白屏现象。如果html中存在非法字符，例如css中的color: "#333"，有"#"的时候会加载不了，需要使用文档中提供的加载本地资源的方法，后面两个参数要设置为空格" "，" "。具体实现可参考[loadData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#loaddata)。
