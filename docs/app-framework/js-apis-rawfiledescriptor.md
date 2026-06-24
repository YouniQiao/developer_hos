---
title: "RawFileDescriptor"
upstream_id: "harmonyos-references/js-apis-rawfiledescriptor"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:22.856777"
---

# RawFileDescriptor

本模块提供rawfile文件所在hap的descriptor信息。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { resourceManager } from '@kit.LocalizationKit'
```

#### RawFileDescriptor

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Global.ResourceManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| fd | number | 否 | 否 | 文件描述符。 |
| offset | number | 否 | 否 | 起始偏移量。 |
| length | number | 否 | 否 | 文件长度。 |
