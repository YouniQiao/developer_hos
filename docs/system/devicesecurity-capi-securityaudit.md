---
title: "SecurityAudit"
upstream_id: "harmonyos-references/devicesecurity-capi-securityaudit"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:36.447683"
---

# SecurityAudit

#### 概述

提供安全审计的API。

系统能力： SystemCapability.Security.SecurityAudit

起始版本： 6.0.0(20)

#### 汇总

#### [h2]文件

| 名称 | 描述 |
| --- | --- |
| [security_audit.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-security-audit-8h) | 文件中定义了与安全审计相关的函数。 |

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [SecurityAudit_Event](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-event) | 定义审计事件信息。 |
| struct [SecurityAudit_Filter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-filter) | 提供过滤条件。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void(* [SecurityAudit_Handler](#securityaudit_handler)) (const [SecurityAudit_Event](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-event) *events, uint64_t count) | 定义事件处理函数。 |
| typedef struct SecurityAudit_AuthClient_Impl [SecurityAudit_AuthClient](#securityaudit_authclient) | 定义阻断事件客户端。 |
| typedef struct SecurityAudit_Client_Impl [SecurityAudit_Client](#securityaudit_client) | 定义通知事件客户端。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [SecurityAudit_Notify_Event](#securityaudit_notify_event) { SECURITY_AUDIT_NOTIFY_EVENT_PASTEBOARD = 0x27000000, SECURITY_AUDIT_NOTIFY_EVENT_FILE = 0x1C000007, SECURITY_AUDIT_NOTIFY_EVENT_FILE_INTERCEPTED = 0x1C001100, SECURITY_AUDIT_NOTIFY_EVENT_ACCOUNT = 0x10000100, SECURITY_AUDIT_NOTIFY_EVENT_WINDOW = 0x07000000, SECURITY_AUDIT_NOTIFY_EVENT_VOLUME = 0x0F000000, SECURITY_AUDIT_NOTIFY_EVENT_PRINTER = 0x2E000000, SECURITY_AUDIT_NOTIFY_EVENT_PROCESS = 0x1C000008, SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_TRAFFIC = 0x1C00000E, SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_CONN = 0x1C00000F, SECURITY_AUDIT_NOTIFY_EVENT_CAMERA = 0x2D000000, SECURITY_AUDIT_NOTIFY_EVENT_APP = 0x10000000, SECURITY_AUDIT_NOTIFY_EVENT_EDM = 0x11000000, SECURITY_AUDIT_NOTIFY_EVENT_CERT = 0x12003000, SECURITY_AUDIT_NOTIFY_EVENT_KIA_CREATE = 0x1C00000B, SECURITY_AUDIT_NOTIFY_EVENT_KIA_READ = 0x1C000012, SECURITY_AUDIT_NOTIFY_EVENT_KIA_VARIANT = 0x1C00000C, SECURITY_AUDIT_NOTIFY_EVENT_KIA_INTERCEPT = 0x1C00000A, SECURITY_AUDIT_NOTIFY_EVENT_PERMISSION = 0x0B000000, SECURITY_AUDIT_NOTIFY_EVENT_DNS = 0x03000001, SECURITY_AUDIT_NOTIFY_EVENT_APP_INSTALL_INTERCEPTED = 0x18000100, SECURITY_AUDIT_NOTIFY_EVENT_APP_UNINSTALL_INTERCEPTED = 0x18000101, SECURITY_AUDIT_NOTIFY_EVENT_APP_UPDATE_INTERCEPTED = 0x18000102, SECURITY_AUDIT_NOTIFY_EVENT_APP_RECOVER_INTERCEPTED = 0x18000103, SECURITY_AUDIT_NOTIFY_EVENT_APP_START_INTERCEPTED = 0x18000104, SECURITY_AUDIT_NOTIFY_EVENT_USB_ACCESS_INTERCEPTED = 0x30000000, SECURITY_AUDIT_NOTIFY_EVENT_SMB_FILE_SEND = 0x0F000001, SECURITY_AUDIT_NOTIFY_EVENT_FILE_SHARE= 0x0F000002, SECURITY_AUDIT_NOTIFY_EVENT_DATA_DRAG= 0x0F000003, SECURITY_AUDIT_NOTIFY_EVENT_KIA_PRE_OPEN = 0x1C000014, SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG = 0x27000100, SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG_INTERCEPTED = 0x27000101, SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER = 0x2F000000, SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER_POLICY = 0x2F000001, SECURITY_AUDIT_NOTIFY_EVENT_SERIAL_PORT_ACCESS = 0x30000100, SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_INTERCEPTED = 0x03000002, SECURITY_AUDIT_NOTIFY_EVENT_WIFI_INTERCEPTED = 0x03000100, SECURITY_AUDIT_NOTIFY_EVENT_PRINT_INTERCEPTED = 0x2E000001, SECURITY_AUDIT_NOTIFY_EVENT_CS_VERIFY_NULL = 0x12001081, SECURITY_AUDIT_NOTIFY_EVENT_CS_VERIFY_ABNORMAL = 0x12001082, SECURITY_AUDIT_NOTIFY_EVENT_FS_MOUNT_ABNORMAL = 0x1C001102, SECURITY_AUDIT_NOTIFY_EVENT_DRIVER_CS_ABNORMAL = 0x1C001200, SECURITY_AUDIT_NOTIFY_EVENT_DRIVER_MMAP_ABNORMAL = 0x1C001201, SECURITY_AUDIT_NOTIFY_EVENT_KERNEL_MEMORY_ABNORMAL = 0x1C001300, SECURITY_AUDIT_NOTIFY_EVENT_PROCESS_DEBUG_ABNORMAL = 0x1C001401, SECURITY_AUDIT_NOTIFY_EVENT_PROCESS_CRASH_ABNORMAL = 0x1C001402, SECURITY_AUDIT_NOTIFY_EVENT_PROCESS_PRIVILEGE_ESCALATION = 0x1C001403, SECURITY_AUDIT_NOTIFY_EVENT_DLP_FILE_ACCESS = 0x0F000006, SECURITY_AUDIT_NOTIFY_EVENT_FILE_CREATE = 0x1C001104, SECURITY_AUDIT_NOTIFY_EVENT_FILE_OPEN = 0x1C001105, SECURITY_AUDIT_NOTIFY_EVENT_FILE_CLOSE = 0x1C001106, SECURITY_AUDIT_NOTIFY_EVENT_FILE_DELETE = 0x1C001107, SECURITY_AUDIT_NOTIFY_EVENT_FILE_RENAME = 0x1C001108, SECURITY_AUDIT_NOTIFY_EVENT_FILE_COPY = 0x1C001109, SECURITY_AUDIT_NOTIFY_EVENT_FILE_SETOWNER = 0x1C00110A, SECURITY_AUDIT_NOTIFY_EVENT_FILE_SETMODE = 0x1C00110B, SECURITY_AUDIT_NOTIFY_EVENT_FILE_SETEXTATTR = 0x1C00110C, SECURITY_AUDIT_NOTIFY_EVENT_FILE_DELETEEXTATTR = 0x1C00110D, SECURITY_AUDIT_NOTIFY_EVENT_FILE_WRITE = 0x1C00110E } | 定义通知事件的事件ID。 |
| [SecurityAudit_Auth_Event](#securityaudit_auth_event) { SECURITY_AUDIT_AUTH_EVENT_FILE_CREATE = 0x1C801100, SECURITY_AUDIT_AUTH_EVENT_FILE_OPEN = 0x1C801101, SECURITY_AUDIT_AUTH_EVENT_FILE_RENAME = 0x1C801102, SECURITY_AUDIT_AUTH_EVENT_FILE_DELETE = 0x1C801103, SECURITY_AUDIT_AUTH_EVENT_FILE_SETEXTATTR = 0x1C801104, SECURITY_AUDIT_AUTH_EVENT_FILE_DELETEEXTATTR = 0x1C801105 } | 定义阻断类事件的事件ID。 |
| [SecurityAudit_FilterType](#securityaudit_filtertype) { EVENT_TYPE_EQUAL = 0x00000100, EVENT_SUBTYPE_EQUAL = 0x00000200, FILE_PATH_EQUAL = 0x00010000, FILE_PATH_PREFIX = 0x00010001, FILE_PATH_SUFFIX = 0x00010002, FILE_PATH_REGULAR = 0x00010003, PROCESS_UID_EQUAL = 0x00020000, PROCESS_PID_EQUAL = 0x00020100, PROCESS_NAME_EQUAL = 0x00020200, PROCESS_NAME_PREFIX = 0x00020201, PROCESS_NAME_SUFFIX = 0x00020202 } | 定义过滤器类型。 |
| [SecurityAudit_AuthResult](#securityaudit_authresult) { SECURITY_AUDIT_AUTH_RESULT_ALLOW = 0, SECURITY_AUDIT_AUTH_RESULT_DENY = 1 } | 定义阻断结果的类型。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| int32_t [HMS_SecurityAudit_NewClient](#hms_securityaudit_newclient) ([SecurityAudit_Client](#securityaudit_client) **client, [SecurityAudit_Handler](#securityaudit_handler) handler) | 创建一个新的通知事件客户端。 |
| int32_t [HMS_SecurityAudit_DeleteClient](#hms_securityaudit_deleteclient) ([SecurityAudit_Client](#securityaudit_client) *client) | 删除通知客户端。 |
| int32_t [HMS_SecurityAudit_Subscribe](#hms_securityaudit_subscribe) (const [SecurityAudit_Client](#securityaudit_client) *client, const [SecurityAudit_Notify_Event](#securityaudit_notify_event) *events, uint64_t count) | 订阅通知事件。 |
| int32_t [HMS_SecurityAudit_Unsubscribe](#hms_securityaudit_unsubscribe) (const [SecurityAudit_Client](#securityaudit_client) *client, const [SecurityAudit_Notify_Event](#securityaudit_notify_event) *events, uint64_t count) | 取消订阅通知事件。 |
| int32_t [HMS_SecurityAudit_AddFilter](#hms_securityaudit_addfilter) (const [SecurityAudit_Client](#securityaudit_client) *client, [SecurityAudit_Notify_Event](#securityaudit_notify_event) event, const [SecurityAudit_Filter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-filter) *filter) | 为通知事件添加过滤条件。 |
| int32_t [HMS_SecurityAudit_RemoveFilter](#hms_securityaudit_removefilter) (const [SecurityAudit_Client](#securityaudit_client) *client, [SecurityAudit_Notify_Event](#securityaudit_notify_event) event, const [SecurityAudit_Filter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-filter) *filter) | 删除通知事件的过滤条件。 |
| int32_t [HMS_SecurityAudit_NewAuthClient](#hms_securityaudit_newauthclient) ([SecurityAudit_AuthClient](#securityaudit_authclient) **client, [SecurityAudit_Handler](#securityaudit_handler) handler) | 创建一个新的阻断类事件客户端。 |
| int32_t [HMS_SecurityAudit_DeleteAuthClient](#hms_securityaudit_deleteauthclient) ([SecurityAudit_AuthClient](#securityaudit_authclient) *client) | 删除阻断类事件客户端。 |
| int32_t [HMS_SecurityAudit_SubscribeAuthEvent](#hms_securityaudit_subscribeauthevent) (const [SecurityAudit_AuthClient](#securityaudit_authclient) *client, const [SecurityAudit_Auth_Event](#securityaudit_auth_event) *events, uint64_t count) | 订阅阻断类事件。 |
| int32_t [HMS_SecurityAudit_UnsubscribeAuthEvent](#hms_securityaudit_unsubscribeauthevent) (const [SecurityAudit_AuthClient](#securityaudit_authclient) *client, const [SecurityAudit_Auth_Event](#securityaudit_auth_event) *events, uint64_t count) | 取消订阅阻断类事件。 |
| int32_t [HMS_SecurityAudit_AddAuthEventFilter](#hms_securityaudit_addautheventfilter) (const [SecurityAudit_AuthClient](#securityaudit_authclient) *client, [SecurityAudit_Auth_Event](#securityaudit_auth_event) event, const [SecurityAudit_Filter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-filter) *filter) | 为阻断类事件添加过滤条件。 |
| int32_t [HMS_SecurityAudit_RemoveAuthEventFilter](#hms_securityaudit_removeautheventfilter) (const [SecurityAudit_AuthClient](#securityaudit_authclient) *client, [SecurityAudit_Auth_Event](#securityaudit_auth_event) event, const [SecurityAudit_Filter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-filter) *filter) | 删除阻断类事件的过滤条件。 |
| int32_t [HMS_SecurityAudit_Auth](#hms_securityaudit_auth) (const [SecurityAudit_AuthClient](#securityaudit_authclient) *client, const [SecurityAudit_Event](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityaudit-event) *event, [SecurityAudit_AuthResult](#securityaudit_authresult) authResult) | 设置审计事件的阻断结果。 |
| int32_t [HMS_SecurityAudit_QueryAllProcesses](#hms_securityaudit_queryallprocesses)(char** result) | 获取所有的应用进程信息。 |
| int32_t [HMS_SecurityAudit_QueryProcesses](#hms_securityaudit_queryprocesses)(uint64_t* pids, uint64_t count, char** result) | 获取输入的pid的应用进程信息。 |
| int32_t [HMS_SecurityAudit_AcquireCodeSign](#hms_securityaudit_acquirecodesign)(char* path, char** outOwnedResult) | 获取输入的文件路径的代码签名信息。 |
| int32_t [HMS_SecurityAudit_AcquireAllClientsInfo](#hms_securityaudit_acquireallclientsinfo) (char** outOwnedResult) | 获取全量通知类客户端信息。 |

#### 类型定义说明

#### [h2]SecurityAudit_AuthClient

```
typedef struct SecurityAudit_AuthClient_Impl SecurityAudit_AuthClient
```
 描述

定义阻断事件客户端。

起始版本： 6.0.0(20)

#### [h2]SecurityAudit_Client

```
typedef struct SecurityAudit_Client_Impl SecurityAudit_Client
```
 描述

定义通知事件客户端。

起始版本： 6.0.0(20)

#### [h2]SecurityAudit_Handler

```
typedef void(* SecurityAudit_Handler) (const SecurityAudit_Event *events, uint64_t count)
```
 描述

定义事件处理函数。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| events | 指向审计事件信息的指针。 |
| count | 数组中的事件数。 |

#### 枚举类型说明

#### [h2]SecurityAudit_Auth_Event

```
enum SecurityAudit_Auth_Event
```
 描述

定义阻断事件的事件ID。

系统能力： SystemCapability.Security.SecurityAudit

起始版本： 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| SECURITY_AUDIT_AUTH_EVENT_FILE_CREATE | 文件创建阻断事件。 |
| SECURITY_AUDIT_AUTH_EVENT_FILE_OPEN | 文件打开阻断事件。 |
| SECURITY_AUDIT_AUTH_EVENT_FILE_RENAME | 文件重命名阻断事件。 |
| SECURITY_AUDIT_AUTH_EVENT_FILE_DELETE | 文件删除阻断事件。 |
| SECURITY_AUDIT_AUTH_EVENT_FILE_SETEXTATTR | 文件设置扩展属性的阻断事件。 |
| SECURITY_AUDIT_AUTH_EVENT_FILE_DELETEEXTATTR | 文件删除扩展属性的阻断事件。 |

#### [h2]SecurityAudit_AuthResult

```
enum SecurityAudit_AuthResult
```
 描述

定义阻断结果的类型。

起始版本： 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| SECURITY_AUDIT_AUTH_RESULT_ALLOW | 允许的阻断事件。 |
| SECURITY_AUDIT_AUTH_RESULT_DENY | 拒绝的阻断事件。 |

#### [h2]SecurityAudit_FilterType

```
enum SecurityAudit_FilterType
```
 描述

定义过滤器类型。

系统能力： SystemCapability.Security.SecurityAudit

起始版本： 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| EVENT_TYPE_EQUAL | 事件类型的过滤器类型。 |
| EVENT_SUBTYPE_EQUAL | 事件子类型的过滤器类型。 |
| FILE_PATH_EQUAL | 文件路径类型的过滤器类型。 |
| FILE_PATH_PREFIX | 文件路径前缀类型的过滤器类型。 |
| FILE_PATH_SUFFIX | 文件路径后缀类型的过滤器类型。 |
| FILE_PATH_REGULAR | 进程名称后缀的过滤类型。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| PROCESS_UID_EQUAL | 过滤进程的 UID 类型。 |
| PROCESS_PID_EQUAL | 过滤进程 ID 类型。 |
| PROCESS_NAME_EQUAL | 筛选进程名称类型。 |
| PROCESS_NAME_PREFIX | 进程名称前缀的过滤类型。 |
| PROCESS_NAME_SUFFIX | 进程名称后缀的过滤类型。 |

#### [h2]SecurityAudit_Notify_Event

```
enum SecurityAudit_Notify_Event
```
 描述

定义通知事件的事件ID。

系统能力： SystemCapability.Security.SecurityAudit

起始版本： 6.0.0(20)

| 枚举值 | 描述 |
| --- | --- |
| SECURITY_AUDIT_NOTIFY_EVENT_PASTEBOARD | 剪贴板复制和粘贴事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE | 文件事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_INTERCEPTED | 文件访问规则违规事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_ACCOUNT | 账户登录和注销事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_WINDOW | 窗口截图、屏幕录制、屏幕投影事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_VOLUME | 可移动存储设备的插入和移除事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_PRINTER | 打印机事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_PROCESS | 进程创建退出事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_TRAFFIC | 网络流量事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_CONN | 网络连接事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_CAMERA | 相机事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_APP | 应用程序事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_EDM | 企业设备管理事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_CERT | 证书操作事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_KIA_CREATE | KIA文件创建事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_KIA_READ | KIA文件读取事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_KIA_VARIANT | KIA文件变体事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_KIA_INTERCEPT | KIA文件拦截事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_PERMISSION | 应用程序权限更改事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_DNS | DNS审计事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_APP_INSTALL_INTERCEPTED | 应用程序安装拦截事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_APP_UNINSTALL_INTERCEPTED | 应用程序卸载拦截事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_APP_UPDATE_INTERCEPTED | 应用程序更新拦截事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_APP_RECOVER_INTERCEPTED | 应用程序恢复拦截事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_APP_START_INTERCEPTED | 应用程序开始拦截事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_USB_ACCESS_INTERCEPTED | USB访问拦截事件。 |
| SECURITY_AUDIT_NOTIFY_EVENT_SMB_FILE_SEND | SMB(Samba)外发事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_KIA_PRE_OPEN | KIA文件秒开事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG | HDC(HarmonyOS Device Connector)调测文件事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_HDC_DEBUG_INTERCEPTED | HDC(HarmonyOS Device Connector)调测拦截事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER | 多用户空间数据互传事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_USER_SPACE_DATA_TRANSFER_POLICY | 多用户空间互换审核策略事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_SERIAL_PORT_ACCESS | 串口访问审计事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_NETWORK_INTERCEPTED | 网络拦截事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_WIFI_INTERCEPTED | WI-FI拦截事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_PRINT_INTERCEPTED | 打印拦截事件 起始版本：6.1.0(23) |
| SECURITY_AUDIT_NOTIFY_EVENT_PROCESS_PRIVILEGE_ESCALATION | 进程提权事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_PROCESS_DEBUG_ABNORMAL | 进程异常调试事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_FS_MOUNT_ABNORMAL | 系统目录异常挂载事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_PROCESS_CRASH_ABNORMAL | 进程异常崩溃事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_CS_VERIFY_NULL | 应用代码未签名事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_CS_VERIFY_ABNORMAL | 应用代码验签异常事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_DRIVER_CS_ABNORMAL | 驱动代码验签异常事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_DRIVER_MMAP_ABNORMAL | 驱动非法映射内核内存事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_KERNEL_MEMORY_ABNORMAL | 内核内存异常使用事件 起始版本：6.1.1(24) |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_SHARE | 文件分享事件 起始版本：26.0.0 |
| SECURITY_AUDIT_NOTIFY_EVENT_DATA_DRAG | 数据拖拽事件 起始版本：26.0.0 |
| SECURITY_AUDIT_NOTIFY_EVENT_DLP_FILE_ACCESS | DLP文件访问 起始版本：26.0.0 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_CREATE | 文件创建事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_OPEN | 文件打开事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_CLOSE | 文件关闭事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_DELETE | 文件删除事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_RENAME | 文件重命名事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_COPY | 文件复制事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_SETOWNER | 文件修改所有者事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_SETMODE | 文件修改mode事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_SETEXTATTR | 文件设置扩展属性事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_DELETEEXTATTR | 文件删除扩展属性事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |
| SECURITY_AUDIT_NOTIFY_EVENT_FILE_WRITE | 文件写事件。 **起始版本：** 26.0.0 **模型约束：** 此接口仅可在Stage模型下使用 |

#### 函数说明

#### [h2]HMS_SecurityAudit_AddAuthEventFilter()

```
int32_t HMS_SecurityAudit_AddAuthEventFilter (const SecurityAudit_AuthClient * client, SecurityAudit_Auth_Event event, const SecurityAudit_Filter * filter )
```
 描述

为阻断类事件添加过滤条件。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 用户已创建的阻断类事件客户端。 |
| event | 需要添加过滤条件的阻断类事件。 |
| filter | 阻断类事件的过滤器描述。 |

Permission：

ohos.permission.kernel.AUTH_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果过滤器数量超过上限，则返回1012000004。 如果事件不支持过滤条件，则返回1012000005。

#### [h2]HMS_SecurityAudit_AddFilter()

```
int32_t HMS_SecurityAudit_AddFilter (const SecurityAudit_Client * client, SecurityAudit_Notify_Event event, const SecurityAudit_Filter * filter )
```
 描述

为通知事件添加过滤条件。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 用户已创建的通知类事件客户端。 |
| event | 通知要添加过滤条件的事件。 |
| filter | 通知事件的过滤器描述。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果过滤器数量超过上限，则返回1012000004。 如果事件不支持过滤条件，则返回1012000005。

#### [h2]HMS_SecurityAudit_Auth()

```
int32_t HMS_SecurityAudit_Auth (const SecurityAudit_AuthClient * client, const SecurityAudit_Event * event, SecurityAudit_AuthResult authResult )
```
 描述

设置审计事件的阻断结果

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 用户已创建的阻断类事件客户端。 |
| event | 审计阻断类事件信息。 |
| authResult | 阻断结果。 |

Permission：

ohos.permission.kernel.AUTH_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。

#### [h2]HMS_SecurityAudit_DeleteAuthClient()

```
int32_t HMS_SecurityAudit_DeleteAuthClient (SecurityAudit_AuthClient * client)
```
 描述

删除阻断类事件客户端。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 要删除的阻断类事件客户端实例。 |

Permission：

ohos.permission.kernel.AUTH_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。

#### [h2]HMS_SecurityAudit_DeleteClient()

```
int32_t HMS_SecurityAudit_DeleteClient (SecurityAudit_Client * client)
```
 描述

删除通知客户端。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 要删除的客户端实例。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。

#### [h2]HMS_SecurityAudit_NewAuthClient()

```
int32_t HMS_SecurityAudit_NewAuthClient (SecurityAudit_AuthClient ** client, SecurityAudit_Handler handler )
```
 描述

创建一个新的阻断类客户端。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 指向新阻断类事件客户端实例的指针。 |
| handler | 处理发送到此客户端的所有消息的处理器。 |

Permission：

ohos.permission.kernel.AUTH_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果客户端数量超过总上限，返回1012000002。 如果客户端数量超过当前进程的上限，则返回1012000003。

#### [h2]HMS_SecurityAudit_NewClient()

```
int32_t HMS_SecurityAudit_NewClient (SecurityAudit_Client ** client, SecurityAudit_Handler handler )
```
 描述

创建一个新的通知事件客户端。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 指向新客户端实例的指针。 |
| handler | 处理发送到此客户端的所有消息的处理器。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果客户端数量超过总上限，返回1012000002。 如果客户端数量超过当前进程的上限，则返回1012000003。

#### [h2]HMS_SecurityAudit_RemoveAuthEventFilter()

```
int32_t HMS_SecurityAudit_RemoveAuthEventFilter (const SecurityAudit_AuthClient * client, SecurityAudit_Auth_Event event, const SecurityAudit_Filter * filter )
```
 描述

删除阻断类事件的过滤条件。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 客户已创建的阻断类事件客户端。 |
| event | 要删除过滤条件的阻断类事件。 |
| filter | 阻断类事件的过滤器描述。 |

Permission：

ohos.permission.kernel.AUTH_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果事件不支持过滤条件，则返回1012000005。

#### [h2]HMS_SecurityAudit_RemoveFilter()

```
int32_t HMS_SecurityAudit_RemoveFilter (const SecurityAudit_Client * client, SecurityAudit_Notify_Event event, const SecurityAudit_Filter * filter )
```
 描述

删除通知事件的过滤条件。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 客户已创建的通知类事件客户端。 |
| event | 通知要删除过滤条件的事件。 |
| filter | 通知事件的过滤器描述。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。 如果事件不支持过滤条件，则返回1012000005。

#### [h2]HMS_SecurityAudit_Subscribe()

```
int32_t HMS_SecurityAudit_Subscribe (const SecurityAudit_Client * client, const SecurityAudit_Notify_Event * events, uint64_t count )
```
 描述

订阅通知事件。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 订阅通知事件的客户端。 |
| events | 要订阅的通知事件数组。 |
| count | 数组中的通知事件数。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。

#### [h2]HMS_SecurityAudit_SubscribeAuthEvent()

```
int32_t HMS_SecurityAudit_SubscribeAuthEvent (const SecurityAudit_AuthClient * client, const SecurityAudit_Auth_Event * events, uint64_t count )
```
 描述

订阅阻断类事件。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 客户已创建的阻断类事件客户端。 |
| events | 要订阅的阻断类事件数组。 |
| count | 数组中的阻断类事件数。 |

Permission：

ohos.permission.kernel.AUTH_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。

#### [h2]HMS_SecurityAudit_Unsubscribe()

```
int32_t HMS_SecurityAudit_Unsubscribe (const SecurityAudit_Client * client, const SecurityAudit_Notify_Event * events, uint64_t count )
```
 描述

取消订阅通知事件。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 取消订阅通知事件的客户端。 |
| events | 要取消订阅的通知事件数组。 |
| count | 数组中的通知事件数。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。

#### [h2]HMS_SecurityAudit_UnsubscribeAuthEvent()

```
int32_t HMS_SecurityAudit_UnsubscribeAuthEvent (const SecurityAudit_AuthClient * client, const SecurityAudit_Auth_Event * events, uint64_t count )
```
 描述

取消订阅阻断类事件。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| client | 客户已创建的阻断类事件客户端。 |
| events | 要取消订阅的阻断类事件数组。 |
| count | 数组中的阻断类事件数。 |

Permission：

ohos.permission.kernel.AUTH_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001

#### [h2]HMS_SecurityAudit_QueryAllProcesses()

```
int32_t HMS_SecurityAudit_QueryAllProcesses(char** result)
```
 描述

查询获取所有的应用进程信息。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| result | 查询获取到的应用进程信息。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。

#### [h2]HMS_SecurityAudit_QueryProcesses()

```
int32_t HMS_SecurityAudit_QueryProcesses(uint64_t* pids, uint64_t count, char** result)
```
 描述

查询获取输入的pid的应用进程信息。

起始版本： 6.0.0(20)

参数：

| 名称 | 描述 |
| --- | --- |
| pids | 应用要查询的pid数组名。 |
| count | 应用要查询的pid数组元素个数。 |
| result | 查询获取到的应用进程信息。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。如果要查询的pid数组元素个数超过限制，则返回1012000006。

#### [h2]HMS_SecurityAudit_AcquireCodeSign()

```
int32_t HMS_SecurityAudit_AcquireCodeSign(char* path, char** outOwnedResult)
```
 描述

获取输入的文件路径的代码签名信息。

模型约束： 此接口仅可在Stage模型下使用。

起始版本： 6.1.1(24)

参数：

| 名称 | 描述 |
| --- | --- |
| path | 待查询的应用文件路径。 |
| outOwnedResult | 代码签名内容，内容为json格式字符串。例如：{"1": {}}。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，1012000001。如果文件未找到或者应用无打开文件权限，1012000008。

#### [h2]HMS_SecurityAudit_AcquireAllClientsInfo()

```
int32_t HMS_SecurityAudit_AcquireAllClientsInfo(char** outOwnedResult)
```
 描述

查询获取全量通知类客户端信息。

起始版本： 26.0.0

参数：

| 名称 | 描述 |
| --- | --- |
| outOwnedResult | 查询获取到的全量通知类客户端信息。 |

Permission：

ohos.permission.QUERY_AUDIT_EVENT

返回：

函数执行结果。 返回值说明： 如果操作成功，则返回0。 如果权限验证失败，则返回201。 如果发生内部错误，则返回1012000001。如果要查询的pid数组元素个数超过限制，则返回1012000006。
