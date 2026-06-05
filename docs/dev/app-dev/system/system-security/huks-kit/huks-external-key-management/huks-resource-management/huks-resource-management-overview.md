---
displayed_sidebar: appDevSidebar
title: "资源管理介绍及规格"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-resource-management-overview
format: md
---


约定外部密钥管理扩展（例如Ukey）中使用resourceId唯一标识资源。该resourceId目前支持通过[查询证书操作](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-certmanagerdialog#certificatemanagerdialogopenauthorizedialog22)返回。每个证书链对应1个resourceId。应用拿到resourceId后，需要[打开资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-open-close-resource-ndk#打开资源)，然后才可以进行后续密钥操作。操作完成后需要[关闭资源](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/huks-open-close-resource-ndk#关闭资源)。

![](./img/4088bbe2.png)

1. 操作密钥之前，必须先打开资源。如果涉及私钥签名等高权限操作，需要验证完PIN码后，才能继续执行，否则会导致资源状态异常。
2. 用户操作之后，必须手动关闭资源，避免资源泄漏。
