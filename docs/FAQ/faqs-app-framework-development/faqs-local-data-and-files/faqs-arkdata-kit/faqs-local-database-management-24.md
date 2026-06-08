---
format: md
title: "创建KVManager时bundleName必须是本应用的包名吗"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-24
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-24
last_sync: 2026-06-07
sync_hash: 84236f53
---
虽然bundleName可以使用非本应用包名，但由于closeKVStore/deleteKVStore等操作需要验证appId与bundleName的一致性，为避免混淆建议使用应用包名。
