---
title: "OhosPixelMapInfo"
upstream_id: "harmonyos-references/capi-image-ohospixelmapinfo"
catalog: "harmonyos-references"
content_hash: "e75d615fdb2f"
synced_at: "2026-07-28T16:51:53.319723"
---

# OhosPixelMapInfo

```
struct OhosPixelMapInfo {...}
```

#### 概述

用于描述PixelMap的基本属性信息，包括图片宽、高、行字节数和像素格式。开发者在调用PixelMap属性查询接口时，可通过该结构体获取这些信息。

起始版本： 8

废弃版本： 10

相关模块： [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

所在头文件： [image_pixel_map_napi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-pixel-map-napi-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t width | 图片的宽，单位：像素（px）。 |
| uint32_t height | 图片的高，单位：像素（px）。 |
| uint32_t rowSize | 图片在内存中每行所占的字节数。 DMA内存为图片的宽 * 每个像素的字节数 + 每行末尾填充字节数；其他内存（非DMA内存）为图片的宽 * 每个像素的字节数。具体内存类型取决于PixelMap的创建方式。 |
| int32_t pixelFormat | 图片像素的格式，取值范围： 0：未知格式。 2：格式为RGB_565。 3：格式为RGBA_8888。 4：格式为BGRA_8888。 5：格式为RGB_888。 6：格式为ALPHA_8。 7：格式为RGBA_F16。 8：格式为NV21。 9：格式为NV12。 |
