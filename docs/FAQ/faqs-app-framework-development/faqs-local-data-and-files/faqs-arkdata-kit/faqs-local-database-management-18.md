---
format: md
title: "数据库batchInsert和单个事务insert效率问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-18
---


事务插入无法达到批量插入的效率。在插入100条记录时，单独事务插入需要执行100次数据库操作，而批量插入只需一次批量操作。批量插入接口在单次操作中完成数据写入，其内部已包含事务处理机制。
