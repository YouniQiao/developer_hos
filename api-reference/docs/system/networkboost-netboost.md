---
title: "netBoost（网络加速）"
upstream_id: "harmonyos-references/networkboost-netboost"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:57.129178"
---

# netBoost（网络加速）

本模块提供应用场景描述接口，使系统能够结合应用上报的业务场景与实时网络状态，动态适配业务加速或低功耗传输策略，从而为用户提供高速、低时延的网络体验。

起始版本： 6.0.0(20)

#### 导入模块

```
import { netBoost } from '@kit.NetworkBoostKit';
```

#### netBoost.setSceneDesc

setSceneDesc(sceneDesc : SceneDesc): void

设置业务场景。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.INTERNET

元服务API： 从API version 26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 6.0.0(20)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sceneDesc | [SceneDesc](#scenedesc) | 是 | 要设置的业务场景信息。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-networkboost)和[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 1013600001 | Internal error. For example, the internal management state machine is abnormal, or the internal message queue processing is blocked. |
| 1013600002 | System service error. For example, IPC call processes fails, or the network management service failed to start. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { netBoost } from '@kit.NetworkBoostKit';
try {
  let sceneDesc : netBoost.SceneDesc = {
    scene : 'realtimeVoice',
    sceneEvent : netBoost.SceneEvent.SCENE_EVENT_ENTER
  }
  netBoost.setSceneDesc(sceneDesc);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### netBoost.setLowPowerMode

setLowPowerMode(isEnable : boolean): void

设置低功耗模式。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.INTERNET

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnable | boolean | 是 | 待设置的低功耗模式开关。 - true表示打开低功耗模式开关。 - false表示关闭低功耗模式开关，默认为false。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-networkboost)和[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 1013600001 | Internal error. For example, the internal management state machine is abnormal, or the internal message queue processing is blocked. |
| 1013600002 | System service error. For example, IPC call processes fails, or the network management service failed to start. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { netBoost } from '@kit.NetworkBoostKit';
try {
  let lowPower = true;
  netBoost.setLowPowerMode(lowPower);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### netBoost.setDataFlowDesc

setDataFlowDesc(dataFlowDesc : DataFlowDesc): void

设置数据流描述。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.INTERNET

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataFlowDesc | [dataFlowDesc](#dataflowdesc) | 是 | 待设置的数据流描述。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-networkboost)和[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 1013600001 | Internal error. For example, internal management state machine exceptions, internal message queue processing blockages, etc. |
| 1013600002 | System service error. For example, IPC cross-process call failure, network management service startup failure. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { netBoost } from '@kit.NetworkBoostKit';
try {
  let localAddr: netBoost.NetAddress = {
    address: "192.168.xx.xxx",  // 本端地址
    port: 1234,
  }
  let remoteAddr: netBoost.NetAddress = {
    address: "192.168.xx.xxx",  // 对端地址
    port: 443,
  }
  let dataFlowInfo: netBoost.DataFlowInfo = {
    protocol: netBoost.ProtocolType.PROTOCOL_TCP,
    local: localAddr,
    remote: remoteAddr
  }
  let expectedDescription: netBoost.ExpectedDescription = {
    uplinkBandwidth: 2000,
    downlinkBandwidth: 4000,
    latency: 100,
    priority: netBoost.PriorityLevel.PRIO_HIGH
  }
  let dataFlowDesc: netBoost.DataFlowDesc = {
    dataFlowInfo: dataFlowInfo,
    scene: 'videoConference',
    sceneEvent: netBoost.SceneEvent.SCENE_EVENT_ENTER,
    expectations: expectedDescription
  }
  netBoost.setDataFlowDesc(dataFlowDesc);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### SceneDesc

业务场景描述信息。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从API version 26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 6.0.0(20)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scene | [netQuality.ServiceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netquality#servicetype) | 是 | 表示业务场景类型。 |
| sceneEvent | [SceneEvent](#sceneevent) | 是 | 表示业务场景事件。 |
| startTime | number | 否 | 表示要经过多长时间进入到sceneEvent事件，单位为s。 - 0表示立即发生sceneEvent事件，默认为0。 - 大于0表示预测未来多长时间进入sceneEvent事件。 |
| duration | number | 否 | 预计持续的时长，单位为s。0表示持续时长未知，以SceneEvent的离开事件表示终止。 例如应用即将在10s后进入秒杀场景，预计持续20s，scene可以传入'seckillService'类型，sceneEvent填写SCENE_EVENT_ENTER，startTime可填写10，duration填写20。开发者可以依据实际的场景类型进行选填。 |

#### DataFlowDesc

数据流描述信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataFlowInfo | [SocketFd](#socketfd) | [DataFlowInfo](#dataflowinfo) | 是 | 数据流信息，可以唯一表示数据流的参数。 |
| scene | [netQuality.ServiceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netquality#servicetype) | 是 | 表示业务场景类型。 |
| sceneEvent | [SceneEvent](#sceneevent) | 是 | 表示业务场景事件。 |
| expectations | [ExpectedDescription](#expecteddescription) | 否 | 对指定数据流的期望。 |

#### DataFlowInfo

数据流信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| protocol | [ProtocolType](#protocoltype) | 是 | 协议类型。 |
| local | [NetAddress](#netaddress) | 是 | 本地网络地址和端口。 |
| remote | [NetAddress](#netaddress) | 是 | 远端网络地址和端口。 |

#### NetAddress

网络地址信息描述。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| address | string | 是 | IP地址。 |
| port | number | 是 | 端口号。 |

#### ExpectedDescription

数据流期望描述信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 26.0.0

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uplinkBandwidth | number | 否 | 预期上行带宽，单位为Kbps。 |
| downlinkBandwidth | number | 否 | 预期下行带宽，单位为Kbps。 |
| latency | number | 否 | 预期时延，单位为ms。 |
| objectSize | number | 否 | 请求或发送对象的大小。 |
| priority | [PriorityLevel](#prioritylevel) | 否 | 预期优先级。 |
| lowPowerMode | boolean | 否 | 需要低功耗传输。 - true：表示启用低功耗传输模式； - false：表示禁用低功耗传输模式，默认值为false。 当开发者主动配置lowPowerMode参数时，dataFlowInfo必须设置为socketFd类型。 当开发者未配置lowPowerMode参数时，dataFlowInfo不限制类型。 |

#### SocketFd

type SocketFd = number

Socket文件描述符。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 26.0.0

| 类型 | 说明 |
| --- | --- |
| number | Socket文件描述符。 |

#### SceneEvent

表示业务事件枚举。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从API version 26.0.0开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 6.0.0(20)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SCENE_EVENT_ENTER | 0 | 进入业务场景。 |
| SCENE_EVENT_UPDATE | 1 | 更新上一次的业务事件信息。 |
| SCENE_EVENT_LEAVE | 2 | 离开业务场景。 |

#### ProtocolType

网络协议类型枚举。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| PROTOCOL_UDP | 0 | UDP网络协议。 |
| PROTOCOL_TCP | 1 | TCP网络协议。 |

#### PriorityLevel

优先级枚举。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NetworkBoost.Core

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| PRIO_NORMAL | 0 | 普通优先级。 |
| PRIO_HIGH | 1 | 高优先级。 |
