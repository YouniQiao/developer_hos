---

title: "滚动类组件错误码"
upstream_id: "harmonyos-references/errorcode-scroll"
catalog: "harmonyos-references"
synced_at: "2026-07-09T00:58:48.758917"
content_hash: "d37088bdc4f6"
---


# 滚动类组件错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

#### 100004 控制器未绑定组件

错误信息

Controller not bound to component.

错误描述

控制器未绑定组件，通过控制器调用接口时，系统会产生此错误码。该错误码为string类型。

可能原因

控制器未绑定组件，通过控制器调用接口。

处理步骤

请检查控制器是否绑定了组件，或者控制器绑定的组件是否已经被释放。
