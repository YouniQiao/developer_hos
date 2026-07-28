---
title: "OhosPixelMapInfos"
upstream_id: "harmonyos-references/capi-image-ohospixelmapinfos"
catalog: "harmonyos-references"
content_hash: "e256010efe53"
synced_at: "2026-07-28T16:51:53.155249"
---

# OhosPixelMapInfos

```
typedef struct OhosPixelMapInfos {...} OhosPixelMapInfos
```

#### 概述

用于描述PixelMap的基本属性信息，包括图片宽高、内存行字节数和像素格式。开发者在调用PixelMap属性查询相关接口时，可通过该结构体获取PixelMap的宽、高、行字节数及像素格式等信息，便于统一读取和管理图片属性。适用于需要查询并使用PixelMap属性信息的场景。

起始版本： 10

相关模块： [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

所在头文件： [image_pixel_map_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-pixel-map-mdk-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t width | 图片的宽，单位：像素（px）。 |
| uint32_t height | 图片的高，单位：像素（px）。 |
| uint32_t rowSize | 图片在内存中每行所占的字节数。 DMA内存为图片的宽 * 每个像素的字节数 + 每行末尾填充字节数；其他内存（非DMA内存）为图片的宽 * 每个像素的字节数。具体内存类型取决于PixelMap的创建方式，详情可参考PixelMap创建相关接口的说明。 |
| int32_t pixelFormat | 图片像素的格式，取值范围： 0：未知格式。 2：格式为RGB_565。 3：格式为RGBA_8888。 4：格式为BGRA_8888。 5：格式为RGB_888。 6：格式为ALPHA_8。 7：格式为RGBA_F16。 8：格式为NV21。 9：格式为NV12。 |
