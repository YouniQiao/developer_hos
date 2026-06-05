---
title: "Lookup概述"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-lookup-overview-0000002489613457
format: md
---


Lookup（查找系统）是PGD提供的高性能索引机制，用于基于组件值快速查找实体。传统的ECS查询基于组件类型，而Lookup系统允许基于组件的实际值进行查询，大幅提升特定场景下的查询性能。

## 核心特性

* 值索引：基于组件值而非类型进行实体查找。
* 高性能：O(1)时间复杂度的值查找，避免全表扫描。
* 自动维护：组件值变化时自动更新索引。
* 类型安全：编译时类型检查，支持值类型和引用类型。
* 范围查询：支持数值范围和字符串范围查询。
* 实体关联：支持实体间的引用关系查找。
