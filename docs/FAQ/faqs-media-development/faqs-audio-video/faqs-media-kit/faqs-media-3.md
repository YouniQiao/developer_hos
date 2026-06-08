---
format: md
title: "如何实现使用AVPlayer播放音频的过程中打断当前播放去播放另一个音频"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-media-kit/faqs-media-3
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-media-kit/faqs-media-3
last_sync: 2026-06-07
sync_hash: 5df63dc7
upstream_hash: 2479efbeeb0d
---

需要先调用[reset()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#reset9)打断前一个音频，然后切换音频源。因为reset()是异步的，所以调用reset()的语句需加上await关键字。
