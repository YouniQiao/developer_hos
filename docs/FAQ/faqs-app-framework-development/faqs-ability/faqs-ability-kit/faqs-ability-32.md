---
format: md
title: "Extension类进程崩溃是否会导致主进程崩溃"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-32
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-32
last_sync: 2026-06-07
sync_hash: 64c971b5
---
子进程的崩溃不会直接导致主进程崩溃。只有当子进程的崩溃导致主进程在使用部分功能时抛出了未被应用捕获的异常，才会间接导致主进程崩溃。
