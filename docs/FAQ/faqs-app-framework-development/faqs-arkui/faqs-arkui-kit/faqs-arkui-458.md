---
format: md
title: "FrameNode的性能为什么不如声明式"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-458
---


FrameNode的属性设置流程比ArkTS要长，原因是：ArkTS采用声明式UI范式，在编译期生成完整的属性配置；FrameNode作为命令式UI节点，需要运行时动态应用属性变更，ArkTS是对组件的所有属性一次性完成设置，而FrameNode则是对节点的每个属性逐个进行设置，每次属性设置都需要跨语言通信，这是性能差异的主要来源。如果需要动态更改组件树或复用组件，建议仅设置或更改必要的属性以优化性能。
