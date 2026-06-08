---
format: md
title: "在使用Video组件时，为Video添加本地视频播放源后，立刻播放，为什么会播放失败"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-media-kit/faqs-media-6
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-media-kit/faqs-media-6
last_sync: 2026-06-07
sync_hash: e6c3ddb2
---
从Video组件加载资源到播放，必须经过加载过程，这需要一定时间。建议将开始播放的逻辑写入Video组件的onPrepared回调函数中，确保资源准备完毕后自动播放。
