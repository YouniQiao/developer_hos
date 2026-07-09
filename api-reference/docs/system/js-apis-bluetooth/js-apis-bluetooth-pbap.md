---
title: "@ohos.bluetooth.pbap (蓝牙pbap模块)"
upstream_id: "harmonyos-references/js-apis-bluetooth-pbap"
catalog: "harmonyos-references"
content_hash: "4690d4008f7a"
synced_at: "2026-07-09T00:59:23.269993"
---

# @ohos.bluetooth.pbap (蓝牙pbap模块)

本模块提供基于电话簿访问协议（Phone Book Access Profile，[PBAP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/terminology#pbap)）的蓝牙电话簿访问能力，支持获取连接状态等方法。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { pbap } from '@kit.ConnectivityKit';
```

#### BaseProfile

type BaseProfile = baseProfile.BaseProfile

基础Profile接口定义，提供订阅和获取连接状态等公共能力。

系统能力：SystemCapability.Communication.Bluetooth.Core。

| 类型 | 说明 |
| --- | --- |
| [baseProfile.BaseProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-baseprofile#baseprofile) | 基础Profile接口定义。 |

#### pbap.createPbapServerProfile

createPbapServerProfile(): PbapServerProfile

创建蓝牙电话簿访问协议中的[PSE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/terminology#pse)实例。通过该实例可使用本端作为PSE设备的接口，如：获取和其他设备间的蓝牙电话簿服务连接状态。

系统能力：SystemCapability.Communication.Bluetooth.Core。

返回值：

| 类型 | 说明 |
| --- | --- |
| PbapServerProfile | 返回PSE实例。 - 该类继承于[BaseProfile](#baseprofile)，因此可以使用其父类中的方法。 - 和该实例角色相对应的是[PCE](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/terminology#pce)角色。 |

错误码：

以下错误码的详细介绍请参见[蓝牙服务子系统错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-bluetoothmanager)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let pbapServerProfile = pbap.createPbapServerProfile();
    console.info('pbapServer success');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}
```
