---
title: "运行态功耗检测"
original_url: /docs/quality/power-consumption-runtime-analysis
format: md
---


# 运行态功耗检测

运行态功耗检测主要基于[HiAppEvent事件订阅](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent)，这是一种系统层面为应用开发者提供的事件打点机制，用于帮助应用记录运行过程中发生的故障信息、统计信息、安全信息及用户行为信息，支持开发者分析应用的运行状况。

详细检测能力介绍可参考[功耗检测](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/power-detection)文档。

运行态功耗检测支持通过HiAppEvent订阅[CPU高负载事件](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/high-cpu-load-event)和[24h功耗器件分解统计事件](/docs/dev/app-dev/system/24-hour-battery-usage-event)。
