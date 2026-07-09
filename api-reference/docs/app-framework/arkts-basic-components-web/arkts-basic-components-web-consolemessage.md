---
title: "Class (ConsoleMessage)"
upstream_id: "harmonyos-references/arkts-basic-components-web-consolemessage"
catalog: "harmonyos-references"
content_hash: "1502c665a6ed"
synced_at: "2026-07-09T00:58:53.214879"
---

# Class (ConsoleMessage)

ConsoleMessage是Web组件中封装JavaScript控制台输出信息的对象。当网页通过console.log()、console.warn()、console.error()等方法输出日志时，该对象通过onConsole事件回调提供给应用，用于监控和检查网页调试输出。示例代码参考[onConsole事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onconsole)。

![](./img/note_3.0-zh-cn.png)

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 8开始支持。
- 示例效果请以真机运行为准。

#### constructor(deprecated)

constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel)

ConsoleMessage的构造函数。

![](./img/note_3.0-zh-cn.png) 从API version 8开始支持，从API version 9开始废弃。建议使用[constructor](#constructor9)代替。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| message | string | 是 | ConsoleMessage的日志输出信息。 |
| sourceId | string | 是 | 网页源文件的路径和文件名。 |
| lineNumber | number | 是 | ConsoleMessage的行号。 |
| messageLevel | [MessageLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-e#messagelevel) | 是 | ConsoleMessage的日志级别。 |

#### constructor9+

constructor()

ConsoleMessage的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### getLineNumber

getLineNumber(): number

获取ConsoleMessage的行号。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 返回ConsoleMessage的行号。 |

#### getMessage

getMessage(): string

获取ConsoleMessage的日志信息。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 返回ConsoleMessage的日志信息。 |

#### getMessageLevel

getMessageLevel(): MessageLevel

获取ConsoleMessage的信息级别。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| [MessageLevel](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-e#messagelevel) | 返回ConsoleMessage的信息级别。 |

#### getSourceId

getSourceId(): string

获取网页源文件路径和文件名。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 返回网页源文件路径和文件名。 |

#### getSource23+

getSource(): ConsoleMessageSource

获取ConsoleMessage的日志来源。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| [ConsoleMessageSource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-e#consolemessagesource23) | 返回ConsoleMessage的日志来源。 |
