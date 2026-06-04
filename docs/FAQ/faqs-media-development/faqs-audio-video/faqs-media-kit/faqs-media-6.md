---
title: "在使用Video组件时，为Video添加本地视频播放源后，立刻播放，为什么会播放失败"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-media-6
---

从Video组件加载资源到播放，必须经过加载过程，这需要一定时间。建议将开始播放的逻辑写入Video组件的onPrepared回调函数中，确保资源准备完毕后自动播放。
