---
title: "添加/删除关系"
original_url: /docs/dev/game-dev/pgd-relation-manage-0000002530101213
format: md
upstream_id: dev/game-dev/pgd-relation-manage-0000002530101213
last_sync: 2026-06-07
sync_hash: 184ac5a2
---
## 添加关系

以下示例代码中关系主体为entity，分别演示关系特性场景。

```
var world = new IECSWorld();
var entity = world.CreateEntity();

RelationOptionsEnum option = RelationOptionsEnum.Null;

// 特性1. entity的相同关系添加不同的目标
entity.AddRelation(new InventoryItem { type = InventoryItemType.Axe, amount = 1 }, out option); // option: Add
entity.AddRelation(new InventoryItem { type = InventoryItemType.Gun, amount = 2 }, out option); // option: Add

var target = world.CreateEntity();

// 特性2. entity和target同时存在不同关系
entity.AddRelation(new AttackRelation { target = target, attackDamage = 10 }, out option); // option: Add
entity.AddRelation(new CureRelation { target = target, treatment = 5 }, out option); // option: Add

// 特性3. entity的相同关系和相同目标情况下会覆盖
entity.AddRelation(new AttackRelation { target = target, attackDamage = 15 }, out option); // option: Modify
```

## 删除关系

```
// 删除InventoryItem关系中其目标为InventoryItemType.Axe的关系
entity.RemoveRelation<InventoryItem, InventoryItemType>(InventoryItemType.Axe);

// 删除AttackRelation关系中目标为target的关系
entity.RemoveRelation<AttackRelation>(target);
```
