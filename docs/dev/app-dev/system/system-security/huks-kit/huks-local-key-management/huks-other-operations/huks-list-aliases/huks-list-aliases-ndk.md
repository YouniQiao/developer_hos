---
displayed_sidebar: appDevSidebar
title: "查询密钥别名集(C/C++)"
original_url: /docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-list-aliases/huks-list-aliases-ndk
format: md
upstream_id: dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-list-aliases/huks-list-aliases-ndk
last_sync: 2026-06-07
sync_hash: fde504dd
upstream_hash: 42134dedc2de
---

HUKS提供了接口供应用查询密钥别名集。

![](./img/69564255.png)

轻量级智能穿戴不支持查询密钥别名集功能。

从API 23开始支持[群组密钥](/docs/dev/app-dev/system/system-security/huks-kit/huks-local-key-management/huks-other-operations/huks-group-key/huks-group-key-overview)特性。

## 在CMake脚本中链接相关动态库

```
target_link_libraries(entry PUBLIC libhuks_ndk.z.so)
```

## 开发步骤

1. 初始化密钥属性集。用于查询指定密钥别名集TAG，TAG仅支持[OH\_HUKS\_TAG\_AUTH\_STORAGE\_LEVEL](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-type-h#oh_huks_tag)。
2. 调用接口[OH\_Huks\_ListAliases](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-huks-api-h#oh_huks_listaliases)，查询密钥别名集。

```
/* 以下查询密钥别名集为例 */
#include "huks/native_huks_api.h"
#include "huks/native_huks_param.h"
#include "napi/native_api.h"
#include <string.h>

OH_Huks_Result InitParamSet(
   struct OH_Huks_ParamSet **paramSet,
   const struct OH_Huks_Param *params,
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

struct OH_Huks_Param g_testQueryParam[] = {
   {
       .tag = OH_HUKS_TAG_AUTH_STORAGE_LEVEL,
       .uint32Param = OH_HUKS_AUTH_STORAGE_LEVEL_DE
   },
};

static napi_value ListAliases(napi_env env, napi_callback_info info)
{
   struct OH_Huks_ParamSet *testQueryParamSet = nullptr;
   struct OH_Huks_KeyAliasSet *outData = nullptr;
   struct OH_Huks_Result ohResult;
   do {
       /* 1.初始化密钥属性集 */
       ohResult = InitParamSet(&testQueryParamSet, g_testQueryParam,
           sizeof(g_testQueryParam) / sizeof(OH_Huks_Param));
       if (ohResult.errorCode != OH_HUKS_SUCCESS) {
           break;
       }
       /* 2.查询密钥别名集 */
       ohResult = OH_Huks_ListAliases(testQueryParamSet, &outData);
   } while (0);

   OH_Huks_FreeParamSet(&testQueryParamSet);
   OH_Huks_FreeKeyAliasSet(outData);
   napi_value ret;
   napi_create_int32(env, ohResult.errorCode, &ret);
   return ret;
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/UniversalKeystoreKit/OtherOperations/QueryKeyAliasSet/entry/src/main/cpp/napi_init.cpp#L16-L74" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>
