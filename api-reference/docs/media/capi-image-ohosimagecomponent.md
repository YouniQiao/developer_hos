---
title: "OhosImageComponent"
upstream_id: "harmonyos-references/capi-image-ohosimagecomponent"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:30.009541"
---

# OhosImageComponent

```
struct OhosImageComponent {...}
```

#### 概述

定义图像组成信息。

起始版本： 10

相关模块： [Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image)

所在头文件： [image_mdk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-mdk-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t* byteBuffer | 像素数据地址。 |
| size_t size | 内存中的像素数据大小。 |
| int32_t componentType | 像素数据类型。 1：OHOS_IMAGE_COMPONENT_FORMAT_YUV_Y 亮度信息。 2：OHOS_IMAGE_COMPONENT_FORMAT_YUV_U 色度信息。 3：OHOS_IMAGE_COMPONENT_FORMAT_YUV_V 色差值信息。 4：OHOS_IMAGE_COMPONENT_FORMAT_JPEG JPEG格式。 |
| int32_t rowStride | 像素数据行宽。读取相机预览流数据时，需要考虑按stride进行读取，具体用法见[C/C++预览流二次处理示例](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-camera-preview-imagereceiver)。 |
| int32_t pixelStride | 像素数据的像素大小。 |
