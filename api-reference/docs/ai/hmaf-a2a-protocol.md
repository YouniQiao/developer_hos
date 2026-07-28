---
title: "A2A (A2A协议)"
upstream_id: "harmonyos-references/hmaf-a2a-protocol"
catalog: "harmonyos-references"
content_hash: "d01d22efc77e"
synced_at: "2026-07-28T16:53:08.338588"
---

# A2A (A2A协议)

本模块提供A2A（Agent to Agent）协议的服务端实现能力，包括创建A2A Server实例、处理客户端请求、管理任务状态和Artifact（智能体执行任务的产物）等。

A2A协议用于智能体之间的通信，A2A Server端负责接收客户端请求、触发智能体执行任务、更新任务状态和返回执行结果。

起始版本： 26.0.0

#### 导入模块

```
import { Role, TaskState, Part, Message, Artifact, TaskStatus, Task, OnDataCallback, createA2AServer, ProxySender,
    Server, AgentOperation, RequestContext, TaskArtifactParam } from '@kit.AgentFrameworkKit';
```

#### createA2AServer

createA2AServer(agentCard: common.AgentCard, onData: OnDataCallback, want?: Want): Server

创建并获取Server实例，用于处理A2A协议通信。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| agentCard | [common.AgentCard](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-common#agentcard) | 是 | AgentCard信息。 |
| onData | [OnDataCallback](#ondatacallback) | 是 | 智能体数据处理回调函数。 |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 否 | 包含A2A版本信息的Want对象。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [Server](#server) | 创建的A2A Server实例。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-agent-framework)。

| 错误码ID | 错误信息 |
| --- | --- |
| 1022400010 | Invalid parameter |
| 1022420001 | Memory allocation failed |

示例：

```
import { Want, AgentExtensionAbility } from '@kit.AbilityKit';
import { createA2AServer, Server, RequestContext, AgentOperation, OnDataCallback } from '@kit.AgentFrameworkKit';

export default class MyAgentExtensionAbility extends AgentExtensionAbility {
  private server: Server | null = null;

  private agentOnData: OnDataCallback = (method: AgentOperation, context: RequestContext) => {
    // Agent的业务处理定义
  }

  async onCreate(want: Want) {
    try {
      const card = this.context.agentCard;
      this.server = createA2AServer(card, this.agentOnData, want=want);
    } catch (error) {
      console.error(`Failed to create server: ${error}`);
    }
  }
}
```

#### OnDataCallback

type OnDataCallback = (method: AgentOperation, context: RequestContext) => void

A2A Server收到客户端请求后，触发智能体执行的事件回调函数。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| method | [AgentOperation](#agentoperation) | 是 | 智能体操作类型。 |
| context | [RequestContext](#requestcontext) | 是 | 请求上下文对象。 |

#### ProxySender

type ProxySender = (data: string) => void

回调函数类型，通过代理将A2A响应数据发送给客户端。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | string | 是 | 发送给客户端的数据。 |

#### Server

服务器实例接口，负责处理智能体通信和任务生命周期管理。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

#### [h2]start

start(): void

启动A2A服务端实例。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

示例：

```
// server对象通过createA2AServer接口创建
server.start();
```

#### [h2]stop

stop(): void

停止服务器实例。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

示例：

```
// server对象通过createA2AServer接口创建
server.stop();
```

#### [h2]onMessage

onMessage(data: string, sender: ProxySender): void

A2A服务端处理来自A2A客户端的消息请求，并将响应发送回客户端。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | string | 是 | 客户端请求的JSON字符串。 |
| sender | [ProxySender](#proxysender) | 是 | 响应回调函数，用于发送响应给客户端。 |

示例：

```
// server对象通过createA2AServer接口创建
// proxy提供外部定义的消息发送接口
server.onMessage(data, (response: string) => {
  proxy.sendData(response);
});
```

#### [h2]onAuth

onAuth(data: string): string

A2A服务端处理来自A2A客户端的密钥协商请求。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | string | 是 | 客户端的密钥协商请求，包含客户端公钥信息。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 密钥协商信息，包含服务端公钥。 |

#### [h2]updateStatus

updateStatus(taskId: string, status: TaskStatus): void

更新任务状态。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 是 | 任务唯一标识，必须为UUID格式，格式为xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx。 |
| status | [TaskStatus](#taskstatus) | 是 | 新的任务状态。 |

示例：

```
server.updateStatus(taskId, {
  state: TaskState.COMPLETED,
  message: {
    messageId: 'msg1',
    role: Role.AGENT,
    parts: [{
      text: 'Task completed'
    }]
  }
});
```

#### [h2]addArtifact

addArtifact(taskId: string, taskArtifactParam: TaskArtifactParam): void

添加任务智能体产物信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| taskId | string | 是 | 任务唯一标识。 |
| taskArtifactParam | [TaskArtifactParam](#taskartifactparam) | 是 | 产物更新参数。 |

#### RequestContext

提供传入请求的上下文信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

#### [h2]getAgentId

getAgentId(): string | undefined

获取智能体ID。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| string | undefined | 智能体ID，若不存在则返回undefined。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const agentId: string = context.getAgentId() ?? "";
```

#### [h2]getClientSessionId

getClientSessionId(): string | undefined

获取客户端会话ID。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| string | undefined | 客户端会话ID，若不存在则返回undefined。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const clientSessionId: string = context.getClientSessionId() ?? "";
```

#### [h2]getUserInput

getUserInput(delimiter?: string): string

获取用户输入内容。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| delimiter | string | 否 | 分隔符，用于分隔多条用户输入。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 用户输入的内容。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const userInput: string = context.getUserInput(",");
```

#### [h2]getMessage

getMessage(): Message | undefined

获取A2A客户端请求中的消息体对象。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| [Message](#message) | undefined | 消息对象，若不存在则返回undefined。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const message: Message = context.getMessage();
```

#### [h2]getRelatedTasks

getRelatedTasks(): Task[]

获取关联任务列表。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| [Task](#task)[] | 关联任务数组。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const relatedTasks: Task[] = context.getRelatedTasks();
```

#### [h2]getCurrentTask

getCurrentTask(): Task | undefined

获取当前任务。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| [Task](#task) | undefined | 当前任务对象，若不存在则返回undefined。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const currentTask: Task = context.getRelatedTasks();
```

#### [h2]getTaskId

getTaskId(): string | undefined

获取任务ID。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| string | undefined | 任务ID，若不存在则返回undefined。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const taskId: string = context.getTaskId() ?? "";
```

#### [h2]getContextId

getContextId(): string | undefined

获取上下文ID。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| string | undefined | 上下文ID，若不存在则返回undefined。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const contextId: string = context.getContextId() ?? "";
```

#### [h2]getMetadata

getMetadata(): object

获取客户端请求的元数据，用于附带额外的请求信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| object | 元数据。 |

示例：

```
// context对象在实现OnDataCallback接口时，作为参数获取
const metadata: object = context.getMetadata();
```

#### TaskArtifactParam

任务产物更新参数接口。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| parts | [Part](#part)[] | 否 | 否 | 产物内容部件数组。 |
| artifactId | string | 否 | 是 | 产物唯一标识。 |
| name | string | 否 | 是 | 产物名称。 |
| metadata | object | 否 | 是 | 产物元数据，需要支持JSON序列化。 |
| append | boolean | 否 | 是 | 是否在任务历史记录中将当前的parts数组追加到有相同ID的产物中。true: 追加到现有的相同ID的产物，false: 在产物列表中新增一项。默认值：false。 |
| lastChunk | boolean | 否 | 是 | 是否为最后一个数据块。true: 是最后一个数据块，false: 不是最后一个数据块。默认值：false。 |
| extensions | string[] | 否 | 是 | 扩展URI列表。 |

#### AgentOperation

智能体操作枚举类型。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| EXECUTE | 0 | 执行操作，收到客户端消息时触发。 |
| CANCEL | 1 | 取消操作，收到取消任务请求时触发。 |
| CLEAR_CONTEXT | 2 | 清除上下文操作。 |
| PERCEPTION_SUGGEST | 3 | 小艺OnApp Chips推荐操作。 |

#### TaskState

任务状态枚举。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SUBMITTED | 0 | 任务已提交。 |
| WORKING | 1 | 任务正在处理中。 |
| INPUT_REQUIRED | 2 | 任务需要用户输入才能继续。 |
| COMPLETED | 3 | 任务已成功完成。 |
| CANCELED | 4 | 任务已取消。 |
| FAILED | 5 | 任务已失败。 |
| REJECTED | 6 | 任务已拒绝。 |
| AUTH_REQUIRED | 7 | 任务需要认证才能继续。 |
| UNSPECIFIED | 8 | 任务状态未指定。 |

#### Role

消息发送者角色枚举。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| AGENT | 0 | 智能体角色。 |
| USER | 1 | 用户角色。 |
| UNSPECIFIED | 2 | 未指定角色。 |

#### Message

消息接口，表示A2A通信中的消息单元。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| messageId | string | 否 | 否 | 消息唯一标识，UUID格式。 |
| role | [Role](#role) | 否 | 否 | 消息发送者角色。 |
| parts | [Part](#part)[] | 否 | 否 | 消息内容部件数组。 |
| contextId | string | 否 | 是 | 上下文ID，UUID格式。 |
| extensions | string[] | 否 | 是 | 扩展URI列表。 |
| metadata | object | 否 | 是 | 元数据，需要支持JSON序列化。 |
| referenceTaskIds | string[] | 否 | 是 | 引用的任务ID列表。 |
| taskId | string | 否 | 是 | 任务ID，UUID格式。 |

#### Part

消息内容接口，支持文本、原始数据、URL、媒体等类型。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| text | string | 否 | 是 | 文本内容。 |
| raw | string | 否 | 是 | 原始数据内容。 |
| url | string | 否 | 是 | 指向文件内容的URL，必须符合标准URL规范，例如"file://"、"https://"、`http://"。 |
| data | object | string | number | boolean | 否 | 是 | 任意支持JSON序列化的对象、字符串、数字、布尔值。 |
| mediaType | string | 否 | 是 | Part内容的媒体类型（MIME类型），例如"text/plain"、"application/json"、"image/png"。 |
| filename | string | 否 | 是 | 文件名，例如"document.pdf"。 |
| metadata | object | 否 | 是 | 元数据，需要支持JSON序列化。 |

#### Task

任务接口，表示A2A任务，包含任务状态、产物和历史消息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| id | string | 否 | 否 | 任务唯一标识，UUID格式。 |
| contextId | string | 否 | 否 | 上下文ID，UUID格式。 |
| status | [TaskStatus](#taskstatus) | 否 | 否 | 任务状态。 |
| artifacts | [Artifact](#artifact)[] | 否 | 是 | 任务产物列表。 |
| history | [Message](#message)[] | 否 | 是 | 历史消息列表。 |
| metadata | object | 否 | 是 | 元数据，需要支持JSON序列化。 |

#### TaskStatus

任务状态接口，表示任务当前状态。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| state | [TaskState](#taskstate) | 否 | 否 | 任务状态。 |
| timestamp | string | 否 | 是 | 状态记录时间，ISO 8601格式时间戳。 |
| message | [Message](#message) | 否 | 是 | 状态更新附加的相关消息，默认为空。 |

#### Artifact

智能体产物接口，表示任务产生的资源。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.AI.Agent.AgentKit

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| artifactId | string | 否 | 否 | 智能体产物唯一标识，UUID格式。 |
| parts | [Part](#part)[] | 否 | 否 | 智能体产物内容部件数组，至少包含一个部件。 |
| description | string | 否 | 是 | 智能体产物的描述。 |
| extensions | string[] | 否 | 是 | 扩展URI列表。 |
| metadata | object | 否 | 是 | 元数据，需要支持JSON序列化。 |
| name | string | 否 | 是 | 智能体产物的名称。 |
