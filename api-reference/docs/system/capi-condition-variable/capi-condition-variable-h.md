---
title: "condition_variable.h"
upstream_id: "harmonyos-references/capi-condition-variable-h"
catalog: "harmonyos-references"
content_hash: "13c2ee4dddd5"
synced_at: "2026-07-28T16:51:04.712586"
---

# condition_variable.h

#### 概述

声明条件变量的C接口。

引用文件： <ffrt/condition_variable.h>

库： libffrt.z.so

系统能力： SystemCapability.Resourceschedule.Ffrt.Core

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [FFRT_C_API int ffrt_cond_init(ffrt_cond_t* cond, const ffrt_condattr_t* attr)](#ffrt_cond_init) | 初始化条件变量。该条件变量不再使用时，必须通过[ffrt_cond_destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_destroy)销毁。 |
| [FFRT_C_API int ffrt_cond_signal(ffrt_cond_t* cond)](#ffrt_cond_signal) | 唤醒至少一个阻塞在条件变量上的线程。 |
| [FFRT_C_API int ffrt_cond_broadcast(ffrt_cond_t* cond)](#ffrt_cond_broadcast) | 唤醒当前阻塞在条件变量上的所有线程。 |
| [FFRT_C_API int ffrt_cond_wait(ffrt_cond_t* cond, ffrt_mutex_t* mutex)](#ffrt_cond_wait) | 将调用线程阻塞在条件变量上。调用线程在进入时必须持有该mutex。阻塞期间会原子地释放该mutex，并在函数返回前重新获取，因此调用方在唤醒时重新获得mutex的所有权。线程由另一个线程调用[ffrt_cond_signal](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_signal)或[ffrt_cond_broadcast](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_broadcast)唤醒。调用方需在唤醒后重新检查谓词，以防止虚假唤醒。 |
| [FFRT_C_API int ffrt_cond_timedwait(ffrt_cond_t* cond, ffrt_mutex_t* mutex, const struct timespec* time_point)](#ffrt_cond_timedwait) | 将调用线程阻塞至给定的时间点。如果在到达time_point前没有调用[ffrt_cond_signal](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_signal)或[ffrt_cond_broadcast](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_broadcast)来唤醒线程，线程会被自动唤醒。 |
| [FFRT_C_API int ffrt_cond_destroy(ffrt_cond_t* cond)](#ffrt_cond_destroy) | 销毁条件变量。该条件变量必须已通过[ffrt_cond_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_init)初始化，且在调用本接口时不得被任何线程引用。 |

#### 函数说明

#### [h2]ffrt_cond_init()

```
FFRT_C_API int ffrt_cond_init(ffrt_cond_t* cond, const ffrt_condattr_t* attr)
```
 描述

初始化条件变量。该条件变量不再使用时，必须通过[ffrt_cond_destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_destroy)销毁。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_cond_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-cond-t)* cond | 指向条件变量的指针。 |
| [const ffrt_condattr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-condattr-t)* attr | 指向条件变量属性的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | 条件变量初始化成功时返回ffrt_success； 否则返回ffrt_error_inval。 |

#### [h2]ffrt_cond_signal()

```
FFRT_C_API int ffrt_cond_signal(ffrt_cond_t* cond)
```
 描述

唤醒至少一个阻塞在条件变量上的线程。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_cond_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-cond-t)* cond | 指向条件变量的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | 线程被唤醒时返回ffrt_success； 否则返回ffrt_error_inval。 |

参考：

[ffrt_cond_wait](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_wait)

#### [h2]ffrt_cond_broadcast()

```
FFRT_C_API int ffrt_cond_broadcast(ffrt_cond_t* cond)
```
 描述

唤醒当前阻塞在条件变量上的所有线程。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_cond_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-cond-t)* cond | 指向条件变量的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | 线程被唤醒时返回ffrt_success； 否则返回ffrt_error_inval。 |

参考：

[ffrt_cond_wait](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_wait)

#### [h2]ffrt_cond_wait()

```
FFRT_C_API int ffrt_cond_wait(ffrt_cond_t* cond, ffrt_mutex_t* mutex)
```
 描述

将调用线程阻塞在条件变量上。调用线程在进入时必须持有该mutex。阻塞期间会原子地释放该mutex，并在函数返回前重新获取，因此调用方在唤醒时重新获得mutex的所有权。线程由另一个线程调用[ffrt_cond_signal](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_signal)或[ffrt_cond_broadcast](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_broadcast)唤醒。调用方需在唤醒后重新检查谓词，以防止虚假唤醒。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_cond_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-cond-t)* cond | 指向条件变量的指针。 |
| [ffrt_mutex_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutex-t)* mutex | 指向调用线程持有的mutex的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | 阻塞后被成功唤醒时返回ffrt_success； 否则返回ffrt_error_inval。 |

参考：

[ffrt_cond_timedwait](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_timedwait)

[ffrt_cond_signal](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_signal)

[ffrt_cond_broadcast](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_broadcast)

#### [h2]ffrt_cond_timedwait()

```
FFRT_C_API int ffrt_cond_timedwait(ffrt_cond_t* cond, ffrt_mutex_t* mutex, const struct timespec* time_point)
```
 描述

将调用线程阻塞至给定的时间点。如果在到达time_point前没有调用[ffrt_cond_signal](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_signal)或[ffrt_cond_broadcast](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_broadcast)来唤醒线程，线程会被自动唤醒。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_cond_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-cond-t)* cond | 指向条件变量的指针。 |
| [ffrt_mutex_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutex-t)* mutex | 指向mutex的指针。 |
| const struct timespec* time_point | 等待到期的绝对时间点。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | 阻塞后被成功唤醒时返回ffrt_success； 未被唤醒且到达time_point时返回ffrt_error_timedout； cond、mutex或time_point任一为null时返回ffrt_error_inval。 |

参考：

[ffrt_cond_wait](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_wait)

[ffrt_cond_signal](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_signal)

[ffrt_cond_broadcast](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_broadcast)

#### [h2]ffrt_cond_destroy()

```
FFRT_C_API int ffrt_cond_destroy(ffrt_cond_t* cond)
```
 描述

销毁条件变量。该条件变量必须已通过[ffrt_cond_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-condition-variable-h#ffrt_cond_init)初始化，且在调用本接口时不得被任何线程引用。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_cond_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-cond-t)* cond | 指向条件变量的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | 条件变量销毁成功时返回ffrt_success； 否则返回ffrt_error_inval。 |
