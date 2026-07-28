---
title: "@ohos.security.CryptoExtensionAbility (密钥扩展能力)"
upstream_id: "harmonyos-references/js-apis-cryptoextensionability"
catalog: "harmonyos-references"
content_hash: "7aaa6fc0de17"
synced_at: "2026-07-28T16:50:33.280375"
---

# @ohos.security.CryptoExtensionAbility (密钥扩展能力)

模块提供外部密钥扩展能力，包括资源管理、PIN码认证管理、密码操作、通用操作等接口能力。

ExtensionAbility功能与约束：

1. 设备管理，单个ExtensionAbility实现，最多支持10个UKey接入。
2. 句柄管理，针对同一个UKey资源（例如，容器下的密钥），支持应用维度资源句柄管理。 支持多个HarmonyOS应用，打开同一个UKey密钥资源。例如：HarmonyOS应用1打开容器A后，HarmonyOS应用2也可以再次打开容器A。
3. 支持多个HarmonyOS应用，操作同一个UKey密钥资源。例如：HarmonyOS应用1操作容器A中的私钥签名后，HarmonyOS应用2也验证PIN码后，也可以操作容器A中的私钥进行签名，两者互不影响。
4. 密钥会话管理，支持三段式密钥管理操作，单次签名验签需通过[onInitSession](#oninitsession)/[onUpdateSession](#onupdatesession)/[onFinishSession](#onfinishsession)三个函数三步配合完成，需支持会话管理，缓存密钥会话状态。 init操作，初始化密钥会话，并返回会话句柄信息。
5. update操作，传入分组数据，对分组数据进行密码操作，更新密钥会话信息后，将中间数据（如果有）返回。
6. finish操作，对传入最后一段分组数据，进行密钥返回操作，并结束密钥会话，将最终结果返回。
7. 认证状态管理，支持应用维度的认证状态管理。针对同一个UKey中的应用A，HarmonyOS应用1验证UKey应用A的PIN码后，HarmonyOS应用2如果要访问UKey应用A，也需要进行PIN码认证操作。
8. 证书查询，支持根据证书类型，枚举所有证书或查询单个容器中的证书。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 约束限制

CryptoExtensionAbility作为密钥管理扩展能力，为减少安全攻击面，保障CryptoExtensionAbility合理实现，系统对网络、蓝牙、位置等能力进行管控，不支持部分模块的引用，详情请参考[附录](#附录)。

#### 导入模块

```
import { huks, huksExternalCrypto, CryptoExtensionAbility } from '@kit.UniversalKeystoreKit';
```

#### HuksCryptoExtensionResultCode

[HuksCryptoExtensionResult](#hukscryptoextensionresult)中的resultCode枚举值。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Huks.CryptoExtension

| 名称 | 值 | 说明 |
| --- | --- | --- |
| HUKS_CRYPTO_EXTENSION_ERR_EXTENSION_FAIL | 34800000 | 密钥扩展错误。可能的原因： 1. 输入参数无效。 2. 密钥扩展出现无法解决的错误状态。 |
| HUKS_CRYPTO_EXTENSION_ERR_UKEY_NOT_EXIST | 34800001 | UKey不存在。可能的原因： 1. UKey已被移除。 2. 密钥扩展陷入错误的UKey状态。 |
| HUKS_CRYPTO_EXTENSION_ERR_UKEY_DRIVER_FAIL | 34800002 | UKey驱动出现未知错误。 |
| HUKS_CRYPTO_EXTENSION_ERR_PIN_NO_AUTH | 34800003 | UKey PIN码未认证，需要先通过[onAuthUkeyPin](#onauthukeypin)认证UKey PIN码。 |
| HUKS_CRYPTO_EXTENSION_ERR_HANDLE_NOT_EXIST | 34800004 | 句柄不存在。可能的原因： 1. 句柄无效。 2. HUKS服务和密钥扩展的状态不一致。由于异常情况，HUKS服务持有的句柄未能释放。 |
| HUKS_CRYPTO_EXTENSION_ERR_HANDLE_UNAVAILABLE | 34800005 | 句柄不可用。可能的原因： 密钥扩展和UKey的状态不一致。 |
| HUKS_CRYPTO_EXTENSION_ERR_PIN_INCORRECT | 34800006 | UKey PIN码错误，需要检查输入的PIN码。 |
| HUKS_CRYPTO_EXTENSION_ERR_PIN_LOCKED | 34800007 | UKey PIN码被锁定。可能的原因： PIN码输入错误次数过多。 |

#### HuksCryptoExtensionCertInfo

[HuksCryptoExtensionResult](#hukscryptoextensionresult)中的certs数组中的元素。

系统能力： SystemCapability.Security.Huks.CryptoExtension

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| purpose | [certificateManager.CertificatePurpose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-certmanager#certificatepurpose22) | 否 | 否 | 表示证书链对应密钥的使用类型。 |
| resourceId | string | 否 | 否 | 资源ID。JSON格式，能够映射到UKey中的某个资源。 |
| cert | Uint8Array | 否 | 否 | 证书。 |

#### HuksCryptoExtensionResult

接口返回值的通用类型。

系统能力： SystemCapability.Security.Huks.CryptoExtension

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| resultCode | number | 否 | 否 | 返回值的错误码。 |
| handle | string | 否 | 是 | 资源句柄。 |
| authState | number | 否 | 是 | 认证状态。 |
| retryCount | number | 否 | 是 | 重试次数，表示PIN码认证剩余可用次数，为0时表示无剩余重试机会。 |
| certs | Array | 否 | 是 | 证书。 |
| property | Array | 否 | 是 | 属性。 |
| outData | Uint8Array | 否 | 是 | 返回的数据。 |
| resourceId | string | 否 | 是 | 返回的资源ID。默认值为空。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用。 |
| errInfo | [huksExternalCrypto.HuksExternalErrorInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalerrorinfo) | 否 | 是 | 返回的详细错误信息。默认值为{0,""}。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用。 |

#### HuksCryptoExtensionParam

密钥扩展操作参数，用于指定操作的属性标签和对应值。

起始版本： 26.0.0

系统能力： SystemCapability.Security.Huks.CryptoExtension

模型约束： 此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| tag | [huksExternalCrypto.HuksExternalCryptoTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag) | [huks.HuksTag](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#hukstag) | number | 否 | 否 | 标签。 |
| value | boolean | number | bigint | Uint8Array | 否 | 否 | 标签对应值。 |

#### HuksCryptoExtensionParams

密钥扩展操作参数集合，用于传递操作所需的属性和输入数据。

起始版本： 26.0.0

系统能力： SystemCapability.Security.Huks.CryptoExtension

模型约束： 此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| properties | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 否 | 否 | 属性，用于存储HuksCryptoExtensionParam的数组。默认为undefined。 |
| inData | Uint8Array | 否 | 是 | 输入数据。默认为undefined。 |

#### CryptoExtensionAbility

密钥扩展能力类，提供外部密钥管理扩展所需接口定义，包括打开/关闭资源、PIN码认证管理、密钥会话操作、证书管理、密钥生成与导入、通用操作等接口能力。驱动厂商需继承CryptoExtensionAbility并实现相关接口，通过[registerProvider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptoregisterprovider)完成能力注册后，由HUKS和证书管理将对应的密钥管理扩展能力开放给应用使用。

CryptoExtensionAbility可以隔离不同的UKey驱动厂商实现的差异。

系统能力： SystemCapability.Security.Huks.CryptoExtension

#### [h2]onOpenResource

onOpenResource(resourceId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

根据参数中的resourceId，打开UKey的密钥资源。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resourceId | string | 是 | 资源ID。 |
| params | Array | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 传入的参数，应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，handle携带资源句柄信息。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800001 UKey不存在。 34800002 UKey驱动错误。 34800004 句柄不存在。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huksExternalCrypto, HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onOpenResource(resourceId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    // 解析resourceId，打开底层句柄，并映射为新的句柄返回。
    let result: HuksCryptoExtensionResult = {
      resultCode: 0,
      handle: "test handle"
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onCloseResource

onCloseResource(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

根据参数中的handle，关闭UKey的密钥资源。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 会话句柄。 |
| params | Array | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 传入的参数，应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，表示关闭资源成功。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800004 句柄不存在。 34800005 句柄不可用。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huksExternalCrypto, HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onCloseResource(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    // 执行句柄关闭操作。如果需要关闭底层句柄，则执行关闭操作。
    const result: HuksCryptoExtensionResult = {
        resultCode: 0,
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onGetProperty

onGetProperty(handle: string, propertyId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

根据参数中的handle和propertyId获取属性。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| propertyId | string | 是 | 查找操作的属性名称，是GMT 0016-2023中定义的SKF接口名，要业务针对接口名适配。 |
| params | Array | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 传入的参数，应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，HuksCryptoExtensionResult的property成员非空，包含获取到的属性，由[HUKS_EXT_CRYPTO_TAG_EXTRA_DATA](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800003 UKey PIN码未认证。 34800004 句柄不存在。 34800005 句柄不可用。 34800007 UKey PIN码被锁定。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huksExternalCrypto, HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onGetProperty(handle: string, propertyId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    // 按照propertyId执行相关函数，函数参数从params中获取。输出数据封装到返回值的property字段中，由HUKS_EXT_CRYPTO_TAG_EXTRA_DATA携带。
    const emptyArray: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      property: emptyArray
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onSetProperty

onSetProperty(handle: string, propertyId: string, params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

根据参数中的handle和propertyId设置属性。使用Promise异步回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| propertyId | string | 是 | 设置操作的属性名称，推荐使用GMT 0016-2023中定义的SKF接口名作为属性ID。 |
| params | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 传入的参数，包含与propertyId相关的操作参数。应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，表示设置属性成功。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。可能的原因： 1. 输入参数无效。 2. 密钥扩展出现无法解决的错误状态。 34800002 UKey驱动错误。 34800003 UKey PIN码未认证，需要先认证UKey PIN码。 34800004 句柄不存在。可能的原因： 1. 句柄无效。 2. HUKS服务和密钥扩展的状态不一致。由于异常情况，HUKS服务持有的句柄未能释放。 34800005 句柄不可用。可能的原因： 密钥扩展和UKey的状态不一致。 34800007 UKey PIN码被锁定。可能的原因： PIN码输入错误次数过多。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onSetProperty(handle: string, propertyId: string, params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    // 按照propertyId执行相关设置操作，操作参数从params中获取。
    const result: HuksCryptoExtensionResult = {
      resultCode: 0
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onAuthUkeyPin

onAuthUkeyPin(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

请求UKey认证PIN码。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| params | Array | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 传入的参数，应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，authState非0，表示认证请求成功。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800004 句柄不存在。 34800005 句柄不可用。 34800006 UKey PIN码错误。 34800007 UKey PIN码被锁定。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huksExternalCrypto, HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onAuthUkeyPin(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    // 执行PIN码认证操作，并且维护应用的PIN码认证状态。
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      authState: 1
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onGetUkeyPinAuthState

onGetUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

获取UKey的PIN码认证状态。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| params | Array | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 传入的参数，应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，HuksCryptoExtensionResult的authState成员非空，为获取的PIN码认证状态。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800004 句柄不存在。 34800005 句柄不可用。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huksExternalCrypto, HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onGetUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    // 查询PIN码认证状态。
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      authState: 1
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onClearUkeyPinAuthState

onClearUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

清除应用维度PIN码的认证状态。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 会话句柄。 |
| params | Array | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 传入的参数，应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，表示清除PIN码认证状态成功。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800004 句柄不存在。 34800005 句柄不可用。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huksExternalCrypto, HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onClearUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    const result: HuksCryptoExtensionResult = {
      resultCode: 0
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onInitSession

onInitSession(handle: string, params: huks.HuksOptions | HuksCryptoExtensionParams): Promise<HuksCryptoExtensionResult>

三段式初始化密钥会话操作。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| params | [huks.HuksOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksoptions) | [HuksCryptoExtensionParams](#hukscryptoextensionparams) | 是 | 传入的参数，应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，handle成员非空。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800003 UKey PIN码未认证。 34800004 句柄不存在。 34800005 句柄不可用。 34800007 UKey PIN码被锁定。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huks, HuksCryptoExtensionParams, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onInitSession(handle: string, params: huks.HuksOptions | HuksCryptoExtensionParams): Promise<HuksCryptoExtensionResult> {
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      handle: "test handle"
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onUpdateSession

onUpdateSession(initHandle: string, params: huks.HuksOptions | HuksCryptoExtensionParams): Promise<HuksCryptoExtensionResult>

三段式密钥会话更新数据操作。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| initHandle | string | 是 | 资源句柄。 |
| params | [huks.HuksOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksoptions) | [HuksCryptoExtensionParams](#hukscryptoextensionparams) | 是 | 传入的参数，应用身份通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800003 UKey PIN码未认证。 34800004 句柄不存在。 34800005 句柄不可用。 34800007 UKey PIN码被锁定。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huks, HuksCryptoExtensionParams, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onUpdateSession(initHandle: string, params: huks.HuksOptions | HuksCryptoExtensionParams): Promise<HuksCryptoExtensionResult> {
    let outBuffer: Uint8Array = new Uint8Array(1024);
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      outData: outBuffer
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onFinishSession

onFinishSession(initHandle: string, params: huks.HuksOptions | HuksCryptoExtensionParams): Promise<HuksCryptoExtensionResult>

三段式密钥会话结束操作。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| initHandle | string | 是 | 资源句柄。 |
| params | [huks.HuksOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huks#huksoptions) | [HuksCryptoExtensionParams](#hukscryptoextensionparams) | 是 | 传入的参数，应用身份可通过[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)参数携带，还包括算法参数（算法类型、填充模式等）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800003 UKey PIN码未认证。 34800004 句柄不存在。 34800005 句柄不可用。 34800007 UKey PIN码被锁定。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huks, HuksCryptoExtensionParams, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onFinishSession(initHandle: string, params: huks.HuksOptions | HuksCryptoExtensionParams): Promise<HuksCryptoExtensionResult> {
    let outBuffer: Uint8Array = new Uint8Array(1024);
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      outData: outBuffer
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onExportCertificate

onExportCertificate(resourceId: string, params?: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

查询指定resourceId下的证书。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resourceId | string | 是 | 资源ID。会附带在[HuksCryptoExtensionCertInfo](#hukscryptoextensioncertinfo)中。 |
| params | Array | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 否 | 操作属性。默认获取签名类型的证书，也可以通过参数[HUKS_EXT_CRYPTO_TAG_PURPOSE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)指定获取证书类型，支持的类型包括签名验签、加解密等。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，certs成员非空，包含获取的单本证书。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800001 UKey不存在。 34800002 UKey驱动错误。 34800004 句柄不存在。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huksExternalCrypto, CryptoExtensionAbility, HuksCryptoExtensionResult,
  HuksCryptoExtensionCertInfo } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onExportCertificate(resourceId: string, params?: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    const certInfoSetArray: Array<HuksCryptoExtensionCertInfo> = []
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      certs: certInfoSetArray
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onEnumCertificates

onEnumCertificates(params?: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

枚举Extension下所有UKey设备的证书信息。使用Promise异步回调。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Array | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 否 | 操作属性。默认获取签名类型的[证书](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/certmanager-overview)，也可以通过参数[HUKS_EXT_CRYPTO_TAG_PURPOSE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)指定获取证书类型，支持的类型包括签名验签、加解密等。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，certs成员非空，包含获取的所有证书。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800001 UKey不存在。 34800002 UKey驱动错误。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huksExternalCrypto, HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult, HuksCryptoExtensionCertInfo } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onEnumCertificates(params?: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    const certInfoSetArray: Array<HuksCryptoExtensionCertInfo> = []
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      certs: certInfoSetArray
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onGetResourceId

onGetResourceId(params: HuksCryptoExtensionParam[]):Promise<HuksCryptoExtensionResult>

获取外部扩展设备内的资源ID。使用Promise异步回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 获取资源ID所需的属性参数。必选TAG包括：[HUKS_EXT_CRYPTO_TAG_RESOURCE_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)（厂商自定义的资源信息）、[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)（调用方身份）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，resourceId携带资源ID信息。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { HuksCryptoExtensionParam, CryptoExtensionAbility, HuksCryptoExtensionResult } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onGetResourceId(params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      resourceId: "test resourceId"
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onImportCertificate

onImportCertificate(handle: string, params: HuksCryptoExtensionParam[], certInfo: HuksCryptoExtensionCertInfo): Promise<HuksCryptoExtensionResult>

导入指定资源句柄的证书。使用Promise异步回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 导入证书的资源句柄。 |
| params | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 导入证书所需的属性参数。 |
| certInfo | [HuksCryptoExtensionCertInfo](#hukscryptoextensioncertinfo) | 是 | 待导入的证书信息。需指定证书类型（purpose）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，表示导入证书成功。调用失败时，resultCode携带错误码信息，errInfo携带详细错误信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800001 UKey不存在。 34800002 UKey驱动错误。 34800004 句柄不存在。 34800005 句柄不可用。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { CryptoExtensionAbility, HuksCryptoExtensionParam, HuksCryptoExtensionResult,
  HuksCryptoExtensionCertInfo } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onImportCertificate(handle: string, params: HuksCryptoExtensionParam[],
      certInfo: HuksCryptoExtensionCertInfo): Promise<HuksCryptoExtensionResult> {
    const result: HuksCryptoExtensionResult = {
      resultCode: 0
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onGenerateKeyItem

onGenerateKeyItem(handle: string, params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

用于在扩展设备内生成密钥对。使用Promise异步回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 待生成密钥的资源句柄。 |
| params | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 密钥生成操作的属性参数。必选TAG：[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)（调用方身份）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，表示生成密钥成功。调用失败时，resultCode携带错误码信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800004 句柄不存在。 34800005 句柄不可用。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huks, CryptoExtensionAbility, HuksCryptoExtensionResult, HuksCryptoExtensionParam } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onGenerateKeyItem(handle: string, params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    // 解析可选参数
    let algorithm: huks.HuksKeyAlg | undefined = params.find(
      param => param.tag === huks.HuksTag.HUKS_TAG_ALGORITHM)?.value as huks.HuksKeyAlg;
    let keySize: huks.HuksKeySize | undefined = params.find(
      param => param.tag === huks.HuksTag.HUKS_TAG_KEY_SIZE)?.value as huks.HuksKeySize;
    let purpose: huks.HuksKeyPurpose | undefined = params.find(
      param => param.tag === huks.HuksTag.HUKS_TAG_PURPOSE)?.value as huks.HuksKeyPurpose;

    // 如未传入参数，设置默认值
    if (algorithm === undefined) {
      algorithm = huks.HuksKeyAlg.HUKS_ALG_RSA; // 默认RSA算法
    }
    if (keySize === undefined) {
      keySize = huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048; // 默认2048位
    }
    if (purpose === undefined) {
      purpose = huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN; // 默认签名用途
    }

    const result: HuksCryptoExtensionResult = {
      resultCode: 0
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onExportKeyItem

onExportKeyItem(handle: string, params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>

用于导出指定密钥的公钥。使用Promise异步回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 待导出公钥的资源句柄。 |
| params | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 导出公钥操作的属性参数。必选TAG：[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)（调用方身份）。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，outData携带导出的公钥数据。调用失败时，resultCode携带错误码信息，errInfo携带详细错误信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800004 句柄不存在。 34800005 句柄不可用。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huks, CryptoExtensionAbility, HuksCryptoExtensionResult, HuksCryptoExtensionParam } from '@kit.UniversalKeystoreKit';

export default class CryptoExtension extends CryptoExtensionAbility {
  onExportKeyItem(handle: string, params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult> {
    // 解析可选参数，推荐传入密钥用途
    let purpose: huks.HuksKeyPurpose | undefined = params.find(
      param => param.tag === huks.HuksTag.HUKS_TAG_PURPOSE)?.value as huks.HuksKeyPurpose;

    // 如未传入用途参数，设置默认值（推荐默认签名用途）
    if (purpose === undefined) {
      purpose = huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN;
    }

    let pubKey: Uint8Array = new Uint8Array(1024);
    const result: HuksCryptoExtensionResult = {
      resultCode: 0,
      outData: pubKey
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### [h2]onImportWrappedKeyItem

onImportWrappedKeyItem(handle: string, wrappingHandle: string, params: HuksCryptoExtensionParam[], wrappedKey: Uint8Array): Promise<HuksCryptoExtensionResult>

用于导入加密封装的密钥对。使用Promise异步回调。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Security.Huks.CryptoExtension

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 待导入密钥的资源句柄。 |
| wrappingHandle | string | 是 | 用于解封导入密钥的密钥资源句柄。 |
| params | [HuksCryptoExtensionParam](#hukscryptoextensionparam)[] | 是 | 导入封装密钥操作的属性参数。必选TAG：[HUKS_EXT_CRYPTO_TAG_UID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-huksexternalcrypto#huksexternalcryptotag)（调用方身份）。 |
| wrappedKey | Uint8Array | 是 | 封装密钥数据，格式由密钥扩展定义。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。当调用成功时，resultCode为0，表示导入密钥成功。调用失败时，resultCode携带错误码信息，errInfo携带详细错误信息。 可能返回的错误码值： 34800000 密钥扩展错误。 34800002 UKey驱动错误。 34800004 句柄不存在。 34800005 句柄不可用。 具体含义可查询[HuksCryptoExtensionResultCode](#hukscryptoextensionresultcode)。 |

示例：

```
import { huks, CryptoExtensionAbility, HuksCryptoExtensionResult, HuksCryptoExtensionParam } from '@kit.UniversalKeystoreKit';
export default class CryptoExtension extends CryptoExtensionAbility {
  onImportWrappedKeyItem(handle: string, wrappingHandle: string, params: HuksCryptoExtensionParam[], wrappedKey: Uint8Array): Promise<HuksCryptoExtensionResult> {
    // 解析可选参数
    let algorithm: huks.HuksKeyAlg | undefined = params.find(
      param => param.tag === huks.HuksTag.HUKS_TAG_ALGORITHM)?.value as huks.HuksKeyAlg;
    let keySize: huks.HuksKeySize | undefined = params.find(
      param => param.tag === huks.HuksTag.HUKS_TAG_KEY_SIZE)?.value as huks.HuksKeySize;
    let purpose: huks.HuksKeyPurpose | undefined = params.find(
      param => param.tag === huks.HuksTag.HUKS_TAG_PURPOSE)?.value as huks.HuksKeyPurpose;

    // 如未传入参数，设置默认值
    if (algorithm === undefined) {
      algorithm = huks.HuksKeyAlg.HUKS_ALG_RSA;
    }
    if (keySize === undefined) {
      keySize = huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048;
    }
    if (purpose === undefined) {
      purpose = huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT;
    }

    const result: HuksCryptoExtensionResult = {
      resultCode: 0
    };

    // ...
    return Promise.resolve(result);
  }
}
```

#### 附录

CryptoExtensionAbility不支持以下模块的引用。

| Kit | 模块 |
| --- | --- |
| Ability Kit | [@ohos.wantAgent (WantAgent模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wantagent) |
| Ads Kit | [@ohos.advertising.AdComponent (广告展示组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-adcomponent) |
| Ads Kit | [@ohos.advertising.AdsServiceExtensionAbility(广告扩展服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-adsserviceextensionability) |
| Ads Kit | [@ohos.advertising.AutoAdComponent (轮播广告展示组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-autoadcomponent) |
| Ads Kit | [@ohos.advertising (广告服务框架)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-advertising) |
| AppGallery Kit | [appInfoManager（应用元数据管理服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/appgallery-appinfomanager) |
| AppGallery Kit | [attributionManager（应用归因服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-attributionmanager) |
| AppGallery Kit | [attributionTestManager（应用归因接入调试功能）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-attributiontestmanager) |
| AppGallery Kit | [commentManager（应用评论服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/appgallery-commentmanager) |
| AppGallery Kit | [moduleInstallManager (产品特性按需分发)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-moduleinstallmanager) |
| AppGallery Kit | [privacyManager（隐私管理服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-privacymanager) |
| AppGallery Kit | [productViewManager（应用市场推荐）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-productviewmanager) |
| AppGallery Kit | [updateManager（更新功能）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-updatemanager) |
| AR Engine Kit | [arEngine（AR增强现实能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-arengine) |
| AR Engine Kit | [ARView（AR场景可视化）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-api-component-arview) |
| ArkUI | [@ohos.atomicservice.AtomicServiceNavigation (AtomicServiceNavigation)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicenavigation) |
| ArkUI | [@ohos.atomicservice.AtomicServiceSearch (AtomicServiceSearch)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicesearch) |
| ArkUI | [@ohos.atomicservice.AtomicServiceTabs (AtomicServiceTabs)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicservicetabs) |
| ArkUI | [@ohos.atomicservice.AtomicServiceWeb (AtomicServiceWeb)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-atomicserviceweb) |
| ArkUI | [@ohos.atomicservice.HalfScreenLaunchComponent (HalfScreenLaunchComponent)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-halfscreenlaunchcomponent) |
| ArkUI | [@ohos.atomicservice.InterstitialDialogAction (InterstitialDialogAction)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-interstitialdialogaction) |
| ArkUI | [@ohos.atomicservice.NavPushPathHelper (NavPushPathHelper)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-atomicservice-navpushpathhelper) |
| ArkUI | [@ohos.PiPWindow (画中画窗口)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pipwindow) |
| ArkUI | [@ohos.mediaquery (媒体查询)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-mediaquery) |
| ArkUI | [@ohos.screenshot (屏幕截图)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-screenshot) |
| ArkWeb | [@ohos.web.netErrorList (ArkWeb网络协议栈错误列表)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-neterrorlist) |
| ArkWeb | [@ohos.web.WebNativeMessagingExtensionAbility (Web Native Messaging Extension Ability)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-web-webnativemessagingextensionability) |
| ArkWeb | [@ohos.web.WebNativeMessagingExtensionContext (Web Native Messaging Extension Context)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-web-webnativemessagingextensioncontext) |
| ArkWeb | [@ohos.web.webNativeMessagingExtensionManager (Web Native Messaging Extension Manager)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-web-webnativemessagingextensionmanager) |
| ArkWeb | [@ohos.web.webview](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview) |
| ArkWeb | [@ohos.web.webview (WebView)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview) |
| Audio Kit | [@ohos.multimedia.audioHaptic (音振协同)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-audiohaptic) |
| Audio Kit | [@ohos.multimedia.systemSoundManager (系统声音管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-systemsoundmanager) |
| Audio Kit | [@ohos.multimedia.avVolumePanel (音量面板)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-avvolumepanel) |
| AVSession Kit | [@ohos.multimedia.avCastPicker (投播组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-avcastpicker) |
| AVSession Kit | [@ohos.multimedia.avCastPickerParam (投播组件参数)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-avcastpickerparam) |
| AVSession Kit | [@ohos.multimedia.avInputCastPicker (录音设备选择组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-avinputcastpicker) |
| Basic Service Kit | [@ohos.pasteboard (剪贴板)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-pasteboard) |
| Basic Service Kit | [@ohos.scan (扫描)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-scan) |
| Basic Service Kit | [@ohos.screenLock (锁屏管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-screen-lock) |
| Basic Service Kit | [@ohos.wallpaper (壁纸)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wallpaper) |
| Basic Service Kit | [@ohos.settings (设置数据项名称)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-settings) |
| Calendar Kit | [@ohos.calendarManager (日程管理能力)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-calendarmanager) |
| Call Service Kit | [CallerInfoQueryExtensionAbility (来去电信息查询扩展Ability)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/callservicekit-callerinfoquery-extension-ability) |
| Call Service Kit | [CallerInfoQueryExtensionContext（来去电信息查询扩展Context）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/callservicekit-callerinfoquery-extension-context) |
| Call Service Kit | [voipCall（应用内通话管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/call-voipcall) |
| Camera Kit | [@ohos.multimedia.cameraPicker (相机选择器)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-camerapicker) |
| Cloud Foundation Kit | [cloudCommon (公共模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudcommon) |
| Cloud Foundation Kit | [cloudDatabase (云数据库模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-clouddatabase) |
| Cloud Foundation Kit | [cloudFunction (云函数模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudfunction) |
| Cloud Foundation Kit | [cloudResPrefetch（预加载模块）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudresprefetch) |
| Cloud Foundation Kit | [cloudStorage (云存储模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cloudfoundation-cloudstorage) |
| Connectivity Kit | [@ohos.bluetooth.a2dp (蓝牙a2dp模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-a2dp) |
| Connectivity Kit | [@ohos.bluetooth.access (蓝牙access模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-access) |
| Connectivity Kit | [@ohos.bluetooth.baseProfile (蓝牙baseProfile模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-baseprofile) |
| Connectivity Kit | [@ohos.bluetooth.ble (蓝牙ble模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-ble) |
| Connectivity Kit | [@ohos.bluetooth.common (蓝牙common模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-common) |
| Connectivity Kit | [@ohos.bluetooth.connection (蓝牙connection模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-connection) |
| Connectivity Kit | [@ohos.bluetooth.constant (蓝牙constant模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-constant) |
| Connectivity Kit | [@ohos.bluetooth (蓝牙)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth) |
| Connectivity Kit | [@ohos.bluetooth.hfp (蓝牙hfp模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-hfp) |
| Connectivity Kit | [@ohos.bluetooth.hid (蓝牙hid模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-hid) |
| Connectivity Kit | [@ohos.bluetoothManager (蓝牙)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetoothmanager) |
| Connectivity Kit | [@ohos.bluetooth.map (蓝牙map模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-map) |
| Connectivity Kit | [@ohos.bluetooth.pan (蓝牙pan模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-pan) |
| Connectivity Kit | [@ohos.bluetooth.pbap (蓝牙pbap模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-pbap) |
| Connectivity Kit | [@ohos.bluetooth.socket (蓝牙socket模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-socket) |
| Connectivity Kit | [@ohos.connectedTag (有源标签)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-connectedtag) |
| Connectivity Kit | [@ohos.nfc.cardEmulation (标准NFC-cardEmulation)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cardemulation) |
| Connectivity Kit | [@ohos.nfc.controller (标准NFC)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfccontroller) |
| Connectivity Kit | [@ohos.nfc.tag (标准NFC-Tag)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-nfctag) |
| Connectivity Kit | [@ohos.wifi (WLAN)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifi) |
| Connectivity Kit | [@ohos.wifiext (WLAN扩展接口)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifiext) |
| Connectivity Kit | [@ohos.wifiManager (WLAN)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifimanager) |
| Connectivity Kit | [@ohos.wifiManagerExt (WLAN扩展接口)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifimanagerext) |
| Contacts Kit | [@ohos.contact (联系人)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-contact) |
| Core Speech Kit | [speechRecognizer（语音识别）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hms-ai-speechrecognizer) |
| Core Speech Kit | [textToSpeech（文本转语音）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/hms-ai-texttospeech) |
| Core Vision Kit | [faceComparator（人脸比对）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-facecomparator-api) |
| Core Vision Kit | [faceDetector（人脸检测）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-face-detector-api) |
| Core Vision Kit | [textRecognition（文字识别）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-text-recognition-api) |
| Core Vision Kit | [objectDetection（多目标识别）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-object-detection-api) |
| Core Vision Kit | [skeletonDetection（骨骼点检测）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-skeleton-detection-api) |
| Core Vision Kit | [subjectSegmentation（主体分割）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-subjectsegmentation-api) |
| Core Vision Kit | [visionBase（Core Vision Kit基类）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/core-vision-vision-base-api) |
| Data Protection Kit | [@ohos.dlpPermission (数据防泄漏)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-dlppermission) |
| Distributed Service Kit | [@ohos.distributedDeviceManager (设备管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributeddevicemanager) |
| Distributed Service Kit | [@ohos.distributedsched.abilityConnectionManager (应用多端协同管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-distributed-abilityconnectionmanager) |
| Distributed Service Kit | [@ohos.distributedsched.linkEnhance (增强连接)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-link-enhance) |
| Distributed Service Kit | [@ohos.distributedsched.proxyChannelManager (代理通道管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-proxychannelmanager) |
| DRM Kit | [@ohos.multimedia.drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-drm) |
| Form Kit | [@ohos.app.form.formBindingData (卡片数据绑定类)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formbindingdata) |
| Form Kit | [@ohos.app.form.FormEditExtensionAbility (FormEditExtensionAbility)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formeditextensionability) |
| Form Kit | [@ohos.app.form.FormExtensionAbility (FormExtensionAbility)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formextensionability) |
| Form Kit | [@ohos.app.form.formInfo (formInfo)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-forminfo) |
| Form Kit | [@ohos.app.form.formProvider (formProvider)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formprovider) |
| Game Service Kit | [gameNearbyTransfer（游戏近场快传）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-nearbytransfer) |
| Game Service Kit | [gamePerformance（游戏场景感知）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-gameperformance) |
| Game Service Kit | [gamePlayer（基础游戏服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-gameplayer) |
| Graphics Accelerate Kit | [AssetAccelerationExtensionAbility（资源加速ExtensionAbility）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-extensionability) |
| Graphics Accelerate Kit | [AssetAccelerationExtensionContext（资源加速ExtensionContext）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-extensioncontext) |
| Graphics Accelerate Kit | [assetDownloadManager（资源包下载管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-assetdownloadmanager) |
| Graphics Accelerate Kit | [launchAcceleration（游戏启动加速）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/graphics-accelerate-launchacceleration) |
| Image Kit | [@ohos.multimedia.sendableImage (基于Sendable对象的图片处理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sendableimage) |
| Image Kit | [@ohos.multimedia.videoProcessingEngine (视频处理引擎)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-videoprocessingengine) |
| Intents Kit | [InsightIntentUIExtensionAbility (意图调用UI扩展能力)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/intents-arkts-api-insightintent-uiextension) |
| Location Kit | [@ohos.geolocation (位置服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocation) |
| Location Kit | [@ohos.geoLocationManager (位置服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager) |
| Live View Kit | [LiveViewLockScreenExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-ability) |
| Live View Kit | [LiveViewLockScreenExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-lock-screen-context) |
| Live View Kit | [liveViewManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/liveview-liveviewmanager) |
| MDM Kit | [@ohos.enterprise.accountManager（账号管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-accountmanager) |
| MDM Kit | [@ohos.enterprise.adminManager（admin权限管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-adminmanager) |
| MDM Kit | [@ohos.enterprise.applicationManager（应用管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-applicationmanager) |
| MDM Kit | [@ohos.enterprise.bluetoothManager（蓝牙管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-bluetoothmanager) |
| MDM Kit | [@ohos.enterprise.browser（浏览器管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-browser) |
| MDM Kit | [@ohos.enterprise.bundleManager（包管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-bundlemanager) |
| MDM Kit | [@ohos.enterprise.common（Enterprise公共模块）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-common) |
| MDM Kit | [@ohos.enterprise.deviceControl（设备控制管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-devicecontrol) |
| MDM Kit | [@ohos.enterprise.deviceInfo（设备信息管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-deviceinfo) |
| MDM Kit | [@ohos.enterprise.deviceSettings （设备设置管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-devicesettings) |
| MDM Kit | [@ohos.enterprise.EnterpriseAdminExtensionAbility（企业设备管理扩展能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability) |
| MDM Kit | [@ohos.enterprise.locationManager（位置服务管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-locationmanager) |
| MDM Kit | [@ohos.enterprise.networkManager（网络管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-networkmanager) |
| MDM Kit | [@ohos.enterprise.restrictions （限制类策略）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-restrictions) |
| MDM Kit | [@ohos.enterprise.securityManager（安全管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-securitymanager) |
| MDM Kit | [@ohos.enterprise.systemManager （系统管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-systemmanager) |
| MDM Kit | [@ohos.enterprise.telephonyManager（通话管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-telephonymanager) |
| MDM Kit | [@ohos.enterprise.usbManager（USB管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-usbmanager) |
| MDM Kit | [@ohos.enterprise.wifiManager（Wi-Fi管理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-wifimanager) |
| Media Library Kit | [@ohos.multimedia.movingphotoview (动态照片)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-multimedia-movingphotoview) |
| Mechanic Kit | [@ohos.distributedHardware.mechanicManager (机械体控制模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-mechanicmanager) |
| MindSpore Lite Kit | [@ohos.ai.mindSporeLite (端侧AI框架)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-mindsporelite) |
| Natural Language Kit | [textProcessing（文本处理）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/natural-language-text-processing-api) |
| NearLink Kit | [advertising（星闪广播能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-advertising) |
| NearLink Kit | [dataTransfer（星闪数传能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-data-transfer-api) |
| NearLink Kit | [remoteDevice（对端设备的连接能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-remote-device) |
| NearLink Kit | [scan（星闪扫描能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-scan) |
| NearLink Kit | [ssap（星闪SSAP连接能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/nearlink-ssap) |
| Network Boost Kit | [netHandover（连接迁移）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-nethandover) |
| Network Boost Kit | [netBoost（网络加速）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netboost) |
| Network Boost Kit | [netQuality（网络质量）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/networkboost-netquality) |
| Network Kit | [@ohos.net.connection (网络连接管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection) |
| Network Kit | [@ohos.net.eap (扩展认证)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-eap) |
| Network Kit | [@ohos.net.ethernet (以太网连接管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-ethernet) |
| Network Kit | [@ohos.net.http (数据请求)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http) |
| Network Kit | [@ohos.net.mdns (MDNS管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-mdns) |
| Network Kit | [@ohos.net.netFirewall (网络防火墙)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-netfirewall) |
| Network Kit | [@ohos.net.networkSecurity (网络安全校验)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-networksecurity) |
| Network Kit | [@ohos.net.policy (网络策略管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-policy) |
| Network Kit | [@ohos.net.sharing (网络共享管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-sharing) |
| Network Kit | [@ohos.net.socket (Socket连接)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-socket) |
| Network Kit | [@ohos.net.statistics (流量管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-statistics) |
| Network Kit | [@ohos.net.vpn (VPN管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-vpn) |
| Network Kit | [@ohos.net.vpnExtension (VPN增强管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-vpnextension) |
| Network Kit | [@ohos.net.webSocket (WebSocket连接)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-websocket) |
| Payment Kit | [ecnyPaymentService (数字人民币服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-ecnypaymentservice) |
| Payment Kit | [paymentService (鸿蒙支付服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-paymentservice) |
| Payment Kit | [realNameService(身份验证服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-realnameservice) |
| Payment Kit | [thirdPaymentService(三方支付服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-third-payment-service) |
| Push Kit | [pushCommon（推送服务公共信息）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-pushcommon) |
| Push Kit | [PushExtensionAbility（推送扩展Ability）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-extension-ability) |
| Push Kit | [PushExtensionContext（推送扩展Context）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-extension-context) |
| Push Kit | [pushService（推送服务基础能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-pushservice) |
| Push Kit | [RemoteLocationExtensionAbility（定位扩展Ability）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-location-ability) |
| Push Kit | [RemoteLocationExtensionContext（定位扩展Context）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-location-context) |
| Push Kit | [RemoteNotificationExtensionAbility（通知扩展Ability）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-remote-notification-extension-ability) |
| Push Kit | [RemoteNotificationExtensionContext（通知扩展Context）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-remote-notification-extension-context) |
| Push Kit | [serviceNotification（服务通知）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-servicenotification) |
| Push Kit | [VoIPExtensionAbility（应用内通话消息扩展Ability）（废弃）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-voip-ability) |
| Push Kit | [VoIPExtensionContext（应用内通话消息扩展Context）（废弃）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/push-voip-context) |
| Remote Communication Kit | [urpc（高性能rpc通信库）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-urpcapi) |
| Remote Communication Kit | [rcp（数据请求）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-rcp) |
| Service Collaboration Kit | [CollaborationService (跨设备互通组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationservice) |
| Service Collaboration Kit | [CollaborationCamera (跨设备互通组件)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationcamera) |
| Service Collaboration Kit | [CollaborationDevicePicker（流转控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-collaborationdevicepicker) |
| Service Collaboration Kit | [devicePicker（设备选择控制器）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/servicecollaboration-devicepicker) |
| Share Kit | [harmonyShare（华为分享）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-harmony-share) |
| Share Kit | [systemShare（分享）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/share-system-share) |
| Speech Kit | [TextReader（朗读控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/speech-textreader-api) |
| Telephony Kit | [@ohos.telephony.call (拨打电话)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-call) |
| Telephony Kit | [@ohos.telephony.data (蜂窝数据)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-telephony-data) |
| Telephony Kit | [@ohos.telephony.esim (eSIM卡管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-esim) |
| Telephony Kit | [@ohos.telephony.observer (observer)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-observer) |
| Telephony Kit | [@ohos.telephony.radio (网络搜索)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-radio) |
| Telephony Kit | [@ohos.telephony.sim (SIM卡管理)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sim) |
| Telephony Kit | [@ohos.telephony.sms (短信服务)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sms) |
| Telephony Kit | [@ohos.telephony.vcard (VCard模块)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vcard) |
| Vision Kit | [CardRecognition（卡证识别控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-card-recognition) |
| Vision Kit | [DocumentScanner（文档扫描控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-document-scanner) |
| Vision Kit | [interactiveLiveness（人脸活体检测）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-interactive-liveness) |
| Vision Kit | [visionImageAnalyzer（AI识图控件）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/vision-image-analyzer) |
| Wallet Kit | [walletPass（Pass卡片能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-walletpass) |
| Wallet Kit | [walletTransitCard（交通卡能力）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-wallettransitcard) |
