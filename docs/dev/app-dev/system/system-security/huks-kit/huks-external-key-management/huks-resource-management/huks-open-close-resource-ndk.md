---
title: "打开资源/关闭资源(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-open-close-resource-ndk
---

## 打开资源

从API 22开始，huksExternalCrypto提供打开/关闭资源功能接口。应用在密钥操作之前（密钥操作、通用操作、PIN码认证等），需要先调用[OH\_Huks\_OpenResource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_openresource)打开资源。打开资源需要获取resourceId，resourceId通过调用证书管理系统能力提供的[证书选择接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22)获取。

### 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libhuks_ndk.z.so libhuks_external_crypto.z.so)
```

### 开发步骤

1. 通过证书管理系统能力提供的[证书选择接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22)获取[keyUri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-certmanagerdialog#certreference22)，并将其作为resourceId。
2. 初始化参数集：通过[OH\_Huks\_InitExternalCryptoParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_initexternalcryptoparamset)、[OH\_Huks\_AddExternalCryptoParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_addexternalcryptoparams)、[OH\_Huks\_BuildExternalCryptoParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_buildexternalcryptoparamset)构造参数集paramSet。
3. 调用[OH\_Huks\_OpenResource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_openresource)打开资源。

### 开发案例

```
#include "huks/native_huks_external_crypto_api.h"
#include "huks/native_huks_param.h"
#include "napi/native_api.h"
#include <string.h>

OH_Huks_Result InitParamSet(
    struct OH_Huks_ExternalCryptoParamSet **paramSet,
    const struct OH_Huks_ExternalCryptoParam *params,
    uint32_t paramCount)
{
    OH_Huks_Result ret = OH_Huks_InitExternalCryptoParamSet(paramSet);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        return ret;
    }
    ret = OH_Huks_AddExternalCryptoParams(*paramSet, params, paramCount);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        OH_Huks_FreeExternalCryptoParamSet(paramSet);
        return ret;
    }
    ret = OH_Huks_BuildExternalCryptoParamSet(paramSet);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        OH_Huks_FreeExternalCryptoParamSet(paramSet);
        return ret;
    }
    return ret;
}

static const char *g_resourceId = "{\"providerName\":\"testProviderName\",\"abilityName\":\"CryptoExtension\",\"bundleName\":\"com.example.cryptoapplication\",\"index\":{\"key\":\"testKey\"}}";

static struct OH_Huks_ExternalCryptoParam g_openResourceParamsTest[] = {};

static napi_value OpenResource(napi_env env, napi_callback_info info)
{
    struct OH_Huks_Blob resourceId = {
        (uint32_t)strlen(g_resourceId),
        (uint8_t *)g_resourceId
    };
    struct OH_Huks_ExternalCryptoParamSet *openResourceParamSet = nullptr;
    OH_Huks_Result ohResult;
    do {
        ohResult = InitParamSet(&openResourceParamSet, g_openResourceParamsTest,
            sizeof(g_openResourceParamsTest) / sizeof(OH_Huks_ExternalCryptoParam));
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        ohResult = OH_Huks_OpenResource(&resourceId, openResourceParamSet);
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
    } while (0);
    OH_Huks_FreeExternalCryptoParamSet(&openResourceParamSet);

    napi_value ret;
    napi_create_int32(env, ohResult.errorCode, &ret);
    return ret;
}
```

## 关闭资源

生态应用调用证书HAP界面，展示证书列表，用户选择证书，生态应用拿到对应的resourceId，关闭资源依赖于对应的resourceId。具体的场景介绍及规格，请参考[资源管理介绍及规格](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-resource-management-overview)。

### 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libhuks_ndk.z.so libhuks_external_crypto.z.so)
```

### 开发步骤

1. 通过证书管理系统能力提供的[证书选择接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22)获取resourceId。
2. 初始化参数集：通过[OH\_Huks\_InitExternalCryptoParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_initexternalcryptoparamset)、[OH\_Huks\_AddExternalCryptoParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_addexternalcryptoparams)、[OH\_Huks\_BuildExternalCryptoParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_buildexternalcryptoparamset)构造参数集paramSet。
3. 调用[OH\_Huks\_CloseResource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-external-crypto-api-h#oh_huks_closeresource)关闭资源。该接口会回调[onClearUkeyPinAuthState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoextensionability#cryptoextensionabilityonclearukeypinauthstate)清理该资源关联的PIN认证状态，以及会回调[onFinishSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-cryptoextensionability#cryptoextensionabilityonfinishsession)清理该资源关联的会话handle。

### 开发案例

```
#include "huks/native_huks_external_crypto_api.h"
#include "huks/native_huks_param.h"
#include "huks/native_huks_type.h"
#include "huks/native_huks_api.h"
#include "napi/native_api.h"
#include <string.h>

OH_Huks_Result InitParamSet(
    struct OH_Huks_ExternalCryptoParamSet **paramSet,
    const struct OH_Huks_ExternalCryptoParam *params,
    uint32_t paramCount)
{
    OH_Huks_Result ret = OH_Huks_InitExternalCryptoParamSet(paramSet);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        return ret;
    }
    ret = OH_Huks_AddExternalCryptoParams(*paramSet, params, paramCount);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        OH_Huks_FreeExternalCryptoParamSet(paramSet);
        return ret;
    }
    ret = OH_Huks_BuildExternalCryptoParamSet(paramSet);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        OH_Huks_FreeExternalCryptoParamSet(paramSet);
        return ret;
    }
    return ret;
}

static const char *g_resourceId = "{\"providerName\":\"testProviderName\",\"abilityName\":\"CryptoExtension\",\"bundleName\":\"com.example.cryptoapplication\",\"userid\":100,\"index\":{\"key\":\"testKey\"}}";

static struct OH_Huks_ExternalCryptoParam g_closeResourceParamsTest[] = {};

static napi_value CloseResource(napi_env env, napi_callback_info info)
{
    struct OH_Huks_Blob resourceId = {
        (uint32_t)strlen(g_resourceId),
        (uint8_t *)g_resourceId
    };
    struct OH_Huks_ExternalCryptoParamSet *closeResourceParamSet = nullptr;
    OH_Huks_Result ohResult;
    do {
        ohResult = InitParamSet(&closeResourceParamSet, g_closeResourceParamsTest,
            sizeof(g_closeResourceParamsTest) / sizeof(OH_Huks_ExternalCryptoParam));
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        ohResult = OH_Huks_CloseResource(&resourceId, closeResourceParamSet);
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
    } while (0);
    OH_Huks_FreeExternalCryptoParamSet(&closeResourceParamSet);

    napi_value ret;
    napi_create_int32(env, ohResult.errorCode, &ret);
    return ret;
}
```
