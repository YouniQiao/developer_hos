---
format: md
title: "用户首选项是线程安全的吗"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-arkdata-kit/faqs-local-database-management-35
---


首选项是线程安全的，支持多线程访问并确保数据一致性，但仅限同进程内使用，不支持多进程场景。
