---
title: "cdsm（星闪合作设备集合能力）"
upstream_id: "harmonyos-references/nearlink-cdsm"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:50.444998"
---

# cdsm（星闪合作设备集合能力）

本模块提供了查询星闪合作设备集合信息的功能。

起始版本： 6.1.1(24)

#### 导入模块

```
import { cdsm } from '@kit.NearLinkKit';
```

#### createCdsmClient

createCdsmClient(address: string): CdsmClient

创建cdsm客户端实例。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| address | string | 是 | 已配对连接的合作设备集合的成员设备地址。地址格式参考：11:22:33:AA:BB:FF。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [CdsmClient](#cdsmclient) | cdsm客户端实例。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because the chip does not support it. |
| 1009700003 | Nearlink is off. |
| 1009700050 | Coordinated Devices Set Management not supported. |
| 1009700099 | Operation failed. |

示例：

```
import { cdsm } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 已配对连接的合作设备集合的成员设备地址
let client: cdsm.CdsmClient;
try {
  client = cdsm.createCdsmClient(addr);
  console.info('client: ' + JSON.stringify(client));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### CdsmClient

提供获取远端设备的合作设备集合信息的方法，使用前需要使用cdsm.createCdsmClient方法创建一个CdsmClient实例。

一个应用针对一个远端设备只需要创建一次实例。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 6.1.1(24)

#### [h2]getCdsmInfo

getCdsmInfo(): CdsmInfo

查询远端设备的合作设备集合信息。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 6.1.1(24)

返回值：

| 类型 | 说明 |
| --- | --- |
| [CdsmInfo](#cdsminfo) | 远端设备的合作设备集合信息。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 1009700003 | Nearlink is off. |
| 1009700099 | Operation failed. |

示例：

```
import { cdsm } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let addr: string = '00:11:22:33:AA:FF'; // 已配对连接的合作设备集合的成员设备地址
let client: cdsm.CdsmClient;
try {
  client = cdsm.createCdsmClient(addr); // 一个应用针对一个远端设备只需要创建一次实例
let cdsmInformation: cdsm.CdsmInfo = client.getCdsmInfo();
  console.info('cdsmInformation:' + JSON.stringify(cdsmInformation));
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### [h2]onCdsmInfoChange

onCdsmInfoChange(callback: Callback<CdsmInfo>): void

订阅远端设备合作设备集合信息变化事件。使用callback异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 事件回调类型，返回远端设备合作设备集合信息。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

示例：

```
import { cdsm } from '@kit.NearLinkKit';
import { BusinessError, Callback } from '@kit.BasicServicesKit';

let callback: Callback<cdsm.CdsmInfo> = (data: cdsm.CdsmInfo) => {
  console.info('CdsmInfo:' + JSON.stringify(data));
};

let addr: string = '00:11:22:33:AA:FF'; // 已配对连接的合作设备集合的成员设备地址
let client: cdsm.CdsmClient;
try {
  client = cdsm.createCdsmClient(addr); // 一个应用针对一个远端设备只需要创建一次实例
  client.onCdsmInfoChange(callback);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### [h2]offCdsmInfoChange

offCdsmInfoChange(callback?: Callback<CdsmInfo>): void

取消订阅远端设备合作设备集合信息变化事件。使用callback异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.ACCESS_NEARLINK

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 6.1.1(24)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback | 否 | 事件回调类型，返回远端设备合作设备集合信息。 填写该参数则取消当前callback订阅。不填写该参数则取消远端设备合作设备集合信息变化事件对应的所有回调。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-nearlink)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

示例：

```
import { cdsm } from '@kit.NearLinkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Callback } from '@kit.BasicServicesKit';

let callback: Callback<cdsm.CdsmInfo> = (data: cdsm.CdsmInfo) => {
  console.info('CdsmInfo:' + JSON.stringify(data));
};

let addr: string = '00:11:22:33:AA:FF'; // 已配对连接的合作设备集合的成员设备地址
let client: cdsm.CdsmClient;
try {
  client = cdsm.createCdsmClient(addr); // 一个应用针对一个远端设备只需要创建一次实例
  client.onCdsmInfoChange(callback);
  client.offCdsmInfoChange(callback);
} catch (err) {
  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```

#### CdsmInfo

表示合作设备集合信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 6.1.1(24)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| members | Array | 否 | 否 | 合作设备集合信息。 |

#### CdsmMemberInfo

表示合作设备集合的成员信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 6.1.1(24)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| address | string | 否 | 否 | 成员设备地址。 |
| state | [CdsmConnectionState](#cdsmconnectionstate) | 否 | 否 | 成员设备连接状态。 |

#### CdsmConnectionState

表示和远端设备的合作设备集合连接状态，为枚举值。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Communication.NearLink.Core

起始版本： 6.1.1(24)

| 名称 | 值 | 说明 |
| --- | --- | --- |
| DISCONNECTED | 0 | 表示已断连。 |
| CONNECTED | 1 | 表示已连接。 |
