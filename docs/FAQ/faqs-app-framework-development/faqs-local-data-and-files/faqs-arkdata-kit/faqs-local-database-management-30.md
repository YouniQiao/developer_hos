---
format: md
title: "如何实现同步方式调用数据库接口"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-30
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-30
last_sync: 2026-06-07
sync_hash: 116e8b82
---
使用getRdbStore打开数据库时，推荐封装成async/await语法，对于性能敏感场景可直接使用同步接口，异步封装适用于需要避免UI阻塞的情况。

关于数据库的增删改查，已提供同步接口，具体可查看[API文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore#insertsync12)。
