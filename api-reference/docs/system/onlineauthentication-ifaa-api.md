---
title: "IFAA"
upstream_id: "harmonyos-references/onlineauthentication-ifaa-api"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:38.327293"
---

# IFAA

IFAA提供移动端免密身份认证能力，实现接入IIFAA（互联网可信认证联盟）的业务免密登录，免密支付等业务场景（注：IFAA在本文中指HarmonyOS系统免密认证模块，IIFAA在本文中指联盟及相关技术规范）。

起始版本： 4.1.0(11)

#### 导入模块

```
import { ifaa } from '@kit.OnlineAuthenticationKit';
```

#### getVersionSync

getVersionSync(): number

获取IFAA免密认证接口的版本号，同步返回结果。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 返回IFAA免密认证的接口版本号。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Device type error. |

示例：

```
let res: number = ifaa.getVersionSync();
console.info('Succeeded in doing getVersionSync. version:', result);
// 开发者处理res
```

#### getAnonymousIdSync

getAnonymousIdSync(userToken: Uint8Array): Uint8Array

获取IFAA免密认证的匿名化ID，同步返回结果。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userToken | Uint8Array | 是 | 唯一标识用户的id。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Uint8Array | 返回IFAA免密认证的匿名化ID。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let getAnonIdResult: Uint8Array = ifaa.getAnonymousIdSync(arg);
console.info('Succeeded in doing getAnonymousIdSync. anonymousId:', result);
// 开发者处理getAnonIdResult ....
```

#### getAnonymousId

getAnonymousId(userToken: Uint8Array): Promise<Uint8Array>

获取IFAA免密认证的匿名化ID，使用Promise异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userToken | Uint8Array | 是 | 唯一标识用户的id。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回匿名化ID。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let getAnonIdPromise: Promise<Uint8Array> = ifaa.getAnonymousId(arg);
getAnonIdPromise.then(result => {
  console.info('Succeeded in doing getAnonymousId. anonymousId:', result);
  // 开发者处理result
}).catch((err: BusinessError) => {
  console.error(`Failed to call getAnonymousId. Code: ${err.code}, message: ${err.message}`);
 });
```

#### getAnonymousId

getAnonymousId(userToken: Uint8Array, callback: AsyncCallback<Uint8Array>): void

