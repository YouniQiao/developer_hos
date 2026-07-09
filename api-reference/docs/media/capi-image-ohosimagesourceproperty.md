---
title: "OhosImageSourceProperty"
upstream_id: "harmonyos-references/capi-image-ohosimagesourceproperty"
catalog: "harmonyos-references"
content_hash: "ac501af41f3a"
synced_at: "2026-07-09T01:00:36.520766"
---

# OhosImageSourceProperty

```
struct OhosImageSourceProperty {...}
```

#### 概述

定义图像源属性键值字符串。此选项给[OH_ImageSource_GetImageProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_getimageproperty)和[OH_ImageSource_ModifyImageProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_modifyimageproperty)接口使用。

起始版本： 10

相关模块： [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

所在头文件： [image_source_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* value = nullptr | 定义图像源属性键值字符串头地址。 |
| size_t size = 0 | 定义图像源属性键值字符串大小。 |
