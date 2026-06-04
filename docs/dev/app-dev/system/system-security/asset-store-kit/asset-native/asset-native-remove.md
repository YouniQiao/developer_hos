---
displayed_sidebar: appDevSidebar
title: "删除关键资产(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-native-remove
---

## 接口介绍

开发者可以查阅API文档，获取关键资产删除接口的详细说明：[OH\_Asset\_Remove](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-api-h#oh_asset_remove)。

在删除关键资产时，关键资产属性的内容参数如下表所示：

![](./img/dec88b3d.png)

下表中“ASSET\_TAG\_ALIAS”和名称包含“ASSET\_TAG\_DATA\_LABEL”的关键资产属性，用于存储业务自定义信息，其内容不会被加密，请勿存放敏感个人数据。

| 属性名称（Asset\_Tag） | 属性内容（Asset\_Value） | 是否必选 | 说明 |
| --- | --- | --- | --- |
| ASSET\_TAG\_ALIAS | 类型为uint8[]，长度为1-256字节。 | 可选 | 关键资产别名，每条关键资产的唯一索引。 |
| ASSET\_TAG\_ACCESSIBILITY | 类型为uint32\_t，取值范围详见[Asset\_Accessibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h#asset_accessibility)。 | 可选 | 基于锁屏状态的访问控制。 |
| ASSET\_TAG\_REQUIRE\_PASSWORD\_SET | 类型为bool。 | 可选 | 是否仅在设置了锁屏密码的情况下，可访问关键资产。为true时表示删除仅用户设置了锁屏密码才允许访问的关键资产；为false时表示删除无论用户是否设置锁屏密码，均可访问的关键资产。 |
| ASSET\_TAG\_AUTH\_TYPE | 类型为uint32\_t，取值范围详见[Asset\_AuthType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h#asset_authtype)。 | 可选 | 访问关键资产所需的用户认证类型。 |
| ASSET\_TAG\_SYNC\_TYPE | 类型为uint32\_t，取值范围详见[Asset\_SyncType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-asset-type-h#asset_synctype)。 | 可选 | 关键资产支持的同步类型。 |
| ASSET\_TAG\_IS\_PERSISTENT | 类型为bool。 | 可选 | 在应用卸载时是否需要保留关键资产。为true时表示删除应用卸载后会被保留的关键资产；为false时表示删除应用卸载后会被删除的关键资产。 |
| ASSET\_TAG\_DATA\_LABEL\_CRITICAL\_1 | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且有完整性保护。  **说明：** API12前长度为1-512字节。 |
| ASSET\_TAG\_DATA\_LABEL\_CRITICAL\_2 | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且有完整性保护。  **说明：** API12前长度为1-512字节。 |
| ASSET\_TAG\_DATA\_LABEL\_CRITICAL\_3 | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且有完整性保护。  **说明：** API12前长度为1-512字节。 |
| ASSET\_TAG\_DATA\_LABEL\_CRITICAL\_4 | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且有完整性保护。  **说明：** API12前长度为1-512字节。 |
| ASSET\_TAG\_DATA\_LABEL\_NORMAL\_1 | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且无完整性保护。  **说明：** API12前长度为1-512字节。 |
| ASSET\_TAG\_DATA\_LABEL\_NORMAL\_2 | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且无完整性保护。  **说明：** API12前长度为1-512字节。 |
| ASSET\_TAG\_DATA\_LABEL\_NORMAL\_3 | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且无完整性保护。  **说明：** API12前长度为1-512字节。 |
| ASSET\_TAG\_DATA\_LABEL\_NORMAL\_4 | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属信息，内容由业务自定义且无完整性保护。  **说明：** API12前长度为1-512字节。 |
| ASSET\_TAG\_DATA\_LABEL\_NORMAL\_LOCAL\_112+ | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。 |
| ASSET\_TAG\_DATA\_LABEL\_NORMAL\_LOCAL\_212+ | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。 |
| ASSET\_TAG\_DATA\_LABEL\_NORMAL\_LOCAL\_312+ | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。 |
| ASSET\_TAG\_DATA\_LABEL\_NORMAL\_LOCAL\_412+ | 类型为uint8[]，长度为1-2048字节。 | 可选 | 关键资产附属的本地信息，内容由业务自定义且无完整性保护，该项信息不会进行同步。 |
| ASSET\_TAG\_REQUIRE\_ATTR\_ENCRYPTED14+ | 类型为bool。 | 可选 | 是否删除业务自定义附属信息被加密的数据。为true时表示删除业务自定义附属信息加密存储的数据，为false时表示删除业务自定义附属信息不加密存储的数据。默认值为false。 |
| ASSET\_TAG\_GROUP\_ID18+ | 类型为uint8[]，长度为7-127字节。 | 可选 | 待删除的关键资产所属群组，默认删除不属于任何群组的关键资产。 |

## 代码示例

![](./img/f6cd47d3.png)

在删除前，需确保已有关键资产，可参考[指南文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-native-add)新增关键资产，否则将抛出NOT\_FOUND错误（错误码24000002）。

删除别名是demo\_alias的关键资产。

在指定群组中删除一条关键资产的示例代码详见[删除群组关键资产](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/asset-native-group-access-control#删除群组关键资产)。

1. 在CMake脚本中链接相关动态库。

   ```
   target_link_libraries(entry PUBLIC libasset_ndk.z.so)
   ```
2. 引用头文件。

   ```
   #include "napi/native_api.h"
   #include <string.h>
   #include "asset/asset_api.h"
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreNdk/entry/src/main/cpp/napi_init.cpp#L16-L20" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：napi_init.cpp</a></div>

3. 参考如下示例代码，进行业务功能开发。

   ```
   static napi_value RemoveAsset(napi_env env, napi_callback_info info)
   {
       const char *aliasStr = "demo_alias";

       Asset_Blob alias = {(uint32_t)(strlen(aliasStr)), (uint8_t *)aliasStr};
       Asset_Attr attr[] = {
           {.tag = ASSET_TAG_ALIAS, .value.blob = alias}, // 此处指定别名删除单条关键资产，也可不指定别名删除多条关键资产。
       };

       int32_t removeResult = OH_Asset_Remove(attr, sizeof(attr) / sizeof(attr[0]));
       napi_value ret;
       napi_create_int32(env, removeResult, &ret);
       return ret;
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Security/AssetStoreKit/AssetStoreNdk/entry/src/main/cpp/napi_init.cpp#L46-L61" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：napi_init.cpp</a></div>
