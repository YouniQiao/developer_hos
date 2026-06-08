---
format: md
title: "如何主动退出当前应用"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-5
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-5
last_sync: 2026-06-07
sync_hash: d614ae17
---
可以通过ApplicationContext的killAllProcesses()方法退出当前应用。

调用killAllProcesses()方法后，会逐个终止应用中的所有进程。
