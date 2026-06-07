---
format: md
title: "对于多线程操作首选项和数据库是不是线程安全的？还是每一个线程独立的"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-threading-model/faqs-arkts-41
---


该方法是线程安全的。

* 首选项默认支持线程安全，允许多个线程同时读取数据。为了防止数据不一致，写入操作必须进行同步控制。
* 数据库SQLite和ORM框架均为线程安全。需要合理管理连接和操作。
