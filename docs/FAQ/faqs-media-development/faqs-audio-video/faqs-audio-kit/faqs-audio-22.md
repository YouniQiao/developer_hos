---
format: md
title: "使用AudioRenderer播放音频时，如何跳转到指定播放位置"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-22
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-22
last_sync: 2026-06-07
sync_hash: 7951b5fa
---
**问题根因**

跳转播放是播放器功能之一，而AudioRenderer主要用于音频渲染播放，未提供跳转播放API接口。

**解决方案**

在AudioRenderer注册writeDataCallback时，通过跳转的时间戳，计算出新的offset位置，待下次read音频数据时，从该offset开始读取，就能跳转到指定位置播放了。
