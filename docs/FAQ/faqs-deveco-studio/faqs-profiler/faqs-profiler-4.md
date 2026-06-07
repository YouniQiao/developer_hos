---
format: md
title: "开启多线程开关后应用性能劣化"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-profiler/faqs-profiler-4
---


**问题现象**

在进行DevEco Testing稳定性压测后，性能测试显示性能下降。

**可能原因**

DevEco Testing稳定性压测会默认开启多线程开关。压测结束后，该开关可能会关闭失败。多线程开关用于方便定位多线程安全问题，开启后会对性能产生影响。

**解决措施**

手动关闭多线程开关，使用如下命令。

```
hdc shell param set persist.ark.properties 0x105c
hdc shell reboot
```
