---
title: "前台场景内存峰值占用"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-peak-foreground-memory-usage-0418
format: md
---


# 前台场景内存峰值占用

#### 规则详情

应用/元服务前台场景峰值内存占用：应用在前台且亮屏使用规程的内存占用应≤ 1500MB。

#### 检测逻辑

1. 执行hdc shell。
2. 执行hidumper --mem &lt;进程pid&gt;命令，获取如图Pss字段。

![](./img/zh-cn_image_0000002602185975.png)

#### 计算逻辑

执行多轮测试，取最大Pss值为占用峰值，内存占用小于1500M。
