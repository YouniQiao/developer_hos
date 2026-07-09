---
title: "OhosImageSourceDelayTimeList"
upstream_id: "harmonyos-references/capi-image-ohosimagesourcedelaytimelist"
catalog: "harmonyos-references"
content_hash: "e479c6ac6406"
synced_at: "2026-07-09T01:00:36.370985"
---

# OhosImageSourceDelayTimeList

```
struct OhosImageSourceDelayTimeList {...}
```

#### 概述

定义图像源延迟时间列表。由[OH_ImageSource_GetDelayTime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h#oh_imagesource_getdelaytime)获取。

起始版本： 10

相关模块： [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

所在头文件： [image_source_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t* delayTimeList | 图像源延迟时间列表头地址。 |
| size_t size = 0 | 图像源延迟时间列表大小。 |
