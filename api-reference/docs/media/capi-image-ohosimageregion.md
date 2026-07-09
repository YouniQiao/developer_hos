---
title: "OhosImageRegion"
upstream_id: "harmonyos-references/capi-image-ohosimageregion"
catalog: "harmonyos-references"
content_hash: "0cc04987ef7f"
synced_at: "2026-07-09T01:00:36.084635"
---

# OhosImageRegion

```
struct OhosImageRegion {...}
```

#### 概述

定义图像源解码的范围选项。是[OhosImageDecodingOps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-ohosimagedecodingops)的成员变量。

起始版本： 10

相关模块： [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

所在头文件： [image_source_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-source-mdk-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t x | 起始x坐标，用pixels表示。 |
| int32_t y | 起始y坐标，用pixels表示。 |
| int32_t width | 宽度范围，用pixels表示。 |
| int32_t height | 高度范围，用pixels表示。 |
