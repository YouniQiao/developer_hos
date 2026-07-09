---
title: "OH_NativeBuffer_Config"
upstream_id: "harmonyos-references/capi-oh-nativebuffer-oh-nativebuffer-config"
catalog: "harmonyos-references"
content_hash: "fb15dbb60764"
synced_at: "2026-07-09T01:01:00.008229"
---

# OH_NativeBuffer_Config

```
typedef struct {...} OH_NativeBuffer_Config
```

#### 概述

OH_NativeBuffer的属性配置，用于申请新的OH_NativeBuffer实例或查询现有实例的相关属性。

起始版本： 9

相关模块： [OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer)

所在头文件： [native_buffer.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-buffer-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t width | 宽度（像素）。 |
| int32_t height | 高度（像素）。 |
| int32_t format | 像素格式，具体可参见[OH_NativeBuffer_Format](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-buffer-common-h#oh_nativebuffer_format)枚举。 |
| int32_t usage | buffer的用途说明，具体可参见[OH_NativeBuffer_Usage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-buffer-h#oh_nativebuffer_usage)枚举。 |
| int32_t stride | 输出参数。本地窗口缓冲区步幅，单位为Byte。 **起始版本：** 10 |
