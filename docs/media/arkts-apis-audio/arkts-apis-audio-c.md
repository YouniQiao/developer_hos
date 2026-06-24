---
title: "Constants"
upstream_id: "harmonyos-references/arkts-apis-audio-c"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:53.556054"
---

# Constants

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

| 名称 | 类型 | 只读 | 说明 |
| --- | --- | --- | --- |
| DEFAULT_VOLUME_GROUP_ID9+ | number | 是 | 默认音量组id。 **系统能力：** SystemCapability.Multimedia.Audio.Volume |
| DEFAULT_INTERRUPT_GROUP_ID9+ | number | 是 | 默认音频中断组id。 **系统能力：** SystemCapability.Multimedia.Audio.Interrupt |

示例：

```
import { audio } from '@kit.AudioKit';

const defaultVolumeGroupId = audio.DEFAULT_VOLUME_GROUP_ID;
const defaultInterruptGroupId = audio.DEFAULT_INTERRUPT_GROUP_ID;
```
