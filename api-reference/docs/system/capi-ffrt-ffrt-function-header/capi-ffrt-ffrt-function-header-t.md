---
title: "ffrt_function_header_t"
upstream_id: "harmonyos-references/capi-ffrt-ffrt-function-header-t"
catalog: "harmonyos-references"
content_hash: "3ed0825a771e"
synced_at: "2026-07-09T00:59:47.430204"
---

# ffrt_function_header_t

```
typedef struct {...} ffrt_function_header_t
```

#### 概述

任务执行体。

起始版本： 10

相关模块： [FFRT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ffrt)

所在头文件： [type_def.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [ffrt_function_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#ffrt_function_t) exec | 任务执行函数 |
| [ffrt_function_t](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-type-def-h#ffrt_function_t) destroy | 任务销毁函数 |
| uint64_t reserve[2] | 保留位需要设置为0 |
