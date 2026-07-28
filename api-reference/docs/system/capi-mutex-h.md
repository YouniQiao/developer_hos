---
title: "mutex.h"
upstream_id: "harmonyos-references/capi-mutex-h"
catalog: "harmonyos-references"
content_hash: "abd0fe35e374"
synced_at: "2026-07-28T16:51:04.616161"
---

# mutex.h

#### 概述

声明互斥锁（mutex）的C接口，用于在并发任务间提供互斥访问，保护共享资源免受竞争条件影响。

引用文件： <ffrt/mutex.h>

库： libffrt.z.so

系统能力： SystemCapability.Resourceschedule.Ffrt.Core

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [FFRT_C_API int ffrt_mutexattr_init(ffrt_mutexattr_t* attr)](#ffrt_mutexattr_init) | 初始化mutex属性。初始化成功后，mutex属性被设置为默认值。该mutex属性不再使用时，必须通过[ffrt_mutexattr_destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutexattr_destroy)销毁。 |
| [FFRT_C_API int ffrt_mutexattr_settype(ffrt_mutexattr_t* attr, int type)](#ffrt_mutexattr_settype) | 设置mutex属性的类型。类型可以是ffrt_mutex_normal（普通互斥锁）或ffrt_mutex_recursive（递归互斥锁，允许同一任务多次获取该锁）。 |
| [FFRT_C_API int ffrt_mutexattr_gettype(ffrt_mutexattr_t* attr, int* type)](#ffrt_mutexattr_gettype) | 获取mutex属性的类型。调用成功后，类型值通过出参type返回。 |
| [FFRT_C_API int ffrt_mutexattr_destroy(ffrt_mutexattr_t* attr)](#ffrt_mutexattr_destroy) | 销毁mutex属性。该mutex属性必须已通过[ffrt_mutexattr_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutexattr_init)初始化。 |
| [FFRT_C_API int ffrt_mutex_init(ffrt_mutex_t* mutex, const ffrt_mutexattr_t* attr)](#ffrt_mutex_init) | 初始化mutex。该mutex不再使用时，必须通过[ffrt_mutex_destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_destroy)销毁。通过attr传入已配置的mutex属性，或传入空指针使用默认值。 |
| [FFRT_C_API int ffrt_mutex_lock(ffrt_mutex_t* mutex)](#ffrt_mutex_lock) | 加锁mutex。若mutex已被其他线程持有，则阻塞当前线程直到mutex可用。成功时，调用线程持有该mutex，直至通过[ffrt_mutex_unlock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_unlock)释放。 |
| [FFRT_C_API int ffrt_mutex_unlock(ffrt_mutex_t* mutex)](#ffrt_mutex_unlock) | 解锁mutex。调用线程必须已持有该mutex，且该锁之前由[ffrt_mutex_lock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_lock)或[ffrt_mutex_trylock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_trylock)获取。 |
| [FFRT_C_API int ffrt_mutex_trylock(ffrt_mutex_t* mutex)](#ffrt_mutex_trylock) | 尝试加锁mutex。该接口为非阻塞操作：若mutex已被其他线程持有，则立即返回错误码。成功时，调用线程持有该mutex，直至通过[ffrt_mutex_unlock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_unlock)释放。 |
| [FFRT_C_API int ffrt_mutex_destroy(ffrt_mutex_t* mutex)](#ffrt_mutex_destroy) | 销毁mutex。调用成功后，mutex占用的资源被释放，该mutex对象不可再使用。该mutex必须已通过[ffrt_mutex_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_init)初始化，且在调用本接口时不得被任何线程持有。 |

#### 函数说明

#### [h2]ffrt_mutexattr_init()

```
FFRT_C_API int ffrt_mutexattr_init(ffrt_mutexattr_t* attr)
```
 描述

初始化mutex属性。初始化成功后，mutex属性被设置为默认值。该mutex属性不再使用时，必须通过[ffrt_mutexattr_destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutexattr_destroy)销毁。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutexattr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutexattr-t)* attr | 指向mutex属性的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex属性初始化成功时返回ffrt_success； 否则返回ffrt_error_inval。 |

#### [h2]ffrt_mutexattr_settype()

```
FFRT_C_API int ffrt_mutexattr_settype(ffrt_mutexattr_t* attr, int type)
```
 描述

设置mutex属性的类型。类型可以是ffrt_mutex_normal（普通互斥锁）或ffrt_mutex_recursive（递归互斥锁，允许同一任务多次获取该锁）。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutexattr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutexattr-t)* attr | 指向mutex属性的指针。 |
| int type | mutex类型，取值为ffrt_mutex_normal、ffrt_mutex_recursive或ffrt_mutex_default（等价于ffrt_mutex_normal）。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex属性类型设置成功时返回ffrt_success； 当attr为空指针，或mutex属性类型既不是ffrt_mutex_normal也不是ffrt_mutex_recursive时 返回ffrt_error_inval。 |

参考：

[ffrt_mutex_type](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#ffrt_mutex_type)

#### [h2]ffrt_mutexattr_gettype()

```
FFRT_C_API int ffrt_mutexattr_gettype(ffrt_mutexattr_t* attr, int* type)
```
 描述

获取mutex属性的类型。调用成功后，类型值通过出参type返回。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutexattr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutexattr-t)* attr | 指向mutex属性的指针。 |
| int* type | 指向mutex类型的指针，用于接收获取的类型值（ffrt_mutex_normal或ffrt_mutex_recursive）。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex属性类型获取成功时返回ffrt_success； attr或type为空指针时返回ffrt_error_inval。 |

#### [h2]ffrt_mutexattr_destroy()

```
FFRT_C_API int ffrt_mutexattr_destroy(ffrt_mutexattr_t* attr)
```
 描述

销毁mutex属性。该mutex属性必须已通过[ffrt_mutexattr_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutexattr_init)初始化。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutexattr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutexattr-t)* attr | 指向mutex属性的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex属性销毁成功时返回ffrt_success； 否则返回ffrt_error_inval。 |

#### [h2]ffrt_mutex_init()

```
FFRT_C_API int ffrt_mutex_init(ffrt_mutex_t* mutex, const ffrt_mutexattr_t* attr)
```
 描述

初始化mutex。该mutex不再使用时，必须通过[ffrt_mutex_destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_destroy)销毁。通过attr传入已配置的mutex属性，或传入空指针使用默认值。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutex_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutex-t)* mutex | 指向mutex的指针。 |
| [const ffrt_mutexattr_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutexattr-t)* attr | 指向mutex属性的指针，或传入空指针使用默认值。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex初始化成功时返回ffrt_success； mutex为空，或attr非空但未指定合法的mutex类型时返回ffrt_error_inval。 |

#### [h2]ffrt_mutex_lock()

```
FFRT_C_API int ffrt_mutex_lock(ffrt_mutex_t* mutex)
```
 描述

加锁mutex。若mutex已被其他线程持有，则阻塞当前线程直到mutex可用。成功时，调用线程持有该mutex，直至通过[ffrt_mutex_unlock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_unlock)释放。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutex_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutex-t)* mutex | 指向mutex的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex加锁成功时返回ffrt_success； 否则返回ffrt_error_inval。 |

参考：

[ffrt_mutex_trylock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_trylock)

#### [h2]ffrt_mutex_unlock()

```
FFRT_C_API int ffrt_mutex_unlock(ffrt_mutex_t* mutex)
```
 描述

解锁mutex。调用线程必须已持有该mutex，且该锁之前由[ffrt_mutex_lock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_lock)或[ffrt_mutex_trylock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_trylock)获取。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutex_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutex-t)* mutex | 指向mutex的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex解锁成功时返回ffrt_success； 否则返回ffrt_error_inval。 |

#### [h2]ffrt_mutex_trylock()

```
FFRT_C_API int ffrt_mutex_trylock(ffrt_mutex_t* mutex)
```
 描述

尝试加锁mutex。该接口为非阻塞操作：若mutex已被其他线程持有，则立即返回错误码。成功时，调用线程持有该mutex，直至通过[ffrt_mutex_unlock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_unlock)释放。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutex_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutex-t)* mutex | 指向mutex的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex加锁成功时返回ffrt_success； 否则返回ffrt_error_inval或ffrt_error_busy。 |

参考：

[ffrt_mutex_lock](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_lock)

#### [h2]ffrt_mutex_destroy()

```
FFRT_C_API int ffrt_mutex_destroy(ffrt_mutex_t* mutex)
```
 描述

销毁mutex。调用成功后，mutex占用的资源被释放，该mutex对象不可再使用。该mutex必须已通过[ffrt_mutex_init](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-mutex-h#ffrt_mutex_init)初始化，且在调用本接口时不得被任何线程持有。

起始版本： 10

参数：

| 参数项 | 描述 |
| --- | --- |
| [ffrt_mutex_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-mutex-t)* mutex | 指向mutex的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| FFRT_C_API int | mutex销毁成功时返回ffrt_success； 否则返回ffrt_error_inval。 |
