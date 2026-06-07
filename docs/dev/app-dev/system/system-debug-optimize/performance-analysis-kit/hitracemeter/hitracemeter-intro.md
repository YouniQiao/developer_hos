---
title: "HiTraceMeter介绍"
original_url: /docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-intro
format: md
---


本文介绍HiTraceMeter接口的使用方法。开发者可以在代码中调用HiTraceMeter接口进行trace打点，然后可使用[hitrace](/docs/dev/app-dev/system/hitrace)命令行工具或者[hidebug](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hidebug/hidebug-guidelines#获取应用trace记录信息)提供的trace采集接口，获取程序运行时产生的打点信息，了解程序运行的进程、线程、时间戳、CPU等信息，以帮助开发者进行问题分析和性能调优。

HiTraceMeter提供ArkTS和C/C++两种接口，按需选择。

* [使用HiTraceMeter跟踪性能（ArkTS）](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-arkts)
* [使用HiTraceMeter跟踪性能（C/C++）](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-guidelines-ndk)

## 实现原理

内核设置了一个缓冲区用于记录设备运行时产生的打点记录，并在sysfs中提供了trace\_marker和trace节点：

trace\_marker节点为只写节点，程序将打点信息写入到trace\_marker节点后，打点信息会被存储到内核的缓冲区。HiTraceMeter提供的接口封装了写操作，应用可以调用这些接口将打点数据写入内核节点。

trace节点为只读节点，可从中读取系统当前缓冲区内的所有记录。hitrace命令行工具封装了对该节点的读取操作，开发者可使用命令将采集的打点信息显示在命令行或保存到设备文件中。

调用HiTraceMeter接口生成的打点信息格式可查看[用户态trace格式说明](/docs/dev/app-dev/system/system-debug-optimize/performance-analysis-kit/hitracemeter/hitracemeter-view#用户态trace格式说明)。

**HiTraceMeter Tag**：跟踪数据使用类别，每个软件子系统对应一个tag。可以在hdc命令行中用“hitrace -l”命令查看所有的tag名及其简介。使用[hitrace](/docs/dev/app-dev/system/hitrace)命令行工具采集跟踪数据时，需要指定tag，采集结果仅包含指定tag类别的跟踪数据。应用中调用HiTraceMeter打点使用的tag是app。
