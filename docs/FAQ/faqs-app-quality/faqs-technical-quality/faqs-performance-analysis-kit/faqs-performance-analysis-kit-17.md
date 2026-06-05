---
format: md
title: "如何用hdc命令将本地文件发送至远端设备"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-17
---


从本地向远端设备发送文件，命令格式如下：

```
hdc file send local remote
```

local 表示本地待发送的文件路径，remote 表示远程待接收的文件路径。

使用方法：

```
hdc file send E:\example.txt /data/local/tmp/example.txt
```

**参考链接**

[hdc-文件相关命令](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hdc#文件传输)
