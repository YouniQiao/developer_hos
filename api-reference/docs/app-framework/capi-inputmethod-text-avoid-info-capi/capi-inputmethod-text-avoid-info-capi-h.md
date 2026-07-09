---
title: "inputmethod_text_avoid_info_capi.h"
upstream_id: "harmonyos-references/capi-inputmethod-text-avoid-info-capi-h"
catalog: "harmonyos-references"
content_hash: "8d5ca43ab6b4"
synced_at: "2026-07-09T00:59:04.935534"
---

# inputmethod_text_avoid_info_capi.h

#### 概述

提供输入框避让信息对象的创建、销毁与读写方法，用于在软键盘弹起时动态调整输入框的位置，避免遮挡输入内容。

引用文件： <inputmethod/inputmethod_text_avoid_info_capi.h>

库： libohinputmethod.so

系统能力： SystemCapability.MiscServices.InputMethodFramework

起始版本： 12

相关模块： [InputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo) | InputMethod_TextAvoidInfo | 输入框避让信息。输入框用于避让键盘显示区域的信息。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [InputMethod_TextAvoidInfo *OH_TextAvoidInfo_Create(double positionY, double height)](#oh_textavoidinfo_create) | 创建一个新的[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例。 |
| [void OH_TextAvoidInfo_Destroy(InputMethod_TextAvoidInfo *info)](#oh_textavoidinfo_destroy) | 销毁一个[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例。 |
| [InputMethod_ErrorCode OH_TextAvoidInfo_SetPositionY(InputMethod_TextAvoidInfo *info, double positionY)](#oh_textavoidinfo_setpositiony) | 设置[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)中的Y坐标值。 |
| [InputMethod_ErrorCode OH_TextAvoidInfo_SetHeight(InputMethod_TextAvoidInfo *info, double height)](#oh_textavoidinfo_setheight) | 设置[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)中的高度值。 |
| [InputMethod_ErrorCode OH_TextAvoidInfo_GetPositionY(InputMethod_TextAvoidInfo *info, double *positionY)](#oh_textavoidinfo_getpositiony) | 从[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)获取Y坐标值。 |
| [InputMethod_ErrorCode OH_TextAvoidInfo_GetHeight(InputMethod_TextAvoidInfo *info, double *height)](#oh_textavoidinfo_getheight) | 从[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)获取高度值。 |

#### 函数说明

#### [h2]OH_TextAvoidInfo_Create()

```
InputMethod_TextAvoidInfo *OH_TextAvoidInfo_Create(double positionY, double height)
```
 描述

创建一个新的[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| double positionY | 表示输入框位置的Y坐标值，单位px。Y坐标值表示输入框顶部距离屏幕顶部的距离，单位为像素（px）。 |
| double height | 表示输入框高度，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo) * | 如果创建成功，返回一个指向新创建的[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例的指针。 如果创建失败，对象返回NULL，可能的失败原因有应用地址空间满。 |

#### [h2]OH_TextAvoidInfo_Destroy()

```
void OH_TextAvoidInfo_Destroy(InputMethod_TextAvoidInfo *info)
```
 描述

销毁一个[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo) *info | 表示指向即将被销毁的[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例的指针。 |

#### [h2]OH_TextAvoidInfo_SetPositionY()

```
InputMethod_ErrorCode OH_TextAvoidInfo_SetPositionY(InputMethod_TextAvoidInfo *info, double positionY)
```
 描述

设置[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)中的Y坐标值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo) *info | 指向即将被设置值的[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例的指针。 |
| double positionY | Y坐标值，即输入框顶点与物理屏幕上侧距离的绝对值，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。 [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。 [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。 具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |

#### [h2]OH_TextAvoidInfo_SetHeight()

```
InputMethod_ErrorCode OH_TextAvoidInfo_SetHeight(InputMethod_TextAvoidInfo *info, double height)
```
 描述

设置[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)中的高度值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo) *info | 指向即将被设置值的[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例的指针。 |
| double height | 高度值，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。 [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。 [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。 具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |

#### [h2]OH_TextAvoidInfo_GetPositionY()

```
InputMethod_ErrorCode OH_TextAvoidInfo_GetPositionY(InputMethod_TextAvoidInfo *info, double *positionY)
```
 描述

从[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)获取Y坐标值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo) *info | 指向即将被获取值的[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例的指针。 |
| double *positionY | Y坐标值，即输入框顶点与物理屏幕上侧距离的绝对值，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。 [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。 [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。 具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |

#### [h2]OH_TextAvoidInfo_GetHeight()

```
InputMethod_ErrorCode OH_TextAvoidInfo_GetHeight(InputMethod_TextAvoidInfo *info, double *height)
```
 描述

从[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)获取高度值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo) *info | 指向即将被获取值的[InputMethod_TextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo)实例的指针。 |
| double *height | 输入框高度，单位px。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。 [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。 [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。 具体错误码可以参考 [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |
