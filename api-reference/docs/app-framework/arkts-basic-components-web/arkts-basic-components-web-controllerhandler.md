---
title: "Class (ControllerHandler)"
upstream_id: "harmonyos-references/arkts-basic-components-web-controllerhandler"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:06.275315"
---

# Class (ControllerHandler)

设置用户新建Web组件的WebviewController对象。示例代码参考[onWindowNew事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onwindownew9)。

![](./img/note_3.0-zh-cn.png)

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 9开始支持。
- 示例效果请以真机运行为准。

#### constructor9+

constructor()

ControllerHandler的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### setWebController9+

setWebController(controller: WebviewController): void

设置WebviewController对象，如果不需要打开新窗口请设置为null。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controller | [WebviewController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller) | 是 | 新建Web组件的WebviewController对象，如果不需要打开新窗口请设置为null。 |
