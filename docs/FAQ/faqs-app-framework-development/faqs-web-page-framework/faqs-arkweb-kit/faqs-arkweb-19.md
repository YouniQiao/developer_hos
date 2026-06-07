---
format: md
title: "Web组件加载某个页面，出现白屏、页面显示不出来，如何解决和定位"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-web-page-framework/faqs-arkweb-kit/faqs-arkweb-19
---


使用Web组件时确认以下条件：

1. 若加载在线页面，需确保手机联网且网络畅通。
2. 访问在线页面时，应用需添加[网络权限ohos.permission.INTERNET](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all#ohospermissioninternet)。
3. 确认[fileAccess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#fileaccess)、[imageAccess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#imageaccess)、[onlineImageAccess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-basic-components-web-attributes#onlineimageaccess)等权限已开启，以加载相关资源。

满足上述条件后，根据HTML的报错信息进行调试。

如果仍然出现白屏，建议开发者使用浏览器打开对应URL验证页面是否存在代码问题，或者参考[使用Devtools工具调试前端页面](/docs/dev/app-dev/application-framework/arkweb/web-debugging/web-debugging-with-devtools)进行调试。
