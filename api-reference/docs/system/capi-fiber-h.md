---
title: "fiber.h"
upstream_id: "harmonyos-references/capi-fiber-h"
catalog: "harmonyos-references"
content_hash: "daf4aebf07cf"
synced_at: "2026-07-28T16:51:05.348531"
---

# fiber.h

#### 概述

声明纤程的C接口。纤程是一种轻量级的用户态线程，用于在用户空间内实现高效的任务调度和上下文切换。

引用文件： <ffrt/fiber.h>

库： libffrt.z.so

系统能力： SystemCapability.Resourceschedule.Ffrt.Core

起始版本： 20

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [FFRT_C_API int ffrt_fiber_init(ffrt_fiber_t* fiber, void(*func)(void*), void* arg, void* stack, size_t stack_size)](#ffrt_fiber_init) | 初始化纤程。初始化纤程结构，使其准备好被执行。调用者需负责分配stack指向的栈内存，并保证该内存在纤程整个生命周期内有效。 |
| [FFRT_C_API void ffrt_fiber_switch(ffrt_fiber_t* from, ffrt_fiber_t* to)](#ffrt_fiber_switch) | 在两个纤程间切换执行上下文。将当前执行上下文保存到from指定的纤程中，并从to指定的纤程恢复执行上下文。from和to都必须指向已通过[ffrt_fiber_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fiber-h#ffrt_fiber_init)初始化的纤程实例；否则行为未定义。 |

#### 函数说明

#### [h2]ffrt_fiber_init()

```
FFRT_C_API int ffrt_fiber_init(ffrt_fiber_t* fiber, void(*func)(void*), void* arg, void* stack, size_t stack_size)
```
 描述

初始化纤程。初始化纤程结构，使其准备好被执行。调用者需负责分配stack指向的栈内存，并保证该内存在纤程整个生命周期内有效。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_fiber_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-fiber-t)* fiber | 指向待初始化的纤程结构的指针。 |
| void(*func)(void*) | 纤程将执行的入口函数。 |
| void* arg | 传递给入口函数的参数。 |
| void* stack | 指向纤程栈所用内存区域的指针。 |
| size_t stack_size | 栈的大小，单位是字节。必须足以容纳纤程上下文。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | 纤程初始化成功时返回ffrt_success； stack_size过小（不足以容纳纤程上下文）时返回ffrt_error_inval。 |

#### [h2]ffrt_fiber_switch()

```
FFRT_C_API void ffrt_fiber_switch(ffrt_fiber_t* from, ffrt_fiber_t* to)
```
 描述

在两个纤程间切换执行上下文。将当前执行上下文保存到from指定的纤程中，并从to指定的纤程恢复执行上下文。from和to都必须指向已通过[ffrt_fiber_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fiber-h#ffrt_fiber_init)初始化的纤程实例；否则行为未定义。

起始版本： 20

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_fiber_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-fiber-t)* from | 指向用于保存当前上下文的纤程的指针。 |
| [ffrt_fiber_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-fiber-t)* to | 指向用于恢复执行上下文的纤程的指针。 |

参考：

[ffrt_fiber_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fiber-h#ffrt_fiber_init)
