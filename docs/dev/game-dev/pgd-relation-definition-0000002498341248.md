---
title: "自定义关系"
original_url: /docs/dev/game-dev/pgd-relation-definition-0000002498341248
format: md
upstream_id: dev/game-dev/pgd-relation-definition-0000002498341248
last_sync: 2026-06-07
sync_hash: 38c350a6
---
IGenericRelation和IEntityRelation两个关系接口，可自行选择实现。

* 实现IGenericRelation定义的关系对应的关系目标没有强制要求。
* 实现IEntityRelation定义的关系对应的关系目标必须是IEntity。

```
public enum InventoryItemType
{
    Axe = 1,
    Gun = 2,
    Sword = 3,
    Shield = 4,
}

/// 库存关系，关系目标为InventoryItemType
public struct InventoryItem : IGenericRelation<InventoryItemType>
{
    public InventoryItemType type;
    public int amount;
    public InventoryItemType GetGenericKey() => type; // GetGenericKey必须实现
}

/// string关系，关系目标为string
public struct StringRelation : IGenericRelation<string>
{
    public string value;
    public string GetGenericKey() => value;
}

/// 攻击关系，关系目标为entity
public struct AttackRelation : IEntityRelation
{
    public int attackDamage;
    public IEntity target;
    public IEntity GetGenericKey() => target;
}

// 治疗关系，关系目标为entity
public struct CureRelation : IEntityRelation
{
    public int treatment;
    public IEntity target;
    public IEntity GetGenericKey() => target;
}
```
