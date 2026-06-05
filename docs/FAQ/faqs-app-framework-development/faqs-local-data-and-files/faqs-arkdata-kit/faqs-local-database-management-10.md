---
format: md
title: "如何获知SQLite支持版本"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-10
---


当前SQLite版本号："3.40.1"，SQLite的版本是HarmonyOS系统内置好的，有封装好的RDB接口，不能随意引用最新版本。

虽然系统内置SQLite，但推荐使用更高层级的RDB接口进行封装操作，[@ohos.data.relationalStore](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-data-relationalstore)基于SQLite组件提供了一套完整的对本地数据库进行管理的机制，对外提供了一系列的增、删、改、查等接口，也可以直接运行用户输入的SQL语句来满足复杂的场景需要。
