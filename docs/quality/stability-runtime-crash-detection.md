---
title: "应用崩溃问题检测方法"
original_url: /docs/quality/stability-runtime-crash-detection
format: md
upstream_id: /docs/quality/stability-runtime-crash-detection
last_sync: 2026-06-07
sync_hash: efd63a47
---
# 应用崩溃问题检测方法

应用崩溃是指应用进程在运行过程中发生不可恢复的异常，最终导致进程非预期的退出。目前有以下两类场景应用会发生崩溃：

1. Native代码未处理崩溃异常信号会生成CPP Crash日志。检测方法详见[Cpp Crash（进程崩溃）检测](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines)，崩溃异常信号详见[系统处理的崩溃信号](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/cppcrash-guidelines#系统处理的崩溃信号)。
2. ArkTS/JS代码未处理异常会生成JS Crash日志，检测方法详见[JS Crash（进程崩溃）检测](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/fault-analysis/crash-detection/jscrash-guidelines)。
