---
format: md
title: "关于对relationalStore.RdbStore的使用问题：如何查询数据库，需要开一个子线程吗"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-47
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-47
last_sync: 2026-06-07
sync_hash: df39da29
upstream_hash: fbfd19e58772
---

查询数据库可以使用[@ohos.data.relationalStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-relationalstore)模块提供的[query](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore#query10)方法，该方法是异步方法，因此对于查询数据库操作，不需要开子线程。
