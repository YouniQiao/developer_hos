---
format: md
title: "macOS上活动监视器中显示模拟器内存偏高"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-app-running/faqs-app-running-23
upstream_id: FAQ/faqs-deveco-studio/faqs-app-running/faqs-app-running-23
last_sync: 2026-06-07
sync_hash: 6300c313
---
配置模拟器内存为4GB并使用一段时间后，在活动监视器中可能发现模拟器进程占用的内存超过6GB（如下图所示）。请注意，图中的6.49GB不代表模拟器进程实际使用的物理内存（即Dirty内存），而是指其占用的phys\_footprint内存。在Mac系统中，针对虚拟化平台（如模拟器），phys\_footprint内存通常远高于Dirty内存。

![](./img/53493b98.png "点击放大")

想要查看模拟器的Dirty内存，首先打开活动监视器，查看Emulator的进程号（PID）。然后通过 `footprint -vmObjectDirty 进程号` 命令可以查看Dirty内存大小。
