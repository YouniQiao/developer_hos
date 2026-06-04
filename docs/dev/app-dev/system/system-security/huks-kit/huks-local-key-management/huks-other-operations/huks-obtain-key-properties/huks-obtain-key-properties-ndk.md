---
displayed_sidebar: appDevSidebar
title: "获取密钥属性(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-obtain-key-properties-ndk
---

HUKS提供了接口供业务获取指定密钥的相关属性。在获取指定密钥属性前，需要确保已在HUKS中生成或导入持久化存储的密钥。

![](./img/56ea6854.png)

轻量级智能穿戴不支持获取密钥属性功能。

从API 23开始支持[群组密钥](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-group-key-overview)特性。

## 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libhuks_ndk.z.so)
```

## 开发步骤

1. 构造对应参数。

   * keyAlias：密钥别名，封装成[OH\_Huks\_Blob](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-blob)结构，密钥别名最大长度为128字节。
   * paramSetIn：预留参数，暂不需要处理，传空即可。
   * paramSetOut：用于放置获取到的参数集结果，为[OH\_Huks\_ParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hukstypeapi-oh-huks-paramset)类型对象，需要业务提前申请好内存，需申请足够容纳获取到的密钥属性集的内存大小。
2. 调用接口[OH\_Huks\_GetKeyItemParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_getkeyitemparamset)，传入上述参数。
3. 返回值为成功码/错误码，获取成功后，从参数集中读取需要的参数。

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

struct OH_Huks_Param g_testGenerateKeyParam[] = {{.tag = OH_HUKS_TAG_ALGORITHM, .uint32Param = OH_HUKS_ALG_ECC},
                                                 {.tag = OH_HUKS_TAG_PURPOSE, .uint32Param = OH_HUKS_KEY_PURPOSE_AGREE},
                                                 {.tag = OH_HUKS_TAG_KEY_SIZE, .uint32Param = OH_HUKS_ECC_KEY_SIZE_256},
                                                 {.tag = OH_HUKS_TAG_DIGEST, .uint32Param = OH_HUKS_DIGEST_NONE}};

static OH_Huks_Result GenerateKeyHelper(const char *alias)
{
    struct OH_Huks_Blob aliasBlob = {.size = (uint32_t)strlen(alias), .data = (uint8_t *)alias};
    struct OH_Huks_ParamSet *testGenerateKeyParamSet = nullptr;
    struct OH_Huks_Result ohResult;
    do {
        /* 1.初始化密钥属性集 */
        ohResult = InitParamSet(&testGenerateKeyParamSet, g_testGenerateKeyParam,
                                sizeof(g_testGenerateKeyParam) / sizeof(OH_Huks_Param));
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        /* 1.生成密钥 */
        ohResult = OH_Huks_GenerateKeyItem(&aliasBlob, testGenerateKeyParamSet, nullptr);
    } while (0);
    OH_Huks_FreeParamSet(&testGenerateKeyParamSet);
    return ohResult;
}

static napi_value GetKeyParamSet(napi_env env, napi_callback_info info)
{
    /* 1. 参数构造：确定密钥别名 */
    const char *alias = "test_key";
    struct OH_Huks_Blob aliasBlob = { .size = (uint32_t)strlen(alias), .data = (uint8_t *)alias };
    /* 生成密钥 */
    OH_Huks_Result genResult = GenerateKeyHelper(alias);
    if (genResult.errorCode != OH_HUKS_SUCCESS) {
        napi_value ret;
        napi_create_int32(env, genResult.errorCode, &ret);
        return ret;
    }
    const size_t paramSetSize = 512;
    /* 构造参数：为参数集申请内存
     * 请业务按实际情况评估大小进行申请
     */
    struct OH_Huks_ParamSet *outParamSet = static_cast<struct OH_Huks_ParamSet *>(malloc(paramSetSize));
    if (outParamSet == nullptr) {
        return nullptr;
    }
    outParamSet->paramSetSize = paramSetSize;
    struct OH_Huks_Result ohResult;
    do {
        /* 2. 获取密钥属性集 */
        ohResult = OH_Huks_GetKeyItemParamSet(&aliasBlob, nullptr, outParamSet);
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        /* 3. 从参数集中读取参数，以OH_HUKS_TAG_PURPOSE为例 */
        OH_Huks_Param *purposeParam = nullptr; // 无需申请内存，获取后指针指向该参数在参数集中所处内存地址
        ohResult = OH_Huks_GetParam(outParamSet, OH_HUKS_TAG_PURPOSE, &purposeParam);
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
    } while (0);
    OH_Huks_FreeParamSet(&outParamSet);
    napi_value ret;
    napi_create_int32(env, ohResult.errorCode, &ret);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/UniversalKeystoreKit/OtherOperations/GetKeyAttributes/entry/src/main/cpp/napi_init.cpp#L15-L106" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：napi_init.cpp</a></div>
