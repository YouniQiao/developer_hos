---
title: "Class (FileSelectorParam)"
upstream_id: "harmonyos-references/arkts-basic-components-web-fileselectorparam"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:06.255078"
---

# Class (FileSelectorParam)

FileSelectorParam是ArkWeb组件中的文件选择器参数类，用于获取Web页面中<input type="file">触发文件选择请求时的相关参数信息，包括文件选择模式、文件过滤类型、MIME类型、建议文件名、默认起始路径等。

当Web页面发起文件选择请求时，开发者通过FileSelectorParam获取前端传递的完整参数信息，据此构建与前端需求匹配的自定义文件选择器，确保文件选择的模式、类型过滤、命名等行为与HTML规范一致。

在Web组件中需要自定义处理文件上传请求的场景下使用。开发者通过注册onShowFileSelector回调拦截文件选择请求，从回调事件的fileSelector属性获取FileSelectorParam实例，读取参数后构建对应的系统文件选择器（如DocumentViewPicker、PhotoViewPicker等），并将选择结果通过FileSelectorResult返回给Web组件。

示例代码参考[onShowFileSelector](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onshowfileselector9)。

![](./img/note_3.0-zh-cn.png)

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 9开始支持。
- 示例效果请以真机运行为准。

#### constructor9+

constructor()

FileSelectorParam的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### getTitle9+

getTitle(): string

获取文件选择器标题。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 返回文件选择器标题。 |

#### getMode9+

getMode(): FileSelectorMode

获取文件选择器的模式。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| [FileSelectorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-e#fileselectormode9) | 返回文件选择器的模式。 |

#### getAcceptType9+

getAcceptType(): Array<string>

获取文件过滤类型。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | 返回文件过滤类型。 |

#### isCapture9+

isCapture(): boolean

获取是否调用多媒体能力。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 返回是否调用多媒体能力。 true表示需要调用摄像头或麦克风等多媒体设备来获取文件（如拍照或录音），false表示仅从存储设备中选择已有文件。 |

#### getMimeTypes18+

getMimeTypes(): Array<string>

获取文件MIME类型。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | 返回文件MIME类型。 |

#### getSuggestedName23+

getSuggestedName(): string

获取建议选择的文件名。对应HTML里[option](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-file-upload#自定义处理js接口拉起的文件请求)中的suggestedName。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 返回建议选择的文件名。 |

#### getDefaultPath23+

getDefaultPath(): string

获取文件选择器默认起始路径。对应HTML里[option](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-file-upload#自定义处理js接口拉起的文件请求)中的startIn。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 返回默认起始路径。 当前端startIn设置为公共目录downloads、pictures时，要注意应分别转化为HarmonyOS系统下的download和images，请参考[获取并使用公共目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/request-dir-permission)。 |

#### getDescriptions23+

getDescriptions(): Array<string>

获取允许的各组文件类型的可选描述。对应HTML里[option](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-file-upload#自定义处理js接口拉起的文件请求)中的description。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | 返回文件类型的描述数组。 |

#### isAcceptAllOptionExcluded23+

isAcceptAllOptionExcluded(): boolean

获取文件选择器是否包含选项（*/*），即所有文件。对应HTML里[option](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-file-upload#自定义处理js接口拉起的文件请求)中的excludeAcceptAllOption。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 返回是否排除“所有文件类型”选项。 true表示排除（不包含“所有文件类型”选项）。false表示不排除，开发者需要在文件选择器中添加“所有文件类型”选项。 |

#### getAcceptableFileTypes23+

getAcceptableFileTypes(): Array<Array<AcceptableFileType>>

获取文件类型信息。对应HTML里[option](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-file-upload#自定义处理js接口拉起的文件请求)中的types。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Array> | 返回文件类型信息。 |
