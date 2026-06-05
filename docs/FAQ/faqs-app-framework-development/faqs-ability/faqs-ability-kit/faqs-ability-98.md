---
format: md
title: "开发非UI功能，使用ts开发而非ets开发对应用有哪些影响（内存、CPU、hap大小等方面）"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-98
---


基础库可以使用 TypeScript 开发。但是，TypeScript 文件无法引用 ETS 文件，这导致使用 TypeScript 开发时无法使用系统能力。

ArkTS通过规范强化静态检查和分析，能够在程序开发阶段检测更多错误，提升程序稳定性，并优化运行性能。使用ETS可以进一步提高性能。
