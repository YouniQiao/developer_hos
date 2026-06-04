---
title: "relationalStore是线程安全的吗"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-42
---

relationalStore是线程安全的，但由于Worker线程运行在独立上下文环境，与主线程的relationalStore实例存在进程隔离，所以不支持Worker。ArkTS语言基础类库提供了taskPool和worker两种多线程方案，均基于Actor并发模型实现。Actor并发模型通过事件传递数据，避免了锁竞争等复杂问题，确保线程安全且并发度较高。

[@ohos.data.relationalStore (关系型数据库)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-relationalstore)
