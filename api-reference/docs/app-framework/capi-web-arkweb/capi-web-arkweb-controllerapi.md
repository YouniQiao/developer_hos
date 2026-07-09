---
title: "ArkWeb_ControllerAPI"
upstream_id: "harmonyos-references/capi-web-arkweb-controllerapi"
catalog: "harmonyos-references"
content_hash: "72a58c4ee41f"
synced_at: "2026-07-09T17:25:41.749892"
---

# ArkWeb_ControllerAPI

```
typedef struct {...} ArkWeb_ControllerAPI
```

#### 概述

ArkWeb_ControllerAPI是Controller相关Native API结构体。该结构体提供了JavaScript注入、同步和异步JavaScript代理注册、代理删除、页面刷新、Web Message Port创建和管理、Frame URL查询等功能。这是从Native代码控制WebView行为的主要接口。

Controller相关接口需在UI线程中调用OH_ArkWeb_GetNativeAPI方法获取，调用前建议通过[ARKWEB_MEMBER_MISSING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h#宏定义)校验函数指针的可用性，避免SDK与设备ROM不匹配导致崩溃。

起始版本： 12

相关模块： [Web](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web)

所在头文件： [arkweb_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| size_t size | 结构体的大小。 |

#### [h2]成员函数

| 名称 | 描述 |
| --- | --- |
| [void (*runJavaScript)(const char* webTag, const ArkWeb_JavaScriptObject* javascriptObject)](#runjavascript) | 注入JavaScript脚本。 |
| [void (*registerJavaScriptProxy)(const char* webTag, const ArkWeb_ProxyObject* proxyObject)](#registerjavascriptproxy) | 注入JavaScript对象到window对象中，并在window对象中调用该对象的同步方法。 |
| [void (*deleteJavaScriptRegister)(const char* webTag, const char* objName)](#deletejavascriptregister) | 删除通过registerJavaScriptProxy注册到window上的指定name的应用侧JavaScript对象。 |
| [void (*refresh)(const char* webTag)](#refresh) | 刷新当前网页。刷新的同时会清理页面栈，导致当前页面无法前进后退。 |
| [void (*registerAsyncJavaScriptProxy)(const char* webTag, const ArkWeb_ProxyObject* proxyObject)](#registerasyncjavascriptproxy) | 注入JavaScript对象到window对象中，并在window对象中调用该对象的异步方法。 |
| [ArkWeb_WebMessagePortPtr* (*createWebMessagePorts)(const char* webTag, size_t* size)](#createwebmessageports) | 创建Post Message端口。 |
| [void (*destroyWebMessagePorts)(ArkWeb_WebMessagePortPtr** ports, size_t size)](#destroywebmessageports) | 销毁端口。 |
| [ArkWeb_ErrorCode (*postWebMessage)(const char* webTag, const char* name, ArkWeb_WebMessagePortPtr* webMessagePorts, size_t size, const char* url)](#postwebmessage) | 将端口发送到HTML主页面。 |
| [const char* (*getLastJavascriptProxyCallingFrameUrl)()](#getlastjavascriptproxycallingframeurl) | 获取调用JavaScriptProxy最后一帧的url。在JavaScriptProxy调用的线程上调用。通过registerJavaScriptProxy或者javaScriptProxy注入JavaScript对象到window对象中。该接口可以获取最后一次调用注入对象frame的url。在被调用函数内部获取url才能获取到正确值，可以在函数内部获取url后保存下来。 **起始版本：** 14 |
| [void (*registerJavaScriptProxyEx)(const char* webTag, const ArkWeb_ProxyObjectWithResult* proxyObject,const char* permission)](#registerjavascriptproxyex) | 注入JavaScript对象到window对象中，并在window对象中调用该对象的同步方法。该对象的同步方法可以带返回值。 **起始版本：** 18 |
| [void (*registerAsyncJavaScriptProxyEx)(const char* webTag, const ArkWeb_ProxyObject* proxyObject,const char* permission)](#registerasyncjavascriptproxyex) | 注入JavaScript对象到window对象中，并在window对象中调用该对象的异步方法。 **起始版本：** 18 |

#### 成员函数说明

#### [h2]runJavaScript()

```
void (*runJavaScript)(const char* webTag, const ArkWeb_JavaScriptObject* javascriptObject)
```
 描述：

注入JavaScript脚本。

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |
| const ArkWeb_JavaScriptObject* javascriptObject | 注入的JavaScript对象。 |

#### [h2]registerJavaScriptProxy()

```
void (*registerJavaScriptProxy)(const char* webTag, const ArkWeb_ProxyObject* proxyObject)
```
 描述：

注入JavaScript对象到window对象中，并在window对象中调用该对象的同步方法。

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |
| const ArkWeb_ProxyObject* proxyObject | 注册的对象。 |

#### [h2]deleteJavaScriptRegister()

```
void (*deleteJavaScriptRegister)(const char* webTag, const char* objName)
```
 描述：

删除通过registerJavaScriptProxy注册到window上的指定name的应用侧JavaScript对象。

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |
| const char* objName | JavaScript对象名称。 |

#### [h2]refresh()

```
void (*refresh)(const char* webTag)
```
 描述：

刷新当前网页。刷新的同时会清理页面栈，导致当前页面无法前进后退。

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |

#### [h2]registerAsyncJavaScriptProxy()

```
void (*registerAsyncJavaScriptProxy)(const char* webTag, const ArkWeb_ProxyObject* proxyObject)
```
 描述：

注入JavaScript对象到window对象中，并在window对象中调用该对象的异步方法。

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |
| const ArkWeb_ProxyObject* proxyObject | 注册的对象。 |

#### [h2]createWebMessagePorts()

```
ArkWeb_WebMessagePortPtr* (*createWebMessagePorts)(const char* webTag, size_t* size)
```
 描述：

创建Post Message端口。

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |
| size_t* size | 出参，端口数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkWeb_WebMessagePortPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageport8h) | Post Message端口结构体指针。 |

#### [h2]destroyWebMessagePorts()

```
void (*destroyWebMessagePorts)(ArkWeb_WebMessagePortPtr** ports, size_t size)
```
 描述：

销毁端口。

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkWeb_WebMessagePortPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageport8h)** ports | Post Message端口结构体指针数组。 |
| size_t size | 端口数量。 |

#### [h2]postWebMessage()

```
ArkWeb_ErrorCode (*postWebMessage)(const char* webTag, const char* name, ArkWeb_WebMessagePortPtr* webMessagePorts, size_t size, const char* url)
```
 描述：

将端口发送到HTML主页面。

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |
| const char* name | 发送给HTML的消息名称。 |
| [ArkWeb_WebMessagePortPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-webmessageport8h)* webMessagePorts | Post Message端口结构体指针。 |
| size_t size | 端口数量。 |
| const char* url | 接收到消息的页面url。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkWeb_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-error-code-h#arkweb_errorcode) | 返回值错误码。 [ARKWEB_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-error-code-h#arkweb_errorcode) 执行成功。 [ARKWEB_INVALID_PARAM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-error-code-h#arkweb_errorcode) 参数无效。 [ARKWEB_INIT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-error-code-h#arkweb_errorcode) 初始化失败，没有找到与webTag绑定的Web组件。 |

#### [h2]getLastJavascriptProxyCallingFrameUrl()

```
const char* (*getLastJavascriptProxyCallingFrameUrl)()
```
 描述：

获取调用JavaScriptProxy最后一帧的url。在JavaScriptProxy调用的线程上调用。通过registerJavaScriptProxy或者javaScriptProxy注入JavaScript对象到window对象中。该接口可以获取最后一次调用注入对象frame的url。在被调用函数内部获取url才能获取到正确值，可以在函数内部获取url后保存下来。

起始版本： 14

返回：

| 类型 | 说明 |
| --- | --- |
| const char* | 调用JavaScriptProxy最后一帧的url。 |

#### [h2]registerJavaScriptProxyEx()

```
void (*registerJavaScriptProxyEx)(const char* webTag, const ArkWeb_ProxyObjectWithResult* proxyObject, const char* permission)
```
 描述：

注入JavaScript对象到window对象中，并在window对象中调用该对象的同步方法。该对象的同步方法可以带返回值。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |
| const [ArkWeb_ProxyObjectWithResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-proxyobjectwithresult)* proxyObject | 注册的对象。 |
| const char* permission | JSON格式字符串，默认值为空。该字符串用来配置JSBridge的权限限制，可以配置对象和方法级别。 |

#### [h2]registerAsyncJavaScriptProxyEx()

```
void (*registerAsyncJavaScriptProxyEx)(const char* webTag, const ArkWeb_ProxyObject* proxyObject, const char* permission)
```
 描述：

注入JavaScript对象到window对象中，并在window对象中调用该对象的异步方法。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| const char* webTag | Web组件名称。 |
| const ArkWeb_ProxyObject* proxyObject | 注册的对象。 |
| const char* permission | JSON格式字符串，默认值为空。该字符串用来配置JSBridge的权限限制，可以配置对象和方法级别。 |
