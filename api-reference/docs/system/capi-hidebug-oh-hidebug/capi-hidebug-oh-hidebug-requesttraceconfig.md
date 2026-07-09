---
title: "OH_HiDebug_RequestTraceConfig"
upstream_id: "harmonyos-references/capi-hidebug-oh-hidebug-requesttraceconfig"
catalog: "harmonyos-references"
content_hash: "b6fcc5cdb9b5"
synced_at: "2026-07-09T01:00:05.077626"
---

# OH_HiDebug_RequestTraceConfig

```
typedef struct OH_HiDebug_RequestTraceConfig {...} OH_HiDebug_RequestTraceConfig
```

#### 概述

请求trace采集的配置结构类型定义。用于在应用性能分析和调试场景中配置trace采集参数，如定位应用启动慢、UI卡顿、CPU占用高等性能问题。

起始版本： 24

相关模块： [HiDebug](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug)

所在头文件： [hidebug_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* identifier | 采集trace输出的文件名前缀。文件名前缀只取字符串前20个字符，超过部分将抛弃。前20个字符只包含大小写字母和下划线，若不符合则默认为空字符串。 |
| uint32_t bufferSizeKb | trace文件的缓存大小，以KB为单位。取值范围为[1024, 15360]，传入参数超过取值范围，参数将被设置为最近的边界值。 |
| uint32_t durationMs | trace采集时长，以ms为单位。取值范围为[1000, 15000]，传入参数超过取值范围，参数将被设置为最近的边界值。 |
| uint32_t reserved | 预留字段，可以设置为0。 |
