---
title: "wearEngineLite（穿戴设备能力开放）（Lite）"
upstream_id: "harmonyos-references/wearenginelite_api"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:43.865947"
---

# wearEngineLite（穿戴设备能力开放）（Lite）

本模块提供穿戴设备侧三方应用订阅手表和手机连接状态的能力。

起始版本：6.1.1(24)

#### 导入模块

```
import WearEngineLite from '@hms.health.WearEngineLite';
```

#### onConnectionStateChange

static onConnectionStateChange(callback: MonitorEventCallback): void

监听设备状态变化，使用callback异步回调。

模型约束： 此接口仅可在FA模型下使用。

系统能力： SystemCapability.Health.WearEngine.Lite

设备行为差异： 该接口在wearable、litewearable中可正常调用，在其他设备类型中无效果。

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [MonitorEventCallback](#monitoreventcallback) | 是 | 回调函数，返回设备状态的变化信息。 |

示例：

```
  let eventCallback = {
    // 事件变化回调（设备连接状态变化时触发）
    eventChange: (data) => {
      console.info(`设备连接状态事件：${data.event}， 设备连接状态变化：${data.data.data}`);
    },

    success: (code, data) => {
      console.info(`订阅成功， Code：${code.code}， data：${data.data}`);
    },

    fail: (error, errorMessage) => {
      console.error(`订阅失败， Code：${error.code}， data：${errorMessage.data}`);
    }
  };

  WearEngineLite.onConnectionStateChange(eventCallback);
```

#### offConnectionStateChange

static offConnectionStateChange(callback?: MonitorEventCallback): void

取消监听设备状态变化，使用callback异步回调。

模型约束： 此接口仅可在FA模型下使用。

系统能力： SystemCapability.Health.WearEngine.Lite

设备行为差异： 该接口在wearable、litewearable中可正常调用，在其他设备类型中无效果。

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | [MonitorEventCallback](#monitoreventcallback) | 否 | 回调函数。返回success表示取消订阅成功，返回fail表示取消订阅失败。 |

示例：

```
  let eventCallback = {
    success: (code, data) => {
      console.info(`取消订阅成功， code：${code.code}， data：${data.data}`);
    },

    fail: (error, errorMessage) => {
      console.error(`取消订阅失败， code:${error.code}， data:${errorMessage.data}`);
    }
  };

  WearEngineLite.offConnectionStateChange(eventCallback);
```

#### MonitorEventCallback

作为[onConnectionStateChange](#onconnectionstatechange)接口的入参，当订阅监听的事件触发时，将变化后的设备状态信息传递给回调函数；作为[offConnectionStateChange](#offconnectionstatechange)接口的入参，用于取消监听设备连接状态的变化。

#### [h2]eventChange

eventChange(data: MonitorEventData): void

监听设备状态变化的事件。

模型约束： 此接口仅可在FA模型下使用。

系统能力： SystemCapability.Health.WearEngine.Lite

设备行为差异： 该接口在wearable、litewearable中可正常调用，在其他设备类型中无效果。

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | [MonitorEventData](#monitoreventdata) | 是 | 变化后的设备状态信息。 |

示例：

```
  let eventCallback = {
    // 事件变化回调（设备连接状态变化时触发）
    eventChange: (data) => {
      console.info(`设备连接状态事件：${data.event}， 设备连接状态变化：${data.data.data}`);
    }
  };

  WearEngineLite.onConnectionStateChange(eventCallback);
```

#### [h2]success

success(code: number, data?: string): void

表示订阅成功或者是取消订阅成功。

模型约束： 此接口仅可在FA模型下使用。

系统能力： SystemCapability.Health.WearEngine.Lite

设备行为差异： 该接口在wearable、litewearable中可正常调用，在其他设备类型中无效果。

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | 返回0。 |
| data | string | 否 | 返回success。 |

示例：

```
  let eventCallback = {
    success: (code, data) => {
      console.info(`订阅成功， Code：${code.code}， data：${data.data}`);
    }
  };

  WearEngineLite.onConnectionStateChange(eventCallback);
```

#### [h2]fail

fail(code: number, data?: string): void

表示订阅失败或者是取消订阅失败。

模型约束： 此接口仅可在FA模型下使用。

系统能力： SystemCapability.Health.WearEngine.Lite

设备行为差异： 该接口在wearable、litewearable中可正常调用，在其他设备类型中无效果。

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | 返回401错误码。 |
| data | string | 否 | 返回fail。 |

示例：

```
  let eventCallback = {
    fail: (error, errorMessage) => {
      console.error(`订阅失败， Code：${error.code}， data：${errorMessage.data}`);
    }
  };

  WearEngineLite.onConnectionStateChange(eventCallback);
```

#### MonitorData

设备的状态信息。

模型约束： 此接口仅可在FA模型下使用。

系统能力： SystemCapability.Health.WearEngine.Lite

起始版本： 6.1.1(24)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| code | number | 否 | 否 | 扩展字段。 |
| data | string | 否 | 是 | 设备的连接状态，2表示连接成功，3表示连接断开。 |

#### MonitorEventData

作为[eventChange](#eventchange)的参数，当订阅监听的事件触发时，将设备状态的变化信息传递给回调函数。

模型约束： 此接口仅可在FA模型下使用。

系统能力： SystemCapability.Health.WearEngine.Lite

起始版本： 6.1.1(24)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| event | string | 否 | 否 | 回调函数上报的监听事件。 |
| data | [MonitorData](#monitordata) | 否 | 否 | 变化后的设备状态信息。 |
