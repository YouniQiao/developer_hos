---
format: md
title: "是否支持在TS文件中加载ArkTS文件，TS是否会被限制使用"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-82
upstream_id: FAQ/faqs-app-framework-development/faqs-arkts/faqs-arkts-kit/faqs-arkts-82
last_sync: 2026-06-07
sync_hash: fd4c72b5
---
不支持在TS文件中调用ArkTS文件。对于ArkTS中禁用的语法，例如：with语句等，可以考虑在TS文件中编写相关内容，再在ArkTS文件中调用。

不会限制使用TS/JS文件，但会在TS/JS文件中限制import ets文件。
