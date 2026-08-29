---
title: "Interface (NativeMediaPlayerBridge)"
upstream_id: "harmonyos-references/arkts-apis-webview-nativemediaplayerbridge"
catalog: "harmonyos-references"
content_hash: "0dfe0e6fa6a8"
synced_at: "2026-08-29T18:15:59.245972"
---

# Interface (NativeMediaPlayerBridge)

NativeMediaPlayerBridge是[CreateNativeMediaPlayerCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-t#createnativemediaplayercallback12)回调函数的返回值类型，是接管网页媒体的播放器和ArkWeb内核之间的一个接口类。ArkWeb内核通过该接口类的实例对象控制应用创建的用于接管网页媒体的播放器。该接口允许应用使用自定义的媒体播放器接管网页中的媒体内容播放，同时，该接口还支持播放器的挂起和恢复机制。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Interface首批接口从API version 12开始支持。
- 示例效果请以真机运行为准。

#### updateRect12+

updateRect(x: number, y: number, width: number, height: number): void

向应用通知surface位置信息。当网页布局变化、页面滚动或播放区域发生改变时由ArkWeb内核回调此方法，应用需据此更新原生播放器渲染表面的位置和大小。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 是 | surface相对于Web组件的x坐标信息。 单位：px。 |
| y | number | 是 | surface相对于Web组件的y坐标信息。 单位：px。 |
| width | number | 是 | surface的宽度。 单位：px。 |
| height | number | 是 | surface的高度。 单位：px。 |

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### play12+

play(): void

播放媒体。

系统能力： SystemCapability.Web.Webview.Core

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### pause12+

pause(): void

暂停播放。

系统能力： SystemCapability.Web.Webview.Core

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### seek12+

seek(targetTime: number): void

跳转播放进度到指定时间点。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| targetTime | number | 是 | 播放跳转到的时间点，从媒体开始播放时计算。 单位：秒。 |

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### setVolume12+

setVolume(volume: number): void

设置播放器音量值。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| volume | number | 是 | 播放器的音量。 取值范围：[0, 1.0]，其中0表示静音，1.0表示最大音量。超出取值范围时，按边界值自动修正。 |

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### setMuted12+

setMuted(muted: boolean): void

设置静音状态。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| muted | boolean | 是 | 是否静音。 true表示静音，false表示未静音。 |

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### setPlaybackRate12+

setPlaybackRate(playbackRate: number): void

设置播放速率。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| playbackRate | number | 是 | 播放速率。 取值范围：[0, 10.0]，其中1表示原速播放。超出取值范围时，按边界值自动修正。 |

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### release12+

release(): void

销毁播放器。

系统能力： SystemCapability.Web.Webview.Core

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### enterFullscreen12+

enterFullscreen(): void

使播放器进入全屏。

系统能力： SystemCapability.Web.Webview.Core

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### exitFullscreen12+

exitFullscreen(): void

使播放器退出全屏。

系统能力： SystemCapability.Web.Webview.Core

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### resumePlayer12+

resumePlayer?(): void

通知应用重建播放器，并恢复播放器的状态信息。仅与 suspendPlayer 成对出现。

系统能力： SystemCapability.Web.Webview.Core

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。

#### suspendPlayer12+

suspendPlayer?(type: SuspendType): void

通知应用销毁播放器，并保存播放器的状态信息。仅与 resumePlayer 成对出现。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | [SuspendType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-e#suspendtype12) | 是 | 播放器挂起类型，用于指定播放器挂起的方式。不同SuspendType取值对应不同的挂起场景。 |

示例：

完整示例代码参考[onCreateNativeMediaPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#oncreatenativemediaplayer12)。
