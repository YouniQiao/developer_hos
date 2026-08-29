---
title: "Class (WebResourceError)"
upstream_id: "harmonyos-references/arkts-basic-components-web-webresourceerror"
catalog: "harmonyos-references"
content_hash: "00dd0e8c29bd"
synced_at: "2026-08-29T18:16:01.309026"
---

# Class (WebResourceError)

WebResourceError是Web组件中提供资源加载失败错误信息的类。该错误对象通过onErrorReceive和onHttpErrorReceive事件回调提供给应用，封装了错误详情用于调试和错误处理。通常与WebResourceRequest配合使用以确定哪个资源加载失败。示例代码参考[onErrorReceive事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onerrorreceive)。

![](./img/note_3.0-zh-cn.png)

- 该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class从API version 8开始支持。
- 示例效果请以真机运行为准。

#### constructor

constructor()

WebResourceError的构造函数，创建WebResourceError对象，用于封装Web组件资源加载失败时的错误信息。

系统能力： SystemCapability.Web.Webview.Core

#### getErrorCode

getErrorCode(): number

获取加载资源的错误码。用于判断资源加载失败的具体原因（如网络错误、服务器错误、权限问题等），以便开发者根据错误类型采取相应的处理策略（如重试、提示用户、降级显示等）。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 返回加载资源的错误码。错误码含义参考[WebNetErrorList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-neterrorlist#webneterrorlist)或HTTP协议状态码。 |

#### getErrorInfo

getErrorInfo(): string

获取加载资源的错误信息。用于详细描述资源加载失败的具体原因，开发者可将错误信息输出到日志用于调试分析，或向用户显示友好的错误提示。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 返回加载资源的错误信息。 |
