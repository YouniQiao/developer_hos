---
title: "Rcp_FormFieldValue"
upstream_id: "harmonyos-references/_rcp___form_field_value"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:00.352962"
---

# Rcp_FormFieldValue

#### 概述

简单表单数据字段值，参见[Rcp_Form](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_form)和[Rcp_MultipartFormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___multipart_form_field_value)。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Rcp_FormValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_formvaluetype) [type](#type) | 表示union中使用的数据类型。 |
| union { uint8_t [varBool](#varbool); int32_t [varInt32](#varint32); int64_t [varInt64](#varint64); double [varDouble](#vardouble); [Rcp_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___buffer) [varStr](#varstr); } data | bool类型。值为0表示false，值大于0表示true。 int32类型。 int64类型。 double类型。 string类型。 |
| struct [Rcp_FormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value) * [next](#next) | 指向下一个[Rcp_FormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value)。链式存储。 |

#### 结构体成员变量说明

#### [h2]next

```
struct Rcp_FormFieldValue* Rcp_FormFieldValue::next
```
 描述

指向下一个[Rcp_FormFieldValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___form_field_value)。链式存储。

#### [h2]type

```
Rcp_FormValueType Rcp_FormFieldValue::type
```
 描述

表示union中使用的数据类型。

#### [h2]varBool

```
uint8_t Rcp_FormFieldValue::varBool
```
 描述

bool类型。值为0表示false，值大于0表示true。

#### [h2]varDouble

```
double Rcp_FormFieldValue::varDouble
```
 描述

double类型。

#### [h2]varInt32

```
int32_t Rcp_FormFieldValue::varInt32
```
 描述

int32类型。

#### [h2]varInt64

```
int64_t Rcp_FormFieldValue::varInt64
```
 描述

int64类型。

#### [h2]varStr

```
Rcp_Buffer Rcp_FormFieldValue::varStr
```
 描述

string类型。
