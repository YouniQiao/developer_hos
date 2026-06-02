---
title: "基于模板Entity进行运行时Entity派生"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-hybrid-derivation-0000002530101217
---

```
var singleEntityQuery = world.Query<SampleComponent>
if (singleEntityQuery.HasSingleton<SampleComponent>)
{
    var tempEntity = singleEntityQuery.GetSingleton<SampleComponent>();
    var entity = world.Instantiate(tempEntity);
}
```
