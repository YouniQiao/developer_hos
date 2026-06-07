---
title: "HMAC(C/C++)"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-ndk
format: md
---


HMAC是密钥相关的哈希运算消息认证码（Hash-based Message Authentication Code）。具体的场景介绍及支持的算法规格，请参考[HMAC介绍及算法规格](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-use/huks-hmac/huks-hmac-overview)。

## 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libhuks_ndk.z.so)
```

## 开发步骤

**生成密钥**

1. 指定密钥别名，密钥别名命名规范参考[密钥生成介绍及算法规格](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview)。
2. 初始化密钥属性集。
3. 调用[OH\_Huks\_GenerateKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_generatekeyitem)生成密钥，HMAC支持的规格请参考[密钥生成支持的算法](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview#支持的算法)。

除此之外，开发者也可以参考[密钥导入](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-import/huks-key-import-overview#支持的算法)的规格介绍，导入已有的密钥。

**执行HMAC**

1. 获取密钥别名。
2. 获取待运算的数据。
3. 调用[OH\_Huks\_InitParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-param-h#oh_huks_initparamset)指定算法参数配置。
4. 调用[OH\_Huks\_InitSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_initsession)初始化密钥会话，并获取会话的句柄handle。
5. 调用[OH\_Huks\_FinishSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_finishsession)结束密钥会话，获取哈希后的数据。

```
#include "huks/native_huks_api.h"
#include "huks/native_huks_param.h"
#include "napi/native_api.h"
#include <cstring>

OH_Huks_Result InitParamSet(struct OH_Huks_ParamSet **paramSet, const struct OH_Huks_Param *params,
                            uint32_t paramCount)
{
    OH_Huks_Result ret = OH_Huks_InitParamSet(paramSet);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        return ret;
    }
    ret = OH_Huks_AddParams(*paramSet, params, paramCount);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        OH_Huks_FreeParamSet(paramSet);
        return ret;
    }
    ret = OH_Huks_BuildParamSet(paramSet);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        OH_Huks_FreeParamSet(paramSet);
        return ret;
    }
    return ret;
}

static struct OH_Huks_Param g_genHmacParams[] = {{.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_HMAC},
                                                 {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_MAC},
                                                 {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_AES_KEY_SIZE_256},
                                                 {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_SHA384}};

static const uint32_t HMAC_COMMON_SIZE = 1024;
OH_Huks_Result HksHmacTest(const struct OH_Huks_Blob *keyAlias, const struct OH_Huks_ParamSet *hmacParamSet,
                           const struct OH_Huks_Blob *inData, struct OH_Huks_Blob *hashText)
{
    uint8_t handleE[sizeof(uint64_t)] = {0};
    struct OH_Huks_Blob handle = {sizeof(uint64_t), handleE};
    OH_Huks_Result ret = OH_Huks_InitSession(keyAlias, hmacParamSet, &handle, nullptr);
    if (ret.errorCode != OH_HUKS_SUCCESS) {
        return ret;
    }
    ret = OH_Huks_FinishSession(&handle, hmacParamSet, inData, hashText);
    return ret;
}

static napi_value HmacKey(napi_env env, napi_callback_info info)
{
    char tmpKeyAlias[] = "test_hmac";
    struct OH_Huks_Blob keyAlias = {(uint32_t)strlen(tmpKeyAlias), (uint8_t *)tmpKeyAlias};
    struct OH_Huks_ParamSet *hmacParamSet = nullptr;
    OH_Huks_Result ohResult;

    do {
        ohResult = InitParamSet(&hmacParamSet, g_genHmacParams, sizeof(g_genHmacParams) / sizeof(OH_Huks_Param));
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }

        ohResult = OH_Huks_GenerateKeyItem(&keyAlias, hmacParamSet, nullptr);
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }

        char tmpInData[] = "HMAC_MAC_INDATA_1";
        struct OH_Huks_Blob inData = {(uint32_t)strlen(tmpInData), (uint8_t *)tmpInData};
        uint8_t cipher[HMAC_COMMON_SIZE] = {0};
        struct OH_Huks_Blob hashText = {HMAC_COMMON_SIZE, cipher};

        ohResult = HksHmacTest(&keyAlias, hmacParamSet, &inData, &hashText);
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
    } while (0);

    OH_Huks_FreeParamSet(&hmacParamSet);
    napi_value ret;
    napi_create_int32(env, ohResult.errorCode, &ret);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/UniversalKeystoreKit/KeyUsage/HMAC/entry/src/main/cpp/napi_init.cpp#L16-L95" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>
