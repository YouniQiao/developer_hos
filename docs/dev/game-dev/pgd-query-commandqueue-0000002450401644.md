---
title: "CommandQueue延迟执行系统"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-query-commandqueue-0000002450401644
---

## 获取CommandQueue

```
var world = new IECSWorld();

// 获取CommandQueue实例
var commandQueue = world.GetCommandQueue();

// 检查CommandQueue状态
Console.WriteLine($"实体命令数: {commandQueue.EntityCommandCount}");
Console.WriteLine($"组件命令数: {commandQueue.ComponentCommandCount}");
Console.WriteLine($"标签命令数: {commandQueue.TagCommandCount}");
Console.WriteLine($"子实体命令数: {commandQueue.ChildCommandCount}");
Console.WriteLine($"总命令数: {commandQueue.TotalCommandCount}");
```

## CommandQueue基本操作

```
var entityId = world.CreateEntity().Id;
var commandQueue = world.GetCommandQueue();

// 如果需要重复使用同一commanQueue，需要使能重用开关
commandQueue.EnableReuse = true;

// === 实体操作 ===
var newEntityId = commandQueue.CreateEntity(); // 返回临时ID
commandQueue.DeleteEntity(entityId);

// === 组件操作 ===
commandQueue.AddComponent<Health>(entityId);
commandQueue.AddComponent(entityId, new Health(100));
commandQueue.RemoveComponent<Health>(entityId);

// === 标签操作 ===
commandQueue.AddTag<PlayerTag>(entityId);
commandQueue.AddTags(entityId, ITags.Get<PlayerTag, AliveTag>());
commandQueue.RemoveTag<DeadTag>(entityId);
commandQueue.RemoveTags(entityId, ITags.Get<PlayerTag, AliveTag>());

// === 层次操作 ===
commandQueue.AddChild(parentEntityId, childEntityId);
commandQueue.RemoveChild(parentEntityId, childEntityId);

// === 应用所有命令 ===
commandQueue.Apply(); // 执行所有排队的命令

// === 清空队列 ===
commandQueue.Clear(); // 清空队列而不执行
```

## System中使用CommandQueue

```
// System中内置了CommandQueue，在执行完OnUpdate后会自动执行Apply()方法，无需手动调用。
// 示例：战斗系统，处理死亡和伤害
public class CombatSystem : PgdSystem<Health, Damage>
{
    protected override void OnUpdate()
    {
        GetQuery().ForEachEntity((ref Health health, ref Damage damage, IEntity entity) => {
            // 应用伤害
            health.current -= damage.amount;
            // 清除伤害组件，每个PGDSystem都包含一个commandQueue，可以直接使用
            CommandQueue.RemoveComponent<Damage>(entity.Id);
            // 处理死亡
            if (health.current <= 0)
            {
                CommandQueue.AddTag<DeadTag>(entity.Id);
                CommandQueue.RemoveTag<AliveTag>(entity.Id);
                // 创建死亡特效实体
                var effectId = CommandQueue.CreateEntity();
                CommandQueue.AddComponent(effectId, entity.GetComponent<PgdPosition>());
                CommandQueue.AddComponent<DeathEffect>(effectId);
                // 如果是玩家，触发重生
                if (entity.HasTag<PlayerTag>())
                {
                    CommandQueue.AddComponent(entity.Id, new RespawnTimer(5.0f));
                }
                else
                {
                    // 敌人直接删除
                    CommandQueue.DeleteEntity(entity.Id);
                }
            }
        });
        // 所有查询完成后手动应用命令
        CommandQueue.Apply();
        // 如果不手动应用，每个PgdSystemCollection也会在更新完其包含的所有系统后自动调用Apply
    }
}
```

## CommandQueue最佳实践

```
public class OptimizedCommandQueueUsage
{
    public void BestPractices(IECSWorld world)
    {
        // 1. 重复使用commandQueue
        var healthQuery = world.Query<Health>();
        var damageQuery = world.Query<Damage>();

        var commandQueue = world.GetCommandQueue();

        // 2. 批量处理多个查询的命令
        healthQuery.ForEachEntity((ref Health health, IEntity entity) => {
            if (health.current <= 0)
            {
                commandQueue.AddTag<DeadTag>(entity.Id);
            }
        });

        damageQuery.ForEachEntity((ref Damage damage, IEntity entity) => {
            commandQueue.RemoveComponent<Damage>(entity.Id);
        });

        commandQueue.Apply();

        // 3. 避免不必要的Clear调用
        // commandQueue.Clear(); // 除非确实需要取消命令，否则不要调用
    }
}
```
