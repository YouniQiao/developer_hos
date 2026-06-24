---
title: "ffrt_deps_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-deps-t"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:16.745725"
---

# ffrt_deps_t

```
typedef struct {...} ffrt_deps_t
```

#### 概述

依赖结构定义。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t len | 依赖数量 |
| const [ffrt_dependence_t*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt-ffrt-dependence-t) items | 依赖数据 |
