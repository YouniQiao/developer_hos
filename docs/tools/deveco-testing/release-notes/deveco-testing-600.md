---
title: "DevEco Testing 6.0.0"
format: md
---


# DevEco Testing 6.0.0

当前为 DevEco Testing 最新版本说明文档，如需查看 DevEco Testing 其它历史版本的功能新增、变更情况，请在左侧文档目录中选择相应版本。

## DevEco Testing 6.0.0 Release（6.0.7.100）

新增“应用上架预检（本地）”测试服务。具体请参考[应用上架预检](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/publish-testing#section214991410293)。

探索测试服务支持用户自定义场景进行压测。具体请参考[应用探索测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/exploratory-testing#section12324184817324)。

支持部分测试任务在模拟器上执行。

新增应用图谱管理工具、性能报告自动分析工具、性能测试报告对比工具。具体请参考[实用工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/tool)。

部分测试服务支持元服务创建任务。

****表1**** ****DevEco Testing测试服务应用兼容性配套关系****

| 模块 | 测试服务 | 模拟器 | 元服务 |
| --- | --- | --- | --- |
| [专项测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/specialized-testing) | 性能基础质量测试 | 不支持 | 支持 |
| [专项测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/specialized-testing) | 场景化性能测试 | 不支持 | 不支持 |
| [专项测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/specialized-testing) | UX基础质量测试 | 支持 | 支持 |
| [专项测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/specialized-testing) | 稳定性基础质量测试 | 支持 | 支持 |
| [专项测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/specialized-testing) | 安全基础质量测试 | 不支持 | 支持 |
| [专项测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/specialized-testing) | 功耗基础质量测试 | 不支持 | 支持 |
| [专项测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/specialized-testing) | 功能体验基础质量测试 | 支持 | 支持 |
| [专项测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/specialized-testing) | 性能指标监控测试 | 不支持 | 支持 |
| [上架预检](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/publish-testing) | 应用上架预检（本地） | 不支持 | 不支持 |
| [探索测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/exploratory-testing) | 应用探索测试 | 支持 | 支持 |
| [回归测试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/regression-test) | 回归测试 | 支持 | 支持 |
| [实用工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/tool) | 设备投屏 | 不支持 | / |
| [实用工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/tool) | UIViewer | 不支持 | 支持 |
| [实用工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/tool) | 应用图谱管理工具 | 不支持 | 不支持 |
| [实用工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/tool) | 性能报告自动分析 | 不支持 | / |
| [实用工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/tool) | 性能测试报告对比 | 不支持 | / |

## DevEco Testing Hypium 6.0.0 Release（6.0.6.210）

测试框架支持被三方测试框架集成。

测试框架文本输入支持快速输入模式和追加输入模式。具体请参考[API使用方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hypium-python-guidelines#section4598236435)。

测试框架长按支持指定长按时长，新增手表表冠操作接口。
