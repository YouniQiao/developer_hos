---
title: "Hid_EmitItem"
upstream_id: "harmonyos-references/capi-hidddk-hid-emititem"
catalog: "harmonyos-references"
content_hash: "3f8a6f870614"
synced_at: "2026-07-09T00:59:55.452123"
---

# Hid_EmitItem

```
typedef struct Hid_EmitItem {...} Hid_EmitItem
```

#### 概述

事件信息。

起始版本： 11

相关模块： [HidDdk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidddk)

所在头文件： [hid_ddk_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hid-ddk-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint16_t type | 事件类型 |
| uint16_t code | 事件编码 |
| uint32_t value | 事件值 |
