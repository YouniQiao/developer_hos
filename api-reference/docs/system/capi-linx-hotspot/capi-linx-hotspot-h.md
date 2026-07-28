---
title: "linx_hotspot.h"
upstream_id: "harmonyos-references/capi-linx-hotspot-h"
catalog: "harmonyos-references"
content_hash: "d4cb737fdaa5"
synced_at: "2026-07-28T16:51:11.751192"
---

# linx_hotspot.h

#### 概述

热点加速（Hotspot Accelerate）API，提供线程热点函数/流程加速功能。通过识别并优化线程执行过程中的热点函数/流程，提升线程执行效率。

引用文件： <LinxKit/linx_hotspot.h>

库： liblinx.so

系统能力： SystemCapability.Commonlibrary.Linx

起始版本： 26.0.0

相关模块： [hotspot-accelerate（热点加速）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hotspot-accelerate)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [int32_t HMS_LINX_HotspotAccelerateInit(void)](#hms_linx_hotspotaccelerateinit) | 初始化热点加速功能。 |
| [int32_t HMS_LINX_HotspotAccelerateBegin(uint32_t *ctx)](#hms_linx_hotspotacceleratebegin) | 开始热点加速。 |
| [int32_t HMS_LINX_HotspotAccelerateEnd(uint32_t ctx)](#hms_linx_hotspotaccelerateend) | 停止热点加速。 |

#### 函数说明

#### [h2]HMS_LINX_HotspotAccelerateInit()

```
int32_t HMS_LINX_HotspotAccelerateInit(void)
```
 描述

初始化热点加速功能。

注意：在调用其他热点加速相关函数前，必须确保已成功调用此函数，以完成必要的初始化工作，否则可能返回[1026800001](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-hotspot-accelerate#section1026800001-api-未正确初始化)错误码。

起始版本： 26.0.0

返回值

| 返回值 | 说明 |
| --- | --- |
| int32_t 0 | Success. |
| int32_t 801 | Device does not support this API. |

#### [h2]HMS_LINX_HotspotAccelerateBegin()

```
int32_t HMS_LINX_HotspotAccelerateBegin(uint32_t *ctx)
```
 描述

开始热点加速。调用此函数后，系统将启动热点流程的加速优化。

注意：

- 多个线程可以同时调用此函数，但需确保每个线程拥有唯一且合法的上下文索引。
- 调用前请确认已成功[初始化热点加速功能](#hms_linx_hotspotaccelerateinit)。
- 参数ctx指向的地址中储存一个uint32_t类型值，初始化为0，后续会由热点加速API自动分配一个有效ctx。
- 若返回[1026800002](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-hotspot-accelerate#section1026800002-无效的上下文索引)错误码，通常是因为传入的ctx不符合规范，或有效的ctx已分配完。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| uint32_t *ctx | 指向上下文索引的指针。作为输出参数，返回分配的上下文索引，可用于后续停止加速。 |

返回值

| 返回值 | 说明 |
| --- | --- |
| int32_t 0 | Success. |
| int32_t 501 | Resource occupied by another thread. |
| int32_t 1026800001 | API not initialized properly. |
| int32_t 1026800002 | Invalid context index. |

#### [h2]HMS_LINX_HotspotAccelerateEnd()

```
int32_t HMS_LINX_HotspotAccelerateEnd(uint32_t ctx)
```
 描述

停止热点加速。调用此函数后，系统将停止热点流程的加速优化，并释放相关资源。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| uint32_t ctx | 上下文索引，需与调用HMS_LINX_HotspotAccelerateBegin时使用的索引一致。 |

返回值

| 返回值 | 说明 |
| --- | --- |
| int32_t 0 | Success. |
| int32_t 501 | Resource occupied by another thread. |
| int32_t 1026800001 | API not initialized properly. |
| int32_t 1026800002 | Invalid context index. |
