---
title: "概述"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-apms-crash-overview-0000002531131751
format: md
---


异常管理通过实时采集与分析应用运行指标，实现性能异常的实时发现、即时告警和关键信息呈现，帮助开发者及时捕获崩溃、报错、无响应等异常事件（当前支持监测CPP CRASH、JS ERROR、OOM、PROCESS KILL、APP FREEZE、RESOURCE LEAK六大指标，指标释义见下表），缩短问题识别与排查周期，保障应用稳定运行。

|  |  |  |
| --- | --- | --- |
| **指标** | **中文名称** | **核心特征** |
| CPP CRASH | C++崩溃 | C++进程代码未处理POSIX崩溃异常信号，导致异常退出。 |
| JS ERROR | JS/ArkTS错误 | 应用JS/ArkTS代码执行过程中发生的未捕获异常或错误，应用会因为无法继续正常运行而直接崩溃。 |
| OOM（Out of Memory） | 内存不足 | 内存使用超标导致的崩溃问题。 |
| PROCESS KILL | 进程强制终止 | 不等待进程完成正常收尾，系统或用户主动中断进程的操作，强制停止其运行。 |
| APP FREEZE | 应用冻屏 | 用户在使用应用时，如果出现点击无反应或应用无响应等情况，并且持续时间超过一定限制，就会被定义为应用冻屏，即应用无响应或卡死。 |
| RESOURCE LEAK | 资源泄漏 | 句柄、线程或内存等资源，在应用运行过程中没有被正确释放，导致资源被长期占用且无法被其他应用使用，如果某一类资源耗尽，系统可能出现卡死或重启等异常情况。 |
