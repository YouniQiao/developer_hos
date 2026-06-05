---
format: md
title: "为什么在关系型数据库中调用deleteRdbStore函数后并未真实删除数据库，对数据库的操作依旧可用"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-36
---

建立数据库时，如果在 StoreConfig 中配置了自定义路径，调用 relationalStore.deleteRdbStore 接口删除数据库将无效，必须使用[deleteRdbStore10+](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-data-relationalstore-f#relationalstoredeleterdbstore10)接口。数据库删除成功后，建议将数据库对象置为null以避免内存泄漏。

**参考链接**

[关系型数据库](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-relationalstore)
