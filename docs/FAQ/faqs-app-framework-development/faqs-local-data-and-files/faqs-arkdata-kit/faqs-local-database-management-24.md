---
format: md
title: "创建KVManager时bundleName必须是本应用的包名吗"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-24
---

虽然bundleName可以使用非本应用包名，但由于closeKVStore/deleteKVStore等操作需要验证appId与bundleName的一致性，为避免混淆建议使用应用包名。
