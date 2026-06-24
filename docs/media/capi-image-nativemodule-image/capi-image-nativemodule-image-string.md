---
title: "Image_String"
upstream_id: "harmonyos-references/capi-image-nativemodule-image-string"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:28.907653"
---

# Image_String

```
struct Image_String {...}
typedef struct Image_String Image_MimeType
typedef struct Image_String Image_String
```

#### 概述

字符串结构。

起始版本： 12

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [image_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char *data = nullptr | 字符类型数据。 |
| size_t size = 0 | 数据长度。 |
