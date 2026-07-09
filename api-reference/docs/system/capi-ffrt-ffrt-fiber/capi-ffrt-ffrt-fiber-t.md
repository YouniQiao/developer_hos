---
title: "ffrt_fiber_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-fiber-t"
catalog: "harmonyos-references"
content_hash: "19ddb165edd8"
synced_at: "2026-07-09T00:59:48.323960"
---

# ffrt_fiber_t

```
typedef struct {...} ffrt_fiber_t
```

#### 概述

纤程结构。

起始版本： 20

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uintptr_t storage[ffrt_fiber_storage_size] | 纤程上下文占用空间。 |
