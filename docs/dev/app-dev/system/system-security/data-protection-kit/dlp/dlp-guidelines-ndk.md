---
title: "数据防泄漏服务开发指导(C/C++)"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dlp-guidelines-ndk
format: md
---


数据防泄漏（Data Loss Prevention，DLP）是系统提供的系统级的数据防泄漏解决方案，提供跨设备的文件的权限管理、加密存储、授权访问等能力。

* 权限管理：查询当前DLP沙箱的权限信息。
* 文件信息获取：获取DLP文件的基本信息，如原始文件名。
* 沙箱环境检测：查询当前应用是否运行在DLP沙箱环境。
* 配置管理：设置、获取和清理沙箱应用配置信息。

## 接口说明

数据防泄漏服务关键接口如下表所示。具体API说明详见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-dlp-permission-api-h)

| 名称 | 描述 |
| --- | --- |
| DLP\_ErrCode OH\_DLP\_GetDlpPermissionInfo(DLP\_FileAccess \*dlpFileAccess, uint32\_t \*flags) | 查询当前DLP沙箱的权限信息。 |
| DLP\_ErrCode OH\_DLP\_GetOriginalFileName(const char \*fileName, char \*\*originalFileName) | 获取指定DLP文件名的原始文件名。 |
| DLP\_ErrCode OH\_DLP\_IsInSandbox(bool \*isInSandbox) | 查询当前应用是否运行在DLP沙箱环境。 |
| DLP\_ErrCode OH\_DLP\_SetSandboxAppConfig(const char \*configInfo) | 设置沙箱应用配置信息。 |
| DLP\_ErrCode OH\_DLP\_GetSandboxAppConfig(char \*\*configInfo) | 获取沙箱应用配置信息。 |
| DLP\_ErrCode OH\_DLP\_CleanSandboxAppConfig() | 清理沙箱应用配置信息。 |

## 开发步骤

1. 在CMakeLists.txt中导入数据防泄漏的共享库，并链接该库。

   ```
   cmake_minimum_required(VERSION 3.5.0)
   project(DlpApiTest)

   set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})

   if(DEFINED PACKAGE_FIND_FILE)
       include(${PACKAGE_FIND_FILE})
   endif()

   include_directories(${NATIVERENDER_ROOT_PATH}
                       ${NATIVERENDER_ROOT_PATH}/include)

   add_library(entry SHARED napi_init.cpp)
   target_link_libraries(entry PUBLIC libace_napi.z.so libohdlp_permission.so)
   ```
2. 导入数据防泄漏服务的头文件和NAPI相关头文件。

   ```
   #include "napi/native_api.h"
   #include <cstdint>
   #include <cstdlib>
   #include "DataProtectionKit/dlp_permission_api.h"
   ```
3. 查询当前DLP沙箱的权限信息。

   ```
   static napi_value GetDlpPermissionInfo(napi_env env, napi_callback_info info)
   {
       DLP_FileAccess dlpFileAccess = NO_PERMISSION;
       uint32_t flags = 0;
       DLP_ErrCode ret = OH_DLP_GetDlpPermissionInfo(&dlpFileAccess, &flags);
       if (ret == DLP_ErrCode::ERR_OH_SUCCESS) {
           napi_value result[2] = {nullptr};
           napi_create_int32(env, dlpFileAccess, &result[0]);
           napi_create_int32(env, flags, &result[1]);
           return result[1];
       }
       napi_value result = nullptr;
       napi_create_int32(env, ret, &result);
       return result;
   }
   ```
4. 获取指定DLP文件名的原始文件名。

   ```
   static napi_value GetOriginalFileName(napi_env env, napi_callback_info info)
   {
       const char *fileName = "test.txt.dlp";
       char *originalFileName = nullptr;
       DLP_ErrCode ret = OH_DLP_GetOriginalFileName(fileName, &originalFileName);
       if (ret == DLP_ErrCode::ERR_OH_SUCCESS) {
           napi_value result = nullptr;
           napi_create_string_utf8(env, originalFileName, NAPI_AUTO_LENGTH, &result);
           return result;
       }
       napi_value result = nullptr;
       napi_create_int32(env, ret, &result);
       free(originalFileName);
       return result;
   }
   ```
5. 查询当前应用是否运行在DLP沙箱环境。

   ```
   static napi_value IsInSandbox(napi_env env, napi_callback_info info)
   {
       bool isInSandbox = false;
       DLP_ErrCode ret = OH_DLP_IsInSandbox(&isInSandbox);
       if (ret == DLP_ErrCode::ERR_OH_SUCCESS) {
           napi_value result = nullptr;
           napi_get_boolean(env, isInSandbox, &result);
           return result;
       }
       napi_value result = nullptr;
       napi_create_int32(env, ret, &result);
       return result;
   }
   ```
6. 设置沙箱应用配置信息。

   ```
   static napi_value SetSandboxAppConfig(napi_env env, napi_callback_info info)
   {
       const char *configInfo = "configInfo";
       DLP_ErrCode ret = OH_DLP_SetSandboxAppConfig(configInfo);

       napi_value result = nullptr;
       napi_create_int32(env, ret, &result);
       return result;
   }
   ```
7. 获取沙箱应用配置信息。

   ```
   static napi_value GetSandboxAppConfig(napi_env env, napi_callback_info info)
   {
       char *configInfo = nullptr;
       DLP_ErrCode ret = OH_DLP_GetSandboxAppConfig(&configInfo);
       if (ret == DLP_ErrCode::ERR_OH_SUCCESS) {
           napi_value result = nullptr;
           napi_create_string_utf8(env, configInfo, NAPI_AUTO_LENGTH, &result);
           return result;
       }
       napi_value result = nullptr;
       napi_create_int32(env, ret, &result);
       free(configInfo);
       return result;
   }
   ```
8. 清理沙箱应用配置信息。

   ```
   static napi_value CleanSandboxAppConfig(napi_env env, napi_callback_info info)
   {
       DLP_ErrCode ret = OH_DLP_CleanSandboxAppConfig();

       napi_value result = nullptr;
       napi_create_int32(env, ret, &result);
       return result;
   }
   ```
