---
title: "JSVM_VMInfo"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-vminfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:02.998354"
---

# JSVM_VMInfo

```
typedef struct {...} JSVM_VMInfo
```

#### 概述

JavaScript虚拟机信息。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 11

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t apiVersion | 此虚拟机支持的最高API版本。 |
| const char* engine | 实现虚拟机的引擎名称。 |
| const char* version | 虚拟机的版本。 |
| uint32_t cachedDataVersionTag | 缓存数据版本标签。 |
