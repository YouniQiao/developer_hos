---
title: "基于模板Entity进行运行时Entity派生"
original_url: /docs/dev/game-dev/pgd-hybrid-derivation-0000002530101217
format: md
---


```
var singleEntityQuery = world.Query<SampleComponent>
if (singleEntityQuery.HasSingleton<SampleComponent>)
{
    var tempEntity = singleEntityQuery.GetSingleton<SampleComponent>();
    var entity = world.Instantiate(tempEntity);
}
```
