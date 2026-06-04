---
title: "如何响应播控中心的播放模式切换"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-avsession-1
---

应用创建AVSession后，需监听系统切换播放模式的接口，以处理播控中心的控制命令。目前支持四种播放模式：顺序播放、随机播放、单曲循环和列表循环。收到回调时，应用将获取当前的播放模式，并可自行决定下一个播放模式，然后将新的播放模式设置给AVSession。

**参考链接**

[循环模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-access-scene#循环模式)
