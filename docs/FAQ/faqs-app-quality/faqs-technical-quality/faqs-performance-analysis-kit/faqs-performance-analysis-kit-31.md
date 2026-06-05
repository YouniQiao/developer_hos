---
format: md
title: "hdc工具导出/导入文件等常用hdc命令有哪些"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-31
---


导出文件：hdc file recv 手机路径

电脑路径导入文件：hdc file send 电脑路径

查看已连接设备：hdc list targets

手机常亮：hdc shell power-shell setmode 602

查看OUC进程：ps -ef|grep com.huawei.hmos.ouccom.ohos.updateapp

查看DUE进程：ps -ef|grep updater\_sa
