---
title: "应用事件打点开发指导"
original_url: /docs/dev/atomic-dev/atomic-log-development/atomic-hiappevent-guidelines
format: md
upstream_id: dev/atomic-dev/atomic-log-development/atomic-hiappevent-guidelines
last_sync: 2026-06-07
sync_hash: 5ea62bfc
---
元服务使用应用事件打点的开发方式与传统应用使用应用事件打点的开发方式相同，详见[HiAppEvent使用指导](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent)。

![](./img/62ed2024.png)

系统事件中，[踩内存事件](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events)、[启动耗时事件](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event)、[滑动丢帧事件](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/frame-drops-event-during-scrolling/hiappevent-watcher-scroll-jank-event)、[CPU高负载事件](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/high-cpu-load-event/hiappevent-watcher-cpu-usage-high-event)、[24h功耗器件分解统计事件](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/ev-24-hour-battery-usage-event/hiappevent-watcher-battery-usage-event)不支持在元服务进行订阅。
