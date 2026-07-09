---
title: "Class (WebResourceError)"
upstream_id: "harmonyos-references/arkts-basic-components-web-webresourceerror"
catalog: "harmonyos-references"
content_hash: "75347ba44483"
synced_at: "2026-07-09T00:58:54.234894"
---

# Class (WebResourceError)

WebResourceError是Web组件中提供资源加载失败错误信息的类。该错误对象通过onErrorReceive和onHttpErrorReceive事件回调提供给应用，封装了错误详情用于调试和错误处理。通常与WebResourceRequest配合使用以确定哪个资源加载失败。示例代码参考[onErrorReceive事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onerrorreceive)。

![](./img/note_3.0-zh-cn.png)

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 8开始支持。
- 示例效果请以真机运行为准。

#### constructor

constructor()

WebResourceError的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### getErrorCode

getErrorCode(): number

获取加载资源的错误码。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 返回加载资源的错误码。错误码含义参考[WebNetErrorList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-neterrorlist#webneterrorlist)、HTTP协议状态码。 |

#### getErrorInfo

getErrorInfo(): string

获取加载资源的错误信息。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 返回加载资源的错误信息。 |
