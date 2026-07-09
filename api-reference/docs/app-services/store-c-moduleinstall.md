---
title: "ModuleInstall"
upstream_id: "harmonyos-references/store-c-moduleinstall"
catalog: "harmonyos-references"
content_hash: "ecdc9c441e44"
synced_at: "2026-07-09T01:01:15.818954"
---

# ModuleInstall

#### 概述

描述AppGallery kit提供按需分发能力。

起始版本： 5.0.3(15)

#### 汇总

#### [h2]文件

| 名称 | 描述 |
| --- | --- |
| [module_install.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-module_install) | 声明按需分发能力提供的API。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) | 安装模块信息。 |
| typedef struct [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) | 安装模块结果。 |
| typedef struct [ModuleInstall_StatusCallback](#moduleinstall_statuscallback) [ModuleInstall_StatusCallback](#moduleinstall_statuscallback) | 模块安装状态回调。 |
| typedef void (*[ModuleInstall_OnStatusCallback](#moduleinstall_onstatuscallback))(char *bundleName, char *eventInfo) | 监听回调函数。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_errcode) { E_NO_ERROR = 0, E_PARAMS = 401, E_QUERY_MODULE = 1006500001, E_REPEATED_CALL = 1006500002, E_CONNECT_SA = 1006500004, E_OFF_WITHOUT_ON = 1006500006, E_CONNECT_SERVICE_EXTENSION = 1006500007, E_WRITE_PARAM = 1006500008, E_REQUEST_SERVER = 1006500009, E_RESPONSE_INVALID = 1006500010, E_INNER_ERROR = 1006500011 } | 枚举错误码。 |
| [ModuleInstall_InstallStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_installstatus) { INSTALLED = 0, NOT_INSTALLED = 1 } | 枚举安装状态。 |
| [ModuleInstall_RequestCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_requestcode) { MODULE_ALREADY_EXISTS = -8, MODULE_UNAVAILABLE = -7, INVALID_REQUEST = -6, NETWORK_ERROR = -5, INVOKER_VERIFICATION_FAILED = -4, FOREGROUND_REQUIRED = -3, ACTIVE_SESSION_LIMIT_EXCEEDED = -2, FAILURE = -1, SUCCESS = 0, DOWNLOAD_WAIT_WIFI = 1 } | 枚举请求码。 |
| [ModuleInstall_TaskStatus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/store-c-moduleinstall#moduleinstall_taskstatus) { CREATE_TASK_FAILED = -4, HIGHER_VERSION_INSTALLED = -3, TASK_ALREADY_EXISTS = -2, TASK_UNFOUND = -1, TASK_CREATED = 0, DOWNLOADING = 1, DOWNLOAD_PAUSED = 2, DOWNLOAD_WAITING = 3, DOWNLOAD_SUCCESSFUL = 4, DOWNLOAD_FAILED = 5, DOWNLOAD_WAIT_FOR_WIFI = 6, INSTALL_WAITING = 20, INSTALLING = 21, INSTALL_SUCCESSFUL = 22, INSTALL_FAILED = 23 } | 枚举任务状态。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_ErrCode](#moduleinstall_errcode) [HMS_ModuleInstall_GetInstalledModule](#hms_moduleinstall_getinstalledmodule)(const char *moduleName, unsigned int length, [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) **installedModule) | 查询模块是否安装。 |
| char *[HMS_ModuleInstall_GetInstalledModuleName](#hms_moduleinstall_getinstalledmodulename)(const [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) *installedModule) | 获取模块名。 |
| int [HMS_ModuleInstall_GetInstalledModuleType](#hms_moduleinstall_getinstalledmoduletype)(const [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) *installedModule) | 获取模块类型。 |
| [ModuleInstall_InstallStatus](#moduleinstall_installstatus) [HMS_ModuleInstall_GetModuleInstallStatus](#hms_moduleinstall_getmoduleinstallstatus)(const [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) *installedModule) | 获取模块安装状态。 |
| [ModuleInstall_ErrCode](#moduleinstall_errcode) [HMS_ModuleInstall_FetchModules](#hms_moduleinstall_fetchmodules)(const char *bundleName, unsigned int length, char **moduleNames, unsigned int moduleNamesLength, [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) **fetchModulesResult) | 请求下载模块。 |
| [ModuleInstall_RequestCode](#moduleinstall_requestcode) [HMS_ModuleInstall_GetFetchModulesRequestCode](#hms_moduleinstall_getfetchmodulesrequestcode)(const [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult) | 获取模块下载请求码。 |
| [ModuleInstall_TaskStatus](#moduleinstall_taskstatus) [HMS_ModuleInstall_GetFetchModulesTaskStatus](#hms_moduleinstall_getfetchmodulestaskstatus)( const [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult) | 获取模块下载任务状态。 |
| char *[HMS_ModuleInstall_GetFetchModulesTaskId](#hms_moduleinstall_getfetchmodulestaskid)(const [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult) | 获取模块下载任务id。 |
| char *[HMS_ModuleInstall_GetFetchModulesDesc](#hms_moduleinstall_getfetchmodulesdesc)(const [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult) | 获取模块下载描述。 |
| char *[HMS_ModuleInstall_GetFetchModules](#hms_moduleinstall_getfetchmodules)(const [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult) | 获取模块下载模块名。 |
| int [HMS_ModuleInstall_GetFetchModulesTotalSize](#hms_moduleinstall_getfetchmodulestotalsize)(const [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult) | 获取模块下载总大小。 |
| int [HMS_ModuleInstall_GetFetchModulesDownloadedSize](#hms_moduleinstall_getfetchmodulesdownloadedsize)(const [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult) | 获取模块下载已下载大小。 |
| [ModuleInstall_ErrCode](#moduleinstall_errcode) [HMS_ModuleInstall_CancelTask](#hms_moduleinstall_canceltask)(const char *taskId, unsigned int length, unsigned int cancelResult) | 取消下载任务。 |
| [ModuleInstall_ErrCode](#moduleinstall_errcode) [HMS_ModuleInstall_ShowCellularDataConfirmation](#hms_moduleinstall_showcellulardataconfirmation)(const char *taskId, unsigned int length, unsigned int showResult) | 展示流量弹窗。 |
| [ModuleInstall_StatusCallback](#moduleinstall_statuscallback) *[HMS_ModuleInstall_CreateStatusCallback](#hms_moduleinstall_createstatuscallback)([ModuleInstall_OnStatusCallback](#moduleinstall_onstatuscallback) *onStatusCallback) | 创建下载进度监听回调。 |
| [ModuleInstall_ErrCode](#moduleinstall_errcode) [HMS_ModuleInstall_On](#hms_moduleinstall_on)(const char *bundleName, unsigned int length, unsigned int appIndex, unsigned int period, [ModuleInstall_StatusCallback](#moduleinstall_statuscallback) **callback) | 下载进度监听。 |
| void [HMS_ModuleInstall_ReleaseStatusCallback](#hms_moduleinstall_releasestatuscallback)([ModuleInstall_StatusCallback](#moduleinstall_statuscallback) *statusCallback) | 释放下载进度监听回调。 |
| [ModuleInstall_ErrCode](#moduleinstall_errcode) [HMS_ModuleInstall_Off](#hms_moduleinstall_off)(const char *bundleName, unsigned int length, unsigned int appIndex) | 取消下载进度监听。 |

#### 类型定义说明

#### [h2]ModuleInstall_InstalledModule

```
typedef struct ModuleInstall_InstalledModule ModuleInstall_InstalledModule
```
 描述

安装模块信息。

起始版本： 5.0.3(15)

#### [h2]ModuleInstall_FetchModulesResult

```
typedef struct ModuleInstall_FetchModulesResult ModuleInstall_FetchModulesResult
```
 描述

安装模块结果。

起始版本： 5.0.3(15)

#### [h2]ModuleInstall_StatusCallback

```
typedef struct ModuleInstall_StatusCallback ModuleInstall_StatusCallback
```
 描述

模块安装状态回调。

起始版本： 5.0.3(15)

#### [h2]ModuleInstall_OnStatusCallback

```
typedef void (*ModuleInstall_OnStatusCallback)(char *bundleName, char *eventInfo)
```
 描述

监听回调函数。

起始版本： 5.0.3(15)

#### 枚举类型说明

#### [h2]ModuleInstall_ErrCode

```
enum ModuleInstall_ErrCode
```
 描述

枚举错误码。

起始版本： 5.0.3(15)

| 枚举值 | 描述 |
| --- | --- |
| E_NO_ERROR = 0 | 成功。 |
| E_PARAMS = 401 | 无效的参数。 |
| E_QUERY_MODULE = 1006500001 | 调用包管理模块接口异常。 |
| E_REPEATED_CALL = 1006500002 | 重复调用接口，输入相同。 |
| E_CONNECT_SA = 1006500004 | 服务异常。 |
| E_OFF_WITHOUT_ON = 1006500006 | 未与[HMS_ModuleInstall_On](#hms_moduleinstall_on)接口共同使用。 |
| E_CONNECT_SERVICE_EXTENSION = 1006500007 | 服务连接失败。 |
| E_WRITE_PARAM = 1006500008 | 参数写入异常。 |
| E_REQUEST_SERVER = 1006500009 | 请求服务异常。 |
| E_RESPONSE_INVALID = 1006500010 | 响应参数无法解析。 |
| E_INNER_ERROR = 1006500011 | 内部错误。 |

#### [h2]ModuleInstall_InstallStatus

```
enum ModuleInstall_InstallStatus
```
 描述

枚举安装状态。

起始版本： 5.0.3(15)

| 枚举值 | 描述 |
| --- | --- |
| INSTALLED = 0 | 已安装。 |
| NOT_INSTALLED = 1 | 未安装。 |

#### [h2]ModuleInstall_RequestCode

```
enum ModuleInstall_RequestCode
```
 描述

枚举按需下载模块请求码。

起始版本： 5.0.3(15)

| 枚举值 | 描述 |
| --- | --- |
| MODULE_ALREADY_EXISTS = -8 | 模块已存在。 |
| MODULE_UNAVAILABLE = -7 | 要下载的模块不存在或者模块不适配该设备。 |
| INVALID_REQUEST = -6 | 该请求无效，请求中包含的信息不准确。 |
| NETWORK_ERROR = -5 | 网络异常，请求失败。 |
| INVOKER_VERIFICATION_FAILED = -4 | 调用者信息异常。 |
| FOREGROUND_REQUIRED = -3 | 仅允许应用在前台时请求按需加载。 |
| ACTIVE_SESSION_LIMIT_EXCEEDED = -2 | 请求被拒绝，因为当前至少有一个请求正在下载。 |
| FAILURE = -1 | 失败。 |
| SUCCESS = 0 | 成功。 |
| DOWNLOAD_WAIT_WIFI = 1 | 当前使用的是流量，开发者需要调用 [HMS_ModuleInstall_ShowCellularDataConfirmation](#hms_moduleinstall_showcellulardataconfirmation)接口，提醒用户确认是否使用流量下载。 |

#### [h2]ModuleInstall_TaskStatus

```
enum ModuleInstall_TaskStatus
```
 描述

枚举任务状态。

起始版本： 5.0.3(15)

| 枚举值 | 描述 |
| --- | --- |
| CREATE_TASK_FAILED = -4 | 创建下载任务失败。 |
| HIGHER_VERSION_INSTALLED = -3 | 本地存在相同或者更高版本。 |
| TASK_ALREADY_EXISTS = -2 | 下载任务已存在。 |
| TASK_UNFOUND = -1 | 下载任务不存在。 |
| TASK_CREATED = 0 | 创建下载任务成功。 |
| DOWNLOADING = 1 | 下载中。 |
| DOWNLOAD_PAUSED = 2 | 暂停中。 |
| DOWNLOAD_WAITING = 3 | 等待下载中。 |
| DOWNLOAD_SUCCESSFUL = 4 | 下载成功。 |
| DOWNLOAD_FAILED = 5 | 下载失败。 |
| DOWNLOAD_WAIT_FOR_WIFI = 6 | Wi-Fi预约。 |
| INSTALL_WAITING = 20 | 等待安装。 |
| INSTALLING = 21 | 安装中。 |
| INSTALL_SUCCESSFUL = 22 | 安装完成。 |
| INSTALL_FAILED = 23 | 安装失败。 |

#### 函数说明

#### [h2]HMS_ModuleInstall_GetInstalledModule

```
ModuleInstall_ErrCode HMS_ModuleInstall_GetInstalledModule(const char *moduleName, unsigned int length,
    ModuleInstall_InstalledModule **installedModule)
```
 描述

查询模块是否安装。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| char *moduleName | 模块名。 |
| int length | 模块名长度，最大长度512。 |
| [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) **installedModule | 模块信息。 |

返回：

返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_QUERY_MODULE表示调用包管理模块接口异常。

#### [h2]HMS_ModuleInstall_GetInstalledModuleName

```
char *HMS_ModuleInstall_GetInstalledModuleName(const ModuleInstall_InstalledModule *installedModule)
```
 描述

获取模块名。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) *installedModule | 模块信息。 |

返回：

返回模块名。

#### [h2]HMS_ModuleInstall_GetInstalledModuleType

```
int HMS_ModuleInstall_GetInstalledModuleType(const ModuleInstall_InstalledModule *installedModule)
```
 描述

获取模块类型。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) *installedModule | 模块信息。 |

返回：

返回模块类型, 取值参考：[bundleManager.ModuleType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#moduletype)。当[ModuleInstall_InstallStatus](#moduleinstall_installstatus)=1时，默认返回0。

#### [h2]HMS_ModuleInstall_GetModuleInstallStatus

```
ModuleInstall_InstallStatus HMS_ModuleInstall_GetModuleInstallStatus(const ModuleInstall_InstalledModule *installedModule)
```
 描述

获取模块安装状态。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_InstalledModule](#moduleinstall_installedmodule) *installedModule | 模块信息。 |

返回：

模块安装状态，取值参考：[ModuleInstall_InstallStatus](#moduleinstall_installstatus)。

#### [h2]HMS_ModuleInstall_FetchModules

```
ModuleInstall_ErrCode HMS_ModuleInstall_FetchModules(const char *bundleName, unsigned int length, char **moduleNames, unsigned int moduleNamesLength, ModuleInstall_FetchModulesResult **fetchModulesResult)
```
 描述

请求下载模块。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| char *bundleName | 包名。 |
| int length | 包名长度，最大长度512。 |
| char **moduleNames | 模块名数组。 |
| int moduleNamesLength | 模块名数组长度，最大长度512。 |
| [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) **fetchModulesResult | 模块安装结果。 |

返回：

返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_CONNECT_SA表示服务异常；返回E_CONNECT_SERVICE_EXTENSION表示服务连接失败；返回E_WRITE_PARAM表示参数写入异常；返回E_REQUEST_SERVER表示请求服务异常；返回E_RESPONSE_INVALID表示响应参数无法解析；返回E_INNER_ERROR表示内部错误。

#### [h2]HMS_ModuleInstall_GetFetchModulesRequestCode

```
ModuleInstall_RequestCode HMS_ModuleInstall_GetFetchModulesRequestCode(const ModuleInstall_FetchModulesResult *fetchModulesResult)
```
 描述

获取模块下载请求码。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult | 模块安装结果。 |

返回：

按需下载模块请求码，取值参考: [ModuleInstall_RequestCode](#moduleinstall_requestcode)。

#### [h2]HMS_ModuleInstall_GetFetchModulesTaskStatus

```
ModuleInstall_TaskStatus HMS_ModuleInstall_GetFetchModulesTaskStatus(const ModuleInstall_FetchModulesResult *fetchModulesResult)
```
 描述

获取模块下载任务状态。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult | 模块安装结果。 |

返回：

模块下载任务状态，取值参考：[ModuleInstall_TaskStatus](#moduleinstall_taskstatus)。

#### [h2]HMS_ModuleInstall_GetFetchModulesTaskId

```
char *HMS_ModuleInstall_GetFetchModulesTaskId(const ModuleInstall_FetchModulesResult *fetchModulesResult)
```
 描述

获取模块下载任务id。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult | 模块安装结果。 |

返回：

任务id。

#### [h2]HMS_ModuleInstall_GetFetchModulesDesc

```
char *HMS_ModuleInstall_GetFetchModulesDesc(const ModuleInstall_FetchModulesResult *fetchModulesResult)
```
 描述

获取模块下载描述。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult | 模块安装结果。 |

返回：

下载描述。

#### [h2]HMS_ModuleInstall_GetFetchModules

```
char* HMS_ModuleInstall_GetFetchModules(const ModuleInstall_FetchModulesResult *fetchModulesResult)
```
 描述

获取模块下载模块名。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult | 模块安装结果。 |

返回：

下载模块名。

#### [h2]HMS_ModuleInstall_GetFetchModulesTotalSize

```
int HMS_ModuleInstall_GetFetchModulesTotalSize(const ModuleInstall_FetchModulesResult *fetchModulesResult)
```
 描述

获取模块下载总大小。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult | 模块安装结果。 |

返回：

下载模块总大小。

#### [h2]HMS_ModuleInstall_GetFetchModulesDownloadedSize

```
int HMS_ModuleInstall_GetFetchModulesDownloadedSize(const ModuleInstall_FetchModulesResult *fetchModulesResult)
```
 描述

获取模块下载已下载大小。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_FetchModulesResult](#moduleinstall_fetchmodulesresult) *fetchModulesResult | 模块安装结果。 |

返回：

已下载模块大小。

#### [h2]HMS_ModuleInstall_CancelTask

```
ModuleInstall_ErrCode HMS_ModuleInstall_CancelTask(const char *taskId, unsigned int length, unsigned int cancelResult)
```
 描述

取消下载任务。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| char *taskId | 任务id。 |
| int length | 任务id长度，最大长度512。 |
| int cancelResult | 取消下载结果。 |

返回：

返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_CONNECT_SERVICE_EXTENSION表示服务连接失败；返回E_WRITE_PARAM表示参数写入异常；返回E_REQUEST_SERVER表示请求服务异常；返回E_RESPONSE_INVALID表示响应参数无法解析；

#### [h2]HMS_ModuleInstall_ShowCellularDataConfirmation

```
ModuleInstall_ErrCode HMS_ModuleInstall_ShowCellularDataConfirmation(const char *taskId, unsigned int length, unsigned int showResult)
```
 描述

展示流量弹窗。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| char *taskId | 任务id。 |
| int length | 任务id长度，最大长度512。 |
| int showResult | 展示流量弹窗结果。 |

返回：

返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_CONNECT_SERVICE_EXTENSION表示服务连接失败；返回E_WRITE_PARAM表示参数写入异常；返回E_REQUEST_SERVER表示请求服务异常；返回E_RESPONSE_INVALID表示响应参数无法解析。

#### [h2]HMS_ModuleInstall_CreateStatusCallback

```
ModuleInstall_StatusCallback *HMS_ModuleInstall_CreateStatusCallback(ModuleInstall_OnStatusCallback *onStatusCallback)
```
 描述

创建下载进度监听回调。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_OnStatusCallback](#moduleinstall_onstatuscallback) *onStatusCallback | 下载进度监听回调函数。 |

返回：

下载进度监听回调。

#### [h2]HMS_ModuleInstall_On

```
ModuleInstall_ErrCode HMS_ModuleInstall_On(const char *bundleName, unsigned int length, unsigned int appIndex, unsigned int period, ModuleInstall_StatusCallback **callback)
```
 描述

下载进度监听。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| char *bundleName | 包名。 |
| int length | 包名长度，最大长度512。 |
| int appIndex | 应用分身索引。 |
| int period | 监听周期。 |
| [ModuleInstall_StatusCallback](#moduleinstall_statuscallback) **callback | 下载进度监听回调。 |

返回：

返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_REPEATED_CALL表示重复调用接口；返回E_CONNECT_SA表示服务异常。

#### [h2]HMS_ModuleInstall_ReleaseStatusCallback

```
void HMS_ModuleInstall_ReleaseStatusCallback(ModuleInstall_StatusCallback *statusCallback)
```
 描述

释放下载进度监听回调。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| [ModuleInstall_StatusCallback](#moduleinstall_statuscallback) *statusCallback | 下载进度监听回调。 |

#### [h2]HMS_ModuleInstall_Off

```
ModuleInstall_ErrCode HMS_ModuleInstall_Off(const char *bundleName, unsigned int length, unsigned int appIndex)
```
 描述

取消下载进度监听。

系统能力： SystemCapability.AppGalleryService.Distribution.OnDemandInstall

起始版本： 5.0.3(15)

参数：

| 名称 | 描述 |
| --- | --- |
| char *bundleName | 包名。 |
| int length | 包名长度，最大长度512。 |
| int appIndex | 应用分身索引。 |

返回：

返回E_NO_ERROR表示成功；返回E_PARAMS表示输入参数错误；返回E_OFF_WITHOUT_ON表示未与监听接口共同使用；返回E_CONNECT_SA表示服务异常。
