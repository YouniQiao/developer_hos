---
title: "net_trafficfilter.h"
upstream_id: "harmonyos-references/capi-net-trafficfilter-h"
catalog: "harmonyos-references"
content_hash: "69834f53e3db"
synced_at: "2026-08-29T18:16:44.499177"
---

# net_trafficfilter.h

#### 概述

声明网络流量过滤与重定向功能的C接口。该头文件提供创建和销毁报文控制器、注册报文回调、添加和清除过滤规则，以及创建和销毁流量重定向器、添加和清除重定向规则的接口。

适用于需要在系统层面对网络数据包进行拦截、过滤和重定向的应用场景。

引用文件： <network/netmanager_ext/net_trafficfilter.h>

库： libnet_trafficfilter.so

系统能力： SystemCapability.Communication.NetManager.NetFirewall

起始版本： 26.0.0

相关模块： [TrafficFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [int32_t OH_TrafficFilter_CreateRedirector(uint32_t group_id, uint32_t priority, OH_TrafficFilter_Redirector** redirector)](#oh_trafficfilter_createredirector) | 创建流量重定向实例，用于将TCP流量重定向到代理服务器。资源管理：必须调用[OH_TrafficFilter_DestroyRedirector](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_destroyredirector)释放资源。如果该函数失败，不会返回有效的重定向器。 |
| [int32_t OH_TrafficFilter_DestroyRedirector(OH_TrafficFilter_Redirector* redirector)](#oh_trafficfilter_destroyredirector) | 销毁重定向实例并释放相关资源（包括规则），调用后句柄将失效。 |
| [int32_t OH_TrafficFilter_AddRedirectRule(OH_TrafficFilter_Redirector* redirector, const OH_TrafficFilter_RedirectRule* rule)](#oh_trafficfilter_addredirectrule) | 添加TCP流量重定向规则，将匹配的流量重定向到指定的代理服务器。如需清除重定向规则，需要调用[OH_TrafficFilter_ClearRedirectRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_clearredirectrule)。 |
| [int32_t OH_TrafficFilter_ClearRedirectRule(OH_TrafficFilter_Redirector* redirector)](#oh_trafficfilter_clearredirectrule) | 清除所有重定向规则。 |
| [int32_t OH_TrafficFilter_QueryProcess(const OH_TrafficFilter_ConnectionInfo* connection_info, OH_TrafficFilter_ProcessInfo* process_info)](#oh_trafficfilter_queryprocess) | 根据网络连接信息查询对应的进程信息。通过源IP、目的IP、源端口、目的端口和协议类型组成的五元组连接信息，查询发起该连接的进程信息。 |

#### 函数说明

#### [h2]OH_TrafficFilter_CreateRedirector()

```
int32_t OH_TrafficFilter_CreateRedirector(uint32_t group_id, uint32_t priority, OH_TrafficFilter_Redirector** redirector)
```
 描述

创建流量重定向实例，用于将TCP流量重定向到代理服务器。资源管理：必须调用[OH_TrafficFilter_DestroyRedirector](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_destroyredirector)释放资源。如果该函数失败，不会返回有效的重定向器。

需要权限： ohos.permission.kernel.TRAFFIC_FILTER

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| uint32_t group_id | 重定向链标识符。这是应用内的逻辑分组ID。同一应用内的多个重定向器可以使用不同的group_id。不同应用的相同group_id会自动隔离。有效范围为[[OH_TRAFFICFILTER_MIN_GROUP_ID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#宏定义), [OH_TRAFFICFILTER_MAX_GROUP_ID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#宏定义)]，包含两个边界。如果group_id超出此范围，该函数返回[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode)。 |
| uint32_t priority | 优先级。决定不同group_id链之间的执行顺序，数值越小越先执行。注意：重定向器优先级高于报文过滤器优先级。有效范围为[[OH_TRAFFICFILTER_MIN_PRIORITY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#宏定义), [OH_TRAFFICFILTER_MAX_PRIORITY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#宏定义)]，包含两个边界。如果priority超出此范围，该函数返回[OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode)。 |
| redirector | 出参，成功时为重定向句柄。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | [OH_TRAFFICFILTER_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 成功。 [OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 缺少权限。 [OH_TRAFFICFILTER_ERROR_GROUP_ID_IN_USE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - group_id已存在。 [OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 参数错误。 |

#### [h2]OH_TrafficFilter_DestroyRedirector()

```
int32_t OH_TrafficFilter_DestroyRedirector(OH_TrafficFilter_Redirector* redirector)
```
 描述

销毁重定向实例并释放相关资源（包括规则），调用后句柄将失效。

需要权限： ohos.permission.kernel.TRAFFIC_FILTER

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_TrafficFilter_Redirector](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-redirector)* redirector | OH_TrafficFilter_Redirector句柄。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | [OH_TRAFFICFILTER_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 成功。 [OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 缺少权限。 [OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - redirector为NULL。 [OH_TRAFFICFILTER_ERROR_NOT_FOUND](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 未找到指定的重定向器句柄。 |

#### [h2]OH_TrafficFilter_AddRedirectRule()

```
int32_t OH_TrafficFilter_AddRedirectRule(OH_TrafficFilter_Redirector* redirector, const OH_TrafficFilter_RedirectRule* rule)
```
 描述

添加TCP流量重定向规则，将匹配的流量重定向到指定的代理服务器。如需清除重定向规则，需要调用[OH_TrafficFilter_ClearRedirectRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-h#oh_trafficfilter_clearredirectrule)。

需要权限： ohos.permission.kernel.TRAFFIC_FILTER

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_TrafficFilter_Redirector](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-redirector)* redirector | OH_TrafficFilter_Redirector句柄。 |
| rule | 重定向规则，不能为NULL。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | [OH_TRAFFICFILTER_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 成功。 [OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 缺少权限。 [OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - redirector或rule为NULL。 [OH_TRAFFICFILTER_ERROR_TOO_MANY_RULES](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 添加的规则过多。 |

#### [h2]OH_TrafficFilter_ClearRedirectRule()

```
int32_t OH_TrafficFilter_ClearRedirectRule(OH_TrafficFilter_Redirector* redirector)
```
 描述

清除所有重定向规则。

需要权限： ohos.permission.kernel.TRAFFIC_FILTER

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_TrafficFilter_Redirector](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-redirector)* redirector | OH_TrafficFilter_Redirector句柄。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | [OH_TRAFFICFILTER_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 成功。 [OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 缺少权限。 [OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - redirector为NULL。 |

#### [h2]OH_TrafficFilter_QueryProcess()

```
int32_t OH_TrafficFilter_QueryProcess(const OH_TrafficFilter_ConnectionInfo* connection_info, OH_TrafficFilter_ProcessInfo* process_info)
```
 描述

根据网络连接信息查询对应的进程信息。通过源IP、目的IP、源端口、目的端口和协议类型组成的五元组连接信息，查询发起该连接的进程信息。

需要权限： ohos.permission.kernel.TRAFFIC_FILTER

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [const OH_TrafficFilter_ConnectionInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-trafficfilter-oh-trafficfilter-connectioninfo)* connection_info | 输入的连接信息。 |
| process_info | 输出的进程信息。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | [OH_TRAFFICFILTER_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 成功。 [OH_TRAFFICFILTER_ERROR_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 缺少权限。 [OH_TRAFFICFILTER_ERROR_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 输入参数无效。 [OH_TRAFFICFILTER_ERROR_NOT_FOUND](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-net-trafficfilter-type-h#oh_trafficfilter_errcode) - 未找到进程。 |
