---
title: "系统管理"
original_url: /docs/dev/game-dev/pgd-system-management-0000002483641957
format: md
upstream_id: dev/game-dev/pgd-system-management-0000002483641957
last_sync: 2026-06-07
sync_hash: fe5cdae5
---
## 添加系统

```
// 创建自定义系统
public class MovementSystem : PgdSystem<PgdPosition, Velocity>
{
    IECSWorld world;
    protected override void OnAddWorld(IECSWorld world) // 通过OnAddWorld可以获取world上下文环境，缓存到System中以便调用World方法
    {
        this.world = world;
    }

    protected override void OnUpdate()
    {
        GetQuery().ForEachEntity((ref PgdPosition position, ref Velocity velocity, IEntity entity) => {
            position.vec3 += velocity.value * Tick.DeltaTime;
        });
    }
}

public class HealthSystem : PgdSystem<Health>
{
    IECSWorld world;
    protected override void OnAddWorld(IECSWorld world) // 通过OnAddWorld可以获取world上下文环境，缓存到System中以便调用World方法
    {
        this.world = world;
    }

    protected override void OnUpdate()
    {
        GetQuery().ForEachEntity((ref Health health, IEntity entity) => {
            if (health.current <= 0)
            {
                // 收集死亡实体，避免在查询中修改结构
                // 可以使用CommandBuffer处理延迟操作
            }
        });
    }
}

// 添加系统到管理器
world.RegisterSystem(new MovementSystem());
world.RegisterSystem(new HealthSystem());
world.RegisterSystem(new AISystem());
```

## 系统更新循环

```
using UnityEngine;
using Pgd;

class PgdManager : MonoBehaviour
{
    IECSWorld world;
    UpdateTick tick;

    /* 其他逻辑 */

    void Update()
    {
        // 将引擎记录的游戏时间相关信息更新至UpdateTick中，并通过world.Update传入ECS框架中
        tick.DeltaTime = Time.deltaTime;
        tick.Time = Time.time;
        world.Update(tick);
    }
}
```
