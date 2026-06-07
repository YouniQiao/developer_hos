---
displayed_sidebar: appDevSidebar
title: "事件订阅简介"
original_url: /docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/event-subscription-overview
format: md
---


## 事件介绍

HiAppEvent能够订阅应用事件和系统事件。

### 应用事件

应用事件由开发者自行定义，例如点击按钮。应用事件的事件参数对象params包含的字段来源于应用，由开发者通过打点接口[write](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-hiappevent#hiappeventwrite-1)自定义配置。具体字段含义根据开发者需求确定。

### 系统事件

系统事件是指应用运行期间发生的性能、功耗、稳定性等问题。系统事件的事件参数对象params包含的字段来源于系统服务，已由系统服务定义。此外，系统事件中的崩溃事件和应用冻屏事件还支持开发者通过[setEventParam](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-hiappevent#hiappeventseteventparam12)接口向事件参数对象params中添加自定义参数。

已支持的系统事件介绍、检测原理及事件参数对象params包含的字段说明，请查阅各系统事件介绍的详细文档。

[崩溃事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/crash-events/hiappevent-watcher-crash-events)

[应用冻屏事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/freeze-events/hiappevent-watcher-freeze-events)

[资源泄漏事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/resource-leak-events/hiappevent-watcher-resourceleak-events)

[地址越界事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/address-sanitizer-events/hiappevent-watcher-address-sanitizer-events)

[主线程超时事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/main-thread-jank-events/hiappevent-watcher-mainthreadjank-events)

[任务执行超时事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-hicollie-events/hiappevent-watcher-apphicollie-events)

[应用终止事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/app-killed-events/hiappevent-watcher-app-killed-events)

[ArkWeb抛滑丢帧事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/scroll-arkweb-fling-jank-events/hiappevent-watcher-web-fling-jank-events)

[启动耗时事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/startup-duration-events/hiappevent-watcher-app-launch-event)

[滑动丢帧事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/frame-drops-event-during-scrolling/hiappevent-watcher-scroll-jank-event)

[CPU高负载事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/high-cpu-load-event/hiappevent-watcher-cpu-usage-high-event)

[24h功耗器件分解统计事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/ev-24-hour-battery-usage-event/hiappevent-watcher-battery-usage-event)

[音频卡顿事件介绍](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/system-events/hiappevent-audio-jank-event/hiappevent-watcher-audio-jank-event)

## 事件订阅的三种方式

HiAppEvent通过[addWatcher](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-hiappevent#hiappeventaddwatcher)接口提供系统事件的订阅功能，支持三种订阅方式。

方式一：设置回调条件triggerCondition，实现onTrigger()回调。当满足回调条件时，系统将自动触发回调。

方式二：未设置回调条件参数，使用事件订阅返回的holder对象主动获取监听的事件。

![](./img/f6510366.png)

主动获取监听的事件时，如果事件未生成或者日志信息未捕获完成，查询结果可能为空。此时，建议多次调用查询接口。

方式三：实现onReceive()回调，当监听的事件发生后实时触发回调。

ArkTS接口事件订阅参考[hiAppEvent.addWatcher](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-hiviewdfx-hiappevent#hiappeventaddwatcher)；C/C++接口事件订阅只支持方式一和方式三，参考[事件订阅](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hiappevent/event-subscription/hiappevent-watcher-app-events-ndk#步骤二订阅事件)。
