---
title: "Class (ProxyRule)"
upstream_id: "harmonyos-references/arkts-apis-webview-proxyrule"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:03.141089"
---

# Class (ProxyRule)

[insertProxyRule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-proxyconfig#insertproxyrule15)中使用的代理规则。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 9开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。
- 本Class首批接口从API version 15开始支持。
- 示例效果请以真机运行为准。

#### getSchemeFilter15+

getSchemeFilter(): ProxySchemeFilter

获取代理规则中的ProxySchemeFilter信息。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| [ProxySchemeFilter](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-e#proxyschemefilter15) | 代理规则中的ProxySchemeFilter信息。 |

示例：

完整示例代码参考[removeProxyOverride](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-proxycontroller#removeproxyoverride15)。

#### getUrl15+

getUrl(): string

获取代理规则中的代理的URL信息。

系统能力： SystemCapability.Web.Webview.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 代理规则中的代理的URL信息。 |

示例：

完整示例代码参考[removeProxyOverride](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-webview-proxycontroller#removeproxyoverride15)。
