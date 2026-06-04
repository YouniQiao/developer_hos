---
title: "弱网感知判决 (C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-weaksignaljudge-c
---

通过[网络质量评估（C++）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-qoscallback-c)和[网络场景识别（C++）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-scenecallback-c)章节，弱网感知判决可归纳为3种方式获取：

**监听系统实时判决**：

根据网络场景识别信息，如NetworkBoost\_Scene(NB\_SCENE\_WEAK\_SIGNAL/NB\_SCENE\_CONGESTION)，系统直接判决为弱网。

**监听系统预测判决：**

根据网络场景识别中的弱信号预测信息，如NetworkBoost\_WeakSignalPrediction，系统预测即将进入弱网区域。

**应用自定义判决：**

根据网络质量评估信息，如NetworkBoost\_NetworkQos(linkUpBandwidth/linkDownBandwidth/rttMs/linkUpBufferDelayMs/linkUpBufferCongestionPercent)，应用自定义门限来判决为弱网。

应用可根据自身业务特点，选择其中一种或多种使用。
