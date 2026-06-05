---
format: md
title: "如何解决Windows系统使用DevEco Studio时SDK卸载失败，报“Unable to rename the file. Cause:Unable to delete D:xxxdefault”错误"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-project-management-15
---

**问题描述**

Windows系统使用DevEco Studio时，SDK卸载失败，提示错误信息。

Unable to rename the file. Cause: Unable to delete D:\\xxx\\default.

**解决方案**

1、启动任务管理器。

2、切换到“性能”选项卡。

3、点击下方“打开资源监视器”。

![](./img/9caee9e3.png)

4、将路径 D:\xxx\default 粘贴到关联句柄窗口右侧的搜索栏中，按回车键搜索占用的进程，然后结束该进程。

![](./img/794f21bd.png)
