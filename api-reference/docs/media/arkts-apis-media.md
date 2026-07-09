---

title: "模块描述"
upstream_id: "harmonyos-references/arkts-apis-media"
catalog: "harmonyos-references"
synced_at: "2026-07-09T01:00:37.579215"
content_hash: "e2fdc6da28bc"
---


# 模块描述

媒体子系统为开发者提供一套简单且易于理解的接口，使得开发者能够方便接入系统并使用系统的媒体资源。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

媒体子系统包含了音视频相关媒体业务，提供以下常用功能：

- 音视频播放（[AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer)9+）
- 音视频录制（[AVRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avrecorder)9+）
- 视频转码（[AVTranscoder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avtranscoder)12+）
- 获取音视频元数据（[AVMetadataExtractor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avmetadataextractor)11+）
- 获取视频缩略图（[AVImageGenerator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avimagegenerator)12+）
- 屏幕录制（[AVScreenCaptureRecorder](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avscreencapturerecorder)12+）

#### 导入模块

```
import { media } from '@kit.MediaKit';
```
