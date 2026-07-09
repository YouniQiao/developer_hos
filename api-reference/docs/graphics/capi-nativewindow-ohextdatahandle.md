---
title: "OHExtDataHandle"
upstream_id: "harmonyos-references/capi-nativewindow-ohextdatahandle"
catalog: "harmonyos-references"
content_hash: "f6ff05e98abe"
synced_at: "2026-07-09T01:01:01.810532"
---

# OHExtDataHandle

```
typedef struct OHExtDataHandle {...} OHExtDataHandle
```

#### 概述

扩展数据句柄结构体定义。

起始版本： 9

废弃版本： 从API version 10开始废弃，不再提供替代接口。

相关模块： [NativeWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativewindow)

所在头文件： [external_window.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-external-window-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t fd | 句柄 Fd，-1代表不支持。 |
| uint32_t reserveInts | Reserve数组的个数。 |
| int32_t reserve[0] | Reserve数组。 |
