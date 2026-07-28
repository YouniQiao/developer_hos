---
title: "OH_PictureNative_AuxiliaryPictureCopyItem"
upstream_id: "harmonyos-references/capi-image-nativemodule-oh-picturenative-auxiliarypicturecopyitem"
catalog: "harmonyos-references"
content_hash: "1dd1340a3e73"
synced_at: "2026-07-28T16:51:54.814451"
---

# OH_PictureNative_AuxiliaryPictureCopyItem

```
typedef struct OH_PictureNative_AuxiliaryPictureCopyItem {...} OH_PictureNative_AuxiliaryPictureCopyItem
```

#### 概述

此结构体用于在创建PictureNative对象的深拷贝时指定辅助图的拷贝规则。描述如何将辅助图从一种类型拷贝到另一种类型。

起始版本： 26.0.0

相关模块： [Image_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule)

所在头文件： [picture_native.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picture-native-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Image_AuxiliaryPictureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picture-native-h#image_auxiliarypicturetype) srcType | 源辅助图类型，指定要从源图片中拷贝的辅助图类型。 **起始版本：** 26.0.0 |
| [Image_AuxiliaryPictureType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picture-native-h#image_auxiliarypicturetype) dstType | 目标辅助图类型，指定拷贝的辅助图在目标图片中存储的类型。 **起始版本：** 26.0.0 |
