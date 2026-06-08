---
format: md
title: "Hilog模块提供的OH_LOG_SetCallback接口返回的日志与系统落盘的Hilog日志是否一致"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-62
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-62
last_sync: 2026-06-07
sync_hash: 603d560c
---
Hilog模块提供的OH\_LOG\_SetCallback接口返回的是该应用运行进程内打印的符合日志输出级别的全部日志，返回的日志不受系统超限机制管控。

系统落盘的Hilog日志是当前系统全部进程的符合日志输出级别的日志，包括应用通过OH\_LOG\_SetCallback接口监听的该应用运行进程内的日志。落盘的日志受系统超限机制管控，超限后的日志无法输出保存。

基于上述原因，针对该应用运行进程内的日志，OH\_LOG\_SetCallback返回的日志数量应该大于等于落盘中的应用日志数量。
