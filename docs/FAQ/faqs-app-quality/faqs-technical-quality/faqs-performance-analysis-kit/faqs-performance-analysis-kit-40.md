---
format: md
title: "如何解决Kill server failed 的问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-40
---

**问题现象**

执行 hdc kill 命令后，返回信息为“Kill server failed: operation not permitted”。

**可能原因**

其他程序已在后台启动了hdc server，并且其权限高于当前执行hdc kill命令的权限。

**解决措施**

1. Windows：任务管理器 > 详细信息 > hdc.exe > 结束进程。
2. 在 Unix 系统中，使用 ps -ef | grep hdc 命令找到 hdc 后台程序的进程号，然后使用 sudo kill -9 进程号 强制终止该进程。
