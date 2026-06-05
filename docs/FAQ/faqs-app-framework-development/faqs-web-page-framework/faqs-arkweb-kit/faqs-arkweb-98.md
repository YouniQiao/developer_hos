---
format: md
title: "网络问题导致image组件加载在线图片失败"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkweb-98
---


**问题现象**

image组件加载在线图片失败，在onError回调中收到网络请求相关报错。

**场景一**

网络请求错误信息：“Http task of url xxx/xx.png failed, response code 0, msg from netStack: SSL peer certificate or SSH remote key was not OK”

**解决措施**

此类报错为证书问题，当前image组件不支持配置caPath，可以通过rcp配置证书并下载文件，再通过image组件加载本地图片文件。

**场景二**

网络请求错误信息：“Http task of url xxx cancelled by netStack”

**解决措施**

此类报错为网络问题，包括域名解析失败（错误码2300006）、无法连接到服务器（错误码2300007）、服务器返回非法数据（错误码2300008），建议优先排查网络连接是否正常、图片url和服务端配置是否正确。

**场景三**

网络请求错误信息：“Http task of url xxx.jpg response code 0, msg from netStack: URL using bad/illegal format or missing URL”

**解决措施**

此报错通常由图片链接问题引起，例如URL中存在未转义的空格、链接拼写错误、http/https前缀错误等；即使链接正确，也可能因网络问题导致报错，如未申请联网权限ohos.permission.INTERNET、图片需要特定网络或配置VPN才能访问。

**场景四**

网络请求错误信息：“Http task of url xxx.jpg failed, response code 403”

**解决措施**

此类报错为服务器理解请求但拒绝执行，一般是由于服务器上的文件权限设置或者网站的安全策略阻止了访问，可以优先排查图片链接对应的服务端是否添加了SSL证书、referer、User-Agent等配置相关的限制。

**参考链接**

[onError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image#onerror9)

[SecurityConfiguration：定制安全传输行为](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-customsecurityconfig)

[快速实现上传下载](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-filetransferfast)

[HTTP错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-net-http)

[ohos.permission.INTERNET](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissioninternet)
