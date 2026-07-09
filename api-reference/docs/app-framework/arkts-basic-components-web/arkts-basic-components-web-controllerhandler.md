---
title: "Class (ControllerHandler)"
upstream_id: "harmonyos-references/arkts-basic-components-web-controllerhandler"
catalog: "harmonyos-references"
content_hash: "86e2f9bb7f9d"
synced_at: "2026-07-09T00:58:53.262089"
---

# Class (ControllerHandler)

ControllerHandler是ArkWeb提供的用于处理新建Web组件控制器分配的帮助类。当Web页面通过window.open等方式请求创建新窗口，且Web组件已开启[multiWindowAccess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#multiwindowaccess9)能力时，系统会通过[onWindowNew](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onwindownew9)事件将ControllerHandler对象提供给应用，开发者需调用其[setWebController](#setwebcontroller9)方法为新窗口设置一个有效的[WebviewController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller)对象，从而将新窗口与页面中实际创建的Web组件关联起来；若应用决定不创建新窗口，也必须调用setWebController(null)通知Web内核，否则会造成render进程阻塞。该类的典型使用场景是在自定义弹窗、新页面或分屏中打开Web新窗口，并需要应用侧显式管理新窗口的URL展示与安全隔离。

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
