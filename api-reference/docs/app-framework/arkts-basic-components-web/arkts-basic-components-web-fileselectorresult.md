---
title: "Class (FileSelectorResult)"
upstream_id: "harmonyos-references/arkts-basic-components-web-fileselectorresult"
catalog: "harmonyos-references"
content_hash: "c157029790f7"
synced_at: "2026-08-29T18:16:00.408768"
---

# Class (FileSelectorResult)

FileSelectorResult是ArkWeb组件中用于通知Web组件文件选择结果的类，支持应用层自定义文件选择行为、统一文件选择结果回传机制，适用于应用需要接管文件选择流程的场景，例如拉起系统文件选择器、图库选择器或相机选择器后，将选中的文件结果返回给Web页面。当Web组件中的HTML页面通过<input type="file">等方式发起文件选择请求时，应用可通过FileSelectorResult将用户选择的文件列表回传给Web组件，完成文件选择流程。该类主要在onShowFileSelector事件回调中使用，使应用能够灵活控制文件选择交互，提升用户体验的一致性。

示例代码参考[onShowFileSelector](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onshowfileselector9)。

![](./img/note_3.0-zh-cn.png)

- 该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class从API version 9开始支持。
- 示例效果请以真机运行为准。

#### constructor9+

constructor()

FileSelectorResult的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### handleFileList9+

handleFileList(fileList: Array<string>): void

通过传入的文件列表（fileList）通知Web组件用户选择的文件，完成文件选择流程。Web组件可以使用传入的文件列表进行后续处理。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fileList | Array | 是 | 文件URI字符串数组，用于向Web组件传递用户选择的文件路径。 |