获取IFAA免密认证的匿名化ID，使用Callback异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userToken | Uint8Array | 是 | 唯一标识用户的id。 |
| callback | AsyncCallback | 是 | 回调函数。操作成功时，err为undefined，data为获取到的匿名化ID；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
ifaa.getAnonymousId(arg,
  (err: BusinessError, result: Uint8Array) => {
    if (err) {
      console.error(`Failed to call getAnonymousId. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in doing getAnonymousId. anonymousId:', result);
      // 开发者处理result
    }
  });
```

#### queryStatusSync

queryStatusSync(userToken: Uint8Array): boolean

查询IFAA免密认证的开通状态，同步返回结果。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userToken | Uint8Array | 是 | 唯一标识用户的id。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 返回IFAA免密认证的开通状态。true代表已开通，false代表未开通。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let status: boolean = ifaa.queryStatusSync(arg);
if (status) {
  console.info('ifaa registered');
} else {
  console.info('ifaa deregistered');
}
```

#### queryStatus

queryStatus(userToken: Uint8Array): Promise<boolean>

查询IFAA免密认证的开通状态，使用Promise异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userToken | Uint8Array | 是 | 唯一标识用户的id。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，true代表已开通，false代表未开通。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let promise: Promise<boolean> = ifaa.queryStatus(arg);
promise.then(result => {
  console.info('Succeeded in doing queryStatus. status:', result);
  // 开发者处理result
}).catch((err: BusinessError) => {
  console.error(`Failed to call queryStatus. Code: ${err.code}, message: ${err.message}`);
});
```

#### queryStatus

queryStatus(userToken: Uint8Array, callback: AsyncCallback<boolean>): void

查询IFAA免密认证的开通状态，使用Callback异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userToken | Uint8Array | 是 | 唯一标识用户的id。 |
| callback | AsyncCallback | 是 | 回调函数，用于获取开通状态，true代表已开通，false代表未开通。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
ifaa.queryStatus(arg,
  (err: BusinessError, result: boolean) => {
    if (err) {
      console.error(`Failed to call queryStatus. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in doing queryStatus. status:', result);
      // 开发者处理result
    }
  });
```

#### register

register(registerData: Uint8Array): Promise<Uint8Array>

开通IFAA免密认证，使用Promise异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| registerData | Uint8Array | 是 | IIFAA服务器下发的TLV格式的开通数据。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回开通数据。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let registerPromise: Promise<Uint8Array> = ifaa.register(arg);
registerPromise.then(registerResult => {
  console.info('Succeeded in doing register. registerResult:', registerResult);
  // 开发者处理registerResult
}).catch((err: BusinessError) =>{
  console.error(`Failed to call register. Code: ${err.code}, message: ${err.message}`);
});
```

#### register

register(registerData: Uint8Array, callback: AsyncCallback<Uint8Array>): void

开通IFAA免密认证，使用Callback异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| registerData | Uint8Array | 是 | IIFAA服务器下发的TLV格式的开通数据。 |
| callback | AsyncCallback | 是 | 回调函数。操作成功时，err为undefined，data为获取到的开通数据；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
ifaa.register(arg, (err: BusinessError, registerResult: Uint8Array) => {
  if (err) {
    console.error(`Failed to call register. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('Succeeded in doing register. registerResult:', registerResult);
    // 开发者处理registerResult ....
  }
});
```

#### preAuthSync

preAuthSync(): Uint8Array

获取IFAA免密认证的预认证参数，同步返回结果。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| Uint8Array | 返回IFAA免密认证的预认证参数，其中存在用于后续进行生物认证时所需的挑战值（challenge）。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
let preAuthResult: Uint8Array = ifaa.preAuthSync();
console.info('Succeeded in doing preAuthSync. preAuthResult:', preAuthResult);
// 开发者处理preAuthResult
```

#### preAuth

preAuth(): Promise<Uint8Array>

获取IFAA免密认证的预认证参数，使用Promise异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回预认证数据。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

let preAuthPromise: Promise<Uint8Array> = ifaa.preAuth();
preAuthPromise.then(preAuthResult => {
  console.info('Succeeded in doing preAuth. preAuthResult:', preAuthResult);
  // 开发者处理preAuthResult ....
}).catch((err: BusinessError) =>{
  console.error(`Failed to call preAuth. Code: ${err.code}, message: ${err.message}`);
});
```

#### preAuth

preAuth(callback: AsyncCallback<Uint8Array>): void

获取IFAA免密认证的预认证参数，使用Callback异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。操作成功时，err为undefined，data为获取到的预认证数据；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

ifaa.preAuth(
  (err: BusinessError, preAuthResult:Uint8Array) => {
    if (err) {
      console.error(`Failed to call preAuth. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in doing preAuth. preAuthResult:', preAuthResult);
      // 开发者处理preAuthResult..
    }
  });
```

#### authSync

authSync(authToken: Uint8Array, authData: Uint8Array): Uint8Array

IFAA免密认证，同步返回结果。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| authToken | Uint8Array | 是 | 用户身份认证通过的凭证（通过用户认证模块可获取，调用@ohos.userIAM.userAuth的getUserAuthInstance）。 |
| authData | Uint8Array | 是 | IIFAA服务器下发的TLV格式的认证数据。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Uint8Array | 返回TLV格式的认证结果。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
// 开发者调用@ohos.userIAM.userAuth的getUserAuthInstance获取token；token需要开发者替换为真实入参。
let token = new Uint8Array([0]);
// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let authResult: Uint8Array = ifaa.authSync(token, arg);
console.info('Succeeded in doing authSync. authResult:', authResult);
// 开发者处理authResult ....
```

#### auth

auth(authToken: Uint8Array, authData: Uint8Array): Promise<Uint8Array>

IFAA免密认证，使用Promise异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| authToken | Uint8Array | 是 | 用户身份认证通过的凭证（通过用户认证模块可获取，调用@ohos.userIAM.userAuth的getUserAuthInstance）。 |
| authData | Uint8Array | 是 | IIFAA服务器下发的TLV格式的认证数据。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回TLV格式的认证结果。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者调用@ohos.userIAM.userAuth的getUserAuthInstance获取token；token需要开发者替换为真实入参。
let token = new Uint8Array([0]);
// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let authPromise: Promise<Uint8Array> = ifaa.auth(token, arg);
authPromise.then(authResult => {
  console.info('Succeeded in doing auth. authResult:', authResult);
  // 开发者处理authResult ....
}).catch((err: BusinessError) =>{
  console.error(`Failed to call auth. Code: ${err.code}, message: ${err.message}`);
});
```

#### auth

auth(authToken: Uint8Array, authData: Uint8Array, callback: AsyncCallback<Uint8Array>): void

IFAA免密认证，使用Callback异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| authToken | Uint8Array | 是 | 用户身份认证通过的凭证（通过用户认证模块可获取，调用@ohos.userIAM.userAuth的getUserAuthInstance）。 |
| authData | Uint8Array | 是 | IIFAA服务器下发的TLV格式的认证数据。 |
| callback | AsyncCallback | 是 | 回调函数。操作成功时，err为undefined，data为获取到的返回数据；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者调用@ohos.userIAM.userAuth的getUserAuthInstance获取token；token需要开发者替换为真实入参。
let token = new Uint8Array([0]);
// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
ifaa.auth(token, arg,
  (err: BusinessError, authResult: Uint8Array) => {
    if (err) {
      console.error(`Failed to call auth. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in doing auth. authResult:', authResult);
      // 开发者处理authResult ....
    }
  });
