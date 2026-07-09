---
title: "Image_PositionArea"
upstream_id: "harmonyos-references/capi-image-nativemodule-image-positionarea"
catalog: "harmonyos-references"
content_hash: "d66dd6927fc9"
synced_at: "2026-07-09T01:00:37.213064"
---

# Image_PositionArea

```
typedef struct Image_PositionArea {...} Image_PositionArea
```

#### 概述

要读取或写入的图像像素区域。

起始版本： 22

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [image_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t *pixels | 读取或写入的图像像素数据。仅支持BRGA_8888格式的数据。 |
| size_t pixelsSize | 图像像素数据的长度（单位：字节）。 |
| uint32_t offset | 数据读取或写入的偏移量（单位：字节）。 |
| uint32_t stride | 区域的跨距，即区域中每行像素所占的空间（单位：字节）。stride >= region.size.width * 4。 |
| [Image_Region](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-image-region) region | 读取或写入的区域。区域宽度加X坐标不能大于原图的宽度，区域高度加Y坐标不能大于原图的高度。 |
