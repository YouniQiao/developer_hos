---
title: "@Component：自定义组件"
upstream_id: "harmonyos-references/ts-custom-component-decorator-component"
catalog: "harmonyos-references"
content_hash: "5bd688596fde"
synced_at: "2026-07-28T16:47:55.412977"
---

# @Component：自定义组件

@Component装饰器能装饰struct关键字声明的结构体。struct被@Component装饰后具备组件化的能力，可实现UI的封装与复用，适用于构建可复用的自定义组件、拆分复杂界面等场景。使用时需要实现build方法描述UI，一个struct只能被一个@Component装饰。

开发指南参考：[创建自定义组件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components)。

![](./img/note_3.0-zh-cn.png)

- 本装饰器首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 从API version 11开始，@Component可以接受一个可选的[ComponentOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-parameter#componentoptions)类型参数。
- 从API版本26.0.0开始，ComponentOptions中可以接受可选参数reusePool和poolAccepts，用于配置全局复用池，开发指南参考：[全局复用：集中化的组件回收与复用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-global-reuse-pool)。

#### @Component

const Component: ClassDecorator & ((options: ComponentOptions) => ClassDecorator)

卡片能力： 从API version 9开始，该接口支持在ArkTS卡片中使用。

元服务API： 从API version 11开始，该接口支持在元服务中使用。

系统能力： SystemCapability.ArkUI.ArkUI.Full

参数：

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options11+ | [ComponentOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-parameter#componentoptions) | 否 | @Component装饰器选项，用于配置组件冻结和全局复用。可通过freezeWhenInactive控制组件冻结（适用于页面路由、TabContent、LazyForEach、Navigation等组件非激活时冻结UI刷新以减少不必要刷新、优化性能的场景），通过reusePool和poolAccepts配置全局复用池（适用于多个父组件共用同类可复用组件、通过if等切换时需跨父组件复用已回收实例的场景），具体属性详见ComponentOptions。缺省时关闭组件冻结和全局复用功能。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| ClassDecorator | 类装饰器，开发者无需关注该返回值。 |

示例：

```
@Entry
@Component({ freezeWhenInactive: true }) // 开启组件冻结功能
struct MyComponent {
  build() {
    Column() {
      Text('Hello World!')
    }
  }
}
```
