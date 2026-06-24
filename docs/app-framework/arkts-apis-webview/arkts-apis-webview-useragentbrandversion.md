---
title: "Class (UserAgentBrandVersion)"
upstream_id: "harmonyos-references/arkts-apis-webview-useragentbrandversion"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:04.334139"
---

# Class (UserAgentBrandVersion)

可以通过该类提供的接口对UserAgentBrandVersion进行配置。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 24开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 24开始支持。
- 示例效果请以真机运行为准。

#### setBrand

setBrand(brand: string): void

设置品牌名称。

系统能力： SystemCapability.Web.Webview.Core

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| brand | string | 是 | 品牌名称，不能为空字符串。 |

示例：

完整示例代码参考[setUserAgentClientHintsEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setuseragentclienthintsenabled24)。

#### getBrand

getBrand(): string

获取品牌名称。

系统能力： SystemCapability.Web.Webview.Core

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 品牌名称。 |

示例：

完整示例代码参考[setUserAgentClientHintsEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setuseragentclienthintsenabled24)。

#### setMajorVersion

setMajorVersion(majorVersion: string): void

设置主版本号。

系统能力： SystemCapability.Web.Webview.Core

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| majorVersion | string | 是 | 主版本号，不能为空字符串。 |

示例：

完整示例代码参考[setUserAgentClientHintsEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setuseragentclienthintsenabled24)。

#### getMajorVersion

getMajorVersion(): string

获取主版本号。

系统能力： SystemCapability.Web.Webview.Core

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 主版本号。 |

示例：

完整示例代码参考[setUserAgentClientHintsEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setuseragentclienthintsenabled24)。

#### setFullVersion

setFullVersion(fullVersion: string): void

设置完整版本号。

系统能力： SystemCapability.Web.Webview.Core

模型约束： 此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fullVersion | string | 是 | 完整版本号，不能为空字符串。 |

示例：

完整示例代码参考[setUserAgentClientHintsEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setuseragentclienthintsenabled24)。

#### getFullVersion

getFullVersion(): string

获取完整版本号。

系统能力： SystemCapability.Web.Webview.Core

模型约束： 此接口仅可在Stage模型下使用。

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 完整版本号。 |

示例：

完整示例代码参考[setUserAgentClientHintsEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-webviewcontroller#setuseragentclienthintsenabled24)。
