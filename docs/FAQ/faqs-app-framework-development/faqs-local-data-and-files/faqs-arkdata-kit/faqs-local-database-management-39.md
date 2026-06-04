---
title: "跨模块、跨进程时如何保证正常读取首选项中数据"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-database-management-39
---

**解决措施**

跨模块：

由于context不同，跨模块、多页面场景下可能无法获取数据。建议在Ability中使用单例类存储全局context，或使用应用级context。

跨进程：

不同进程只有在同沙箱场景下才能访问同一个preference文件。多进程可通过dataGroupId在多个进程间共享同一个preference文件。
