---
title: "Class (JsGeolocation)"
upstream_id: "harmonyos-references/arkts-basic-components-web-jsgeolocation"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:06.484917"
---

# Class (JsGeolocation)

JsGeolocation是Web组件在收到网页地理位置权限请求时，提供给应用的授权响应对象。当网页通过JavaScript调用地理位置接口（如navigator.geolocation）请求获取设备位置信息时，应用需要决定是否授权该请求。JsGeolocation通过invoke方法允许应用对指定源的网页授予或拒绝地理位置权限，同时可选择将该权限决策保存到系统中，避免后续同一源再次请求时重复弹出授权提示。

JsGeolocation适用于Web组件中网页主动请求地理位置权限的场景。应用需先注册[onGeolocationShow事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#ongeolocationshow)，当网页发起地理位置权限请求时，该事件回调会将JsGeolocation对象传递给应用，应用在回调中调用invoke方法完成授权响应。使用时还需配置"ohos.permission.LOCATION"、"ohos.permission.APPROXIMATELY_LOCATION"权限。

![](./img/note_3.0-zh-cn.png)

- 该组件首批接口从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 8开始支持。
- 示例效果请以真机运行为准。

#### constructor

constructor()

JsGeolocation的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### invoke

invoke(origin: string, allow: boolean, retain: boolean): void

设置网页地理位置权限状态。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| origin | string | 是 | 指定源的字符串。 |
| allow | boolean | 是 | 设置的地理位置权限状态。 true表示开启地理位置权限，false表示不开启地理位置权限。 |
| retain | boolean | 是 | 是否允许将地理位置权限状态保存到系统中。可通过[GeolocationPermissions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-geolocationpermissions)接口管理保存到系统的地理位置权限。 true表示允许将地理位置权限状态保存到系统中，false表示不允许将地理位置权限状态保存到系统中。 |
