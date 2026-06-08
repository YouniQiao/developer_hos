---
title: "基于模板Entity进行运行时Entity派生"
original_url: /docs/dev/game-dev/pgd-hybrid-derivation-0000002530101217
format: md
upstream_id: dev/game-dev/pgd-hybrid-derivation-0000002530101217
last_sync: 2026-06-07
sync_hash: 310b7d31
---
```
var singleEntityQuery = world.Query<SampleComponent>
if (singleEntityQuery.HasSingleton<SampleComponent>)
{
    var tempEntity = singleEntityQuery.GetSingleton<SampleComponent>();
    var entity = world.Instantiate(tempEntity);
}
```
