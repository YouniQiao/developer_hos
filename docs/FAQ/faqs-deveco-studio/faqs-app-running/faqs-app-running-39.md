---
format: md
title: "Windows电脑上启动模拟器，提示可申请内存不足"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-app-running/faqs-app-running-39
upstream_id: FAQ/faqs-deveco-studio/faqs-app-running/faqs-app-running-39
last_sync: 2026-06-07
sync_hash: d98b0949
---
**问题现象**

启动模拟器时，如果系统提示“当前可申请的内存不足”，表示Windows电脑内存不足。

![](./img/2c740230.png)

**解决措施**

1. 打开任务管理器的详细信息页面，在列表表头右键选择列，勾选“提交大小”，然后点击“提交大小”列进行排序，关闭提交大小占用高的进程。

   ![](./img/10ac03d8.png "点击放大")
2. 打开任务管理器的性能和内存页面，确保已提交内存的剩余量大于模拟器设置的RAM大小。

   ![](./img/2c21951d.png)
