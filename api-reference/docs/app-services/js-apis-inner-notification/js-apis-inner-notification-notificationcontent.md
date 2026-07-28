---
title: "NotificationContent"
upstream_id: "harmonyos-references/js-apis-inner-notification-notificationcontent"
catalog: "harmonyos-references"
content_hash: "d22c80a4fca7"
synced_at: "2026-07-28T16:52:47.493513"
---

# NotificationContent

NotificationContent中定义通知的内容结构，提供多种通知类型的内容描述接口。当应用需要发布通知时，可根据通知的展示需求（如普通文本、长文本、多行文本、图片、实况窗），选择对应的内容类型接口构造通知内容。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### NotificationContent

通知内容。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| notificationContentType11+ | [notificationManager.ContentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notificationmanager#contenttype) | 否 | 是 | 通知内容类型，用于指定通知的内容布局类型，决定了通知在通知中心中的展示样式。需与对应类型的通知内容对象配合使用，例如设置为NOTIFICATION_CONTENT_BASIC_TEXT时需同时填充normal字段。 |
| normal | [NotificationBasicContent](#notificationbasiccontent) | 否 | 是 | 基本类型通知内容。当notificationContentType为NOTIFICATION_CONTENT_BASIC_TEXT时使用，通知以普通文本样式展示标题和正文。 |
| longText | [NotificationLongTextContent](#notificationlongtextcontent) | 否 | 是 | 长文本类型通知内容。当notificationContentType为NOTIFICATION_CONTENT_LONG_TEXT时使用，通知展开后可展示完整长文本内容。 |
| multiLine | [NotificationMultiLineContent](#notificationmultilinecontent) | 否 | 是 | 多行类型通知内容。当notificationContentType为NOTIFICATION_CONTENT_MULTILINE时使用，通知展开后以多行列表样式展示。 |
| picture | [NotificationPictureContent](#notificationpicturecontent) | 否 | 是 | 图片类型通知内容。当notificationContentType为NOTIFICATION_CONTENT_PICTURE时使用。通知展开后可展示图片。 |
| systemLiveView11+ | [NotificationSystemLiveViewContent](#notificationsystemliveviewcontent) | 否 | 是 | 系统实况窗类型通知内容。不支持三方应用直接创建该类型通知，可以由系统代理创建系统实况窗类型通知后，三方应用发布同ID的通知来更新指定内容。 |
| contentType(deprecated) | [notification.ContentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-notification#contenttype) | 否 | 是 | 通知内容类型。 从API version 7开始支持，从API version 11开始废弃，建议使用notificationContentType替代。 |

#### NotificationBasicContent

描述普通文本通知，用于展示标题和正文内容，是其他通知类型的基础内容结构。其他通知类型（如长文本、多行文本、图片、实况窗）均继承本接口，在此基础上扩展各自特有字段。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| title | string | 否 | 否 | 通知标题，显示在通知顶部。 不可为空字符串，大小不超过1024字节，超出部分会被截断。 |
| text | string | 否 | 否 | 通知正文内容，显示在标题下方。 不可为空字符串，大小不超过3072字节，超出部分会被截断。 |
| additionalText | string | 否 | 是 | 通知附加内容，是对通知内容的补充，不在通知中心中显示。 默认为空。大小不超过3072字节，超出部分会被截断。 |
| lockscreenPicture12+ | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 否 | 是 | 通知在锁屏界面显示的图片，默认为空。当前仅支持实况窗类型通知。图标像素的总字节数不超过192KB（图标像素的总字节数通过[getPixelBytesNumber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap#getpixelbytesnumber7)获取），建议图标像素长宽为128*128。实际显示效果依赖于设备能力和通知中心UI样式。 |

#### NotificationLongTextContent

描述长文本通知。继承自[NotificationBasicContent](#notificationbasiccontent)。

![](./img/note_3.0-zh-cn.png)

- 当该类型通知与其他通知形成组通知时，该通知类型的展示效果默认为折叠态，显示的标题与正文为该类型继承的[普通文本](#notificationbasiccontent)中的title与text。 当该类型通知单独展示，没有与其他通知形成组通知时，该通知类型的展示效果默认为展开态，显示的标题为展开时的标题expandedTitle，显示的正文内容为长文本longText。
- 用户点击成组展示的通知，查看各个通知详情时，该通知的展示效果变化为展开态。
- 实际显示效果依赖于设备能力和通知中心UI样式。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| expandedTitle | string | 否 | 否 | 通知展开时的标题。 不可为空字符串，大小不超过1024字节，超出部分会被截断。 |
| longText | string | 否 | 否 | 通知展开后显示的完整长文本内容。 不可为空字符串，大小不超过3072字节，超出部分会被截断。 |
| briefText | string | 否 | 否 | 通知概要内容，是对通知内容的总结，不在通知中心中显示。 不可为空字符串，大小不超过1024字节，超出部分会被截断。 |

#### NotificationMultiLineContent

描述多行文本通知。继承自[NotificationBasicContent](#notificationbasiccontent)。

![](./img/note_3.0-zh-cn.png)

- 当该类型通知与其他通知形成组通知时，该通知类型的展示效果默认为折叠态，显示的标题与正文为该类型继承的[普通文本](#notificationbasiccontent)中的title与text。 当该类型通知单独展示，没有与其他通知形成组通知时，该通知类型的展示效果默认为展开态，显示的标题为展开时的标题longTitle，多行文本内容lines作为正文多行显示。
- 用户点击成组展示的通知，查看各个通知详情时，该通知的展示效果变化为展开态。
- 实际显示效果依赖于设备能力和通知中心UI样式。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| longTitle | string | 否 | 否 | 通知展开时的标题。 不可为空字符串，大小不超过1024字节，超出部分会被截断。 |
| lines | Array | 否 | 否 | 通知展开后显示的多行文本列表，每行作为独立条目展示，最多支持三行。 每行大小不超过1024字节，超出部分会被截断。 |
| briefText | string | 否 | 否 | 通知概要内容，是对通知内容的总结，不在通知中心中显示。 不可为空字符串，大小不超过1024字节，超出部分会被截断。 |

#### NotificationPictureContent

描述附有图片的通知。继承自[NotificationBasicContent](#notificationbasiccontent)。

![](./img/note_3.0-zh-cn.png)

- 当该类型通知与其他通知形成组通知时，该通知类型的展示效果默认为折叠态，显示的标题与正文为该类型继承的[普通文本](#notificationbasiccontent)中的title与text。 当该类型通知单独展示，没有与其他通知形成组通知时，该通知类型的展示效果默认为展开态，显示的标题为展开时的标题expandedTitle，显示的正文为该类型继承的普通文本中的text+该类型的图片内容picture。
- 用户点击成组展示的通知，查看各个通知详情时，该通知的展示效果变化为展开态。
- 实际显示效果依赖于设备能力和通知中心UI样式。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| expandedTitle | string | 否 | 否 | 通知展开时的标题。 不可为空字符串，大小不超过1024字节，超出部分会被截断。 |
| picture | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 否 | 否 | 通知展开后显示的图片内容。 图标像素的总字节数不能超过2MB（图标像素的总字节数通过[getPixelBytesNumber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap#getpixelbytesnumber7)获取）。 |
| briefText | string | 否 | 否 | 通知概要内容，是对通知内容的总结，不在通知中心中显示。 不可为空字符串，大小不超过1024字节，超出部分会被截断。 |

#### NotificationSystemLiveViewContent

描述系统实况窗通知内容，用于在实况窗中展示实时状态信息。不支持三方应用直接创建该类型通知，可以由系统代理创建系统实况窗类型通知后，三方应用发布同ID的通知来更新指定内容。继承自[NotificationBasicContent](#notificationbasiccontent)。

![](./img/note_3.0-zh-cn.png) 实际显示效果依赖于设备能力和通知中心UI样式。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| typeCode11+ | number | 否 | 否 | 类型标识符，标记调用方业务类型，用于区分不同实况窗业务场景。 |
| capsule11+ | [NotificationCapsule](#notificationcapsule11) | 否 | 是 | 实况通知的胶囊。默认为空。 |
| button11+ | [NotificationButton](#notificationbutton11) | 否 | 是 | 实况通知的按钮。默认为空。 |
| time11+ | [NotificationTime](#notificationtime11) | 否 | 是 | 实况通知的时间。默认为空。 |
| progress11+ | [NotificationProgress](#notificationprogress11) | 否 | 是 | 实况内容的进度。默认为空。 |

#### NotificationCapsule11+

描述通知胶囊，用于在实况窗中展示胶囊形态。

![](./img/note_3.0-zh-cn.png) 实际显示效果依赖于设备能力和通知中心UI样式。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| title | string | 否 | 是 | 胶囊标题。 大小不超过202字节，超出部分会被截断。默认为空。 |
| icon | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 否 | 是 | 胶囊图标。 图标像素的总字节数不超过192KB（图标像素的总字节数通过[getPixelBytesNumber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap#getpixelbytesnumber7)获取），建议图标像素长宽为128*128。 |
| backgroundColor | string | 否 | 是 | 胶囊背景颜色。支持rgb、rgba或者argb的格式颜色。 rgb格式颜色示例：'#ffffff'、'rgb(255, 100, 255)'。 rgba格式颜色示例：'rgba(255, 100, 255, 0.5)'。 argb格式颜色示例：'#ff000000'。 大小不超过202字节，超出部分会被截断。默认为空。 |

#### NotificationButton11+

描述通知按钮，用于在实况窗中展示可交互的按钮。

![](./img/note_3.0-zh-cn.png) 实际显示效果依赖于设备能力和通知中心UI样式。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| names | Array | 否 | 是 | 按钮名称列表，每个名称对应一个通知按钮的文本显示。最多支持3个按钮。 每个名称的大小不超过202字节，超出部分会被截断。默认为空。 |
| icons | Array | 否 | 是 | 按钮图标列表，与names一一对应，每个图标显示在对应按钮上。最多支持3个。图标像素的总字节数不超过192KB（图标像素的总字节数通过[getPixelBytesNumber](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap#getpixelbytesnumber7)获取），建议图标像素长宽为128*128。默认为空。该属性与iconsResource互斥，只使用其中一个即可。 |
| iconsResource12+ | Array | 否 | 是 | 按钮图标资源列表，与names一一对应，使用Resource资源引用图标。最多支持3个。默认为空。与icons互斥，只使用其中一个即可。 |

#### NotificationTime11+

描述通知计时信息。

![](./img/note_3.0-zh-cn.png) 实际显示效果依赖于设备能力和通知中心UI样式。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| initialTime | number | 否 | 是 | 计时起始时间，用于设置实况窗中的计时起点。默认值为0。 单位：毫秒。 |
| isCountDown | boolean | 否 | 是 | 是否为倒计时模式。默认为false。 - true：时间从initialTime开始递减显示。 - false：时间从initialTime开始递增显示。 |
| isPaused | boolean | 否 | 是 | 计时是否暂停。默认为false。 - true：计时暂停在当前值。 - false：计时正常运行。 |
| isInTitle | boolean | 否 | 是 | 时间信息是否展示在通知标题中。默认为false。 - true：计时信息将嵌入标题区域展示。 - false：计时信息在独立区域展示。 |

示例：

```
// 该通知从3秒开始倒计时，并且时间展示在title中。
time: {
    initialTime: 3000,
    isCountDown: true,
    isPaused: false,
    isInTitle: true,
}
```

#### NotificationProgress11+

描述通知进度，用于在实况窗中展示进度条信息。

![](./img/note_3.0-zh-cn.png) 实际显示效果依赖于设备能力和通知中心UI样式。

系统能力：SystemCapability.Notification.Notification

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| maxValue | number | 否 | 是 | 进度最大值。 |
| currentValue | number | 否 | 是 | 进度当前值。 |
| isPercentage | boolean | 否 | 是 | 是否按百分比展示进度。默认为false。 - true：进度以百分比形式展示。 - false：进度以绝对值形式展示。 |
