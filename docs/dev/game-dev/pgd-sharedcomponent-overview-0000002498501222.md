---
title: "SharedComponent概述"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-sharedcomponent-overview-0000002498501222
format: md
---


SharedComponent（共享组件）是PGD提供的一种高性能的特殊组件，与普通组件相互独立，能够在保持ECS数据连续性的同时，允许多个实体共享同一个组件数据。当一份组件数据关联多个实体时，每个实体修改该组件值，等同于修改所有实体的组件值。

## 核心特性

* 低耦合：与基础组件系统相互独立，拥有独立的一套接口和处理逻辑，并且数据存储在专用的Archetype中，与普通Archetype隔离；
* 内存占用少：普通Archetype仅通过索引和位集关联对应的共享组件数据，且多个实体的相同共享组件仅有一份数据内存；
* 共享：一份数据多个实体使用，一个实体修改等同于全员修改。由于共享特性的存在，该功能不支持并行查询（ParallelForEach）接口。
