---
title: "hiappevent_event.h"
upstream_id: "harmonyos-references/capi-hiappevent-event-h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:47.372137"
---

# hiappevent_event.h

#### 概述

定义所有预定义事件的事件名称。除了与特定应用关联的自定义事件之外，开发者还可以使用预定义事件进行打点。

引用文件： <hiappevent/hiappevent_event.h>

库： libhiappevent_ndk.z.so

系统能力： SystemCapability.HiviewDFX.HiAppEvent

起始版本： 8

相关模块： [HiAppEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent)

#### 汇总

#### [h2]宏定义

| 名称 | 描述 |
| --- | --- |
| [EVENT_USER_LOGIN](#event_user_login) "hiappevent.user_login" | 用户登录事件。 **起始版本：** 8 |
| [EVENT_USER_LOGOUT](#event_user_logout) "hiappevent.user_logout" | 用户登出事件。 **起始版本：** 8 |
| [EVENT_DISTRIBUTED_SERVICE_START](#event_distributed_service_start) "hiappevent.distributed_service_start" | 分布式服务事件。 **起始版本：** 8 |
| [EVENT_APP_CRASH](#event_app_crash) "APP_CRASH" | 崩溃事件。 **起始版本：** 12 |
| [EVENT_APP_FREEZE](#event_app_freeze) "APP_FREEZE" | 应用冻屏事件。 **起始版本：** 12 |
| [EVENT_APP_LAUNCH](#event_app_launch) "APP_LAUNCH" | 启动耗时事件。 **起始版本：** 12 |
| [EVENT_SCROLL_JANK](#event_scroll_jank) "SCROLL_JANK" | 滑动丢帧事件。 **起始版本：** 12 |
| [EVENT_CPU_USAGE_HIGH](#event_cpu_usage_high) "CPU_USAGE_HIGH" | CPU高负载事件。 **起始版本：** 12 |
| [EVENT_BATTERY_USAGE](#event_battery_usage) "BATTERY_USAGE" | 24h功耗器件分解统计事件。 **起始版本：** 12 |
| [EVENT_RESOURCE_OVERLIMIT](#event_resource_overlimit) "RESOURCE_OVERLIMIT" | 资源泄漏事件。 **起始版本：** 12 |
| [EVENT_ADDRESS_SANITIZER](#event_address_sanitizer) "ADDRESS_SANITIZER" | 地址越界事件。 **起始版本：** 12 |
| [EVENT_MAIN_THREAD_JANK](#event_main_thread_jank) "MAIN_THREAD_JANK" | 主线程超时事件。 **起始版本：** 12 |
| [EVENT_APP_HICOLLIE](#event_app_hicollie) "APP_HICOLLIE" | 任务执行超时事件。 **起始版本：** 18 |
| [EVENT_APP_KILLED](#event_app_killed) "APP_KILLED" | 应用终止事件。 **起始版本：** 20 |
| [EVENT_AUDIO_JANK_FRAME](#event_audio_jank_frame) "AUDIO_JANK_FRAME" | 音频卡顿事件。 **起始版本：** 21 |
| [DOMAIN_OS](#domain_os) "OS" | OS作用域。 **起始版本：** 12 |
| [EVENT_MAIN_THREAD_JANK_V2](#event_main_thread_jank_v2) "MAIN_THREAD_JANK_V2" | 用于设置主线程超时事件配置策略。 **起始版本：** 22 |
| [OH_EVENT_APP_FREEZE_WARNING](#oh_event_app_freeze_warning) "APPFREEZE_WARNING" | 应用冻屏告警事件。 **起始版本：** 26.0.0 |

#### 宏定义说明

#### [h2]EVENT_USER_LOGIN

```
#define EVENT_USER_LOGIN "hiappevent.user_login"
```
 描述

用户登录事件。

起始版本： 8

#### [h2]EVENT_USER_LOGOUT

```
#define EVENT_USER_LOGOUT "hiappevent.user_logout"
```
 描述

用户登出事件。

起始版本： 8

#### [h2]EVENT_DISTRIBUTED_SERVICE_START

```
#define EVENT_DISTRIBUTED_SERVICE_START "hiappevent.distributed_service_start"
```
 描述

分布式服务事件。

起始版本： 8

#### [h2]EVENT_APP_CRASH

```
#define EVENT_APP_CRASH "APP_CRASH"
```
 描述

崩溃事件。

起始版本： 12

#### [h2]EVENT_APP_FREEZE

```
#define EVENT_APP_FREEZE "APP_FREEZE"
```
 描述

应用冻屏事件。

起始版本： 12

#### [h2]EVENT_APP_LAUNCH

```
#define EVENT_APP_LAUNCH "APP_LAUNCH"
```
 描述

启动耗时事件。

起始版本： 12

#### [h2]EVENT_SCROLL_JANK

```
#define EVENT_SCROLL_JANK "SCROLL_JANK"
```
 描述

滑动丢帧事件。

起始版本： 12

#### [h2]EVENT_CPU_USAGE_HIGH

```
#define EVENT_CPU_USAGE_HIGH "CPU_USAGE_HIGH"
```
 描述

CPU高负载事件。

起始版本： 12

#### [h2]EVENT_BATTERY_USAGE

```
#define EVENT_BATTERY_USAGE "BATTERY_USAGE"
```
 描述

24h功耗器件分解统计事件。

起始版本： 12

#### [h2]EVENT_RESOURCE_OVERLIMIT

```
#define EVENT_RESOURCE_OVERLIMIT "RESOURCE_OVERLIMIT"
```
 描述

资源泄漏事件。

起始版本： 12

#### [h2]EVENT_ADDRESS_SANITIZER

```
#define EVENT_ADDRESS_SANITIZER "ADDRESS_SANITIZER"
```
 描述

地址越界事件。

起始版本： 12

#### [h2]EVENT_MAIN_THREAD_JANK

```
#define EVENT_MAIN_THREAD_JANK "MAIN_THREAD_JANK"
```
 描述

主线程超时事件。

起始版本： 12

#### [h2]EVENT_APP_HICOLLIE

```
#define EVENT_APP_HICOLLIE "APP_HICOLLIE"
```
 描述

任务执行超时事件。

起始版本： 18

#### [h2]EVENT_APP_KILLED

```
#define EVENT_APP_KILLED "APP_KILLED"
```
 描述

应用终止事件。

起始版本： 20

#### [h2]EVENT_AUDIO_JANK_FRAME

```
#define EVENT_AUDIO_JANK_FRAME "AUDIO_JANK_FRAME"
```
 描述

音频卡顿事件。

起始版本： 21

#### [h2]DOMAIN_OS

```
#define DOMAIN_OS "OS"
```
 描述

OS作用域。

起始版本： 12

#### [h2]EVENT_MAIN_THREAD_JANK_V2

```
#define EVENT_MAIN_THREAD_JANK_V2 "MAIN_THREAD_JANK_V2"
```
 描述

用于设置主线程超时事件配置策略。

起始版本： 22

#### [h2]OH_EVENT_APP_FREEZE_WARNING

```
#define OH_EVENT_APP_FREEZE_WARNING "APPFREEZE_WARNING"
```
 描述

应用冻屏告警事件。

起始版本： 26.0.0
