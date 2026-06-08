---
title: "PGD/OOP混合模式概述"
original_url: /docs/dev/game-dev/pgd-hybrid-overview-0000002498501230
format: md
upstream_id: dev/game-dev/pgd-hybrid-overview-0000002498501230
last_sync: 2026-06-07
sync_hash: 3165a4e7
---
PGD混合模式用于桥接GameObject与Entity，实现游戏对象的高效复用。它负责统一管理Prefab、以及对应的Entity，支持开发者使用PGD框架对GameObject数据进行高效处理。主要涉及以下模块：

| 模块 | 说明 |
| --- | --- |
| PgdHybrid | 混合模式Prefab处理抽象基类，用于实现Prefab在世界的初始化。 |
| GoLink | PGD预制组件，用于标记和记录GameObject与Entity的桥接信息。 |
