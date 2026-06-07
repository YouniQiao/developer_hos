---
title: "SharedComponent查询"
original_url: /docs/dev/game-dev/pgd-sharedcomponent-query-0000002530261177
format: md
---


查询SharedComponent需要创建专门的共享组件查询体，IQuery、QueryFilter等结构均有SharedComponent专用接口。

## 创建共享组件集合

```
// 创建共享组件类型集合，最多支持一次输入10个组件
var sharedComponentSet1 = IComponents.GetSharedSet<SharedComponent1, SharedComponent2>(); // 包含 SharedComponent1 和 SharedComponent2 的集合
```

## 创建共享组件查询

```
var world = new IECSWorld();
// 创建共享组件查询体
var query = world.QueryShared<SharedComponent1>();

// 共享组件查询创建接口也支持输入查询过滤器
var filter = new QueryFilter().WithoutAllComponents(IComponents.Get<PgdPosition>()).WithInactive();
// 创建共享组件查询体，并设置查询过滤器
var query = world.QueryShared<SharedComponent1>(filter);
```

## 设置共享组件过滤条件

```
var world = new IECSWorld();
// 创建一个Query，并设置共享组件过滤条件。任何查询体都可以设置共享组件过滤条件
var query = world.Query()
    .WithAllSharedComponents(IComponents.GetSharedSet<SharedComponent1>())
    .WithAnySharedComponents(IComponents.GetSharedSet<SharedComponent2>())
    .WithoutAllSharedComponents(IComponents.GetSharedSet<SharedComponent3>())
    .WithoutAnySharedComponents(IComponents.GetSharedSet<SharedComponent4>());

var queryShared = world.QueryShared<SharedComponent1>()
    .WithAllSharedComponents(IComponents.GetSharedSet<SharedComponent1>())
    .WithAnySharedComponents(IComponents.GetSharedSet<SharedComponent2>())
    .WithoutAllSharedComponents(IComponents.GetSharedSet<SharedComponent3>())
    .WithoutAnySharedComponents(IComponents.GetSharedSet<SharedComponent4>());

// 可以通过IQuery.IsSharedQuery字段判断这个查询体是否是共享组件查询体
queryShared.IsSharedQuery;

// 创建查询过滤器，并设置共享组件过滤条件。过滤条件记录在对应的Condition字段中。
var filter = new QueryFilter()
    .WithAllSharedComponents(IComponents.GetSharedSet<SharedComponent1>())
    .WithAnySharedComponents(IComponents.GetSharedSet<SharedComponent2>())
    .WithoutAllSharedComponents(IComponents.GetSharedSet<SharedComponent3>())
    .WithoutAnySharedComponents(IComponents.GetSharedSet<SharedComponent4>());
```

## 共享组件查询迭代

当前共享组件查询体（通过world.QueryShared创建）对各查询迭代接口支持情况：

| 迭代接口 | 支持情况 |
| --- | --- |
| IQuery.Entities | 完全支持。 |
| IQuery.ForEachEntity | 完全支持。  迭代提供共享组件值引用，可直接修改。 |
| IQuery.ArchetypeChunk | 支持。  需要注意在循环遍历Segment中的组件值时，共享组件只有一个元素，只能使用索引0，不能大于0，实体索引正常使用循环值即可。 |
| IQuery.ParallelForEach | 不支持 |

```
var world = new IECSWorld();
// 创建共享组件查询体
var query = world.QueryShared<SharedComponent1>();

foreach (var entity in query.Entities)
{
    /* 遍历拥有SharedComponent1的实体 */
}

query.ForEachEntity((ref SharedComponent1 shared, IEntity entity) => {
    /* 遍历拥有SharedComponent1的实体，并且可以通过共享组件引用直接访问和修改组件值 */
});

foreach (var (sharedComponent1Segment, entities) in query.ArchetypeChunk)
{
    // 不能用sharedComponent1Segment.Length进行for循环
    for (int i = 0; i < entities.Length; i++)
    {
        // sharedComponent1Segment只能使用索引0，不能大于0
        sharedComponent1Segment[0].value++;
        // 实体索引正常使用i
        Console.WriteLine($"实体 {entities[i]}");
    }
}
```
