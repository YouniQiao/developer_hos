---
format: md
title: "如何判断JS对象中是否存在某个值"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-192
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-192
last_sync: 2026-06-07
sync_hash: a4933bee
---
Object.values(对象名).indexOf(待检测值)，若返回-1表示不包含对应值；返回值不等于-1则表示包含。

```
var res = array.indexOf(val)
```
