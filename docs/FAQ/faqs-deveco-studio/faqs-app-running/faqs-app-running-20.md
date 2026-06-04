---
title: "模拟器在后台放置一段时间后会卡在加载状态，CPU占用率高"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-running-20
---

**问题描述**

![](./img/4d2a9b2f.png)

![](./img/50bb66e2.png)

打开活动检测器，发现模拟器的CPU占用率为80%。

**解决措施**

1.打开模拟器设备管理页面。

![](./img/3f656690.png)

2.选择“新建模拟器”弹窗。

![](./img/10983ea2.png)

![](./img/a55b130f.png)

3.复制路径并用文件夹打开system-image\HarmonyOS-NEXT-DB1\phone\_x86。

![](./img/96296253.png)

4.打开features.ini文件，将bootanimation.feature.key的值改为true，保存后重启模拟器。

![](./img/2e27d24e.png)
