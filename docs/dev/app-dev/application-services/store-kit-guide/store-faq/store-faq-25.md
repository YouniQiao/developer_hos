---
displayed_sidebar: appDevSidebar
title: "订阅时长按照自然月计算时，2月份是28天还是29天？"
original_url: /docs/dev/app-dev/application-services/store-kit-guide/store-faq/store-faq-25
format: md
upstream_id: dev/app-dev/application-services/store-kit-guide/store-faq/store-faq-25
last_sync: 2026-06-07
sync_hash: b965c10d
---
根据订阅日期决定。例如：当月第N日订阅，下个月的第N日续期。如果这个N在下个月不存在，那就在下个月的最后一日续期，下下个月恢复第N日续期。
