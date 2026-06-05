---
title: "BatchProcessor实体修改批处理"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-batch-processor-0000002450562832
format: md
---


BatchProcessor用于对已有实体进行批量修改操作，包括添加/移除组件和标签。

与逐个修改相比，批处理将所有变更合并为一次结构性改变。

```
var world = new IECSWorld();
var entity = world.CreateEntity(new Health(100));

// 传统方式：多次结构性变化
entity.AddComponent(new PgdPosition(1, 2, 3));  // 结构变化 1
entity.AddComponent(new Velocity());            // 结构变化 2
entity.AddTag<PlayerTag>();                     // 结构变化 3
entity.RemoveComponent<Health>();               // 结构变化 4

// 批处理方式：一次结构性变化
entity.GetBatchProcessor()
    .AddComponent(new PgdPosition(1, 2, 3))
    .AddComponent(new Velocity())
    .AddTag<PlayerTag>()
    .RemoveComponent<Health>()
    .Process(); // 所有变更在此时一次性应用
```

## 单实体批处理

先通过IEntity.GetBatchProcessor()获取批处理实例，再调用Process()进行批处理操作。

```
var entity = world.CreateEntity(new Health(50));

// 通过IEntity.GetBatchProcessor()获取批处理实例
var batch = entity.GetBatchProcessor();

// 添加组件
batch.AddComponent(new PgdPosition(10, 0, 10))
     .AddComponent(new Velocity())
     .AddComponent(new Weapon());

// 添加标签
batch.AddTag<PlayerTag>()
     .AddTag<AliveTag>();

// 移除组件和标签
batch.RemoveComponent<Health>()
     .RemoveTag<EnemyTag>();

// 应用所有变更
batch.Process();
Console.WriteLine(entity); // 查看最终结果

// 注意：Process()后批处理自动归还，不能再次使用，需要再通过GetBatchProcessor()获取BatchProcessor实例再次使用
```

## 独立批处理对象

ProcessOn(IEntity entity)将批处理命令应用到指定的实体上。命令不会被清除，因此同一个批处理可以应用到多个实体。

```
// 创建独立的批处理对象，可以应用到任意实体
var batch = new BatchProcessor();

// 配置批处理操作
batch.AddComponent(new Weapon { damage = 25.0f })
     .AddComponent(new Inventory { capacity = 20 })
     .AddTag<EquippedTag>()
     .RemoveComponent<UnarmedTag>();

// 应用到多个实体
var player1 = world.CreateEntity(new Health(100));
var player2 = world.CreateEntity(new Health(80));

batch.ProcessOn(player1);
batch.ProcessOn(player2);

Console.WriteLine($"玩家1: {player1}");
Console.WriteLine($"玩家2: {player2}");
// 两个玩家都获得相同的装备配置
```
