---
title: "运行态性能检测"
source_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-performance-runtime-detection
---

## 启动耗时类问题检测方法

### 启动时延检测

启动耗时事件用于度量应用在系统可感知阶段的启动过程耗时。应用订阅此事件后，每次启动都会返回启动耗时的数据，其中包括点击时间和动效结束时间。可通过大数据分析这些数据来判断启动耗时是否处于健康状态。启动耗时检测的原理详见[启动耗时事件检测](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perf-detection#启动耗时事件检测)。此外，订阅者可以自行设置结束时间，以获取定制化的启动耗时数据。具体事件定义请参阅[启动耗时事件介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-launch-event)。开发者可以通过HiAppEvent接口[订阅启动耗时事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-app-launch-arkts)，以获取维护和测试所需的信息。

## 主线程超时类问题检测方法

当应用的主线程执行耗时任务时，用户会感觉到应用卡顿，但若未达到卡死的时间限制，则不会生成故障日志，这给开发者定位问题带来了不便。为此，系统提供了[任务超时检测](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/apptask-timeout-guidelines)机制，能够生成采样调用栈文件或trace文件，帮助开发者定位和分析主线程任务的执行情况。开发者可以通过HiAppEvent接口订阅[主线程超时事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/main-thread-jank-events)，以获取维护和测试信息。

## 滑动丢帧类问题检测方法

在滑动操作期间，丢帧问题尤为明显：本应流畅的动画会出现间断。这是因为渲染内容所需的时间超过了系统显示相应帧的时间，导致画面在移动时会在一帧或多帧中暂停，从而产生卡顿。

### 丢帧故障原理

图形系统采用了统一渲染模式。在整个渲染流程中，首先由应用侧响应消费者的屏幕点击等输入事件，处理完成后提交给Render Service（渲染服务）。Render Service协调GPU等资源进行处理，再将最终图像统一送到屏幕上显示。在整个处理流程中，应用侧和Render Service侧都可能出现卡顿，导致最终用户观察到丢帧。如果应用主线程或Render Service中的单帧绘制过程长时间阻塞，则会导致绘制无法按时完成，形成丢帧。滑动丢帧检测原理详见：[滑动事件检测](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/perf-detection#滑动事件检测)。

### 滑动丢帧检测

滑动丢帧事件用于检测列表滑动过程中出现的卡顿现象，具体详情请参阅[滑动丢帧事件介绍](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-scroll-jank-event)。开发者可以通过HiAppEvent接口[订阅滑动丢帧事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hiappevent-watcher-scroll-jank-arkts)，当列表滑动中出现卡顿时，系统将上报故障事件。利用事件中的维测信息，可以有效定位滑动卡顿问题。
