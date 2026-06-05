---
format: md
title: "Profiler工具对Wearable设备开启泳道录制时会存在概率异常"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-profiler-7
---


**问题现象**

使用DevEco Profiler对Wearable设备上的应用进行性能分析时，由于Wearable设备内存较小，在低内存情况下同时开启多个泳道的录制，可能导致应用被杀死，造成录制异常。

**解决措施**

建议在录制Wearable设备上的应用程序时，保持屏幕亮屏并使用单泳道进行录制。
