---
title: "模块描述"
upstream_id: "harmonyos-references/arkts-apis-audio"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:51.934907"
---

# 模块描述

音频管理提供基础的音频控制能力，包括音量调节、设备管理、数据采集及渲染。

该模块提供以下音频相关的常用功能：

- [AudioManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiomanager)：音频管理器。
- [AudioRenderer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiorenderer)：音频渲染，用于播放PCM（Pulse Code Modulation）音频数据。
- [AudioCapturer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-audio-audiocapturer)：音频采集，用于录制PCM音频数据。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { audio } from '@kit.AudioKit';
```
