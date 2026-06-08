---
format: md
title: "如何使用Sqlite全文检索能力"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-9
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-9
last_sync: 2026-06-07
sync_hash: 5b97afd3
upstream_hash: 20717e4149e1
---

**解决措施**

没有提供直接的接口，需要执行SQL语句CREATE VIRTUAL TABLE语句建立FTS表，再使用MATCH操作符实现检索。

[executeSql](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore#executesql10)：执行包含指定参数但不返回值的SQL语句。

[querySql](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-rdbstore#querysql10)：根据指定的SQL语句查询数据库中的数据。
