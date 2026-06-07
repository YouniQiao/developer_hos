---
displayed_sidebar: appDevSidebar
title: "分享数据类型不支持"
original_url: /docs/dev/app-dev/application-services/share-kit-guide/share-faq/share-faq-2
format: md
---


**现象描述：**

1. 数据在分享过程中被丢弃或者提示无效的数据类型。
2. 未知的文件类型，无法分享到其他应用。

**原因：**

1. 分享数据不支持文件类型与纯文本类型混合分享；分享数据不支持多条纯文本类型分享。
2. 非预置的文件类型，无法匹配到目标应用。

**处理步骤：**

1. 修改分享的内容，符合规范要求。
2. 通用类型可通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)的方式，提供数据类型信息加入预置类型；或可通过自定义类型的方式注册utd类型，参考：[应用自定义数据类型](/docs/dev/app-dev/application-framework/arkdata/uniform-data-definition/uniform-data-type-descriptors#应用自定义数据类型)。
