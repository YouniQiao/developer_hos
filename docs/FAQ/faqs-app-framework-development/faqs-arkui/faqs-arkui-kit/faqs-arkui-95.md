---
format: md
title: "ConstraintSize尺寸设置不生效"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-95
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-95
last_sync: 2026-06-07
sync_hash: 97cd097c
---
**问题现象**

constraintSize约束组件尺寸时，子组件内设置百分比宽度，例如width('100%')会采用constraintSize约束中的最大宽乘百分比，导致撑开组件，看起来constraintSize设置没生效。

**解决措施**

可以在外层使用Scroll组件，设置constraintSize，当子组件占用空间超过设置的约束值时，会显示滚动条。
