---
title: "投播后支持哪些控制功能"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-avsession-11
---

投播成功后，目前在本端支持的功能有：播放、暂停、下一首/曲、上一首/曲、快进、快退、进度控制、音量控制。

对端大屏设备支持的功能有：播放、暂停、下一首/曲、上一首/曲、快进、快退、进度控制。

目前不支持清晰度切换、音轨切换、倍速、弹幕等功能。

支持的接口：[sendControlCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-avsession-avsessioncontroller#sendcontrolcommand10)(command: AVCastControlCommand, callback: AsyncCallback<void>): void。
