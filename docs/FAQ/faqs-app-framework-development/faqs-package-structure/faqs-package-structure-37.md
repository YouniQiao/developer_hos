---
title: "HAR如何转换为HSP"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-37
---

[HAR](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/har-package)转为[HSP](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/in-app-hsp)主要是通过修改配置文件实现。具体步骤如下：

1. 在HAR的module.json5中，将type字段的值改为“shared”，并配置deliveryWithInstall字段为“true”。
2. 若HSP需要对外声明可跳转的页面，在module.json5文件中添加pages字段，并在“resources/base”目录下创建“profile/main\_pages.json”文件，配置“src”。
3. 将HAR的hvigorfile.ts文件中的“harTasks”更改为“hspTasks”。
4. HAR的build-profile.json5文件中默认生成consumerFiles字段，该项字段HAR可配置，为默认导出的[混淆加固](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-build-obfuscation)规则，需要删除。

配置更改后重新编译。
