---
title: "后台CPU占用峰值"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-peak-background-cpu-usage-0420
format: md
upstream_id: tools/coding-debug/ide-peak-background-cpu-usage-0420
last_sync: 2026-06-07
sync_hash: 622da8de
---
# 后台CPU占用峰值

#### 规则详情

应用/元服务后台CPU占用峰值：应用/元服务切换到后台等待3min后，开始采集3min内CPU Load &lt; 5%。

#### 检测逻辑

1. 执行hdc shell。
2. 执行hidumper --cpuusage &lt;进程pid&gt;命令，获取总的cpu使用率。

![](./img/zh-cn_image_0000002602066351.png)

#### 计算逻辑

执行多轮测试，取最大值为cpu占用峰值，cpu占用率须小于5%。
