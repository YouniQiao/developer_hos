---
format: md
title: "以libstd为例，C++的标准库放在哪里了，有没有打到hap包中"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-48
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-48
last_sync: 2026-06-07
sync_hash: 0b5c31ac
---
libc++\_shared.so被打包到应用目录下，每个应用都有一份独立的文件。
