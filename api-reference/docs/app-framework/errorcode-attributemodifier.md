---
title: "动态属性设置错误码"
upstream_id: "harmonyos-references/errorcode-attributemodifier"
catalog: "harmonyos-references"
content_hash: "e4c6d6087bb1"
synced_at: "2026-07-28T16:49:49.687197"
---

# 动态属性设置错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 100201 attributeModifier 不支持部分接口的使用

错误信息

Something not supported in attributeModifier scenario.

错误描述

部分接口不支持通过[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)设置，具体请参考[属性或事件对attributeModifier的支持情况](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-extension-attributemodifier#属性或事件对attributemodifier的支持情况)。

可能原因

attributeModifier 的动态属性设置机制当前未实现对部分接口的支持，导致这些接口无法通过该机制设置属性。

处理步骤

请停止使用不支持的接口，具体请参考[用attributeModifier设置组件动态属性出现JSCrash](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-attribute-modifier-faq#使用attributemodifier设置组件动态属性出现jscrash)。
