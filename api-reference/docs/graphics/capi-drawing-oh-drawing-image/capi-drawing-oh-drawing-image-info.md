---
title: "OH_Drawing_Image_Info"
upstream_id: "harmonyos-references/capi-drawing-oh-drawing-image-info"
catalog: "harmonyos-references"
content_hash: "2c352366e50b"
synced_at: "2026-07-09T01:01:01.420562"
---

# OH_Drawing_Image_Info

```
typedef struct {...} OH_Drawing_Image_Info
```

#### 概述

定义图片信息结构体。

起始版本： 12

相关模块： [Drawing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing)

所在头文件： [drawing_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t width | 宽度，单位为像素。 |
| int32_t height | 高度，单位为像素。 |
| [OH_Drawing_ColorFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-types-h#oh_drawing_colorformat) colorType | 颜色类型[OH_Drawing_ColorFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-types-h#oh_drawing_colorformat)。 |
| [OH_Drawing_AlphaFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-types-h#oh_drawing_alphaformat) alphaType | 透明度类型[OH_Drawing_AlphaFormat](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-types-h#oh_drawing_alphaformat)。 |
