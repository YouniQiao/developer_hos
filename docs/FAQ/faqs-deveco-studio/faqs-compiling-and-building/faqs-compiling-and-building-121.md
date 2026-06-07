---
format: md
title: "用户目录下没有.npmrc文件"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-121
---


**问题现象**

新建项目时出现错误：Error: The hvigor depends on the npmrc file. Configure the npmrc file first. 请先配置npmrc文件。

**问题原因**

用户目录下不存在 .npmrc 文件。

**解决措施**

在用户目录下创建.npmrc文件，配置以下信息：

```
registry=https://repo.huaweicloud.com/repository/npm/
@ohos:registry=https://repo.harmonyos.com/npm/
```
