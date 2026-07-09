---
title: "AREngine_ARAugmentedImageSource"
upstream_id: "harmonyos-references/arengine-struct-araugmentedimagesource"
catalog: "harmonyos-references"
content_hash: "0eee784112c2"
synced_at: "2026-07-09T01:00:49.917473"
---

# AREngine_ARAugmentedImageSource

#### 概述

图像数据。

起始版本： 5.1.0(18)

相关模块： [AR Engine](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)

所在头文件： [ar_engine_core.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-header-file)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char *[imageName](#imagename) | 图像名，不允许为空，255个字符以内，超过255个字符的部分将被自动截断。 |
| const uint8_t *[imageData](#imagedata) | 灰度图像元素数组地址。 |
| int32_t [pixelWidth](#pixelwidth) | 图像像素宽度。 |
| int32_t [pixelHeight](#pixelheight) | 图像像素高度。 |
| int32_t [stride](#stride) | 图像步幅。 |
| float [realWidthInMeters](#realwidthinmeters) | 图像中对象的实际物理宽度。无限制，默认值为A4纸张尺寸。 |

#### 结构体成员变量说明

#### [h2]imageName

```
const char* AREngine_ARAugmentedImageSource::imageName
```
 描述

图像名，不允许为空，255个字符以内，超过255个字符的部分将被自动截断。

#### [h2]imageData

```
const uint8_t* AREngine_ARAugmentedImageSource::imageData
```
 描述

灰度图像元素数组地址。

#### [h2]pixelWidth

```
int32_t AREngine_ARAugmentedImageSource::pixelWidth
```
 描述

图像像素宽度。

#### [h2]pixelHeight

```
int32_t AREngine_ARAugmentedImageSource::pixelHeight
```
 描述

图像像素高度。

#### [h2]stride

```
int32_t AREngine_ARAugmentedImageSource::stride
```
 描述

图像步幅。

#### [h2]realWidthInMeters

```
float AREngine_ARAugmentedImageSource::realWidthInMeters
```
 描述

图像中对象的实际物理宽度。无限制，默认值为291mm。
