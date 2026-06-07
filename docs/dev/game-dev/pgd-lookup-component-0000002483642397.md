---
title: "ComponentLookup"
original_url: /docs/dev/game-dev/pgd-lookup-component-0000002483642397
format: md
---


ComponentLookup为world中的查询管理器，可以获取已经创建好的Lookup查询。

## 获取ComponentLookup

```
var world = new IECSWorld();

// 获取字符串值的ComponentLookup
var nameLookup = world.ComponentLookup<PlayerName, string>();

// 获取整数值的ComponentLookup
var levelLookup = world.ComponentLookup<PlayerLevel, int>();

// 获取实体引用的ComponentLookup
var ownerLookup = world.ComponentLookup<Owner, IEntity>();

// 检查索引状态
Console.WriteLine($"名称索引数量: {nameLookup.Count}");
Console.WriteLine($"等级索引数量: {levelLookup.Count}");

// 检查索引内容
Console.WriteLine("名称索引内容:");
foreach (var name in nameLookup.Values)
{
    Console.WriteLine($"- {name}");
}
```

## 基本操作

```
var world = new IECSWorld();
var nameLookup = world.ComponentLookup<PlayerName, string>();
var levelLookup = world.ComponentLookup<PlayerLevel, int>();

// 检查索引状态
Console.WriteLine($"所有值: {nameLookup.Values}");

// 获取所有已索引的值
foreach (var name in nameLookup.Values)
{
    var entities = nameLookup[name];
    Console.WriteLine($"名称 '{name}' 对应 {entities.Count} 个实体");
}
```
