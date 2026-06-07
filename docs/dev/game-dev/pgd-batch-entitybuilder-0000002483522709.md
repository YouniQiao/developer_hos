---
title: "BatchEntityBuilder实体创建批处理"
original_url: /docs/dev/game-dev/pgd-batch-entitybuilder-0000002483522709
format: md
---


用于预先设置一组组件和标签，然后一次性创建多个具有相同组件和标签的实体，从而提高性能。

## 基本使用

```
var world = new IECSWorld();
var batch = world.GetBatchBuilder(); // 获取创建批处理实例（无参即autoRelease=true时，批处理会自动归还）

// 配置批处理：添加组件和标签
batch.AddComponent(new PgdPosition(1, 2, 3))
    .AddComponent(new PgdRotation())
    .AddTag<PlayerTag>()
    .AddTag<AliveTag>();

var entity = batch.CreateEntity(); // 根据配置，创建实体，批处理使用完毕自动归还，不可再次使用了
Console.WriteLine(entity); // EntityId: 1, components: [PgdPosition, PgdRotation], tags: [PlayerTag, AliveTag]
AreEqual(1, world.WorldInfo.CachedBuilderBatchedCount); // 批处理使用后自动归还到对象池

var batch2 = world.GetBatchBuilder(); // 再次获取创建批处理实例
AreEqual(0, world.WorldInfo.CachedBuilderBatchedCount);

batch2.AddComponent(new PgdPosition(1, 2, 3))
    .AddComponent<PgdRotation>()
    .AddTag<AliveTag>()
    .Inactive();

var entity2 = batch2.CreateEntity(); // 创建实体
Console.WriteLine(entity2); // EntityId: 2, components: [PgdPosition, PgdRotation], tags: [Inactive, AliveTag]
```

## 批处理组件操作

```
var batch = world.GetBatchBuilder(false); // 获取创建批处理实例，autoRelease = false：手动归还批处理到对象池

// 添加具有默认值的组件
batch.AddComponent<Health>();      // Health { current: 0, maximum: 0 }
batch.AddComponent<PgdPosition>(); // PgdPosition { x: 0, y: 0, z: 0 }

// 添加具有指定值的组件
batch.AddComponent(new Health(100));
batch.AddComponent(new PgdPosition(10, 20, 30));
batch.AddComponent(new Velocity { value = new Vector3(1, 0, 0) });

// 获取并修改批处理中的组件
ref var health = ref batch.GetComponent<Health>();
health.value = 100;

ref var position = ref batch.GetComponent<PgdPosition>();
position.vec3 = new Vector3(5, 5, 5);

// 创建实体
var entity = batch.CreateEntity();
batch.ReleaseBatch(); // 归还批处理到对象池
```

## 批处理标签操作

```
var batch = world.GetBatchBuilder(false);

// 添加单个标签
batch.AddTag<PlayerTag>();
batch.AddTag<AliveTag>();

// 批量添加标签
var enemyTags = ITags.Get<EnemyTag, AggressiveTag>();
batch.AddTags(enemyTags);

batch.Inactive(); // 添加禁用标签，等同于 AddTags(Inactive)

Console.WriteLine($"组件数量: {batch.TotalComponentCount}");
Console.WriteLine($"标签数量: {batch.TotalTagCount}");
Console.WriteLine($"批处理内容: {batch}");

// 创建实体
var entity = batch.CreateEntity();
batch.ReleaseBatch(); // 归还批处理到对象池
```

## 批处理清理和重用

```
var world = new IECSWorld();
var batch = world.GetBatchBuilder(false); // 获取创建批处理实例，autoRelease = false：手动归还批处理到对象池

batch.AddComponent(new PgdScale()).AddTag<MovableTag>(); // 第一次配置
batch.CreateEntity();

batch.ResetBatch(); // 重置批处理内容
Console.WriteLine($"清理后: {batch}"); // Batch: Empty, TotalComponentCount:0, TotalTagCount:0

// 重新配置
try
{
    // 配置批处理：添加组件和标签
    batch.AddComponent(new PgdPosition(1, 2, 3))
        .AddComponent(new PgdRotation())
        .AddTag<PlayerTag>()
        .AddTag<AliveTag>();

    // 批量创建多个具有相同配置的实体
    for (int i = 0; i < 10; i++)
    {
        // 可以修改特定组件的值
        ref var pos = ref batch.GetComponent<PgdPosition>();
        pos.x = i * 2;
        pos.y = i * 3;

        // 创建实体
        IEntity enemy = batch.CreateEntity();
        Console.WriteLine(enemy); // EntityId: 1, components: [PgdPosition, Velocity], tags: [PlayerTag, AliveTag]
        Console.WriteLine($"Created enemy({enemy.Id}) at position ({pos.x}, {pos.y})"); // 使用创建的实体...

    }
}
finally
{
    // 如果使用GetBatchBuilder(false)，需要手动返回
    if (!batch.IsReleased)
        batch.ReleaseBatch();
}

var batch2 = world.GetBatchBuilder().AddComponent<PgdRotation>().Inactive().CreateEntity(); // 再次获取创建批处理实例并使用
Console.WriteLine(batch2); // EntityId: 11, components: [PgdRotation], tags: [Inactive]
```

## 高性能批量创建

```
// 场景：创建10000个敌人实体
public void CreateEnemyArmy(IECSWorld world, int count)
{
    var batch = world.GetBatchBuilder(false);

    // 配置敌人模板
    batch.AddComponent(new Health(50))
         .AddComponent(new PgdPosition())  // 稍后设置具体位置
         .AddComponent(new Velocity())
         .AddComponent(new AIComponent())
         .AddTag<EnemyTag>()
         .AddTag<AliveTag>();

    var random = new Random();

    for (int i = 0; i < count; i++)
    {
        // 修改批处理中的位置组件
        ref var position = ref batch.GetComponent<PgdPosition>();
        position.vec3 = new Vector3(
            random.NextSingle() * 100 - 50,  // X: -50 到 50
            0,
            random.NextSingle() * 100 - 50   // Z: -50 到 50
        );

        // 创建实体
        var enemy = batch.CreateEntity();

        // 可选：设置特定ID
        // var enemy = batch.CreateEntity(specificId);
    }

    batch.ReleaseBatch();
    Console.WriteLine($"创建了 {count} 个敌人");
}
```
