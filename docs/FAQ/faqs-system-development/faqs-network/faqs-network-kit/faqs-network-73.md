---
title: "如何解决应用退至后台TCP连接会被中断"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-network-73
---

* 应用进入后台会触发系统后台功耗管控策略，创建的所有网络连接在较短时间内都会被杀死。
* [网络资源合理使用](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-reasonable-network-use)：无长时任务的应用退到后台主动断开socket连接，包含TCP和UDP连接。
* 应用退至后台后，在后台需要长时间运行用户可感知的任务，如播放音乐、导航等。为防止应用进程被挂起，导致对应功能异常，可以申请[长时任务](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/continuous-task)，让应用在后台长时间运行。当前长时任务支持的类型，包含数据传输、音视频播放、录制、定位导航、蓝牙相关业务、多设备互联、WLAN相关业务和计算任务。
