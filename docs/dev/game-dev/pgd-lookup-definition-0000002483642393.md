---
title: "定义Lookup组件"
original_url: /docs/dev/game-dev/pgd-lookup-definition-0000002483642393
format: md
---


## 基本Lookup组件

继承ILookup接口的Component。

```
using PGD;

// 字符串值索引组件
public struct PlayerName : ILookup<string>
{
    public string name;
    public string GetLookup() => name;
    public override string ToString() => name;
}

// 整数值索引组件
public struct PlayerLevel : ILookup<int>
{
    public int level;
    public int GetLookup() => level;
    public override string ToString() => level.ToString();
}

// 枚举值索引组件
public enum PlayerClass
{
    Warrior,
    Mage,
    Archer,
    Rogue
}

public struct PlayerClassComponent : ILookup<PlayerClass>
{
    public PlayerClass playerClass;
    public PlayerClass GetLookup() => playerClass;
    public override string ToString() => playerClass.ToString();
}
```

## 实体引用组件

```
// 实体引用组件，用于建立实体间的关系
public struct Owner : ILinkComponent
{
    public IEntity entity;
    public string relationship;
    public IEntity GetLookup() => entity;
    public override string ToString() => $"Owner: {entity.Id}";
}

// 攻击目标组件
public struct AttackTarget : ILinkComponent
{
    public IEntity target;
    public float damage;
    public IEntity GetLookup() => target;
    public override string ToString() => $"Attacking: {target.Id}";
}
```
