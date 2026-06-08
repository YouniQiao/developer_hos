---
format: md
title: "应用如何更新进度条"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-avsession-kit/faqs-avsession-2
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-avsession-kit/faqs-avsession-2
last_sync: 2026-06-07
sync_hash: 78cc74df
---
如果应用希望在播控中心支持进度显示和控制，需要将资源的时长信息设置给AVSession，并注册seek的回调接口以响应系统的进度控制。应用可以在倍速或播放状态发生变化时更新进度条，以节约系统资源。

**参考链接**

[进度控制](/docs/dev/app-dev/media/avsession-kit/local-avsession/avsession-access-scene#进度控制)
