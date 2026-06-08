---
format: md
title: "Cmake编译时如何显示不同级别的日志信息"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-50
upstream_id: FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-50
last_sync: 2026-06-07
sync_hash: e5f8733f
---
在hvigor/hvigor-config.json5文件中修改"logging"字段的"level"字段值。级别有"debug"、"info"、 "warn"、"error"。修改完成后，可以在run窗口查看CMakeLists.txt文件中message方法打印的日志信息。
