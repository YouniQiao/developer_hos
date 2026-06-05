---
format: md
title: "如何查询后台任务中短时任务/长时任务/延迟任务/后台代理提醒相关的系统日志"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-background-tasks-9
---


以后台任务中短时任务为例。可以在日志中通过过滤关键字“C01711/TRANSIENT\_TASK”来查询短时任务的状态情况，包括查询申请短时任务状态、查询对应短时任务的剩余时间和取消短时任务状态等。

![](./img/ec6d07de.png "点击放大")

* “request suspend success ...”：表示短时任务申请成功。
* “get remain time pkg ...”：表示对应短时任务的剩余时间。
* “cancel suspend delay ...”：表示短时任务取消成功。

后台任务中添加更多日志标识：

![](./img/b248ef10.png)

* 短时任务：TRANSIENT\_TASK

* 长时任务：CONTINUOUS\_TASK

* 延迟任务：WORK\_SCHEDULER

* 后台代理提醒：ANS\_REMINDER
