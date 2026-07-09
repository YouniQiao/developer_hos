---
title: "DDK_Ashmem"
upstream_id: "harmonyos-references/capi-baseddk-ddk-ashmem"
catalog: "harmonyos-references"
content_hash: "de65e2146de1"
synced_at: "2026-07-09T00:59:55.356774"
---

# DDK_Ashmem

```
typedef struct DDK_Ashmem {...} DDK_Ashmem
```

#### 概述

定义通过接口[OH_DDK_CreateAshmem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ddk-api-h#oh_ddk_createashmem)创建的共享内存，共享内存的缓冲区提供更好的性能。

起始版本： 12

相关模块： [Ddk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-baseddk)

所在头文件： [ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t ashmemFd | 共享内存的文件描述符。 |
| const uint8_t* address | 缓冲区地址。 |
| const uint32_t size | 缓冲区大小。 |
| uint32_t offset | 已使用缓冲区的偏移量。默认值为0，表示没有偏移，缓冲区从指定地址开始。 |
| uint32_t bufferLength | 使用的缓冲区长度。默认情况下，该值等于size，表示使用整个缓冲区。 |
| uint32_t transferredLength | 已传输数据的长度。 |
