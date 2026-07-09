---
title: "ArkWeb_JavaScriptValueAPI"
upstream_id: "harmonyos-references/capi-web-arkweb-javascriptvalueapi"
catalog: "harmonyos-references"
content_hash: "2a9bc8a76cb5"
synced_at: "2026-07-09T00:58:56.520205"
---

# ArkWeb_JavaScriptValueAPI

```
typedef struct {...} ArkWeb_JavaScriptValueAPI
```

#### 概述

ArkWeb_JavaScriptValueAPI是JavaScript相关Native API结构体。该结构体提供了创建JavaScript值的函数，支持将Native数据转换为JavaScript可识别的格式并返回给HTML。

JavaScript相关接口需在UI线程中调用OH_ArkWeb_GetNativeAPI方法获取，调用前建议通过[ARKWEB_MEMBER_MISSING](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkweb-type-h#宏定义)校验函数指针的可用性，避免SDK与设备ROM不匹配导致崩溃。

起始版本： 18

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
| [ArkWeb_JavaScriptValuePtr (*createJavaScriptValue)(ArkWeb_JavaScriptValueType type, void* data, size_t dataLength)](#createjavascriptvalue) | 创建一个JavaScript值，用于返回给HTML。 |

#### 成员函数说明

#### [h2]createJavaScriptValue()

```
ArkWeb_JavaScriptValuePtr (*createJavaScriptValue)(ArkWeb_JavaScriptValueType type, void* data, size_t dataLength)
```
 描述：

创建一个JavaScript值，用于返回给HTML。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| ArkWeb_JavaScriptValueType type | JavaScript值的类型。 |
| void* data | JavaScript值的数据缓冲区。 |
| size_t dataLength | JavaScript值的缓冲区大小。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkWeb_JavaScriptValuePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-web-arkweb-javascriptvalue8h) | 创建出来的JavaScript值。当输入参数无效或内存分配失败时，返回NULL。 |
