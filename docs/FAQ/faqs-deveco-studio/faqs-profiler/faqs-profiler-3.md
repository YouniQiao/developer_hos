---
format: md
title: "内存占用率过高导致DevEco Studio无法正常运行"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-profiler/faqs-profiler-3
---


**问题现象****一**

在Profiler数据分析过程中，如果DevEco Studio卡顿或停止响应，并显示“Low Memory”告警，说明内存不足。

![](./img/f1ad6a01.png)

**问题现象二**

在Profiler数据分析过程中，Profiler功能无法正常使用，并显示“The IDE is running low on memory”告警。

![](./img/8214ec75.png)

**解决措施**

可在DevEco Studio的配置文件中手动修改虚拟机可使用的最大内存。

1. 在DevEco Studio工具栏中依次选择“Help > Edit Custom VM Options…”，打开配置文件。

   ![](./img/c45ff19c.png)
2. 根据实际需求调整“-Xmx”参数后的值。如果配置文件中未包含“-Xmx”参数，请手动添加，例如：-Xmx2048m。2048m 表示虚拟机可使用的内存量，如需增加，可修改该数值。
