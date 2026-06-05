---
format: md
title: "自动签名时提示“The signature does not take effect or has expired. It may be the current system time is inaccurate, please calibrate the system time and sign again”错误"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-environment-14
---

**问题描述**

自动生成签名失败。

![](./img/3457c62a.png)

**解决方案**

报错原因：本地PC和服务器时间不一致。请将本地PC时间与北京时间进行对比，精确到秒。

DevEco Studio签名提示系统时间不正确，请在设置中选择“时间和语言”>“日期和时间”，开启自动设置时间功能，确保时间精确到1-2秒。
