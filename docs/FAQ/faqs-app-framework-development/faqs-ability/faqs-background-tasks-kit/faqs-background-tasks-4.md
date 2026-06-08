---
format: md
title: "如何申请多个长时任务"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-background-tasks-kit/faqs-background-tasks-4
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-background-tasks-kit/faqs-background-tasks-4
last_sync: 2026-06-07
sync_hash: 8e237ce3
---
**问题现象**

应用在后台运行多个任务，需申请多个长时任务。

**解决措施**

同一时刻，一个UIAbility只能申请一个长时任务。需要创建多个UIAbility来申请不同种类的长时任务。不同时刻可以申请不同种类的长时任务。

**参考链接**

[长时任务](/docs/dev/app-dev/application-framework/background-task-kit/continuous-task)
