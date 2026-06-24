---
title: "OhosImageSourceSupportedFormatList"
upstream_id: "harmonyos-references/capi-image-ohosimagesourcesupportedformatlist"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:31.384339"
---

# OhosImageSourceSupportedFormatList

```
struct OhosImageSourceSupportedFormatList {...}
```

#### 概述

定义图像源支持的格式字符串列表。由[OH_ImageSource_GetSupportedFormats](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_getsupportedformats)获取。

起始版本： 10

相关模块： [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

所在头文件： [image_source_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| struct [OhosImageSourceSupportedFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagesourcesupportedformat)** supportedFormatList = nullptr | 图像源支持的格式字符串列表头地址。 |
| size_t size = 0 | 图像源支持的格式字符串列表大小。 |
