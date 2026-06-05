---
format: md
title: "编译报错“The srcPath is not a relative path：xxx”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-138
---

**错误描述**

srcPath字段配置值必须为相对路径。

**可能原因**

开发者在hvigorconfig.ts文件中使用includeNode方法时，srcPath必须是相对路径。

![](./img/e3e20431.png)

**解决措施**

确保项目的hvigorconfig.ts文件中使用includeNode时的传参srcPath为相对路径。

**参考链接**

[Hvigor脚本文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-life-cycle#section810245135914)
