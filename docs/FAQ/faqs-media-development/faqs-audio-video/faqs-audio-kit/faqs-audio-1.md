---
format: md
title: "如何后台播放音乐"
original_url: /docs/FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-1
upstream_id: FAQ/faqs-media-development/faqs-audio-video/faqs-audio-kit/faqs-audio-1
last_sync: 2026-06-07
sync_hash: 5c4cacf0
---
AVSession管控媒体播放。当第三方应用从前台切换到后台或进入锁屏状态时，媒体播放会强制暂停，且应用不会感知。若需开发后台播放功能，应在后台任务管理中启动长时任务播放音乐，并接入AVSession能力，允许控制中心的播控面板控制第三方应用的播放功能。

**参考链接**

[backgroundTaskManager.startBackgroundRunning](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resourceschedule-backgroundtaskmanager#backgroundtaskmanagerstartbackgroundrunning12)

[媒体会话提供方](/docs/dev/app-dev/media/avsession-kit/local-avsession/using-avsession-developer)
