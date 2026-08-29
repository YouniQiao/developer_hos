---
title: "InputMethod_PrivateCommand"
upstream_id: "harmonyos-references/capi-inputmethod-inputmethod-privatecommand"
catalog: "harmonyos-references"
content_hash: "c557953326da"
synced_at: "2026-08-29T18:16:14.035086"
---

# InputMethod_PrivateCommand

```
typedef struct InputMethod_PrivateCommand InputMethod_PrivateCommand
```

#### 概述

私有命令结构体，采用key-value机制，作为输入框与输入法应用之间传递私有数据的载体。可用于传递自定义指令、扩展能力参数和特定场景数据，提升输入法功能的扩展性和兼容性。每个PrivateCommand实例包含一个key（标识符字符串）和一个value（布尔值、整数或字符串，三种类型只能选择一种），value的数据类型由InputMethod_CommandValueType标识。

用途：在输入法应用与编辑框客户端之间传递私有数据，实现双方的自定义通信。输入法应用通过OH_InputMethodProxy_SendPrivateCommand向编辑框客户端发送私有指令；编辑框客户端通过OH_TextEditorProxy_ReceivePrivateCommandFunc回调接收来自输入法应用的私有指令。每个PrivateCommand实例携带一条key-value私有数据，最多可同时发送5个实例，单次发送的所有私有数据与key值的大小总和限制为32KB。

使用场景：

- 输入法应用向编辑框发送私有指令：输入法应用创建PrivateCommand实例，设置key和value后，通过[OH_InputMethodProxy_SendPrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-proxy-capi-h#oh_inputmethodproxy_sendprivatecommand)发送给编辑框客户端。
- 编辑框客户端接收私有指令：编辑框客户端在[OH_TextEditorProxy_ReceivePrivateCommandFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc)回调中接收PrivateCommand实例数组，遍历数组解析每个实例的key和value。

起始版本： 12

相关模块： [InputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod)

所在头文件： [inputmethod_private_command_capi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h)

相关函数：

| 函数 | 说明 |
| --- | --- |
| [OH_PrivateCommand_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_create) | 创建InputMethod_PrivateCommand实例。 |
| [OH_PrivateCommand_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_destroy) | 销毁InputMethod_PrivateCommand实例。 |
| [OH_PrivateCommand_SetKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_setkey) | 设置key值。 |
| [OH_PrivateCommand_SetBoolValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_setboolvalue) | 设置布尔类型value值。 |
| [OH_PrivateCommand_SetIntValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_setintvalue) | 设置整数类型value值。 |
| [OH_PrivateCommand_SetStrValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_setstrvalue) | 设置字符串类型value值。 |
| [OH_PrivateCommand_GetKey](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_getkey) | 获取key值。 |
| [OH_PrivateCommand_GetValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_getvaluetype) | 获取value的数据类型。 |
| [OH_PrivateCommand_GetBoolValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_getboolvalue) | 获取布尔类型value值。 |
| [OH_PrivateCommand_GetIntValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_getintvalue) | 获取整数类型value值。 |
| [OH_PrivateCommand_GetStrValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-private-command-capi-h#oh_privatecommand_getstrvalue) | 获取字符串类型value值。 |

相关接口：

| 接口 | 说明 |
| --- | --- |
| [OH_InputMethodProxy_SendPrivateCommand](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-proxy-capi-h#oh_inputmethodproxy_sendprivatecommand) | 输入法应用向编辑框客户端发送私有指令，PrivateCommand实例数组作为参数传入。最多5个实例，数据总大小限制32KB。 |
| [OH_TextEditorProxy_ReceivePrivateCommandFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-editor-proxy-capi-h#oh_texteditorproxy_receiveprivatecommandfunc) | 编辑框客户端接收私有指令的回调函数，PrivateCommand实例数组作为参数传入。回调返回后实例内存被释放。 |

相关枚举：

| 枚举 | 说明 |
| --- | --- |
| [InputMethod_CommandValueType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-types-capi-h#inputmethod_commandvaluetype) | PrivateCommand中value的数据类型枚举（NONE/STRING/BOOL/INT32）。 |