```

#### deregisterSync

deregisterSync(deregisterData: Uint8Array): void

注销IFAA免密认证，同步返回结果。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deregisterData | Uint8Array | 是 | IIFAA服务器下发的TLV格式的关闭数据。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
ifaa.deregisterSync(arg);
```

#### deregister

deregister(deregisterData: Uint8Array): Promise<void>

注销IFAA免密认证，使用Promise异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deregisterData | Uint8Array | 是 | IIFAA服务器下发的TLV格式的关闭数据。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果的Promise对象。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
let promise: Promise<void> = ifaa.deregister(arg);
promise.then(()=> {
  console.info('Succeeded in doing deregister.');
}).catch((err: BusinessError) => {
  console.error(`Failed to call deregister. Code: ${err.code}, message: ${err.message}`);
});
```

#### deregister

deregister(deregisterData: Uint8Array, callback: AsyncCallback<void>): void

注销IFAA免密认证，使用Callback异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deregisterData | Uint8Array | 是 | IIFAA服务器下发的TLV格式的关闭数据。 |
| callback | AsyncCallback | 是 | 回调函数。操作成功时，err为undefined，否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

// 开发者需要按照IIFAA的TLV格式构造入参，并转换为Uint8Array参数；此处arg需要开发者替换为真实入参。
let arg = new Uint8Array([0]);
ifaa.deregister(arg,
  (err: BusinessError) => {
    if (err) {
      console.error(`Failed to call deregister. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in doing deregister.');
    }
});
```

#### getProtocolVersionSync

getProtocolVersionSync(): Uint8Array

获取IFAA免密认证的协议版本号，同步返回结果。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| Uint8Array | 返回IFAA免密认证的协议版本号。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
let res: Uint8Array = ifaa.getProtocolVersionSync();
```

#### getProtocolVersion

getProtocolVersion(): Promise<Uint8Array>

获取IFAA免密认证的协议版本号，使用Promise异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回协议版本号。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise: Promise<Uint8Array> = ifaa.getProtocolVersion();
promise.then(result => {
  console.info('Succeeded in doing getProtocolVersion. protocolVersion:', result);
  // 开发者处理result
}).catch((err: BusinessError) => {
  console.error(`Failed to call getProtocolVersion. Code: ${err.code}, message: ${err.message}`);
});
```

#### getProtocolVersion

getProtocolVersion(callback: AsyncCallback<Uint8Array>): void

获取IFAA免密认证的协议版本号，使用Callback异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。操作成功时，err为undefined，data为获取到的协议版本号；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

ifaa.getProtocolVersion(
  (err: BusinessError, result: Uint8Array) => {
    if (err) {
      console.error(`Failed to call getProtocolVersion. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in doing getProtocolVersion. protocolVersion:', result);
      // 开发者处理result
    }
  });
```

#### getSupportedCertTypesSync

getSupportedCertTypesSync(): Uint8Array

获取IFAA免密认证支持的证书格式，同步返回结果。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| Uint8Array | 返回IFAA免密认证支持的证书格式。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
let result: Uint8Array = ifaa.getSupportedCertTypesSync();
console.info('Succeeded in doing getSupportedCertTypesSync. supportedCertTypes:', result);
// 开发者处理result
```

#### getSupportedCertTypes

getSupportedCertTypes(): Promise<Uint8Array>

获取IFAA免密认证支持的证书格式，使用Promise异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回支持的证书格式。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

let promise: Promise<Uint8Array> = ifaa.getSupportedCertTypes();
promise.then(result => {
  console.info('Succeeded in doing getSupportedCertTypes. supportedCertTypes:', result);
  // 开发者处理result
}).catch((err: BusinessError) => {
  console.error(`Failed to call getSupportedCertTypes. Code: ${err.code}, message: ${err.message}`);
});
```

#### getSupportedCertTypes

getSupportedCertTypes(callback: AsyncCallback<Uint8Array>): void

获取IFAA免密认证支持的证书格式，使用Callback异步回调。

元服务API： 从版本5.0.0(12)开始，该接口支持在元服务中使用。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Ifaa

起始版本： 4.1.0(11)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。操作成功时，err为undefined，data为获取到的证书格式；否则为错误对象。 |

错误码：

以下错误码的详细介绍请参见[IFAA免密认证错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-onlineauthentication-ifaa)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 801 | Device type error. |
| 1006100001 | System Interruption. |
| 1006100002 | The service is abnormal. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

ifaa.getSupportedCertTypes(
  (err: BusinessError, result: Uint8Array) => {
    if (err) {
      console.error(`Failed to call getSupportedCertTypes. Code: ${err.code}, message: ${err.message}`);
    } else {
      console.info('Succeeded in doing getSupportedCertTypes. supportedCertTypes:', result);
      // 开发者处理result
    }
  });
```
