---
title: "Class (NativeMediaPlayerSurfaceInfo)"
upstream_id: "harmonyos-references/arkts-apis-webview-nativemediaplayersurfaceinfo"
catalog: "harmonyos-references"
content_hash: "ed07de62ed05"
synced_at: "2026-07-09T00:58:50.404786"
---

# Class (NativeMediaPlayerSurfaceInfo)

NativeMediaPlayerSurfaceInfo 使用[enableNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#enablenativemediaplayer12)来进行同层渲染的 surface 信息配置。该类允许应用接管网页媒体播放功能，通过配置 surface 的 id 和位置信息，实现网页媒体内容与应用界面的同层渲染融合，提升媒体播放体验。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 12开始支持。
- 示例效果请以真机运行为准。

#### 属性

系统能力： SystemCapability.Web.Webview.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id12+ | string | 否 | 否 | surface的id，用于同层渲染的NativeImage的surfaceId。 详见[NativeEmbedDataInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-i#nativeembeddatainfo11)。 |
| rect12+ | [RectEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-i#rectevent12) | 否 | 否 | surface的位置信息。 |
