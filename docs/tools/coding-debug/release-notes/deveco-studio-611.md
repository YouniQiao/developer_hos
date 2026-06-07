---
title: "DevEco Studio 6.1.1"
format: md
original_url: /docs/tools/coding-debug/release-notes/deveco-studio-611
---


# DevEco Studio 6.1.1

当前为DevEco Studio最新版本说明文档，如需查看DevEco Studio其它历史版本的功能新增、变更情况，请在左侧文档目录中选择相应版本。

## DevEco Studio 6.1.1 Beta1（6.1.1.268）

### 兼容性配套关系

DevEco Studio 6.1.1.268携带的工具列表、支持的API范围及开发态版本号信息如下：

****表1 DevEco Studio

| 组件 | 版本 | 说明 |
| --- | --- | --- |
| HarmonyOS SDK | HarmonyOS 6.1.1 Beta1 SDK | - |
| HarmonyOS Emulator | 6.1.1.100 | 模拟器。 |
| Hvigor | 6.24.1 | 编译构建工具DevEco Hvigor（以下简称Hvigor），适用于API 10及以上的工程。 |
| ohpm | 6.1.2.268 | OpenHarmony三方库的包管理工具。 |
| Node.js | 18.20.1 | Hvigor、ohpm等工具的运行时环境。 |
| modelVersion | 6.1.1 | 开发态版本号。 |
| [compatibleSdkVersion](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section45865492619) | 最低兼容版本：4.0.0(10) | 标识应用/元服务运行所需兼容的最低SDK版本。 |
| [compileSdkVersion](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section45865492619) | 6.1.1(24) | 标识编译应用/元服务所使用的SDK版本。 |
| [targetSdkVersion](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section45865492619) | 4.0.0(10)~6.1.1(24) | 标识应用/元服务运行所需目标SDK版本，介于compatibleSdkVersion和compileSdkVersion之间。 |

DevEco Studio 6.1.1.268配套使用的命令行工具列表、支持的API范围及开发态版本号信息如下：

表2 命令行工具

| 组件 | 版本 | 说明 |
| --- | --- | --- |
| Command Line | 6.1.1.268 | 命令行工具集版本。 |
| codelinter | 6.0.240 | 执行代码检查与修复的工具。 |
| hstack | 5.1.0 | 将release应用混淆后的crash堆栈还原为源码对应堆栈的工具。 |
| hvigorw | 6.24.1 | 编译构建工具DevEco Hvigor（以下简称Hvigor），适用于API 10及以上的工程。 |
| ohpm | 6.1.2.268 | OpenHarmony三方库的包管理工具。 |
| Node.js | 18.20.1 | codelinter、hvigorw、hstack、ohpm等工具的运行时环境。 |
| sdk | HarmonyOS 6.1.1 Beta1 SDK | - |
| modelVersion | 6.1.1 | 开发态版本号。 |
| [compatibleSdkVersion](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section45865492619) | 最低兼容版本：4.0.0(10) | 标识应用/元服务运行所需兼容的最低SDK版本。 |
| [compileSdkVersion](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section45865492619) | 6.1.1(24) | 标识编译应用/元服务所使用的SDK版本。 |
| [targetSdkVersion](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section45865492619) | 4.0.0(10)~6.1.1(24) | 标识应用/元服务运行所需目标SDK版本，介于compatibleSdkVersion和compileSdkVersion之间。 |

### 新增和增强特性

开发环境搭建

- DevEco Studio支持开发API 24工程。

编写与调试应用

- Hot Reload能力增强，支持修改C++代码和资源文件。具体请参考[Hot Reload](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hot-reload)。
- DevEco Studio支持解析更多AppFreeze日志，包括Binder通信信息、主线程任务队列和采样栈数据，提升开发者定位效率。具体请参考[查看AppFreeze（应用冻屏）日志](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-faultlog-appfreeze)。

优化应用性能

- All Heap & Anonymous VM泳道、System Resources泳道、Graphic Memory泳道的配置项新增Record Async Stack，用于开启异步栈缝合，开启后在异步回栈时支持多回一层异步栈帧。具体请参考[内存分析介绍](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-allocations-memory)。
- 新增ComMemory模板，用于分析UI界面各组件内存的分配情况，帮助定位UI组件内存泄漏问题。具体请参考[UI组件内存：ComMemory分析](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-commemory)。
- 在Snapshot模板的Statistics页签中选中一个构造器或实例结点，支持查看该节点构造器下的所有实例到GC Roots的最短路径。具体请参考[Snapshot模板基本操作](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-snapshot-basic-operations)。

命令行工具****

- 工程级oh-package.json5文件新增properties字段，用于多环境下的依赖管理。具体请参考[oh-package.json5](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-oh-package-json5)。
