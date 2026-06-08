---
format: md
title: "如何做到连续投播"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-avsession-kit/faqs-avsession-6
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-avsession-kit/faqs-avsession-6
last_sync: 2026-06-07
sync_hash: 859e0f0f
---
在切换剧集（同一电视剧的不同集或预告、花絮等）的场景中，为了提升用户体验，不应终止投播。应用应获取下一集的播放URL，继续自动投播下一集。当应用收到上一资源结束的回调，或检测到播放进度距离结束还有5秒时，应准备下一个资源，以确保连续投播。
