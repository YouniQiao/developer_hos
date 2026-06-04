---
title: "HAR包多账号如何上传"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-package-structure-32
---

HAR包建议第一任作者上传，如果是新建的包，想要多账号都能上传，需要在模块级oh-package.json5文件的name字段，配置<@group>/<package>类型的值，如"@hw-one/hhshs"。如果带有<@group>类型的值的包则需要在仓库上先新建组织，再添加用户进组织才能上传。
