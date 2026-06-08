---
displayed_sidebar: appDevSidebar
title: "展示广告时显示白屏"
original_url: /docs/dev/app-dev/application-services/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4
format: md
upstream_id: dev/app-dev/application-services/ads-kit-guide/ads-publisher-service-dev/ads-publisher-service-faq/ads-publisher-service-faq-4
last_sync: 2026-06-07
sync_hash: 61b23c9d
upstream_hash: 6996251fe191
---

展示广告时出现白屏可能原因为展示的广告样式与UI展示页面不匹配，横幅广告使用[AutoAdComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-autoadcomponent)组件展示；原生广告、开屏广告、贴片广告使用[AdComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-adcomponent)组件展示；激励广告、插屏广告调用[showAd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-advertising#advertisingshowad)方法展示。

建议排查步骤：

1. 获取请求广告时返回的广告数据并记录。
2. 打印展示广告时入参的广告数据，对比两者是否一致。
3. 检查请求的广告类型与使用的展示组件是否匹配。
