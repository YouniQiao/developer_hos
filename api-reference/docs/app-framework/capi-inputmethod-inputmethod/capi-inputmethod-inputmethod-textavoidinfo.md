---
title: "InputMethod_TextAvoidInfo"
upstream_id: "harmonyos-references/capi-inputmethod-inputmethod-textavoidinfo"
catalog: "harmonyos-references"
content_hash: "c5123f1be02b"
synced_at: "2026-08-29T18:16:14.119744"
---

# InputMethod_TextAvoidInfo

```
typedef struct InputMethod_TextAvoidInfo InputMethod_TextAvoidInfo
```

#### 概述

输入框避让信息结构体，描述编辑框在物理屏幕上的位置和高度信息。输入法框架根据TextAvoidInfo中的positionY和height计算避让区域，使编辑框在软键盘弹起时能够自动上移或调整布局，确保输入区域不被键盘遮挡，保证用户可见并可操作输入内容。

用途：作为编辑框避让键盘区域的参数载体，向输入法框架传递编辑框的垂直位置和高度信息。输入法框架根据positionY（编辑框顶部Y坐标，取值原则：大于等于0的有效屏幕Y坐标）和height（编辑框高度，取值原则：大于0的有效高度值）确定编辑框在屏幕上的完整垂直范围（positionY到positionY+height），并与键盘占据的屏幕区域进行比较，计算是否需要避让以及避让的偏移量。

使用场景：在编辑框与输入法服务绑定后（通过OH_InputMethodController_Attach），编辑框客户端通过InputMethod_TextConfig将TextAvoidInfo传递给输入法框架。输入法框架在键盘弹起时读取避让信息，判断编辑框是否处于键盘遮挡区域，并触发相应的避让调整。该结构体也可由输入法应用读取，用于了解编辑框的屏幕位置以优化键盘布局。

起始版本： 12

相关模块： [InputMethod](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod)

所在头文件： [inputmethod_text_avoid_info_capi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h)

相关函数：

| 函数 | 说明 |
| --- | --- |
| [OH_TextAvoidInfo_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h#oh_textavoidinfo_create) | 创建InputMethod_TextAvoidInfo实例 |
| [OH_TextAvoidInfo_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h#oh_textavoidinfo_destroy) | 销毁InputMethod_TextAvoidInfo实例 |
| [OH_TextAvoidInfo_SetPositionY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h#oh_textavoidinfo_setpositiony) | 设置Y坐标值 |
| [OH_TextAvoidInfo_SetHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h#oh_textavoidinfo_setheight) | 设置高度值 |
| [OH_TextAvoidInfo_GetPositionY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h#oh_textavoidinfo_getpositiony) | 获取Y坐标值 |
| [OH_TextAvoidInfo_GetHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-avoid-info-capi-h#oh_textavoidinfo_getheight) | 获取高度值 |
| [OH_TextConfig_GetTextAvoidInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-text-config-capi-h#oh_textconfig_gettextavoidinfo) | 从TextConfig中获取TextAvoidInfo |

相关结构体：

| 结构体 | 说明 |
| --- | --- |
| [InputMethod_TextConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-inputmethod-inputmethod-textconfig) | 文本输入框配置结构体，TextAvoidInfo作为其子属性被包含 |
