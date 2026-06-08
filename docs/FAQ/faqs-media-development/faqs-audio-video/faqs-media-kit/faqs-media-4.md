---
format: md
title: "使用AVPlayer播放视频时，如何实现应用从后台切回前台时继续播放原视频"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-media-kit/faqs-media-4
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-media-kit/faqs-media-4
last_sync: 2026-06-07
sync_hash: ce1bc70b
---
在切换到前台的生命周期方法onPageShow()里调用AVPlayer的播放方法[avPlayer.play()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#play9)，并在切换到后台的生命周期方法onPageHide()里调用AVPlayer的暂停方法[avPlayer.pause()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-media-avplayer#pause9)即可。
