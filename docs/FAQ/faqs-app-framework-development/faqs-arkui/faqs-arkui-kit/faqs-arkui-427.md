---
format: md
title: "Tabs如何实现TabBar左对齐"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-427
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-427
last_sync: 2026-06-07
sync_hash: fba194fd
---
通过[TabsOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#tabsoptions15)的barModifier属性设置TabBar的[align](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-location#align)参数，可以实现页签对齐布局效果。类似于文本对齐，开发者可以自行设置居中、居上、居下、居左或者居右对齐，在RTL布局下建议使用start/end替代left/right。具体可参考示例代码：[示例16（页签对齐布局）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs#示例16页签对齐布局)。
