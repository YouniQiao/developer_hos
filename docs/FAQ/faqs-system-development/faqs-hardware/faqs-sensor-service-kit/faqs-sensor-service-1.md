---
format: md
title: "如何解决振动模块接口调用报错，错误码201的问题"
original_url: /docs/FAQ/faqs-system-development/faqs-hardware/faqs-sensor-service-kit/faqs-sensor-service-1
---


**问题现象**

振动模块接口调用出现错误，错误码为201。

错误信息：“振动失败，错误代码：201，错误消息：NaN”。

**解决措施**

权限校验失败。请申请ohos.permission.VIBRATE权限。

**参考链接**

[应用权限管控概述](/docs/dev/app-dev/system/system-security/access-control/app-permission-mgmt/app-permission-mgmt-overview)
