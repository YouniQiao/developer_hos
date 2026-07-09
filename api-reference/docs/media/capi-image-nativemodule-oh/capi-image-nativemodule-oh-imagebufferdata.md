---
title: "OH_ImageBufferData"
upstream_id: "harmonyos-references/capi-image-nativemodule-oh-imagebufferdata"
catalog: "harmonyos-references"
content_hash: "661fc14c37df"
synced_at: "2026-07-09T01:00:34.921244"
---

# OH_ImageBufferData

```
typedef struct {...} OH_ImageBufferData
```

#### 概述

OH_ImageBufferData是native层封装的图像数据结构体。获取OH_ImageNative_GetBufferData对象使用[OH_ImageNative_GetBufferData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-native-h#oh_imagenative_getbufferdata)函数。

结构体中保存的是对原图像数据的浅拷贝，当原数据被释放后，不应再对该结构体中的指针进行任何读写操作，否则会出现未定义行为。

起始版本： 23

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [image_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-native-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t *rowStride | 图像颜色分量行间距的数组，单位为像素（px）。 |
| int32_t *pixelStride | 图像颜色分量像素间距的数组，单位为像素（px）。 |
| int32_t numStride | 数组长度。 |
| size_t bufferSize | 缓冲区的大小，单位为字节（Byte）。 |
| OH_NativeBuffer *nativeBuffer | 图像的OH_NativeBuffer缓冲区对象的指针。 |
