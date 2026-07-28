---
title: "sleep.h"
upstream_id: "harmonyos-references/capi-sleep-h"
catalog: "harmonyos-references"
content_hash: "89ba090b79df"
synced_at: "2026-07-28T16:51:04.986186"
---

# sleep.h

#### 概述

声明[ffrt_usleep](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-sleep-h#ffrt_usleep)和[ffrt_yield](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-sleep-h#ffrt_yield)的C接口。

引用文件： <ffrt/sleep.h>

库： libffrt.z.so

系统能力： SystemCapability.Resourceschedule.Ffrt.Core

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [FFRT_C_API int ffrt_usleep(uint64_t usec)](#ffrt_usleep) | 将调用线程挂起指定的时长。若usec超过支持的最大值则按最大值截断。 |
| [FFRT_C_API void ffrt_yield(void)](#ffrt_yield) | 将控制权让出给其他任务，使其有机会被执行。 |

#### 函数说明

#### [h2]ffrt_usleep()

```
FFRT_C_API int ffrt_usleep(uint64_t usec)
```
 描述

将调用线程挂起指定的时长。若usec超过支持的最大值则按最大值截断。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| uint64_t usec | 调用线程被挂起的时长，单位是微秒。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | ffrt_success。该函数不会失败。 |

#### [h2]ffrt_yield()

```
FFRT_C_API void ffrt_yield(void)
```
 描述

将控制权让出给其他任务，使其有机会被执行。

起始版本： 10
