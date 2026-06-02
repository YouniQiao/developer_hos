---
title: "使用元服务体检工具"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-appanalyzer
---

应用与元服务体检工具（AppAnalyzer）是DevEco Studio面向开发人员提供的元服务体检工具，可以在开发阶段快速对元服务的质量和体验好坏打分。

开发者可以通过DevEco Studio连接本地设备，体检工具将自动遍历元服务，快速进行自测试，输出测试结果及评分，并提供分析指导以及修改建议，帮助开发者提升元服务质量和用户体验。

同时，体检工具涵盖元服务上架审核的部分指标，提高评分将有利于降低开发成本，可提高元服务上架的效率和成功率。

## 运行环境要求

请下载并安装最新版本的DevEco Studio开发者工具。

获取工具请单击[链接下载](https://developer.huawei.com/consumer/cn/download/)。

## 约束与限制

* 当前仅phone类型的设备支持使用应用与元服务体检能力。
* 在使用AppAnalyzer对HarmonyOS元服务进行测试之前，先要确保[DevEco Studio与真机设备已连接](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device)。
* 在使用AppAnalyzer对HarmonyOS元服务进行测试之前，请先根据[应用/服务签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)章节进行签名，再编译生成HAP或编译生成HSP。

## 使用流程及方法

工具使用流程及方法请参考[应用与元服务体检](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-app-analyzer)。

## 评分方法及规则

元服务当前支持的测试类型包括兼容性、稳定性、安全与隐私、最佳实践等，具体评分标准请参见[评分方法和指标](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-app-analyzer#section197465025710)，具体测试项请参见[测试标准](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-app-analyzer-rules)。
