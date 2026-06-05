---
format: md
title: "如果需要保存多张表，是创建一个数据库保存多张表还是创建多个数据库，每个数据库只保存一张表？使用的原则是什么"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-19
---

创建一个数据库保存多张表通常更为合适。为每个表创建独立数据库将导致数据库实例数量线性增长，显著增加运维复杂度和资源开销。此外，多数据库方案会额外消耗连接池资源，且在需要跨库JOIN或事务时引入架构复杂性。
