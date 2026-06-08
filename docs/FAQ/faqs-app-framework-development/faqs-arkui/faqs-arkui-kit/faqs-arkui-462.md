---
format: md
title: "AppStorage存了对象之后里面的值取不出来，什么原因"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-462
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-462
last_sync: 2026-06-07
sync_hash: 66bd643d
---
**问题描述**

AppStorage存的数据取不出来，存储包含字符串数组的对象时会出现异常。

**解决措施**

AppStorage结合PersistentStorage实现持久化存储UI状态时，可以存储字符串数据，但不支持嵌套对象（对象数组，对象的属性是对象等）。因为目前框架无法检测AppStorage中嵌套对象（包括数组）值的变化，所以无法写回到PersistentStorage中。

**参考链接**

[PersistentStorage：持久化存储UI状态](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage#限制条件)
