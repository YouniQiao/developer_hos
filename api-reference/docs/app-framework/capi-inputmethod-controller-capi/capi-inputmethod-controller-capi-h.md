---
title: "inputmethod_controller_capi.h"
upstream_id: "harmonyos-references/capi-inputmethod-controller-capi-h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:19.555834"
---

# inputmethod_controller_capi.h

#### 概述

提供绑定、解绑输入法的方法。

引用文件： <inputmethod/inputmethod_controller_capi.h>

库： libohinputmethod.so

系统能力： SystemCapability.MiscServices.InputMethodFramework

起始版本： 12

相关模块： [InputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [InputMethod_ErrorCode OH_InputMethodController_Attach(InputMethod_TextEditorProxy *textEditorProxy,InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)](#oh_inputmethodcontroller_attach) | 将应用绑定到输入法服务。 |
| [InputMethod_ErrorCode OH_InputMethodController_AttachWithUIContext(ArkUI_ContextHandle context, InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)](#oh_inputmethodcontroller_attachwithuicontext) | 将应用绑定到输入法服务。 |
| [InputMethod_ErrorCode OH_InputMethodController_Detach(InputMethod_InputMethodProxy *inputMethodProxy)](#oh_inputmethodcontroller_detach) | 将应用从输入法服务解除绑定。 |

#### 函数说明

#### [h2]OH_InputMethodController_Attach()

```
InputMethod_ErrorCode OH_InputMethodController_Attach(InputMethod_TextEditorProxy *textEditorProxy,InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)
```
 描述

将应用绑定到输入法服务。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [InputMethod_TextEditorProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-texteditorproxy) *textEditorProxy | 表示指向[InputMethod_TextEditorProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-texteditorproxy)实例的指针。调用者需要自行管理textEditorProxy的生命周期。并且如果调用成功，调用者在下次发起绑定或解绑之前，不能将textEditorProxy释放。 |
| [InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions) *options | 表示指向[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例的指针。该参数用于指定附加输入法时的选项。 |
| [InputMethod_InputMethodProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-inputmethodproxy) **inputMethodProxy | 表示指向[InputMethod_InputMethodProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-inputmethodproxy)实例的指针。生命周期由调用者负责，在调用成功后需保持有效直到下次绑定或解绑操作完成，避免提前释放导致运行时错误。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。 [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。 [IME_ERR_PARAMCHECK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示参数错误。 [IME_ERR_IMCLIENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 输入法客户端错误。 [IME_ERR_IMMS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 输入法服务错误。 [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。 具体错误码可以参考[InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |

#### [h2]OH_InputMethodController_AttachWithUIContext()

```
InputMethod_ErrorCode OH_InputMethodController_AttachWithUIContext(ArkUI_ContextHandle context, InputMethod_TextEditorProxy *textEditorProxy, InputMethod_AttachOptions *options, InputMethod_InputMethodProxy **inputMethodProxy)
```
 描述

将应用绑定到输入法服务。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ContextHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context8h) context | 表示指向[ArkUI_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context)实例的指针。 |
| [InputMethod_TextEditorProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-texteditorproxy) *textEditorProxy | 表示指向[InputMethod_TextEditorProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-texteditorproxy)实例的指针。调用者需要自行管理textEditorProxy的生命周期。并且如果调用成功，调用者在下次发起绑定或解绑之前，不能将textEditorProxy释放。 |
| [InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions) *options | 表示指向[InputMethod_AttachOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-attachoptions)实例的指针。该参数用于指定附加输入法时的选项。 |
| [InputMethod_InputMethodProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-inputmethodproxy) **inputMethodProxy | 表示指向[InputMethod_InputMethodProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-inputmethodproxy)实例的指针。生命周期由调用者负责，在调用成功后需保持有效直到下次绑定或解绑操作完成，避免提前释放导致运行时错误。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。 [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。 [IME_ERR_PARAMCHECK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示参数错误。 [IME_ERR_IMCLIENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 输入法客户端错误。 [IME_ERR_IMMS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 输入法服务错误。 [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。 具体错误码可以参考[InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |

#### [h2]OH_InputMethodController_Detach()

```
InputMethod_ErrorCode OH_InputMethodController_Detach(InputMethod_InputMethodProxy *inputMethodProxy)
```
 描述

将应用从输入法服务解除绑定。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [InputMethod_InputMethodProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-inputmethodproxy) *inputMethodProxy | 表示指向[InputMethod_InputMethodProxy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-inputmethodproxy)实例的指针。inputMethodProxy由调用[OH_InputMethodController_Attach](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-controller-capi-h#oh_inputmethodcontroller_attach)获取。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) | 返回一个特定的错误码。 [IME_ERR_OK](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示成功。 [IME_ERR_IMCLIENT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示输入法客户端错误。 [IME_ERR_IMMS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 表示输入法服务错误。 [IME_ERR_NULL_POINTER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode) - 非预期的空指针。 具体错误码可以参考[InputMethod_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_errorcode)。 |
