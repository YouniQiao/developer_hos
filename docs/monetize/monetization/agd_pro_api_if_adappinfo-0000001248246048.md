---
title: "AdAppInfo"
displayed_sidebar: monetizationSidebar
original_url: /docs/monetize/monetization/agd_pro_api_if_adappinfo-0000001248246048
format: md
---



| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | `String` | 应用AppID。 |
| packageName | O | `String` | 应用包名。 |
| appName | M | `String` | 应用名称。 |
| description | O | `String` | 应用描述。 |
| developerName | O | `String` | 开发者名称。 |
| packageType | O | `Integer` | 应用包类型。  取值范围：   * 0：APK * 3：RPK |
| openUrl | O | `String` | NoAPK的打开地址。 |
| versionCode | O | `String` | 应用版本号。 |
| versionName | O | `String` | 应用版本号名称。 |
| icon | O | `String` | 应用icon地址。  icon为216\*216的圆角矩形。 |
| secCategory | O | `String` | 应用的二级分类名。 |
| thirdCategory | O | `String` | 应用的三级分类名。 |
| size | O | Integer（64） | 应用包大小。  单位：字节 |
| sizeDesc | O | `String` | 应用大小文字描述  例如：11.3MB |
| downloads | O | `String` | 下载次数。 |
| downloadDesc | O | `String` | 下载次数描述。 |
| stars | O | `String` | 应用评分 |
| releaseDate | O | `String` | 发布日期。  精确到天  格式：*YYYY-MM-DD* |
| memo | O | `String` | 内容介绍。 |
| downloadLink | O | `String` | 下载应用的DeepLink地址。  仅请求中“downloadType = 2”时返回。未集成SDK的媒体可通过此链接来下载应用，下载体验由请求广告时的intallType指定。  协议头为“hiapplink://”。  不同地址的使用场景和优先级，详见[场景处理](/docs/monetize/monetization/agd_pro_api_scenario-handle-0000001262378977)章节。  新版本情况下，该字段支持优先返回自定义落地页的跳转地址，自定义落地可有效提升转化率，如需使用自定义落地页，请联系华为运营。 |
| downloadParam | O | [DownloadParam](/docs/monetize/monetization/agd_pro_api_if_downloadparam-0000001294566329) | 用于调用AGD SDK下载应用的参数。  仅请求中“downloadType = 1”时返回。下载体验由SDK传参的intallType指定。  **当前仅面向华为内部媒体开放使用**。  说明：  通过SDK下载时该参数必填，且必须原值透传，否则影响鉴权以及打点计费。 |
| adWapUrl | O | `String` | 广告主指定的点击H5跳转地址。  长度最大为1024。 |
| adDeepLink | O | `String` | 广告主指定的点击DeepLink跳转地址。  长度最大为1024。 |
| clickWapUrl | O | `String` | 应用详情页的H5地址。  长度最大为1024。 |
| clickDeepLink | O | `String` | 应用在AG内的标准详情页DeepLink地址。  协议头为“hiapp://”。  长度最大为1024。  新版本情况下，该字段支持优先返回自定义落地页的跳转地址，自定义落地可有效提升转化率，如需使用自定义落地页，请联系华为运营。 |
| privacyUrl | O | `String` | 隐私政策。 |
| permission | O | [AppPermission](/docs/monetize/monetization/agd_pro_api_if_apppermission-0000001437888421) | 应用权限。 |
