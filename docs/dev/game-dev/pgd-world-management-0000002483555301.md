---
title: "管理实体"
original_url: /docs/dev/game-dev/pgd-world-management-0000002483555301
format: md
---


## 创建实体

```
// 1. 创建空实体
var entity1 = world.CreateEntity();

// 2. 创建具有指定ID的实体（确保指定ID未被自动分配，否则会抛出异常）
var entity2 = world.CreateEntity(42);

// 3. 创建带组件的实体
var entity3 = world.CreateEntity(
    new PgdPosition(10, 20, 30),
    new Velocity { value = Vector3.One }
);

// 4. 创建带组件和标签的实体
var entity4 = world.CreateEntity(
    new PgdPosition(1, 2, 3),
    new Name("Player"),
    ITags.Get<PlayerTag, AITag>()
);
```

## 获取实体

```
// 1. 通过ID获取实体
var entity = world.GetEntityById(1);

// 2. 安全获取实体（不会抛出异常）
if (world.TryGetEntityById(1, out var safeEntity))
{
    Console.WriteLine($"找到实体: {safeEntity}");
}
else
{
    Console.WriteLine("实体不存在");
}

// 3. 获取所有实体
foreach (var entity in world.Entities)
{
    Console.WriteLine($"实体: {entity}");
}
```

## 删除实体

```
var entity = world.CreateEntity();

// 删除实体
entity.DeleteEntity();

// 检查实体是否已删除
bool isDeleted = entity.IsDeleted();
Console.WriteLine($"实体已删除: {isDeleted}");
```

## 激活/禁用实体

```
var entity = world.CreateEntity();

// 禁用实体
entity.Active = false;
Console.WriteLine(entity); // 输出: id: 1 [#Disabled]

// 默认查询不包含非激活实体
var activeQuery = world.Query();
Console.WriteLine($"激活的实体: {activeQuery.Entities.Count}"); // 0

// 查询包含非激活实体
var allQuery = world.Query().WithInactive();
Console.WriteLine($"所有实体: {allQuery.Entities.Count}"); // 1

// 重新激活实体
entity.Active = true;
```

## 克隆实体

若实体组件中包含引用类型，需要手动实现CopyMethod方法进行深拷贝。详情请参见[包含引用类型组件的实体克隆问题](/docs/dev/game-dev/pgd-tag-faq-0000002450393372#section14464758165613)。

```
var original = world.CreateEntity(
    new PgdPosition(1, 2, 3),
    ITags.Get<PlayerTag>()
);

// 克隆实体（包含所有组件和标签）
var clone = original.CloneEntity();
Console.WriteLine($"原实体: {original}");
Console.WriteLine($"克隆实体: {clone}");
```
