---
title: "http_interceptor_type.h"
upstream_id: "harmonyos-references/capi-net-http-interceptor-type-h"
catalog: "harmonyos-references"
content_hash: "75ea38d3fa41"
synced_at: "2026-07-09T00:59:29.115164"
---

# http_interceptor_type.h

#### 概述

为HTTP全局拦截器模块提供C接口的数据结构定义，包含拦截器的请求/响应头信息、HTTP请求/响应数据包结构、拦截器配置信息以及相关的枚举类型和函数指针。

引用文件： <network/netstack/http_interceptor_type.h>

库： libhttp_interceptor.so

系统能力： SystemCapability.Communication.NetStack

起始版本： 24

相关模块： [netstack](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_Http_Interceptor_Headers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-interceptor-headers) | OH_Http_Interceptor_Headers | 定义拦截器的请求/响应头信息。 |
| [OH_Http_Interceptor_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-interceptor-request) | OH_Http_Interceptor_Request | 定义拦截器的HTTP请求数据包结构。 |
| [OH_Http_Interceptor_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-interceptor-response) | OH_Http_Interceptor_Response | 定义拦截器的HTTP响应数据包结构。 |
| [OH_Http_Interceptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-interceptor) | OH_Http_Interceptor | 定义HTTP全局拦截器的配置信息。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_Interceptor_Stage](#oh_interceptor_stage) | OH_Interceptor_Stage | 定义拦截器的执行阶段。 |
| [OH_Interceptor_Type](#oh_interceptor_type) | OH_Interceptor_Type | 定义拦截器的类型。 |
| [OH_Interceptor_Result](#oh_interceptor_result) | OH_Interceptor_Result | 定义拦截器的处理结果。 |

#### [h2]函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef OH_Interceptor_Result (*OH_Http_InterceptorHandler)(OH_Http_Interceptor_Request *request, OH_Http_Interceptor_Response *response, int32_t *isModified)](#oh_http_interceptorhandler) | OH_Http_InterceptorHandler | 指向HTTP拦截器处理函数的指针。 |

#### 枚举类型说明

#### [h2]OH_Interceptor_Stage

```
enum OH_Interceptor_Stage
```
 描述

定义拦截器的执行阶段。

起始版本： 24

参数：

| 枚举项 | 描述 |
| --- | --- |
| OH_STAGE_REQUEST | 拦截器处理请求。 |
| OH_STAGE_RESPONSE | 拦截器处理响应。 |

#### [h2]OH_Interceptor_Type

```
enum OH_Interceptor_Type
```
 描述

定义拦截器的类型。

参数：

| 枚举项 | 描述 |
| --- | --- |
| OH_TYPE_READ_ONLY | 只读拦截器。**起始版本：** 24。 |
| OH_TYPE_MODIFY_NETWORK_KIT | 可修改拦截器。仅针对Network Kit HTTP请求生效。**起始版本：** 26.0.0。 |

#### [h2]OH_Interceptor_Result

```
enum OH_Interceptor_Result
```
 描述

定义拦截器的处理结果。

起始版本： 24

参数：

| 枚举项 | 描述 |
| --- | --- |
| OH_CONTINUE | 继续处理。 |
| OH_ABORT | 拦截处理。 |

#### 函数说明

#### [h2]OH_Http_InterceptorHandler()

```
typedef OH_Interceptor_Result (*OH_Http_InterceptorHandler)(
    OH_Http_Interceptor_Request *request,
    OH_Http_Interceptor_Response *response,
    int32_t *isModified)
```
 描述

定义HTTP拦截器处理函数。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_Http_Interceptor_Request](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-interceptor-request) *request | HTTP请求数据包指针（仅在请求阶段有效）。 |
| [OH_Http_Interceptor_Response](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-netstack-http-interceptor-response) *response | HTTP响应数据包指针（仅在响应阶段有效）。 |
| int32_t *isModified | 标识拦截器是否修改了数据包。对OH_TYPE_READ_ONLY类型拦截器无效，可配置为nullptr。 - 0表示未对数据执行修改操作。 - 非0表示已对数据执行修改操作。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_Interceptor_Result](#oh_interceptor_result) | 拦截器处理结果。 - OH_CONTINUE：继续处理 - OH_ABORT：拦截处理 |
