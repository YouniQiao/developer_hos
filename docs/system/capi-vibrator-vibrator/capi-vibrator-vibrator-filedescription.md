---
title: "Vibrator_FileDescription"
upstream_id: "harmonyos-references/capi-vibrator-vibrator-filedescription"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:43.218180"
---

# Vibrator_FileDescription

```
typedef struct Vibrator_FileDescription { ... } Vibrator_FileDescription
```

#### 概述

振动文件描述。

起始版本： 11

相关模块： [Vibrator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator)

所在头文件： [vibrator_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vibrator-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t fd | 自定义振动序列的文件句柄。 |
| int64_t offset | 自定义振动序列的偏移地址。 |
| int64_t length | 自定义振动序列的总长度。 |
