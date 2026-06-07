---
title: "授权持久化(C/C++)"
original_url: /docs/dev/app-dev/application-framework/core-file-kit/user-files/select-save-user-file/native-fileshare-guidelines
format: md
---


## 场景介绍

应用通过Picker获取临时授权，临时授权在应用退出后或者设备重启后会清除。如果应用重启或者设备重启后需要直接访问之前已访问过的文件，则对文件进行[持久化授权](/docs/dev/app-dev/application-framework/core-file-kit/user-files/select-save-user-file/file-persistpermission#场景介绍)。FileShare提供了支持基于uri的文件及目录授予持久化权限、权限激活、权限查询等方法。

## 接口说明

接口的详细介绍请参见[oh\_file\_uri.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-file-share-h)。

| 接口名称 | 描述 |
| --- | --- |
| OH\_FileShare\_PersistPermission(const FileShare\_PolicyInfo \*policies, unsigned int policyNum, FileShare\_PolicyErrorResult \*\*result, unsigned int \*resultNum) | 对所选择的多个文件或目录uri持久化授权。 |
| OH\_FileShare\_RevokePermission(const FileShare\_PolicyInfo \*policies, unsigned int policyNum, FileShare\_PolicyErrorResult \*\*result, unsigned int \*resultNum) | 对所选择的多个文件或目录uri取消持久化授权。 |
| OH\_FileShare\_ActivatePermission(const FileShare\_PolicyInfo \*policies, unsigned int policyNum, FileShare\_PolicyErrorResult \*\*result, unsigned int \*resultNum) | 使能多个已经持久化授权过的文件或目录uri。 |
| OH\_FileShare\_DeactivatePermission(const FileShare\_PolicyInfo \*policies, unsigned int policyNum, FileShare\_PolicyErrorResult \*\*result, unsigned int \*resultNum) | 取消使能授权过的多个文件或目录uri。 |
| OH\_FileShare\_CheckPersistentPermission(const FileShare\_PolicyInfo \*policies, unsigned int policyNum, bool \*\*result, unsigned int \*resultNum) | 校验所选择的多个文件或目录uri的持久化权限结果。 |
| OH\_FileShare\_ReleasePolicyErrorResult(FileShare\_PolicyErrorResult \*errorResult, unsigned int resultNum) | 释放FileShare\_PolicyErrorResult内存。 |

## 约束与限制

* 使用文件分享的相关接口，需确认设备具有以下系统能力：SystemCapability.FileManagement.AppFileService.FolderAuthorization。
* 在调用文件分享的相关接口前，需要申请权限："[ohos.permission.FILE\_ACCESS\_PERSIST](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/restricted-permissions#ohospermissionfile_access_persist)"，申请方式请参考[选择申请权限的方式](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/request-app-permissions/determine-application-mode)。

## 开发步骤

以下步骤描述了如何使用FileShare提供的Native API接口。

**添加动态链接库**

CMakeLists.txt中添加以下lib。

```
target_link_libraries(sample PUBLIC libohfileshare.so)
```

**头文件**

```
#include <filemanagement/fileshare/oh_file_share.h>
#include <iostream>
```

1. 创建FileShare\_PolicyInfo实例,调用OH\_FileShare\_PersistPermission接口，设置uri的持久化授权，接口入参policyNum最大上限为500。

   ```
   static const uint32_t policyNum = 2;
   char strTestPath1[] = "file://com.example.fileshare/data/storage/el2/base/files/test1.txt";
   char strTestPath2[] = "file://com.example.fileshare/data/storage/el2/base/files/test2.txt";
   FileShare_PolicyInfo policy[policyNum] = {
       {strTestPath1, static_cast<unsigned int>(strlen(strTestPath1)), FileShare_OperationMode::READ_MODE},
       {strTestPath2, static_cast<unsigned int>(strlen(strTestPath2)), FileShare_OperationMode::WRITE_MODE}};
   FileShare_PolicyErrorResult* result = nullptr;
   uint32_t resultNum = 0;
   napi_value napiResult;
   std::string resultStr;
   auto ret = OH_FileShare_PersistPermission(policy, policyNum, &result, &resultNum);
   if (ret != ERR_OK) {
       if (ret == ERR_EPERM && result != nullptr) {
           for (uint32_t i = 0; i < resultNum; i++) {
               std::cout << "error uri: " <<  result[i].uri << std::endl;
               std::cout << "error code: " <<  result[i].code << std::endl;
               std::cout << "error message: " << result[i].message << std::endl;
               // ...
           }
       }
   }
   OH_FileShare_ReleasePolicyErrorResult(result, resultNum);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/UserFile/FileShareDevelopment_C/entry/src/main/cpp/napi_init.cpp#L23-L56" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

2. 调用OH\_FileShare\_ActivatePermission接口，激活已授权过的uri，接口入参policyNum最大上限为500。

   ```
   auto ret = OH_FileShare_ActivatePermission(policy, policyNum, &result, &resultNum);
   if (ret != ERR_OK) {
       if (ret == ERR_EPERM && result != nullptr) {
           for (uint32_t i = 0; i < resultNum; i++) {
               std::cout << "error uri: " <<  result[i].uri << std::endl;
               std::cout << "error code: " <<  result[i].code << std::endl;
               std::cout << "error message: " << result[i].message << std::endl;
               // ...
           }
       }
   }
   OH_FileShare_ReleasePolicyErrorResult(result, resultNum);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/UserFile/FileShareDevelopment_C/entry/src/main/cpp/napi_init.cpp#L76-L99" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

3. 调用OH\_FileShare\_DeactivatePermission接口，停止已启用授权过uri的访问权限，接口入参policyNum最大上限为500。

   ```
   auto ret = OH_FileShare_DeactivatePermission(policy, policyNum, &result, &resultNum);
   if (ret != ERR_OK) {
       if (ret == ERR_EPERM && result != nullptr) {
           for (uint32_t i = 0; i < resultNum; i++) {
               std::cout << "error uri: " <<  result[i].uri << std::endl;
               std::cout << "error code: " <<  result[i].code << std::endl;
               std::cout << "error message: " << result[i].message << std::endl;
               // ...
           }
       }
   }
   OH_FileShare_ReleasePolicyErrorResult(result, resultNum);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/UserFile/FileShareDevelopment_C/entry/src/main/cpp/napi_init.cpp#L119-L142" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

4. 调用OH\_FileShare\_RevokePermission接口，撤销已经授权的uri持久化权限，接口入参policyNum最大上限为500。

   ```
   auto ret = OH_FileShare_RevokePermission(policy, policyNum, &result, &resultNum);
   if (ret != ERR_OK) {
       if (ret == ERR_EPERM && result != nullptr) {
           for (uint32_t i = 0; i < resultNum; i++) {
               std::cout << "error uri: " <<  result[i].uri << std::endl;
               std::cout << "error code: " <<  result[i].code << std::endl;
               std::cout << "error message: " << result[i].message << std::endl;
               // ...
           }
       }
   }
   OH_FileShare_ReleasePolicyErrorResult(result, resultNum);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/UserFile/FileShareDevelopment_C/entry/src/main/cpp/napi_init.cpp#L162-L185" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>

5. 调用OH\_FileShare\_CheckPersistentPermission接口，检查uri持久化权限，接口入参policyNum最大上限为500。

   ```
   bool *result = nullptr;
   auto ret = OH_FileShare_CheckPersistentPermission(policy, policyNum, &result, &resultNum);
   if (ret != ERR_OK) {
       if (ret == ERR_EPERM && result != nullptr) {
           for (uint32_t i = 0; i < resultNum && resultNum <= policyNum; i++) {
               std::cout << "uri: " <<  policy[i].uri << std::endl;
               std::cout << "result: " <<  result[i] << std::endl;
               // ...
           }
       }
   }
   std::cout << "retCode: " <<  ret << std::endl;
   free(result);
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/CoreFile/UserFile/FileShareDevelopment_C/entry/src/main/cpp/napi_init.cpp#L204-L225" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：napi_init.cpp</a></div>
