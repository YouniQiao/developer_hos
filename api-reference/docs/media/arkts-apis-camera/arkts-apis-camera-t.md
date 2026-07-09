---
title: "Types"
upstream_id: "harmonyos-references/arkts-apis-camera-t"
catalog: "harmonyos-references"
content_hash: "f66f14068eb1"
synced_at: "2026-07-09T01:00:23.927435"
---

# Types

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 23开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### ImageType

type ImageType = image.Image | image.Picture

图片容器类型，用于获取全质量图和未压缩图(YUV)。

元服务API： 从API version 23开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

| 类型 | 说明 |
| --- | --- |
| [image.Image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-image) | 图片容器类型，用于获取全质量图。 |
| [image.Picture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-picture) | 图片容器类型，用于获取未压缩图(YUV)。 |
