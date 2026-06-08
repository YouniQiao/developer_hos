---
title: "定义SharedComponent"
original_url: /docs/dev/game-dev/pgd-sharedcomponent-definition-0000002498341246
format: md
upstream_id: dev/game-dev/pgd-sharedcomponent-definition-0000002498341246
last_sync: 2026-06-07
sync_hash: 399409de
---
通过实现IShared接口，定义SharedComponent

```
// 定义共享组件
public struct SharedComponent1 : IShared
{
    public int value;
}
```
