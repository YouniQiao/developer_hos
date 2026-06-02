---
title: "SharedComponent基础操作"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/pgd-sharedcomponent-foundation-0000002530101211
---

共享组件的增、删、改、判断操作。

```
var world = new IECSWorld();
var entity = world.CreateEntity();
// 添加共享组件，仅支持添加1个共享组件，不输入组件值则为默认值。
entity.AddComponent(new SharedComponent1()); // 此时共享组件值为默认值0
// 重复添加相同共享组件，返回false，但是新组件值会覆盖旧组件值
entity.AddComponent(new SharedComponent1{value = 1}); // 此时共享组件值为1

// 移除共享组件，仅支持移除1个共享组件。
entity.RemoveComponent<SharedComponent1>();
// 移除实体没有的共享组件，返回false
entity.RemoveComponent<SharedComponent1>();

entity.AddComponent(new SharedComponent1()); // 此时共享组件值为默认值0
// 设置共享组件，仅支持设置1个共享组件。
entity.SetSharedComponent(new SharedComponent1{value = 1}); // 此时共享组件值为1
// 设置实体没有的共享组件，返回false
entity.SetSharedComponent(new SharedComponent2{value = 1}); // 无效操作

// 判断实体是否有共享组件
entity.HasComponent<SharedComponent1>();
```
