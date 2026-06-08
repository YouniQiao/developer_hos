---
displayed_sidebar: appDevSidebar
title: "生成密钥(C/C++)"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-ndk
format: md
upstream_id: dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-ndk
last_sync: 2026-06-07
sync_hash: 730ff89d
---
以ECC算法为例，生成随机密钥。具体的场景介绍及支持的算法规格，请参考[密钥生成支持的算法](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview#支持的算法)。

![](./img/c50402b7.png)

密钥别名中禁止包含个人数据等敏感信息。

## 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libhuks_ndk.z.so)
```

## 开发步骤

1. 指定密钥别名，密钥别名命名规范参考[密钥生成介绍及算法规格](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-key-generation-import/huks-key-generation/huks-key-generation-overview)。
2. 初始化密钥属性集。通过[OH\_Huks\_InitParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-param-h#oh_huks_initparamset)、[OH\_Huks\_AddParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-param-h#oh_huks_addparams)、[OH\_Huks\_BuildParamSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-param-h#oh_huks_buildparamset)构造密钥属性集paramSet。

   密钥属性集中必须包含[OH\_Huks\_KeyAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keyalg)、[OH\_Huks\_KeySize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keysize)、[OH\_Huks\_KeyPurpose](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_keypurpose)属性。注：一个密钥只能有一类PURPOSE，并且，生成密钥时指定的用途要与使用时的方式一致，否则会导致异常。
3. 调用[OH\_Huks\_GenerateKeyItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_generatekeyitem)，传入密钥别名和密钥属性集，生成密钥。

![](./img/23074e1f.png)

如果业务再次使用相同别名调用HUKS生成密钥，HUKS将生成新密钥并直接覆盖历史的密钥文件。

```
/* 以下以生成ECC密钥为例 */
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

static napi_value GenerateKey(napi_env env, napi_callback_info info)
{
    /* 1.确定密钥别名 */
    const char *alias = "test_generate";
    struct OH_Huks_Blob aliasBlob = {.size = (uint32_t)strlen(alias), .data = (uint8_t *)alias};
    struct OH_Huks_ParamSet *testGenerateKeyParamSet = nullptr;
    struct OH_Huks_Result ohResult;
    do {
        /* 2.初始化密钥属性集 */
        ohResult = InitParamSet(&testGenerateKeyParamSet, g_testGenerateKeyParam,
                                sizeof(g_testGenerateKeyParam) / sizeof(OH_Huks_Param));
        if (ohResult.errorCode != OH_HUKS_SUCCESS) {
            break;
        }
        /* 3.生成密钥 */
        ohResult = OH_Huks_GenerateKeyItem(&aliasBlob, testGenerateKeyParamSet, nullptr);
    } while (0);
    OH_Huks_FreeParamSet(&testGenerateKeyParamSet);
    napi_value ret;
    napi_create_int32(env, ohResult.errorCode, &ret);
    return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/UniversalKeystoreKit/GenerateKey/entry/src/main/cpp/napi_init.cpp#L16-L70" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>
