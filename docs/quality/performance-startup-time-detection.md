---
title: "启动耗时类问题检测方法"
source_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-performance-startup-time-detection
---

# 启动耗时类问题检测方法

## 启动时延检测

启动耗时事件用于度量应用在系统可感知阶段的启动过程耗时。应用订阅此事件后，每次启动都会返回启动耗时的数据，其中包括点击时间和动效结束时间。可通过大数据分析这些数据来判断启动耗时是否处于健康状态。启动耗时检测的原理详见[启动耗时事件检测](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perf-detection#启动耗时事件检测)。此外，订阅者可以自行设置结束时间，以获取定制化的启动耗时数据。具体事件定义请参阅[启动耗时事件介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-launch-event)。开发者可以通过HiAppEvent接口[订阅启动耗时事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-launch-arkts)，以获取维护和测试所需的信息。
