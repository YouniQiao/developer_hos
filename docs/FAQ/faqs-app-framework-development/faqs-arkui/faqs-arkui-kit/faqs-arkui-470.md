---
format: md
title: "如何去掉Tabs组件自定义tabBar的自带无障碍朗读"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-470
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-470
last_sync: 2026-06-07
sync_hash: 6725050f
upstream_hash: 725a7a199d5c
---

**问题描述**

想去掉Tabs组件自定义tabBar的自带无障碍朗读，请问如何实现。

**解决措施**

可对Tabs组件设置无障碍朗读模式属性[accessibilityGroup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-accessibility#accessibilitygroup)为true。
