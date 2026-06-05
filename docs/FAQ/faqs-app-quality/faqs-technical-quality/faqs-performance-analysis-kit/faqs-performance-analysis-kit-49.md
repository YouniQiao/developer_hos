---
format: md
title: "如何通过HDC命令截屏/获取相册"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-49
---

1. 截屏功能：

   ```
   hdc shell snapshot_display -f /data/local/tmp/test111.jpeg # -f表示指定图片在设备上的存储路径，如不指定，会在命令执行完成后显示图片默认存储路径
   hdc file recv /data/local/tmp/test111.jpeg /data/local/tmp
   ```
2. 拉取系统相册：

   ```
   hdc file recv /storage/media/100/local/files/Photo # 拉取相册到命令执行时的目录
   ```
