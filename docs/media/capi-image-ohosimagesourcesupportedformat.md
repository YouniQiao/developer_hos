---
title: "OhosImageSourceSupportedFormat"
upstream_id: "harmonyos-references/capi-image-ohosimagesourcesupportedformat"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:31.298205"
---

# OhosImageSourceSupportedFormat

```
struct OhosImageSourceSupportedFormat {...}
```

#### 概述

定义图像源支持的格式字符串。此选项给[OhosImageSourceSupportedFormatList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesourcesupportedformatlist)和[OH_ImageSource_GetSupportedFormats](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_getsupportedformats)接口使用。

起始版本： 10

相关模块： [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

所在头文件： [image_source_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* format = nullptr | 图像源支持的格式字符串头地址。 |
| size_t size = 0 | 图像源支持的格式字符串大小。 |
