---
format: md
title: "常用可以设置'auto'的属性的组件及其含义的介绍"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-335
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-335
last_sync: 2026-06-07
sync_hash: 29a82000
---
* Row、Column和RelativeContainer组件支持width/height属性设置为'auto'，此时组件尺寸会根据子组件自动调整；
* 在TextInput组件中，将width属性设置为'auto'，表示自适应文本宽度，与布局组件不同，TextInput的auto宽度仅根据输入文本内容调整，不受子组件影响；
* flexBasis属性默认值为'auto'，表示组件在主轴方向上的基准尺寸为其原始大小。
