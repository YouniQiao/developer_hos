---
title: "ArkTS语言基础类库"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-arkts-utils
format: md
---


ArkTS是HarmonyOS应用开发的官方高级语言。

ArkTS提供了[声明式UI范式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-declarative-ui-description)、[状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-overview)、[渲染控制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-overview)等相应的能力，让开发者能够以更简洁、更自然的方式开发应用。

ArkTS在TypeScript（简称TS）生态基础上做了进一步扩展，保持了TS的基本风格，同时通过规范定义强化开发期静态检查和分析，提升代码健壮性，并实现更好的程序执行稳定性和性能。对比标准TS的差异可以参考[从TypeScript到ArkTS的适配规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide)。ArkTS同时也支持与TS/JavaScript（简称JS）高效互操作。

针对TS/JS并发能力支持有限的问题，ArkTS对并发编程API和能力进行了增强，提供了[TaskPool](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/taskpool-introduction)和[Worker](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/worker-introduction)两种并发API供开发者选择。另外，ArkTS进一步提出了Sendable的概念来支持对象在并发实例间的引用传递，提升ArkTS对象在并发实例间的通信性能。

元服务ArkTS的开发方式与传统应用ArkTS的开发方式相同，详见[ArkTS简介](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-overview)。
