---
format: md
title: "录制Snapshot模板时，看不到taskPool线程内存信息"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-profiler/faqs-profiler-15
---


**问题现象**

录制Snapshot模板时，无法看到taskPool线程的内存信息。

**可能原因**

Snapshot模板只支持dump主线程的虚拟机堆内存。

**解决措施**

可使用hidumper --mem-jsheap $\{pid\} -T $\{tid\}获取指定进程指定JS线程的虚拟机堆内存，文件生成后导入Profiler查看。详细信息参考[查询虚拟机堆内存](/docs/dev/app-dev/system/hidumper#查询虚拟机堆内存)。
