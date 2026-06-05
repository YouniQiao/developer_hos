---
format: md
title: "OpenSL ES音频录制示例调用崩溃"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-audio-3
---

**问题现象**

OpenSL ES音频录制接口调用失败，程序崩溃。报错日志信息如下：

08-06 00:39:20.042 5198-5219/? E C02b00/AudioFramework: [audio\_service\_client.cpp] Client doesn't have MICROPHONE permission

**解决措施**

需要申请ohos.permission.MICROPHONE权限。详情请参见[开放权限（用户授权）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user)。
