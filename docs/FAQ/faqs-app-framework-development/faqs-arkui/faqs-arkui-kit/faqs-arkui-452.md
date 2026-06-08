---
format: md
title: "Tabs组件，TabContent页面加载耗时，预加载未生效，怎么解决"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-452
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-452
last_sync: 2026-06-07
sync_hash: 78b2a6c3
---
**问题分析**

[aboutToAppear()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-lifecycle#abouttoappear)被调用的时候Tabs组件尚未完成渲染，这会导致preloadItems方法预加载不存在的索引。

**解决方案**

TabContent中的[onWillShow()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabcontent#onwillshow12)方法能够实现预加载功能，但是Tabs每次切换时都会触发onWillShow()回调，需要做节流处理。
