---
format: md
title: "通过RdbStore.query()获取resultSet对象，出现resultSet的rowCount返回结果为-1"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-11
---


查询失败，返回结果为-1。

以下是一种可能的情况：

如果RdbPredicates对象传入错误的表名，调用query接口后，返回的ResultSet对象不会为空，也不会立即抛出异常。但在对ResultSet对象进行操作时，会触发异常。

ROWCOUNT == 0：表中无数据。

ROWCOUNT == -1：表示没有表。
