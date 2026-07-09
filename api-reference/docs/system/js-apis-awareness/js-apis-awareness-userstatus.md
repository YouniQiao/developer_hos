---
title: "@ohos.multimodalAwareness.userStatus (用户状态感知)"
upstream_id: "harmonyos-references/js-apis-awareness-userstatus"
catalog: "harmonyos-references"
content_hash: "6c8fed878fce"
synced_at: "2026-07-09T00:59:58.288854"
---

# @ohos.multimodalAwareness.userStatus (用户状态感知)

本模块提供用户状态感知能力，包括年龄群组检测等功能。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 20开始支持。从API version 24开始废弃，无替代接口。

#### 导入模块

```
import { userStatus } from '@kit.MultimodalAwarenessKit';
```

#### UserAgeGroup(deprecated)

表示用户具体的年龄分类群组，例如，儿童或成年人。

系统能力：SystemCapability.MultimodalAwareness.UserStatus

| 名称 | 值 | 说明 |
| --- | --- | --- |
| OTHERS | 0 | 表示是成年人操作。 |
| CHILD | 1 | 表示是儿童操作。 |

#### UserClassification(deprecated)

表示用户年龄群组分类检测结果。

系统能力：SystemCapability.MultimodalAwareness.UserStatus

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| ageGroup | [UserAgeGroup](#useragegroupdeprecated) | 否 | 是 | 表示具体的年龄群组（例如，儿童、成人）。 |
| confidence | float | 否 | 是 | 表示年龄群组检测结果的置信度，取值范围[0,1]的浮点数，数值越大代表置信度越高。 |

#### userStatus.on('userAgeGroupDetected')(deprecated)

on(type: 'userAgeGroupDetected', callback: Callback<UserClassification>): void

订阅年龄群组检测功能。

订阅成功后，可以获取用户年龄群组的分类结果，应用可根据此结果做相应的内容推荐。

系统能力：SystemCapability.MultimodalAwareness.UserStatus

设备行为差异：该接口在Phone中可正常调用，在其他设备类型中返回801错误码。

![](./img/note_3.0-zh-cn.png) 该接口仅在部分Phone中支持使用，当Phone设备不支持时返回801错误码。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件类型。type为“userAgeGroupDetected”，表示年龄群组检测功能。 |
| callback | Callback | 是 | 回调函数，返回检测结果。 |

错误码：

以下错误码的详细介绍请参见[用户状态感知错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-userstatus)和[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function can not work correctly due to limited device capabilities. |
| 33900001 | Service exception. Possible causes: 1. System error, such as a null pointer and container-related exception. 2. Node-API invocation exception, such as invalid Node-API status. |
| 33900002 | Subscription failed. Possible causes: 1. Callback registration failed. 2. Failed to bind the native object to the JS wrapper. 3. Node-API invocation exception, such as invalid Node-API status. 4. IPC request exception. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
    userStatus.on('userAgeGroupDetected', (data: userStatus.UserClassification) => {
        console.info('callback succeeded, ageGroup:' + data.ageGroup + ", confidence:" + data.confidence);
    });
    console.info("on succeeded");
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed on and err code is " + error.code);
}
```

#### userStatus.off('userAgeGroupDetected')(deprecated)

off(type: 'userAgeGroupDetected', callback?: Callback<UserClassification>): void

取消订阅年龄群组检测功能。

系统能力：SystemCapability.MultimodalAwareness.UserStatus

设备行为差异：该接口在Phone中可正常调用，在其他设备类型中返回33900003错误码。

![](./img/note_3.0-zh-cn.png) 该接口仅在部分Phone中支持使用，当Phone设备不支持时返回33900003错误码。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 事件类型。type为“userAgeGroupDetected”，表示年龄群组检测功能。 |
| callback | Callback | 否 | 回调函数，返回检测结果。需要取消监听的回调函数，需与订阅时传入的回调函数一致。若不填，则取消当前监听该事件的所有回调函数。 |

错误码：

以下错误码的详细介绍请参见[用户状态感知错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-userstatus)和[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function can not work correctly due to limited device capabilities. |
| 33900001 | Service exception. Possible causes: 1. System error, such as a null pointer and container-related exception. 2. Node-API invocation exception, such as invalid Node-API status. |
| 33900003 | Unsubscription failed. Possible causes: 1. Callback failure. 2. Node-API invocation exception, such as invalid Node-API status. 3. IPC request exception. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
    userStatus.off('userAgeGroupDetected');
    console.info("off succeeded");
} catch (err) {
    let error = err as BusinessError;
    console.error("Failed off and err code is " + error.code);
}
```
