---
title: "AgentExtensionContext (智能体扩展组件上下文)"
upstream_id: "harmonyos-references/js-apis-inner-application-agentextensioncontext"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:46:52.561268"
---

# AgentExtensionContext (智能体扩展组件上下文)

AgentExtensionContext模块是[AgentExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-agent-agentextensionability)的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。

AgentExtensionContext为开发者提供访问当前[AgentExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-agent-agentextensionability)智能体所配置的[AgentCard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-agentcard)信息的能力。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 24开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。
- 在本文档的示例中，通过this.context来获取AgentExtensionContext，其中this代表继承自AgentExtensionAbility的实例。

#### 导入模块

```
import { common } from '@kit.AbilityKit';
```

#### AgentExtensionContext

#### [h2]属性

元服务API： 从API version 24开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Ability.AgentRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| agentCard | [AgentCard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-agentcard) | 否 | 否 | 当前[AgentExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-agent-agentextensionability)所配置的[AgentCard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-agentcard#agentcard-1)信息。 |

示例：

```
import { AgentExtensionAbility, common } from '@kit.AbilityKit';

export default class AgentExtension extends AgentExtensionAbility {
  onCreate(): void {
    let tmpContext: common.AgentExtensionContext = this.context; // 获取AgentExtensionContext
    console.info(`agentCard info data: ${JSON.stringify(tmpContext.agentCard)}.`);
  }
}
```
