---
title: "Class (PermissionRequest)"
upstream_id: "harmonyos-references/arkts-basic-components-web-permissionrequest"
catalog: "harmonyos-references"
content_hash: "7a88a0ae5a1e"
synced_at: "2026-08-29T18:16:00.769219"
---

# Class (PermissionRequest)

PermissionRequest是Web组件用于授权或拒绝权限请求的对象。当网页尝试访问受保护的系统资源（如摄像头、麦克风、地理位置等）时，ArkWeb内核会通过[onPermissionRequest](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-events#onpermissionrequest9)事件回调向应用发送权限请求，应用通过PermissionRequest对象来决定是否授权这些请求。该对象适用于需要在应用中管理网页对敏感资源的访问权限、保护用户隐私、确保资源访问安全可控等场景，帮助开发者灵活处理网页权限请求。

![](./img/note_3.0-zh-cn.png)

- 该组件从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Class从API version 9开始支持。
- 示例效果请以真机运行为准。
- [grant](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-permissionrequest#grant9)()与[deny](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-permissionrequest#deny9)() 方法互斥，对于同一个PermissionRequest对象，只能调用其中一个方法。
- 调用grant()或deny()后，该PermissionRequest对象已完成响应，不允许重复调用。
- 未调用任何方法响应的PermissionRequest对象会导致权限请求超时。
- grant()方法的resources参数通常使用getAccessibleResource()方法的返回值。
- 典型使用流程：调用getAccessibleResource()获取请求的资源列表，选择需要授权的资源后调用grant()进行授权。

#### constructor9+

constructor()

PermissionRequest的构造函数。

系统能力： SystemCapability.Web.Webview.Core

#### deny9+

deny(): void

拒绝网页所请求的权限。

系统能力： SystemCapability.Web.Webview.Core

#### getOrigin9+

getOrigin(): string

获取网页来源。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 当前请求权限网页的来源。 |

#### getAccessibleResource9+

getAccessibleResource(): Array<string>

获取网页所请求的权限资源列表，类型参考[ProtectedResourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-e#protectedresourcetype9)。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | 网页所请求的权限资源列表。 |

#### grant9+

grant(resources: Array<string>): void

对网页所请求的权限进行授权。

系统能力： SystemCapability.Web.Webview.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resources | Array | 是 | 网页被授予的权限资源列表，需通过getAccessibleResource()获取，类型参考[ProtectedResourceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-e#protectedresourcetype9)。传入该参数后，网页将获得对指定资源的访问权限，若传入空列表，则表示拒绝所有权限请求。 |
